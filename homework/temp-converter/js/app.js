
$(document).ready(function() {
    // console.log("ready was called");

  $('.inputTemp').keyup(function (event) {
      event.preventDefault();
    // console.log(event);
      var tempId = $(this).attr('id'); 
    // console.log(tempId);
    if (tempId == "fahrOutput") {
      // console.log($('#fahrOutput').val())
      var celsOutput = (parseFloat($('#fahrOutput').val()) * 1.8) + 32;
      // console.log(celsOutput);
      $("#celsOutput").val(celsOutput.toFixed(1));

     }
     else if  (tempId == "celsOutput") {
      var fahrOutput = (parseFloat($('#celsOutput').val()) - 32) / 1.8;
     // console.log(fahrOutput);
      $("#fahrOutput").val(fahrOutput.toFixed(1));
     
     } else {
      // console.log('else was called')
     }
});
     //function C to F
    // function CtoF(c) {
    // console.log("ctof called")
    // if (c <= 32 ) { //color blue for cold
    //   $('#box').css('backgroundColor', '#0D47A1');
    // } 
    // else if (c > 32 || c < 70) { //orange for warm
    //   $('#box').css('backgroundColor', '#FF5722');
    // } 
    // else if (c > 70) { //red for hot
    //   $('#box').css('backgroundColor', '#B71C1C');
    // } 
    // else {
    //   $('#box').css('backgroundColor', '#EEEEEE');
    // }

    // $('.inputTemp').value() != isNaN(tempId) ? parseFloat(tempId.toFixed(1)) : "Err"

    // };
});

