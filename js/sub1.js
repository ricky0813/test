$(function(){

  var rClassify = 1;
  var bClassify = 1;
  $(".shaver_Classify a:eq(0)").on('click',function(e){
    e.preventDefault();
    if($(".shaver_Classify a:eq(0)").hasClass('classifyOn') && rClassify == 1){
      $(".shaver_Classify a:eq(0)").removeClass('classifyOn')
      $(".shaver_Classify a:eq(0) > span").hide()
      $("#contents_fusion5 > a.razor").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
      rClassify = 0
      if($("#productSnbWrap").height()==0){
        $("#productSnbWrap").css({height: $("#productSnb").height()})
        $("#footer").css({position: "absolute", bottom: -200})
      }
    }
    else if (rClassify == 0){
      $(".shaver_Classify a:eq(0)").addClass('classifyOn')
      $(".shaver_Classify a:eq(0) > span").show()
      $("#contents_fusion5 > a.razor").show()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
      $("#footer").css({position: "relative", bottom: 0})
      rClassify = 1
    }
  })
  $(".shaver_Classify a:eq(1)").on('click',function(e){
    e.preventDefault();
    if($(".shaver_Classify a:eq(1)").hasClass('classifyOn') && bClassify == 1){
      $(".shaver_Classify a:eq(1)").removeClass('classifyOn')
      $(".shaver_Classify a:eq(1) > span").hide()
      $("#contents_fusion5 > a.blade").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
      bClassify = 0
      if($("#productSnbWrap").height()==0){
        $("#productSnbWrap").css({height: $("#productSnb").height()})
        $("#footer").css({position: "absolute", bottom: -200})
      }
    }
    else if (bClassify == 0){
      $(".shaver_Classify a:eq(1)").addClass('classifyOn')
      $(".shaver_Classify a:eq(1) > span").show()
      $("#contents_fusion5 > a.blade").show()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
      $("#footer").css({position: "relative", bottom: 0})
      bClassify = 1
    }
  })

  $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})

// 제품 hover
// 1
  $("#contents_fusion5 a:eq(0) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '125px', 'background-position-y': '53px', backgroundColor: "#eee"},250,"easeOutQuad")
    },
    function(){
      $(this).stop().animate({'background-size': '115px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250,"easeOutQuad")
    })
// 2
  $("#contents_fusion5 a:eq(1) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '169px', 'background-position-y': '55px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '159px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250)
    })
// 3
  $("#contents_fusion5 a:eq(2) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '170px', 'background-position-y': '74px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '160px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 4
  $("#contents_fusion5 a:eq(3) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '143px', 'background-position-y': '73px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '133px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 5
  $("#contents_fusion5 a:eq(4) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '134px', 'background-position-y': '53.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '124px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250)
    })
// 6
  $("#contents_fusion5 a:eq(5) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '173px', 'background-position-y': '55px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '163px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250)
    })
// 7
  $("#contents_fusion5 a:eq(6) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '170px', 'background-position-y': '79.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '160px', 'background-position-y': '84px', backgroundColor: "#f8f8f8"},250)
    })
// 8
  $("#contents_fusion5 a:eq(7) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '144px', 'background-position-y': '73.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '134px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 9
  $("#contents_fusion5 a:eq(8) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '134px', 'background-position-y': '53.5px', backgroundColor: "#eee"},250,"easeOutQuad")
    },
    function(){
      $(this).stop().animate({'background-size': '124px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250,"easeOutQuad")
    })
// 10
  $("#contents_fusion5 a:eq(9) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '162px', 'background-position-y': '55px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '152px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250)
    })
// 11
  $("#contents_fusion5 a:eq(10) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '170px', 'background-position-y': '75px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '160px', 'background-position-y': '80px', backgroundColor: "#f8f8f8"},250)
    })
// 12
  $("#contents_fusion5 a:eq(11) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '144px', 'background-position-y': '73.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '134px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 13
  $("#contents_fusion5 a:eq(12) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '175px', 'background-position-y': '50.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '165px', 'background-position-y': '61px', backgroundColor: "#f8f8f8"},250)
    })
// 14
  $("#contents_fusion5 a:eq(13) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '170px', 'background-position-y': '74px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '160px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 15
  $("#contents_fusion5 a:eq(14) dl").hover(
    function(){
      $(this).stop().animate({'background-size': '143px', 'background-position-y': '73.5px', backgroundColor: "#eee"},250)
    },
    function(){
      $(this).stop().animate({'background-size': '133px', 'background-position-y': '79px', backgroundColor: "#f8f8f8"},250)
    })
// 장바구니 담기
  $("#contents_fusion5 > a > dl > dd.productAdd").hover(
    function(){
      $(this).stop().animate({scrollTop: 102, backgroundColor: '#333'},600)
    },
    function(){
      $(this).stop().animate({scrollTop: 0, backgroundColor: '#12145e'},300)
    }
  )


  $("#productSnb > ul > li:eq(1) > ul > li > a:eq(0)").on('click',function(e){
    e.preventDefault();
    if($(this).css('color')=="#153ea7"){
      return false;
    }
    else {
      $("#productSnb > ul > li:eq(1) > ul > li > a").css({color: "#333"})
      $(this).css({color: "#153ea7"})
      $(".shaver_Classify").animate({height: 0, paddingTop: 0, paddingBottom: 0},function(){
        $(this).css({border: 0})
      })
      $("#contents_fusion5 > a").show()
      $("#contents_fusion5 > a:not(.proshield)").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
    }
  })

  $("#productSnb > ul > li:eq(1) > ul > li > a:eq(1)").on('click',function(e){
    e.preventDefault();
    if($(this).css('color')=="#153ea7"){
      return false;
    }
    else {
      $("#productSnb > ul > li:eq(1) > ul > li > a").css({color: "#333"})
      $(this).css({color: "#153ea7"})
      $(".shaver_Classify").animate({height: 0, paddingTop: 0, paddingBottom: 0},function(){
        $(this).css({border: 0})
      })
      $("#contents_fusion5 > a").show()
      $("#contents_fusion5 > a:not(.proglide)").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
    }
  })

  $("#productSnb > ul > li:eq(1) > ul > li > a:eq(2)").on('click',function(e){
    e.preventDefault();
    if($(this).css('color')=="#153ea7"){
      return false;
    }
    else {
      $("#productSnb > ul > li:eq(1) > ul > li > a").css({color: "#333"})
      $(this).css({color: "#153ea7"})
      $(".shaver_Classify").animate({height: 0, paddingTop: 0, paddingBottom: 0},function(){
        $(this).css({border: 0})
      })
      $("#contents_fusion5 > a").show()
      $("#contents_fusion5 > a:not(.skintech)").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
    }
  })

  $("#productSnb > ul > li:eq(1) > ul > li > a:eq(3)").on('click',function(e){
    e.preventDefault();
    if($(this).css('color')=="#153ea7"){
      return false;
    }
    else {
      $("#productSnb > ul > li:eq(1) > ul > li > a").css({color: "#333"})
      $(this).css({color: "#153ea7"})
      $(".shaver_Classify").animate({height: 0, paddingTop: 0, paddingBottom: 0},function(){
        $(this).css({border: 0})
      })
      $("#contents_fusion5 > a").show()
      $("#contents_fusion5 > a:not(.fusion)").hide()
      $("#productSnbWrap").css({height: $("#contents_fusion5").outerHeight()-97})
    }
  })

  $("#productSnb > ul > li:eq(1)>a").on('click',function(e){
    e.preventDefault();
     location.reload();
  })

  $("#selectbox").on('change',function(){
    if($("#selectbox option:selected").val()=='highreview'){
      $("#contents_fusion5 a").each(function(){
        var price = parseFloat($(this).find('span.grade_count').text())
        console.log(price)
      })


    }
  })







})
