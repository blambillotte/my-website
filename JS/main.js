

function main() {
  
// $('#on-click').hide();
// no longer needed - set the image to display:none; from the CSS

  $('.Surprise').on('click', function() {
    $('#on-click').toggle();
  });
}

$(document).ready(main);