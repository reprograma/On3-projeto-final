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

  // Modal leia mais
  function modalLeiaMais() {
    var modal = document.querySelector('.modal.leia-mais');
    var botaoAbrirModal = document.getElementById('leia-mais');
    var botaoFecharModal = modal.querySelector('#fechar-modal');
    var modalBackdrop = modal.querySelector('.modal-backdrop');

    botaoAbrirModal.addEventListener('click', function() {
      modal.style.display = "block";
    });

    botaoFecharModal.addEventListener('click', function() {
      modal.style.display = "none";
    });

    modalBackdrop.addEventListener('click', function() {
      modal.style.display = "none";
    })
  }

  document.addEventListener('DOMContentLoaded', function() {
    modalLeiaMais();
  })


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
  
// iniciando carrossel
$('.slider').glide({
  autoplay: 5000
});