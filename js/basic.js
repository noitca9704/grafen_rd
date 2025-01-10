$(function(){
  $('.best').hide();
  $('.product').hide();
  $('.m_snb').hide();
  $('.b_info').hide();
  //basic


  $('.main_menu li:first, .best').mouseover(function(){
    $('.best').stop().slideDown();
  })
  $('.main_menu li:first, .best').mouseout(function(){
    $('.best').stop().slideUp();
  })
  $('.b_Swiper .swiper-slide').mouseover(function(){
    $(this).find('.b_info').stop().fadeIn();
  })
  $('.b_Swiper .swiper-slide').mouseout(function(){
    $(this).find('.b_info').stop().fadeOut();
  })
  //main_menu_best


  $('.main_menu li:eq(1), .product').mouseover(function(){
    $('.menu_wrap').css('opacity','1')
    $(this).find('.menu_wrap').stop().slideDown();
    $('.menu_bg').stop().slideDown();
  })
  $('.main_menu li:eq(1), .product').mouseout(function(){
    $(this).find('.menu_wrap').stop().slideUp();
    $('.menu_bg').stop().slideUp();
  })
  $('.p_gnb>li').mouseover(function(){
    $(this).addClass('show').siblings().removeClass('show');
  })
  //main_menu_product


  $('.main_icon li:first, .m_menuwrap .m_search').click(function(){
    $('.s_wrap').addClass('search');
  })
  $('.s_wrap button').click(function(){
    $('.s_wrap').removeClass('search');
  })
  //search_page

  function top_notice(){
    $('.tnb').animate({'margin-top':'-40px'}, function(){
      $('.tnb li:first').appendTo('.tnb');
      $('.tnb').css({'margin':'0'});
    })
  }
  function tn_mouse(){
    $('.tnb').mouseover(function(){
      clearInterval(tncall);
    })
    $('.tnb').mouseout(function(){
      tncall = setInterval(top_notice,5000);
    })
  }
  tncall = setInterval(top_notice,5000);
  tn_mouse();
  //top_notice


  $('.menu_bar img').click(function(){
    $('.m_menuwrap').animate({'right':'0'});
  })
  $('.m_menuwrap .m_close').click(function(){
    $('.m_menuwrap').animate({'right':'-280px'});
    $('.m_snb').slideUp();
  })
  $('.m_gnb>li').click(function(){
    $(this).find('.m_snb').slideToggle();
    $(this).siblings().find('.m_snb').slideUp();
  })
  //m_menu


  $(function () {
    var didScroll; 
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.btm_menu').outerHeight();

    $(window).scroll(function (event) {
      didScroll = true; 
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 0);  // hasScrolled()를 실행하고 didScroll 상태를 재설정

    function hasScrolled() {
      var lst = $(this).scrollTop();

      if (Math.abs(lastScrollTop - lst) <= delta)
        return;


      if (lst > lastScrollTop && lst > navbarHeight) {

        // 감추기
        $('.btm_menu').removeClass('event');
      } 
      else {

        // 보이게 하기
        if (lst + $(window).height() < $(document).height()) {
          $('.btm_menu').addClass('event');
        }

      }
      lastScrollTop = lst;
    }
  });
  $('.btm_menu li').eq(1).click(function(){
    $('.s_wrap').addClass('search');
    $('.btm_menu').removeClass('event');
  });
  $('.btm_menu li').eq(3).click(function(){
    $('.m_menuwrap').animate({'right':'0px'});
    $('.m_snb').slideUp();
  });
  //mobile bottom menu
  $('.t_list li').click(function(){
    $(this).addClass('this').siblings().removeClass('this');
  })
})