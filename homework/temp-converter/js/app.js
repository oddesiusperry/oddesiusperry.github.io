
$(document).ready(function() {
    // console.log("ready was called");

  $('.inputTemp').keyup(function (event) {
      event.preventDefault();
    // console.log(event);
      var tempId = $(this).attr('id'); 
    // console.log(tempId);
    if (tempId == "fahrOutput") {
      // console.log($('#fahrOutput').val())
      var celsOutput = (parseFloat($('#fahrOutput').val()) -32) / 1.8;
      // console.log(celsOutput);
      $("#celsOutput").val(celsOutput.toFixed(1));

     }
     else if  (tempId == "celsOutput") {
      var fahrOutput = (parseFloat($('#celsOutput').val()) * 1.8 + 32);
     // console.log(fahrOutput);
      $("#fahrOutput").val(fahrOutput.toFixed(1));
     
     } else {
      // console.log('else was called')
     }
  });

});


