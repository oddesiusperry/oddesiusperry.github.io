$(function(){

///// PARALLAX FOR NAME AND TITLE OPENING PAGE ///////

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.nameTitle').css({
      'transform' : 'translate(0px, '+ wScroll /4 + '% )'
    });
    
  });

/// HIDE MOBILE NAV BAR IF BROWSER WINDOW @ MIN-WIDTH 950px ////

  $(window).resize(function () {

    var width = $(window).width()

    if (width > 950) {
        $("#mobileNav").slideUp('375','linear');
      }
    });


////   TOGGLES MOBILE NAV WHEN MENU ICON IS CLICKED  ////

    $('.fa-bars').click(function() {
      $('#mobileNav').slideToggle('375','linear');
   });

////   SCROLL TO VIDEO CONTAINER DIV ////

$('.row').on('click', function(event) {
    var target = $(this);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 20
        }, 850);
   }
});

////    DISPLAYS VIDEO PLAYER WHEN THUMBNAILS ARE CLICKED ////

    $('.row').click(function () {
      $('.videoContainer').slideDown('375','linear');
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
        }, 1500);
        return false;
      }
    }
  });

////   CLOSE VIDEO CONTAINER WHEN LARGE NAV LINKS ARE CLICKED ////

    $('.menuItems').click(function () {
        $('.videoContainer').slideUp('375','linear'); 
  });

    $('.menuItems').click(function () {
        $('#mobileNav').slideUp('375','linear'); 
  });

    $('.bodyTxt').click(function () {
        $('#mobileNav').slideUp('375','linear'); 
  });

////   FORMS AND INPUT     //////

    $('#inputForm').submit(function (event) {

      event.preventDefault(); // PREVENT DEFAULT BROWSER FROM REFRESHING

    var myInput = $('#required','#message').val('');
  });


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









