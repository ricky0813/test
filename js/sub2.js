$(function(){
  history.scrollRestoration = "manual"
  var h_n = 0;
  $("#history_InnovationWrap ul li").on('click', function(){
    var pos = $(this).children('a').attr('href')
    $('html, body').animate({scrollTop: $(pos).offset().top - ($(window).innerHeight()-$(pos).outerHeight())/2})
    h_n = 1;
  })
  var h_ul = 0
  // $(window).on("scroll", function(){
  //   if($(window).scrollTop() >= $("#historyUl_Wrap").position().top && h_ul==0){
  //     // $("#historyUl_Wrap ul li").addClass("fixed")
  //     // $("#historyUl_Wrap").css({backgroundColor: "#fff"})
  //     $("#historyUl_Wrap").stop().animate({height: 100},300/*,function(){
  //       $(this).css({position: "fixed", top: 0, left: 0, borderBottom: "1px solid #ddd"})
  //     }*/)
  //     // $("#history_InnovationWrap hgroup").css({marginBottom: })
  //     // $("#history_InnovationWrap dl:eq(0)").stop().animate({marginTop: 228},300)
  //     h_ul = 1
  //   }
  //   // else if($(window).scrollTop() < 1557 && h_ul==1){
  //   //   $("#historyUl_Wrap ul li").removeClass("fixed")
  //   //   $("#historyUl_Wrap").css({position: "static", borderBottom: 0}).stop().animate({height: 328},300)
  //   //   $("#history_InnovationWrap hgroup").css({marginBottom: 38})
  //   //   h_ul = 0
  //   // }
  // })

  $(window).on("scroll", function(){
    if($(window).scrollTop() >= $("#historyUl_Wrap").offset().top && h_ul==0){
      $("#historyUl_Wrap").css({position: "fixed", top: 0, borderBottom: "1px solid #ddd", backgroundColor: "#fff"})
      $("#historyUl_Wrap ul li").addClass("fixed")
      $("#historyUl_Wrap").animate({height: 100},300)
      if( h_n == 0){
        $("html, body").animate({scrollTop: "+=188px"},300)
      }
      h_ul = 1
    }
    else if( $(window).scrollTop() <= $("#history_InnovationWrap hgroup").offset().top + $("#history_InnovationWrap hgroup").height() + 61 && h_ul==1 ){
      $("#historyUl_Wrap").css({position: "absolute", top: 103, borderBottom: 0, backgroundColor: "transparent"})
      $("#historyUl_Wrap ul li").removeClass("fixed")
      $("#historyUl_Wrap").animate({height: 328},300)
      h_ul = 0
      h_n = 0
    }
  })



})
