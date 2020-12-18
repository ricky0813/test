$(function(){

//새로고침 시 최상단
  history.scrollRestoration = "manual"

// 새로고침 시 스크롤 아이콘 추가
  $("#contents1Wrap").prepend("<span>scroll<span class='down'></span><svg><line x1='16.5' y1='43' x2='16.5' y2='110'></svg></span>")


// css - 섹션2
  $("#contents2 ul li:eq(0) a span").css({left: $('#contents2 ul li:eq(0) a').width()/2 - $('#contents2 ul li:eq(0) a span').innerWidth()/2})

  $("#contents2 ul li:eq(1) a span").css({left: $('#contents2 ul li:eq(1) a').width()/2 - $('#contents2 ul li:eq(1) a span').innerWidth()/2})

  $("#contents2 ul li:eq(2) a span").css({left: $('#contents2 ul li:eq(2) a').width()/2 - $('#contents2 ul li:eq(2) a span').innerWidth()/2})

  $("#contents2 ul li:eq(3) a span").css({left: $('#contents2 ul li:eq(3) a').width()/2 - $('#contents2 ul li:eq(3) a span').innerWidth()/2})

  $("#contents2 ul li:eq(4) a span").css({left: $('#contents2 ul li:eq(4) a').width()/2 - $('#contents2 ul li:eq(4) a span').innerWidth()/2})

  $("#contents2 ul li > a > span").css({top: $("#contents2 ul li").height() + 16})

// css - 섹션3
  function club1(){
    $("#contents3Wrap hgroup h3").css({left: $("#contents3Wrap").width()/2 - $("#contents3Wrap hgroup h3").width()/2})
  }
  club1();
  // $("#contents3Wrap ul").css({width: $("#contents3Wrap ul li:eq(0)").outerWidth(true) + $("#contents3Wrap ul li:eq(1)").outerWidth(true) + $("#contents3Wrap ul li:eq(2)").outerWidth(true)})

  $(window).on('resize', function(){
    club1();
  })

// css - 섹션4
 $(".reviewPgBtn ul").css({left: $(".reviewWrap").width()/2 - $(".reviewPgBtn ul").width()/2})


// css - 섹션5

  $("#contents5 > ul").css({width: $("#contents5 ul li:eq(0)").outerWidth(true)
  + $("#contents5 ul li:eq(1)").outerWidth(true)
  + $("#contents5 ul li:eq(2)").outerWidth(true)
  + $("#contents5 ul li:eq(3)").outerWidth(true)})


// header 고정
  var hw = 0;
  $("html, body").on("mousewheel", function(event, delta){
    if($(window).scrollTop() >= 200){
      if(delta > 0 && hw == 0){
        $("#slider").css({paddingTop: 100})
        $(".lnbWrap").css({borderTop: "1px solid #ddd"})
        $("#header:not(:animated)").css({position: 'fixed', top: -100},200).animate({top: 0})
        hw = 1
      }
      else if (delta < 0 && hw == 1){
        $("#header:not(:animated)").stop().animate({top: -100},200,function(){
          $("#slider").css({paddingTop: 0})
          $(".lnbWrap").css({borderTop: 0})
          $("#header").css({position: 'relative', top: 0} )
          hw = 0
        })
      }
    }
    else if ($(window).scrollTop() == 0){
      $("#slider").css({paddingTop: 0})
      $(".lnbWrap").css({borderTop: 0})
      $("#header").css({position: 'relative', top: 0} )
    }
  })

// 슬라이더
  var className, classNum;
  function moveRight(){
      $("#sliderWrap").stop().animate({marginLeft: "-100%"},500,function(){
        $(this).append($("#sliderWrap > div:eq(0)"))
               .append($("#sliderWrap > .sliderBtnWrap"))
               .css({marginLeft: 0})
        className = $("#sliderWrap div:eq(0)").attr('class')
        classNum = className.substr(6,1)-1
        $(".sliderPgBtn li").removeClass('sl_BtnOn')
        $(".sliderPgBtn li:eq("+classNum+")").addClass('sl_BtnOn')
      })
    }

  function moveLeft(){
      $("#sliderWrap").prepend($("#sliderWrap > div:eq(1)"))
             .css({marginLeft: "-100%"})
             .stop().animate({marginLeft: 0},500)
    }
// 슬라이더 버튼1
  $(".sliderPgBtn > li:eq(1) a").on('click',function(){
    if($("#sliderWrap > div:eq(0)").hasClass('slider2')){
      return false;
    }
    else{
      $(".sliderPgBtn li").removeClass('sl_BtnOn')
      $(".sliderPgBtn li:eq(1)").addClass('sl_BtnOn')
      moveRight();
      clearInterval(timer)
      timer = setInterval(moveRight,5500)
    }
  })
// 슬라이더 버튼2
  $(".sliderPgBtn > li:eq(0) a").on('click',function(){
    if($("#sliderWrap > div:eq(0)").hasClass('slider1')){
      return false;
    }
    else{
      $(".sliderPgBtn li").removeClass('sl_BtnOn')
      $(".sliderPgBtn li:eq(0)").addClass('sl_BtnOn')
      moveLeft();
      clearInterval(timer)
      timer = setInterval(moveRight,5500)
    }
  })

  var timer = setInterval(moveRight,5500)

// 섹션1
  function historyMove(){
    $(".historyPgBtn ul li").removeClass('historyOn')
    var pgName = $(".historyShave section:eq(1)").attr('class')
    var pgNum = pgName.substr(9,1)-1
    $(".historyPgBtn ul li:eq("+pgNum+")").addClass('historyOn')
    $(".historyShave section:eq(1):not(:animated)").addClass('historyActive')
                                    .css({opacity: 0})
                                    .stop().animate({opacity:1},800,function(){
      $(".historyShave section:eq(0)").removeClass('historyActive')
      $(".historyShave").append($(".historyShave section:eq(0)"))
    })
  }

  var historyTimer;

  $(".historyPgBtn ul li").on('click',function(e){
    e.preventDefault();
    clearInterval(historyTimer)
    historyTimer = setInterval(historyMove,3000)
    $(".historyPgBtn ul li").removeClass('historyOn')
    $(this).addClass('historyOn')
    var n = $(this).index()+1
    var num = n;
    if( $(".historyShave section:eq(0)").hasClass('historyPg'+ n)){
      return false;
    }
    else{
      $(".historyShave section.historyPg"+n+":not(:animated)").addClass('historyActive')
                                          .css({opacity: 0})
                                          .stop().animate({opacity:1},800,function(){
        $(".historyShave section:not(.historyPg"+n+")").removeClass('historyActive')
        for(var i=1; i<$(".historyShave section").length; i++){
          num++;
          if(num == 5){num = 1}
          $(".historyShave").append($(".historyShave section.historyPg"+num))
        }
      })
    }
  })
  var h = 0;
  $(window).on("scroll", function(){
    var contents1_bottom = $("#contents1").offset().top + $("#contents1").height()
    var window_bottom = $(window).scrollTop() + $(window).height()
    if( window_bottom > contents1_bottom/3*1.8 ){
      $("#contents1Wrap > span").fadeOut(400)
      $(".historyQuote blockquote p").animate({top: 0, opacity: 1},700,"easeInOutQuad")
      $(".historyShave").delay(200).animate({marginTop: 55.5, opacity: 1},700,"easeInOutQuad")
      $(".historyPgBtn").delay(200).animate({right: 15, opacity: 1},500)
      $("#contents1 > p").delay(400).animate({paddingTop: 362.5, opacity: 1},700,"easeInOutQuad")
      $("#contents1 > a").delay(600).animate({marginTop: 36.5, opacity: 1},700,"easeInOutQuad")
    }
    if(window_bottom > contents1_bottom/3*1.8 && h==0){
        setTimeout(function(){
          $("#contents1Wrap > span").remove()
          $(".historyPg1").addClass("historyActive")
          $(".historyPg2").show()
          $(".historyPg3").show()
          $(".historyPg4").show()
          historyTimer = setInterval(historyMove,3000)
        },850)
        h = 1;
    }
  })

// 섹션2
  $(window).on("scroll", function(){
    var contents2_bottom = $("#contents2").offset().top + $("#contents2").height()
    var window_bottom = $(window).scrollTop() + $(window).height()
    if( window_bottom > contents2_bottom-200 ){
      $("#productWrap").animate({right: 415, opacity: 1},700,"easeInOutQuad")
      $("#productWrap > h2").delay(200).animate({marginLeft: 97, opacity: 1},700,"easeInOutQuad")
      $("#productWrap > p").delay(200).animate({marginLeft: 99, opacity: 1},700,"easeInOutQuad")
      $("#contents2 ul li:eq(1)").delay(200).animate({left: 615, opacity: 1},700,"easeInOutQuad")
      $("#contents2 ul li:eq(0)").delay(400).animate({marginTop: 0, opacity: 1},700,"easeInOutQuad")
      $("#contents2 ul li:eq(2)").delay(600).animate({marginTop: 0, opacity: 1},700,"easeInOutQuad")
      $("#contents2 ul li:eq(3)").delay(800).animate({marginTop: 0, opacity: 1},700,"easeInOutQuad")
      $("#contents2 ul li:eq(4)").delay(1000).animate({marginTop: 0, opacity: 1},700,"easeInOutQuad")

    }
  })

// 섹션3
$(window).on("scroll", function(){
  var contents3_bottom = $("#contents3").offset().top + $("#contents3").height()
  var window_bottom = $(window).scrollTop() + $(window).height()
  if( window_bottom > contents3_bottom-400 ){
    $("#contents3Wrap hgroup").animate({opacity: 1},500)
    $("#contents3Wrap p").delay(200).animate({opacity: 1},500)
    $("#contents3Wrap ul li:eq(0)").delay(400).animate({opacity: 1},500)
    $("#contents3Wrap ul li:eq(1)").delay(600).animate({opacity: 1},500)
    $("#contents3Wrap ul li:eq(2)").delay(800).animate({opacity: 1},500)
    $("#contents3Wrap a").delay(1000).animate({opacity: 1},500)
  }
})

// 섹션4
  function review_moveRight(){
    var className = $(".reviewWrap dl:eq(3)").attr('class')
    var num = (className.substr(6,1))/2-1
    $(".reviewPgBtn li.reviewOn").children('a:not(:animated)').stop().animate({width: 10, backgroundColor: "#939393"},500,function(){
      $(this).removeClass('reviewOn')
      $(".reviewPgBtn li:eq("+num+")").addClass('reviewOn')
    })
    $(".reviewPgBtn li:eq("+num+")").children('a').stop().animate({width: 30, backgroundColor: "#12145e"},500)

    $(".reviewWrap dl:eq(0):not(:animated)").stop().animate({ left: -30, opacity: 0 })
    $(".reviewWrap dl:eq(1):not(:animated)").stop().delay(200).animate({ left: 355, opacity: 0 },function(){
      $(".reviewWrap dl:eq(0)").removeClass('reviewActive1')
      $(".reviewWrap dl:eq(0)").css({left: 30})
      $(".reviewWrap dl:eq(1)").removeClass('reviewActive2')
      $(".reviewWrap dl:eq(1)").css({left: 415})
      $(".reviewWrap dl:eq(2)").addClass('reviewActive1')
      $(".reviewWrap dl:eq(3)").addClass('reviewActive2')
      $(".reviewWrap").append($(".reviewWrap dl:eq(0)"))
                      .append($(".reviewWrap dl:eq(0)"))
                      .append($(".reviewWrap div.reviewBtn"))
                      .append($(".reviewWrap div.reviewPgBtn"))
      $(".reviewWrap dl:eq(0):not(:animated)").stop().animate({ left: 0, opacity: 1 })
      $(".reviewWrap dl:eq(1):not(:animated)").stop().delay(200).animate({ left: 385, opacity: 1 })
    })

  }

  function review_moveLeft(){
    var className = $(".reviewWrap dl:eq(7)").attr('class')
    var num = (className.substr(6,1))/2-1
    $(".reviewPgBtn li.reviewOn").children('a:not(:animated)').stop().animate({width: 10, backgroundColor: "#939393"},500,function(){
      $(this).removeClass('reviewOn')
      $(".reviewPgBtn li:eq("+num+")").addClass('reviewOn')
    })
    $(".reviewPgBtn li:eq("+num+")").children('a').stop().animate({width: 30, backgroundColor: "#12145e"},500)

    $(".reviewWrap dl:eq(1):not(:animated)").animate({ left: 415, opacity: 0 })
    $(".reviewWrap dl:eq(0):not(:animated)").delay(200).animate({ left: 30, opacity: 0 },function(){
      $(".reviewWrap dl:eq(0)").removeClass('reviewActive1')
      $(".reviewWrap dl:eq(1)").removeClass('reviewActive2')
      $(".reviewWrap dl:eq(6)").css({left: -30})
      $(".reviewWrap dl:eq(7)").css({left: 355})
      $(".reviewWrap").prepend($(".reviewWrap dl:eq(7)"))
                      .prepend($(".reviewWrap dl:eq(7)"))
      $(".reviewWrap dl:eq(0)").addClass('reviewActive1')
      $(".reviewWrap dl:eq(1)").addClass('reviewActive2')
      $(".reviewWrap dl:eq(1):not(:animated)").animate({ left: 385, opacity: 1 })
      $(".reviewWrap dl:eq(0):not(:animated)").delay(200).animate({ left: 0, opacity: 1 })
    })
  }

  $(".reviewBtn ul li:eq(1)").on('click',function(e){
    e.preventDefault();
    clearInterval(reviewTimer)
    reviewTimer = setInterval(review_moveRight,5000)
    review_moveRight();
  })

  $(".reviewBtn ul li:eq(0)").on('click',function(e){
    e.preventDefault();
    clearInterval(reviewTimer)
    reviewTimer = setInterval(review_moveRight,5000)
    review_moveLeft();
  })

  var reviewTimer;

  $(".reviewPgBtn ul li a").on('click', function(e){
    e.preventDefault();
    clearInterval(reviewTimer)
    reviewTimer = setInterval(review_moveRight,5000)
    $(".reviewPgBtn li.reviewOn a").not($(this)).stop().animate({width: 10, backgroundColor: "#939393"},500)
    $(this).stop().animate({width: 30, backgroundColor: "#12145e"},520,function(){
      $(".reviewPgBtn li.reviewOn").not($(this).parent('li')).removeClass('reviewOn')
      $(this).parent('li').addClass('reviewOn')
    })
    var numOdd = $(this).parent('li').index()*2+1
    var numEven = $(this).parent('li').index()*2+2
    var className = $(".reviewWrap dl:eq(0)").attr('class')
    var n = numOdd;
    var m = numEven
    if(numOdd == className.substr(6,1)){
      return false;
    }
    else{
      $(".reviewWrap dl:eq(0):not(:animated)").stop().animate({ left: -30, opacity: 0 })
      $(".reviewWrap dl:eq(1):not(:animated)").stop().delay(200).animate({ left: 355, opacity: 0 },function(){
        $(".reviewWrap dl:eq(0)").removeClass('reviewActive1')
        $(".reviewWrap dl:eq(0)").css({left: 30})
        $(".reviewWrap dl:eq(1)").removeClass('reviewActive2')
        $(".reviewWrap dl:eq(1)").css({left: 415})

        $(".reviewWrap dl.review"+numOdd).addClass('reviewActive1')
        $(".reviewWrap dl.review"+numEven).addClass('reviewActive2')
        for( var i=0; i<4; i++ ){
          $(".reviewWrap").append($(".reviewWrap dl.review"+n))
          $(".reviewWrap").append($(".reviewWrap dl.review"+m))
          n = n+2
          m = m+2
          if( n > 7 ){ n = 1 }
          if( m > 8 ){ m = 2 }
        }
        $(".reviewWrap").append($(".reviewWrap div.reviewBtn"))
                        .append($(".reviewWrap div.reviewPgBtn"))
        $(".reviewWrap dl.review"+numOdd+":not(:animated)").stop().animate({ left: 0, opacity: 1 })
        $(".reviewWrap dl.review"+numEven+":not(:animated)").stop().delay(200).animate({ left: 385, opacity: 1 })
      })
    }
  })
  var r = 0;
  $(window).on("scroll", function(){
    var contents4_bottom = $("#contents4").offset().top + $("#contents4").height()
    var window_bottom = $(window).scrollTop() + $(window).height()
    if( window_bottom > contents4_bottom-600 ){
      $("#contents4 h2").animate({paddingTop:0, opacity: 1},700)
      $("#contents4 p").delay(200).animate({marginTop: 20, opacity: 1},700)
      $(".reviewWrap").delay(400).animate({marginTop: 52, opacity: 1},700)
      $(".reviewBtn").delay(800).animate({opacity: 1},500)
      $(".reviewPgBtn").delay(1000).animate({opacity: 1},500)
    }
    if(window_bottom > contents4_bottom-600 && r==0){
        setTimeout(function(){
          reviewTimer = setInterval(review_moveRight,5000)
        },1000)
        r = 1;
    }
  })









// 섹션5
  $(window).on("scroll", function(){
    var contents5_bottom = $("#contents5").offset().top + $("#contents5").height()
    var window_bottom = $(window).scrollTop() + $(window).height()
    if( window_bottom > contents5_bottom+80 ){
      $("#contents5 div h3").animate({paddingTop:0, opacity: 1},700)
      $("#contents5 p").delay(200).animate({marginTop: 20, opacity: 1},700)
      $("#contents5 ul li:eq(0)").delay(400).animate({marginTop: 20, opacity: 1},700)
      $("#contents5 ul li:eq(1)").delay(600).animate({marginTop: 20, opacity: 1},700)
      $("#contents5 ul li:eq(2)").delay(800).animate({marginTop: 20, opacity: 1},700)
      $("#contents5 ul li:eq(3)").delay(1000).animate({marginTop: 20, opacity: 1},700)

    }
  })





  $("#contents5 ul li:eq(0) > a").on('mouseenter', function(){
    $("#contents5 ul li:eq(0) span").css({height: 0}).stop().animate({height: 45},500,'linear')
  }).on('mouseleave', function(){
    $("#contents5 ul li:eq(0) span").stop().css({height: 45})
  })


  $("#contents5 ul li:eq(1) > a").on('mouseenter', function(){

    $(".faq2_star1, .faq2_star4").css({opacity: 0.2}).stop().animate({opacity: 1},120,function(){
      $(this).stop().animate({opacity: 0.2},120,function(){
        $(this).stop().animate({opacity: 1},120,function(){
          $(this).stop().animate({opacity: 0.7},120)//,function(){
          //   $(this).stop().animate({opacity: 1},120)
          // })
        })
      })
    })

    $(".faq2_star2, .faq2_star3").css({opacity: 0.2}).delay(120).animate({opacity: 1},120,function(){
      $(this).stop().stop().animate({opacity: 0.2},120,function(){
         $(this).stop().stop().animate({opacity: 1},120)//,function(){
        //   $(this).stop().stop().animate({opacity: 0.2},120)
      //})
      })
    })


   })
  $("#contents5 ul li:eq(1) > a").on('mouseleave', function(){
    $("#contents5 ul li:eq(1) span").stop().css({opacity: 1})
  })


  $("#contents5 ul li:eq(3) > a").on('mouseenter', function(){
    // $(".faq4_2:not(:animated)").delay(150).animate({top: 118, left: 42},500,'linear')
    $(".faq4_1:not(:animated)").stop().animate({height: 0},500,'linear')
  }).on('mouseleave', function(){
    // $(".faq4_2").stop().css({top: 103, left: 52})
    $(".faq4_1").stop().css({height: 30})
  })


})
