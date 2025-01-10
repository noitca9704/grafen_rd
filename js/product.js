$(function(){
  $('.t2_list span').click(function(){
    $(this).addClass('check').siblings().removeClass('check');
    if ($(this).index() == 0 ){
      $('.pr_list ul li').css({'display':'block'});
    } else if($(this).index() == 1){
      $('.pr_list ul li').css({'display':'block'});
      $('.st_wp, .st_sp, .mu_bl, .ca_hc').css({'display':'none'});
    } else if($(this).index() == 2){
      $('.pr_list ul li').css({'display':'block'});
      $('.st_ch, .st_sp, .mu_ba, .ca_sc').css({'display':'none'});
    } else if($(this).index() == 3){
      $('.pr_list ul li').css({'display':'block'});
      $('.st_ch, .st_wp').css({'display':'none'});
    }
  })
})