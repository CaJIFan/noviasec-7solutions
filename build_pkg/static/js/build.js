$(document).ready(function(){
  cards = $('.form_card');

  for (let i = 0 ; i < cards.length ; i++){
    cards.on('click', function(){
      pkg_type = $(this).attr('class').split()[1];
      pkg_type_text = $(this).find('.caption_header').text();
      window.location = '/services_list?pkg_name=' + pkg_type_text
    });
  }
});
