const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    effect: "flip",
    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: '.swiper-pagination',
      // type: 'progressbar',
    }
  });
  

  const swiper_skills = new Swiper('.swiper-skills', {
    // Optional parameters
  direction: 'horizontal',
  loop: true,
  disableOnInteraction: true,
  spaceBetween: 1,
  autoplay: {
    delay: 1000,
  },
  centeredSlides: true,
  breakpoints: {
    319: {
      slidesPerView:2,
    },
    415: {
      slidesPerView:3,
    },
    550: {
      slidesPerView:4,
    },
    768: {
        slidesPerView:6,
    },
    1000: {
        slidesPerView:7,
    },
    1250: {
        slidesPerView:10,
    },
  },

  pagination: {
    el: '.swiper-pagination-skills',
  },
  });
  const swiper_skills_body = document.querySelector(".swiper-skills");
  swiper_skills_body.addEventListener("mouseenter", function(){
    swiper_skills.autoplay.stop();
  });
  swiper_skills_body.addEventListener("mouseleave", function(){
    swiper_skills.autoplay.start();
  });