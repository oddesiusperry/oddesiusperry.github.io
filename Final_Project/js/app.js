$(function(){
  
  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.nameTitle').css({
      'transform' : 'translate(0px, '+ wScroll /4 + '% )'
    });
    
  });

      $('.row').click(function () {
      $('.videoContainer').slideToggle();
    });

      $('#burgerNav').click(function() {
      $('#mobileNav').slideToggle();
  });



});



// $('#append').click(function () {
//   var text = $('#text').val();
//   var output = "<p>" + text + "</p>";
//   $('#navBar').append(output)
//  })

