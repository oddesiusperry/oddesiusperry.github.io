$(function(){
  
  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.nameTitle').css({
      'transform' : 'translate(0px, '+ wScroll /4 + '% )'
    });
    
  });

      $('.workImg').click(function () {
      $('.videoContainer').slideToggle();

    });

});



//Scroll Window Test

// $(function() {
  
//   $(window).scroll(function() {

//   var windowScrollPosTop = $(window).scrollTop();

//   $(".status").html(windowScrollPosTop);

//   });

// });



