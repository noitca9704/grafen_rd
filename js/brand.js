$(function(){
  // S : 공통 변수
  var winW = $(window).innerWidth();
  var winH = $(window).innerHeight();
  var winT = $(window).scrollTop();
  var winB = winT + winH;
  // E : 공통 변수

  //섹션1
  var sec1Txt01W = $(".brand_sec1 .txt01").innerWidth();
  $(".brand_sec1").css({ height: winH + sec1Txt01W + 50 + 90 });

  // S : 섹션5
  var sec5SlideW = $(".prdScroll_wrap li").innerWidth();
  var sec5SlideL = $(".prdScroll_wrap li").length;
  $(".brand_sec5 .prdScroll_inner").css({ width: (sec5SlideW * sec5SlideL) + (30 * (sec5SlideL - 1)) });
  var sec5SlideWrap = $(".brand_sec5 .prdScroll_inner").outerWidth();
  var sec5SlideDefaultL = $(".brand_sec5 .prdScroll_wrap").offset().left;
  var sec5SlideWrap2 = sec5SlideWrap - (winW - sec5SlideDefaultL);
  $(".brand_sec5").css({ height: sec5SlideWrap2 + winW + winH + 1300 });
  // E : 섹션5

  // S : 스크롤 이벤트
  var lastScrollTop = 0,
    delta = 50;

  $(window).scroll(function (event) {

    // S : 공통 변수
    var st = $(this).scrollTop();
    var winTop = $(window).scrollTop();
    var winH = $(window).innerHeight();
    var winBottom = winTop + winH;
    // E : 공통 변수

    // S : 공통 함수
    function commonAni(commonAni) {
      $(commonAni).css({ opacity: 1, transform: "none", transition: "all 1s" });
    }
    function commonAni_off(commonAni) {
      $(commonAni).css({ opacity: 0, transform: "translate3d(0,50px,0)", transition: "none" });
    }
    // E : 공통 함수

    // S : 섹션1 - 스크롤 이벤트
    var sec1T = $(".brand_sec1").offset().top; // 
    var sec1H = $(".brand_sec1").outerHeight(); // 200vh + 164px
    var sec1TxtW_01 = $(".brand_sec1 .txt01").innerWidth();
    var sec2T = $(".brand_sec2").offset().top;
    var sec2H = $(".brand_sec2").outerHeight();
    var sec1OverT = winBottom - (sec1T + sec1H);

    if (winTop == 0) {
      $(".brand_sec1 .txt01").css({ left: 0 });
      $(".brand_sec1 .txt02").css({ right: 0 });

      $(".brand_sec2").css({ position: "relative", top: "auto" });
    }
     else if (winTop > 0 && winBottom < sec1T + sec1H) { 
      // 스크롤 커서가 0보다 클때 (스크롤을 한번이라도 내렸을때나 최상단 커서가 아닐때), 
      $(".brand_sec1").addClass("fixed").removeClass("fixed_off");
      $(".brand_sec1 .txt01").css({ left: `min( ${winTop + 90 - sec1T}px, ${sec1TxtW_01 + 50}px )` });
    }
    else if (winBottom >= sec1T + sec1H) { // 스크롤한 섹션1 의 크기 보다 브라우저 크기가 클때 즉, 섹션1이 끝났을때
      $(".brand_sec1").removeClass("fixed").addClass("fixed_off");
      $(".brand_sec1 .txt01").css({ left: sec1TxtW_01 + 50 });

      sec2T = $(".brand_sec2").offset().top;
      sec2H = $(".brand_sec2").outerHeight();
      sec1OverT = winBottom - (sec1T + sec1H);
      if (winBottom < (sec2T + sec2H)) {
        $(".brand_sec2").css({ position: "fixed", top: `max( ${winH - sec1OverT}px, 90px )` });
        sec2T = $(".brand_sec2").offset().top;

        if ((winTop + 90) == sec2T) {
          $(".brand_sec2").css({ position: "relative", top: "auto" });
          $(".brand_sec1").removeClass("fixed").addClass("fixed_off");
        }

        if (winBottom >= (sec1T + sec1H)) {
          $(".brand_sec2").css({ position: "relative", top: "auto" });
        }
      }
    } else {

    }

    if ((winTop + 90) < sec2T && winBottom < (sec2T + sec2H)) {
      $(".brand_sec1").addClass("fixed").removeClass("fixed_off");
    }
    // E : 섹션1 - 스크롤이벤트

  

    // S : 섹션5 - 스크롤이벤트
    var sec5T = $(".brand_sec5").offset().top;
    var sec5H = $(".brand_sec5").innerHeight();
    var sec5B = sec5T + sec5H
    var sec5BMinusWinB = sec5B - winBottom;

    if (winTop >= sec5T && winBottom < sec5T + sec5H) {
      $(".brand_sec5").removeClass("fixed_off").addClass("fixed");
      $(".brand_sec5 .prdScroll_inner").css('transform', 'translateX(-' + (winTop - sec5T) + 'px)');

      //이소노
      sec5BMinusWinB = sec5B - winBottom;
      if (sec5BMinusWinB > 2300) {
        $(".brand_sec5 .isono_fade").css({ opacity: 0 });
      } else if (sec5BMinusWinB <= 2300 && sec5BMinusWinB > 1300) {
        sec5BgOpc = 2.3 - (sec5BMinusWinB / 1000);
        $(".brand_sec5 .isono_fade").css({ opacity: sec5BgOpc });
      } else if (sec5BMinusWinB <= 1300) {
        $(".brand_sec5 .isono_fade").css({ opacity: 1 });
      }

      //텍스트
      if (sec5BMinusWinB > 1300) {
        $(".brand_sec5 .isono_fade span, .brand_sec5 .isono_fade h3, .brand_sec5 .isono_fade p").css({ opacity: 0 });
      } else if (sec5BMinusWinB <= 1300 && sec5BMinusWinB > 300) {
        sec5txtOpc = 1.3 - (sec5BMinusWinB / 1000);
        $(".brand_sec5 .isono_fade span, .brand_sec5 .isono_fade h3, .brand_sec5 .isono_fade p").css({ opacity: sec5txtOpc });
      } else if (sec5BMinusWinB <= 300) {
        $(".brand_sec5 .isono_fade span, .brand_sec5 .isono_fade h3, .brand_sec5 .isono_fade p").css({ opacity: 1 });
      }

    } else if (winBottom >= sec5T + sec5H) {
      $(".brand_sec5").removeClass("fixed").addClass("fixed_off");
    } else {
      $(".brand_sec5").removeClass("fixed");
      $(".brand_sec5 .prdScroll_inner").css('transform', 'translateX(0)');
    }

    // E : 섹션5 - 스크롤이벤트      

    // S : 스크롤 상하 조건문
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && lastScrollTop > 0) {
      //console.log("스크롤 내리는중↓");

    } else {
      //console.log("스크롤 올리는중↑");

    }

    lastScrollTop = st;
    // E : 스크롤 상하 조건문

  });
// E : 스크롤 이벤트


  
});