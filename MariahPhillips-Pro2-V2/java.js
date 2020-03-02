$(document).ready(function(){
  $('#text').hover(function() {
    $(this).animate({ fontSize : '0px' });
  });
  });


  new CircleType(document.getElementById('text'));
