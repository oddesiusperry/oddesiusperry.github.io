$(function() {

  $('.inputTemp').on('keypress', function () {
    var tempId = $(this).attr('data-tempid'); 

    if (tempId == "Fahr") {
      $(this).value (* 1.8) + 32;
     }
     else if { 
      (tempId == "Cels") 
      $(this).value (- 32) * 1.8;
     }
     $(tempId).value = () {
     }

     //function C to F
    var $f = function CtoF() {
    
    if (f <= 32 ) { //color blue for cold
      $('#box').css('backgroundColor', '#0D47A1');
    } 
    else if (c > 32 || c < 70) { //orange for warm
      $('#box').css('backgroundColor', '#FF5722');
    } 
    else if (c > 70) { //red for hot
      $('#box').css('backgroundColor', '#B71C1C');
    } 
    else {
      $('#box').css('backgroundColor', '#EEEEEE');
    }

    $('.inputTemp').value = !isNaN(tempId) ? parseFloat(tempId.toFixed(1)) : "Err"

    });
});



