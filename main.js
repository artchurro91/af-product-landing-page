// Open Mobile Menu Drawer
let menuBtn = document.querySelector('#menu-icon');
let menuDrawer = document.querySelector('.main-nav.mobile-drawer');
let menuClose = document.getElementById('close-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');

menuBtn.addEventListener('click', () => {
  menuDrawer.style.left = '0';
  mobileOverlay.style.display = 'block';
  console.log(window.innerWidth);
});

// Hide Mobile Menu Drawer on Window Resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 1299) {
    menuDrawer.style.left = '-100%';
    mobileOverlay.style.display = 'none';
  }
});

// Close Mobile Menu Drawer
menuClose.addEventListener('click', () => {
  menuDrawer.style.left = '-100%';
  mobileOverlay.style.display = 'none';
});

// Show header when scrolling down
const header = document.querySelector('.af-main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('show-header');
  }
  else {
    header.classList.remove('show-header');
  }
});

// Hover list item as active
const mainNav = document.querySelectorAll('.main-nav li');
mainNav.forEach((item) => {
  item.addEventListener('mouseover', () => {
    if(!item.classList.contains('active')) {
      const currentActive = document.querySelector('.main-nav li.active');
      if(currentActive){
        currentActive.classList.remove('active');
      }
      item.classList.add('active');
    }
  });
});
// Carousel Slider for Feature Collection
let collectionContainer = document.querySelector('.collection-container');
let nextBtn = collectionContainer = document.querySelector('#carouselNextBtn');
let prevBtn = collectionContainer = document.querySelector('#carouselPrevBtn');
let carouselContainer = document.querySelector('.collection-wrapper');
let carouselCards = document.querySelectorAll('.collection-wrapper .card');

const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
const remainingScroll = maxScrollLeft - carouselContainer.scrollLeft;

nextBtn.addEventListener('click', () => {
  carouselContainer.scrollBy(188, 0);
  const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
  const remainingScroll = maxScrollLeft - carouselContainer.scrollLeft;

  if (remainingScroll === 0) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
});

carouselContainer.addEventListener('scroll', () => {
  const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
  const remainingScroll = maxScrollLeft - carouselContainer.scrollLeft;

  if (remainingScroll <= 0) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
});

prevBtn.addEventListener('click', () => {
  carouselContainer.scrollBy(-188, 0);
  const remainingScroll = carouselContainer.scrollLeft;

  if (remainingScroll === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
});

carouselContainer.addEventListener('scroll', () => {
  const remainingScroll = carouselContainer.scrollLeft;

  if (remainingScroll <= 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
});

carouselContainer.addEventListener('scroll', () => {
  if(carouselContainer.scrollLeft >= carouselContainer.scrollWidth) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }

});

// Show Search Bar
const searchBtn = document.getElementById('search-icon');
const mainHeader = document.querySelector('.af-main-header');
const searchContainer = mainHeader.querySelector('.mobile-search-container');

searchBtn.addEventListener('click', () => {
  searchContainer.style.top = '0';
  searchContainer.style.pointerEvents = 'auto';
});
//Close Search Bar
const closeSearchBtn = searchContainer.querySelector('#search-close');
closeSearchBtn.addEventListener('click', () => {
  searchContainer.style.top = '-100%';
  searchContainer.style.pointerEvents = 'none';
});
