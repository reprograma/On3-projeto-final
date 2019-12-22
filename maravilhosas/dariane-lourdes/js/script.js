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

  // Citação "revelada"

var citar = document.getElementById("citar");
window.addEventListener("scroll", citarCrisScrool);
function citarCrisScrool() {
    switch(window.screen.availWidth){
        case 1600:
          citar.classList.add("citar-show")
          citar.classList.remove("citar-hidden")
        break;
    }
    if(pageYOffset >= 1600){
        citar.classList.add("citar-show")
        citar.classList.remove("citar-hidden")
     }
     else{
       citar.classList.remove("citar-show")
        citar.classList.add("citar-hidden")
     }
    };
  
    // Modal Sobre a Autora

const modal = document.getElementById('autora_modal');
const modalBtn = document.getElementById('secao-autora__btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
