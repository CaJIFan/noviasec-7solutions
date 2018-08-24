$(document).ready(function(){
  form_btn = $('.form_btn button');
  body1 = $('.body-1');
  body1.fadeIn(200);

  form_btn.on('click', function(){
    showing_body = $('.is-showing');
    showing_pag = $('.register .on-page');
    body2 = $('.body-2');
    body3 = $('.body-3');
    pag1 = $('.register .pag1')
    pag2 = $('.register .pag2');
    pag3 = $('.register .pag3');
    sb_class = showing_body.attr('class').split(" ")[1];
    showing_body.removeClass('is-showing');
    showing_pag.removeClass('on-page');

    if (sb_class === 'body-1'){
      body2.addClass('is-showing');
      pag2.addClass('on-page')
    }else if (sb_class === 'body-2'){
      body3.addClass('is-showing');
      pag3.addClass('on-page')
      $(this).text("Todo listo!");
    }else if (sb_class === 'body-3'){

      //Sending data via AJAX
      /*$.post({


      });*/
      $('.loader').css('display','flex');
      $('.register .form_card').css('display','none');
      setTimeout(function(){
        $('.loader').css('display','none');
        $('.success_reg').css('display','flex');
      },500);


    }
  });

  dragzone = $('.dragzone');

  dragzone.on('dragover',function(e){
    e.preventDefault();
    $(this).addClass('drag-on');
  });

  dragzone.on('dragleave',function(e){
    $(this).removeClass('drag-on');
  });

  dragzone.on('drop',function(e){
    e.preventDefault();
    $(this).removeClass('drag-on');
    e.target.append(document.createElement('img'))
  });

//ScrollTop navigation bar effect
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= ($(window).height()-200)){
      $('header').css('opacity', '0');
      $('.arrow-up').css('opacity', '1');
    }else{
      $('header').css('opacity', '1');
      $('.arrow-up').css('opacity', '0');
    }
  });

  //Sliding effect

  image = $('.img-cont img');
  image.css('width','100%');
  ind = 1;
  images = ['wedding1.jpg', 'wedding2.jpg', 'wedding3.jpg']
  /*setInterval(function(){
    image.attr("src", "../static/images/" + images[ind]);
    image.css('width','100%');
    if(ind == (images.length -1)){
      ind = 0;
    }else{
      ind+=1;
    }
  },5000);*/
});
