$(function(){

  $("#faq_question dl dt a").on("click",function(e){
      e.preventDefault();
      if($(this).parent('dt').next("dd").css('display') == 'block'){
        $(this).parent("dt").next("dd").slideUp();
        $(this).children('span').css({transform: "rotate(0deg)"})
        $(this).css({fontWeight: 300})
      }
      else if($(this).parent('dt').next("dd").css('display') == 'none'){
        $("#faq_question dl dd").not($(this).parent("dt").next("dd")).slideUp();
        $(this).parent("dt").next("dd").slideDown();
        $("#faq_question dl dt a span").not($(this).children('span')).css({transform: "rotate(0deg)"})
        $(this).children('span').css({transform: "rotate(180deg)"})
        $("#faq_question dl dt a").not($(this)).css({fontWeight: 300})
        $(this).css({fontWeight: 500})
      }
    })

})
