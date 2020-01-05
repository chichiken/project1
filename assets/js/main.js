//터치 슬라이더
var mainSwiper = new Swiper ('#idx_content .idx_slide .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.idx_slide .swiper-button-next',
      prevEl: '.idx_slide .swiper-button-prev'
    }
  });