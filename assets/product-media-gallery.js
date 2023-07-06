export function productMediaGallery() {

    const productMediaGallery = document.querySelector('.product-media-gallery');
    const productThumbnails = Array.from(productMediaGallery.querySelectorAll('.product-thumbnail'));

    // Selected Thumbnail Image Replaces Feature Image
    const productFeatureImage = productMediaGallery.querySelector('.product-feature-image img');
    const productThumbnailImages = document.querySelectorAll('.product-thumbnail img');
    productThumbnailImages.forEach(item => {
        const handleThumbnailSelection = () => {
            const newFeatureImage = item.getAttribute('src');
            const thumbnailAltText = item.getAttribute('alt');
            productFeatureImage.setAttribute('src', newFeatureImage);
            productFeatureImage.setAttribute('alt', thumbnailAltText);
        };

        item.addEventListener('mousedown', handleThumbnailSelection);
        item.addEventListener('touchstart', handleThumbnailSelection);
    });

    // Product Media Gallery Carousel
    const thumbnailWrapper = document.querySelector('.product-thumbnails ul');
    const productThumbnailWidth = productThumbnails[0].offsetWidth;
    const productThumbnailHeight = productThumbnails[0].offsetHeight;
    const productThumbnailMarginBottom = parseInt(window.getComputedStyle(productThumbnails[0]).marginBottom);
    const productThumbnailMarginRight = parseInt(window.getComputedStyle(productThumbnails[0]).marginBottom);
    const productThumbnailTotalWidth = productThumbnailWidth + productThumbnailMarginRight;
    const nextBtn = document.querySelector('#thumbnailNextBtn');
    const prevBtn = document.querySelector('#thumbnailPrevBtn');

    let thumbnailIndex = 0;

    // Update Thumbnail Position
    nextBtn.addEventListener('click', () => {
        const firstThumbnail = productThumbnails.shift();

        productThumbnails.push(firstThumbnail);

        // Update the the DOM to reflect the changes
        const thumbnailList = document.querySelector('.product-thumbnails ul');
        thumbnailList.appendChild(firstThumbnail);

    });

    prevBtn.addEventListener('click', () => {
        const lastThumbnail = productThumbnails.pop();

        productThumbnails.unshift(lastThumbnail);

        // Update the the DOM to reflect the changes
        const thumbnailList = document.querySelector('.product-thumbnails ul');
        thumbnailList.prepend(lastThumbnail);

    });

}
