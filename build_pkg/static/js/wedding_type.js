$(document).ready(function(){
  cards = $('.form_card');

  for (let i = 0 ; i < cards.length ; i++){
    cards.on('click', function(){
      wedding_type = $(this).attr('class').split()[1];
      wedding_type_text = $(this).find('.caption_header').text();
      window.location = '/build_pkg?wedding_type=' + wedding_type_text
    });
  }
});
