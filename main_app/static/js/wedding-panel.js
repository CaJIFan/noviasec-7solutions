$(document).ready(function(){
  services = $('input[name=services-value]');

  for(let i = 0 ; i < services.length ; i++){
    $(services[i]).on('change', function(){
      li_id = $(this).val().toLowerCase().split(" ").join("_");
      let price = $('.price');
      if($(this).is(":checked")){
        html = '<li id='+ li_id +'>'+ $(this).val() +'<i class="fas fa-times"></i></li>';
        $('.dropzone ul').append(html);

        price.text("$" + (parseFloat(price.text().trim().replace("$","")) + 500));
      }else{
        $('#'+li_id).remove();
        price.text("$" + (parseFloat(price.text().trim().replace("$","")) - 500));
      }
    });
  }
});
