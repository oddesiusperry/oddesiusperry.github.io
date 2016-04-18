$(function(){
  
  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.nameTitle').css({
      'transform' : 'translate(0px, '+ wScroll /4 + '% )'
    });
  });

  $('#videoPlayer').hide().slide();
  var $vid = $()

});