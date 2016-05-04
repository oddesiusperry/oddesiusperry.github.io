$(function(){

///// PARALLAX FOR NAME AND TITLE OPENING PAGE ///////

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.nameTitle').css({
      'transform' : 'translate(0px, '+ wScroll /4 + '% )'
    });
    
  });



////   TOGGLES MOBILE NAV WHEN MENU ICON IS CLICKED  ////

    $('.fa-bars').click(function() {
      $('#mobileNav').slideToggle('375','linear');
   });

////    DISPLAYS VIDEO PLAYER WHEN THUMBNAILS ARE CLICKED ////

    $('.row').click(function () {
      $('.videoContainer').slideDown();
  });

/////    HIDES VIDEO WHEN THE CLOSE BUTTON IS CLICKED  /////

    $('.closeButton').click(function () {
        $('.videoContainer').slideUp('375','linear');
  });

////    SMOOTH SCROLLING EFFECTS MOVES TO SECTIONS OF PAGE WHEN NAV LINKS ARE CLICKED  /////

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 850);
        return false;
      }
    }
  });

////   FORMS AND INPUT     //////


});



//       INPUT TEXT CHANGES       //

    // $('input').each(function() {
    //     $.data(this, 'default', this.value);
    // }).css("color","black")
    // .focus(function() {
    //     if (!$.data(this, 'edited')) {
    //         this.value = "";
    //         $(this).css("color","white");
    //     }
    // }).change(function() {
    //     $.data(this, 'edited', this.value != "");
    // }).blur(function() {
    //     if (!$.data(this, 'edited')) {
    //         this.value = $.data(this, 'default');
    //         $(this).css("color","white");
    //     }
    // });



//      MOBILE NAV WINDOW RESIZE     //

//   $(window).resize(function () {
// ​
//     var width = $(window).width()
// ​
//     if (width > 950) {
//         $('#mobileNav').hide()
//     }
// });