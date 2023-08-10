import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,
    speed: 2000,

    keyboard: {
        enable: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
        prevEl: '#sliderPrew',
        nextEl: '#sliderNext',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

mobileNav();
loader();