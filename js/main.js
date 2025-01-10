$(function(){
  let tncall = null;

  $('.m_product_Swiper .swiper-slide').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
  })

  $('.m_product_Swiper .swiper-slide').click(function(){
    var num = $(this).index();
    $('.product_slide>div').eq(num).addClass('on').siblings().removeClass('on');
  })
  //product
})