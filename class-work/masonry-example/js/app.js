$(document).ready(function () {

    $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
  });

  $('.grid').on( 'click', '.grid-item', function() {
  // remove clicked element
    $('.grid').masonry( 'remove', this ).masonry('layout');
      // layout remaining item elements
  });

})
