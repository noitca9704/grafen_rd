$(function(){
  $('.info11 p').hide();
  $('.s_img li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var num = $(this).index();
    $('.m_img li').eq(num).addClass('show').siblings().removeClass('show');
  })
  $('.shop_tab h3').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var num = $(this).index();
    var p_height = document.querySelector('.ptc_page').offsetTop;
    var i_height = document.querySelector('.ptc_info').offsetTop;
    var b_height = document.querySelector('.buy_info').offsetTop;
    var q_height = document.querySelector('.qna').offsetTop;
    var h_height = document.querySelector('.h_wrap').offsetHeight;
    var s_height = document.querySelector('.shop_tab').offsetHeight;
    if (num == 0){
      window.scrollTo({top:p_height - h_height - s_height, behavior:'smooth'});
    } else if (num == 1){
      window.scrollTo({top:i_height - h_height - s_height, behavior:'smooth'});
    } else if (num == 2){
      window.scrollTo({top:b_height - h_height - s_height, behavior:'smooth'});
    } else {
      window.scrollTo({top:q_height, behavior:'smooth'});
    }
  })


  $('.info11 .material-symbols-outlined').click(function(){
    $('.info11 p').slideToggle();
    $(this).removeClass('on').siblings().addClass('on');
  })











  
})