$(function(){
  var swiper = new Swiper(".b_Swiper", {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
      },
  });
  //bestmenu_swiper
  var swiper = new Swiper(".main_Swiper", {
    loop: true,
    speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
      delay: 5000
    }
  });
  //main_swiper
  var swiper = new Swiper(".m_main_Swiper", {
    loop: true,
    speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
      delay: 5000
    }
  });
  //main_swiper
  var swiper = new Swiper(".c_Swiper", {
    slidesPerView: 2,
    spaceBetween: 300,
    loop: true,
    speed: 8e3,
    autoplay: {
      delay: 1
    },
    breakpoints: {
      850: {
        slidesPerView: 2,
        spaceBetween: 250,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 150,
      },
      1250: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
    }
  });
  //campaign_swiper
  var swiper = new Swiper(".m_product_Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
  });
  var swiper = new Swiper(".m_product1_Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      },
  });
    //m_product_swiper
})