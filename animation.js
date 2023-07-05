// Hero Section Animation
gsap.registerPlugin(ScrollTrigger);

// TimelineMax
const tl = new TimelineMax();

// Parallax Effect for Hero Section
const sectionTop = document.querySelector('.hero-section');
const desc = sectionTop.querySelector('.content-desc-ctn');
const heroImg = sectionTop.querySelector('.content-img-ctn');
const logo = document.querySelector('.logo');

function handleParallaxEffect() {
  if (window.innerWidth < 1366) return;

  const value = window.scrollY;
  console.log(value);
  desc.style.transform = 'translateY(' + value * -0.4 + 'px)';
  heroImg.style.transform = 'translateY(' + value * - 1 + 'px)';
}

function handleWindowResize() {
  if (window.innerWidth < 1366) {
    // Reset transformations
    desc.style.transform = 'translateY(0)';
    heroImg.style.transform = 'translateY(0)';
  }
}

window.addEventListener('scroll', handleParallaxEffect);
window.addEventListener('resize', handleWindowResize);

// Variables for the product highlight section
const productHighlightSection = document.querySelector('.product-highlight');
const productHighlightContent = productHighlightSection.querySelector('.content');
const productHighlightImg = productHighlightContent.querySelector('.product-img-ctn');

// Set up the animations for different screen sizes using matchMedia
let mm = gsap.matchMedia();

mm.add("(min-width: 1280px)", () => {
  // Add your animation properties for large monitors here
  // Hero Cloud Scale Up Animation
    gsap.to("#hero_cloud", {
        scale: 2.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#hero_cloud",
            start: "top 20%",
            end: "bottom 30%",
            scrub: true,
            toggleActions: "restart none none none",
            markers: false
        }
    });
});
mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
  // Add your animation properties for desktops here
});
mm.add("(min-width: 768px)", () => {
  // Add your animation properties for tablets here
  // Product Highlight Animation
  ScrollTrigger.create({
    trigger: productHighlightSection,
    start: "top bottom",
    end: "top 80%",
    markers: true,
    onEnter: () => {
        gsap.fromTo("#footer-cloud-left", {
            opacity: 0,
            x: "-100%",
        }, {
            opacity: 1,
            duration: 1.7,
            x: 0,
        }, '<');
        gsap.fromTo("#footer-cloud-right", {
            opacity: 0,
            x: "100%",
        }, {
            opacity: 1,
            duration: 1.7,
            x: 0,
        }, '<');
        gsap.to(".product-img-ctn", {
            opacity: 1,
            ease: "power4.out",
            duration: 1,
            y: 0
        }, '40%');
        gsap.to(".highlight-bp", {
            opacity: 1,
            duration: 1,
            stagger: {
              each: 0.5
            },
              y: 0
        }, '<');
    }
  });
});
mm.add("(max-width: 767px)", () => {
  // Add your animation properties for mobiles here
    tl.staggerFromTo([logo, heroImg, desc], .8, {
        opacity: 0,
        y: 200
    },{
        opacity: 1,
        y: 0
    }, 0.5);
});

// Banner Animation
ScrollTrigger.create({
  trigger: "#banner-2",
  start: "top 70%",
  duration: 1,
  ease: "power4.out",
  onEnter: () => {
    gsap.fromTo(".cloud-tr-blue", {
      opacity: 0,
      x: 200,
    }, {
      opacity: 1,
      x: 0,
    });
    gsap.fromTo(".cloud-l", {
      opacity: 0,
      x: -200,
    }, {
      opacity: 1,
      x: 0,
    });
    gsap.fromTo(".decorative-text", {
      y: '80%',
      opacity: 0
    },{
      duration: 2,
      opacity: 1,
      y: 0
    });
    gsap.fromTo("#hl",{
      opacity: 0,
      y: 200,
    },{
      opacity: 1,
      y: 0,
    }, '<20%');
    gsap.fromTo("#fb",{
      opacity: 0,
      y: 200,
    },{
      opacity: 1,
      y: 0,
    }, '<40%');
  },
  once: true,
  markers: true
});

// Product Highlight Bullet Points Animation
ScrollTrigger.create({
  trigger: productHighlightImg,
  start: "20% 50%",
  end: "bottom 80%",
  markers: false,
  onEnter: () => {
    gsap.to(".highlight-bp", {
      opacity: 1,
      duration: .5,
      stagger: {
        each: 0.5
      },
      y: 0
    });
  }
});
