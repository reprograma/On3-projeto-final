$(document).ready(function(){
    $('.img-about').mouseover( function() {
      $(this).animate({
        width:'540px',
        height:'510px'
      },1000);
    });
    
    $('.img-about').mouseout(function() {
      $(this).animate({
        width:'440px',
        height:'410px'
        },1000);
    });
});

$(document).ready(function(){
  $("#slide img:eq(0)").addClass("ativo").show();

  var texto = $(".ativo").attr("alt");
  $("#slide").prepend("<p>"+texto+"</p>");


  setInterval(slide,3000);

  function slide(){
    if($(".ativo").next().size()){
      $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    }
    else {
      $(".ativo").fadeOut().removeClass("ativo");
      $("#slide img:eq(0)").fadeIn().addClass("ativo");
    }

    var texto = $(".ativo").attr("alt");
    $("#slide p").hide().html(texto).delay(1000).fadeIn();

  }
});




