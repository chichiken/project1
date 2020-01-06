//터치 슬라이더
$(document).ready(function () {
  var mainSwiper = new Swiper ('#idx_content .idx_slide .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.idx_slide .swiper-button-next',
      prevEl: '.idx_slide .swiper-button-prev'
    },
    pagination: {
      el: '.consulting .swiper-pagination',
      type: 'fraction',   //bullets(동그라미아이콘), fraction (현재/전체)
      clickable: true,    //클릭하여 슬라이더 이동
    }
  });
});