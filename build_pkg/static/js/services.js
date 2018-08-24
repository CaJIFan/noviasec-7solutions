$(document).ready(function(){
  $(window).on('scroll', function(){
    if($(window).scrollTop() > $('header').height()){
      $('.header_list').css('position','fixed');
      $('.header_list').css('height','10%');
      $('.header_list').css('top','0');
      $('.header_list').css('left','0');
      $('.header_list').css('box-shadow','0 3px 10px #ccc');
      $('.header_list').css('background-color','#fff');
      services = $('.service');
      for (let i = 0 ; i < services.length ; i++){
        $(services[i]).css('margin-top','10%');
      }
    }else{
      $('.header_list').css('position','static');
      $('.header_list').css('box-shadow','none');
      $('.header_list').css('height','12%');
      for (let i = 0 ; i < services.length ; i++){
        $(services[i]).css('margin-top','0%');
      }
    }
  });

  servicios = $('.service');
  lista_servicios_proveedor = [];
  for (let i = 0; i < servicios.length ; i++){
    service_type = $(servicios[i]).attr('class').split(" ")[1];
    cards = $('.'+service_type).find('.form_card');
    for (let j = 0; j < cards.length ; j++){
      $(cards[j]).on('click', function(){
        console.log($(cards[j]).attr('class'));
        selected = $('.'+service_type);
        console.log(selected.attr('class'));
        $(this).addClass('selected');
      });
    }
  }

  tabs = $('.tab');
  $(tabs[0]).addClass('on_tab');

  pkg = $('.pkg_id span').text().split(" ")[1];
  for(let i = 0 ; i < tabs.length ; i++){
    $(tabs[i]).on('click',function(){
      tab_id = $(this).attr('class').split(" ")[1];
      if(tab_id.toLowerCase() != 'add'){
        $('.on_tab').removeClass('on_tab');
        $(this).addClass('on_tab');
        $('.on_screen').removeClass('on_screen');
        $('#'+tab_id).addClass('on_screen');

      }

    });
  }
  $('.next_btn button').on('click', function(){
    service_type = $('.on_screen').attr('class').split(" ")[1];
    servicios_seleccionados = $('.selected .caption_header');
    servicios_txt = [];
    for(let i = 0; i < servicios_seleccionados.length ; i++){
      servicios_txt.push($(servicios_seleccionados[i]).text());
    }
    window.location = '/total/?pkg='+pkg+'&serv_seleccionados='+servicios_txt.join("%")+'&serv_type='+service_type;
  });
});
