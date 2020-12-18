$(function(){

//css - lnb

  function lnb4 () {
    $(".lnb4").css({
      marginLeft: $("#gnb > ul > li:eq(3)").position().left - $(".lnb4").width()/2 + $("#gnb > ul > li:eq(3)").innerWidth()/2
    })
  }
  function lnb5 () {
    $(".lnb5").css({
      marginLeft: $("#gnb > ul > li:eq(4)").position().left - $(".lnb5").width()/2 + $("#gnb > ul > li:eq(4)").innerWidth()/2
    })
  }
  function lnb6 () {
    $(".lnb6").css({
      left: $("#gnb > ul > li:eq(5)").position().left })
    }

  lnb4();
  lnb5();
  lnb6();

  $(window).on('resize', function(){
    lnb4();
    lnb5();
    lnb6();
  })


// gnb
  $("#gnb > ul > li:eq(0)").on('mouseenter', function(){
      $(this).css({paddingBottom: 40})
      $(this).children('a').css({fontWeight: 600, color: "#083e90"})
      var lnbNum = $(this).index()+1
      $('.lnbWrap'+lnbNum).show()
      $('.lnbWrap'+lnbNum).css({opacity: 1})
      $('.lnbWrap'+lnbNum).stop().animate({height: 242})
  })
  $("#gnb > ul > li:not(:eq(0))").on('mouseenter', function(){
      $(this).css({paddingBottom: 40})
      $(this).children('a').css({fontWeight: 600, color: "#083e90"})
      var lnbNum = $(this).index()+1
      $('.lnbWrap'+lnbNum).show()
      $('.lnbWrap'+lnbNum).css({opacity: 1})
      $('.lnbWrap'+lnbNum).stop().animate({height: 59})
    })
    $("#gnb > ul > li").on('mouseleave', function(){
      $(this).css({paddingBottom: 0})
      $(this).children('a').css({fontWeight: 400, color: "#333333"})
      var lnbNum = $(this).index()+1
      $('.lnbWrap'+lnbNum).stop().animate({opacity: 0, height: 0},function(){
        $('.lnbWrap'+lnbNum).hide()
      })
    })

// lnb
  $(".lnb > li").hover(
    function(){
      $(this).children('a').stop().animate({fontWeight: 500, color: "#153ea7"},300)
    },
    function(){
      $(this).children('a').stop().css({fontWeight: 400, color: "#333333"})
    }
  )


// 플로팅 메뉴
var fm = 0;
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= 200 && fm == 0){
      $("#floatingBtn ul li:eq(1)").show().stop().animate({ bottom: 20, opacity: 1})
      fm = 1;
    }
    else if($(window).scrollTop() < 200 && fm == 1){
      $("#floatingBtn ul li:eq(1)").animate({ bottom: -10, opacity: 0},function(){
        $(this).hide()
      })
      fm = 0;
    }
  })
  $("#floatingBtn ul li:eq(1)").hover(
    function(){
      $(this).stop().animate({backgroundColor: "#777", "background-position-y": "20px"},300)
    },
    function(){
      $(this).animate({backgroundColor: "#acacac", "background-position-y": "22px"},300)
    }
  )

})
