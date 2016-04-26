$(document).ready(function () {
  // console.logs the window.width
  $(window).resize(function () {
    console.log($(window).width())
  });

  $('#burger-nav').click(function() {
      $('#mobile-nav').slideToggle();
  });
  

})

