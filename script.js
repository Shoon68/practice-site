$(function() {
   //トップビューのswiper
   var swiper = new Swiper ('.top-view .swiper', {
      // Optional parameters
      effect: 'fade',
      speed: 1500,
      loop: true,

      autoplay: {
         disableOnInteraction: false,
         delay: 3000
      },
      fadeEffect: {
         crossFade: true
      },
      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true
      }
   });

   var swiper = new Swiper ('.swiper-container .swiper', {
      centeredSlides: true,
      slidesPerView: 1.6,
      spaceBetween: 16,
      loop: true,
      autoplay: {
         disableOnInteraction: false,
         delay: 3000
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
});