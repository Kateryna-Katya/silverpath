import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

let reviewsSwiper = null;
let gallerySwiper = null;

function initReviewsSwiper() {
  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
  }

  reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Autoplay],

    loop: true,
    speed: 800,
    spaceBetween: 16,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    slidesPerView: 1.1,

    breakpoints: {
      1440: {
        slidesPerView: 4,
 spaceBetween: 32,
      },
    },
  });
}

function initGallerySwiper() {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
  }

  gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Pagination, Autoplay],

    loop: true,
    speed: 800,
    slidesPerView: 1,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReviewsSwiper();
  initGallerySwiper();
});