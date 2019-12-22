(function() {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#674582";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "#674582";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});


// JS PROJETO BRENÉ BROWN

// SMOOTH SCROLL
$('a.links').on('click', function(e) {
  if(this.hash !== '') {
    
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1100
    );
  }
})

// CAROUSEL
$('.carousel').carousel({
  interval: false
})

// PARALLAX
$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();
  $('.parallax').css('top',
  -65+(wScroll*0.07)+'px')
}