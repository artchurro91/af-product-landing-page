import { variantScroll } from "./assets/variant-carousel.js";
import { productMediaGallery } from "./assets/product-media-gallery.js";

// Product Variant Selected
const productFeatureImage = document.querySelector('.product-feature-image img');
const productVariants = document.querySelectorAll('.product-variant');
const quantityField = document.querySelector('.js-quantity-field');
const quantityTextField = document.querySelector('.js-quantity-text');
let selectedVariant = null;

productVariants.forEach(item => {
    const handleVariantsSelection = (e) => {
        const variantTarget = e.target;
        const variantSelected = variantTarget.closest('.product-variant');
        const varinatInput = variantSelected.querySelector('input');
        const variantColorData = varinatInput.getAttribute('data-color');

        // Remove the aria-label from the previously selected variant, if exists
        if (selectedVariant) {
            selectedVariant.removeAttribute('aria-label');
        }

        // Set the aria-label for the currently selected variant
        variantSelected.setAttribute('aria-label', variantColorData + ' selected');

        // Update the selectedVariant variable with the current selection
        selectedVariant = variantTarget;

        // Change Variant Color
        const selectedVariantColor = item.querySelector('input').getAttribute('data-color');
        const productVariantTitle = document.querySelector('#variantSelection span');
        productVariantTitle.textContent = selectedVariantColor;

        // Highlight Selected Variant
        const currentActive = document.querySelector('.product-variants li.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        item.classList.add('active');

        // Change Product Feature Image
        const newFeatureImage = item.querySelector('input').getAttribute('data-full-image');
        productFeatureImage.setAttribute('src', newFeatureImage);

        // Change Quantity Text Field Based On Max Quantity
        const dataInventory = item.querySelector('input').getAttribute('data-inventory-quantity');
        quantityField.setAttribute('max', dataInventory);

        if(quantityTextField.textContent > dataInventory){
            console.log(quantityField.value);
        }
    };

    item.addEventListener('mousedown', handleVariantsSelection);
    item.addEventListener('touchstart', handleVariantsSelection)
});

/// Product Variant Carousel
const mediaQuery = window.matchMedia('(max-width: 768px)');
const variantCarousel = document.querySelector('.product-variants ul');

const updateCarouselWidth = () => {
  const totalVariants = productVariants.length;
  const { width, marginRight } = getComputedStyle(productVariants[0]);
  let carouselWidth = (parseInt(width) + parseInt(marginRight)) * totalVariants;

  if (mediaQuery.matches) {
    variantCarousel.style.width = carouselWidth + 'px';
  } else {
    variantCarousel.style.width = ''; // Clear the inline "width" style
  }
};

const handleMediaQueryChange = () => {
  updateCarouselWidth();
};

mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange();

variantScroll();

// Window Resize is bigger than 800px Reset Carousel
window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        variantCarousel.style.transform = 'translateX(0)';
    }
});


// Product Variant Selected Inventory Quantity
jQuery(document).ready(function($) {
    let
        onQuantityBtnClick = function(e) {
            let
                $button = $(this),
                $form = $button.closest('form'),
                $quantity = $form.find('.js-quantity-field'),
                quantityValue = parseInt($quantity.val()),
                max = $quantity.attr('max') ? parseInt($quantity.attr('max')) : null;

            if ($button.hasClass('plus') && (max === null || quantityValue + 1 <= max)) {
                $quantity.val(quantityValue + 1).change();
            } else if ($button.hasClass('minus')) {
                $quantity.val(quantityValue - 1).change();
            }
        },
        onQuantityFieldChange = function(event) {
            let
              $field = $(this),
              $form = $field.closest('form'),
              $quantityText = $form.find('.js-quantity-text'),
              shouldDisableMinus = parseInt(this.value) === 1,
              shouldDisablePlus = parseInt(this.value) === parseInt($field.attr('max')),
              $minusBtn = $form.find('.js-qty-btn.minus'),
              $plusBtn = $form.find('.js-qty-btn.plus');

            $quantityText.text(this.value);

            if (shouldDisableMinus) {
              $minusBtn.prop('disabled', true);
            } else if ($minusBtn.prop('disabled') === true){
              $minusBtn.prop('disabled', false);
            }

            if (shouldDisablePlus) {
              $plusBtn.prop('disabled', true);
            } else if ($plusBtn.prop('disabled') === true){
              $plusBtn.prop('disabled', false);
            }
          };
    $('.js-qty-btn').on('click', onQuantityBtnClick);
    $('.js-quantity-field').on('change', onQuantityFieldChange);
});

// Product Media Gallery
productMediaGallery();
