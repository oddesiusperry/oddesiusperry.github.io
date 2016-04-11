// $(document).ready(function() {
//   $('#box-one').css('background-color', 'red').text('box one');
//   $('#box-two').css('background-color', 'blue').text('box two');

//   $('#box-one').click(function() {
//     $('#box-one').css('height', '500px').css('width', '500px')
//   });

//   $('#box-two').click(function() {
//     $('#box-two').css('height', '500px').css('width', '500px')
//   });

// });



$(document).ready(function() {
  $('#box-one').css({'background-color': 'red',
    'color': 'white',
    'padding': '50px',
    'text-align': 'center'})
    .text('box one red');




  $('#box-two').css({'background-color': 'blue',
    'color': 'white',
    'padding': '50px',
    'text-align': 'center'})
    .text('box one blue');

  $('#box-one').click(function() {
    $(this).css('height', '500px').css('width', '500px')
  });

  $('#box-two').click(function() {
    $(this).css('height', '500px').css('width', '500px')
  });

});

























