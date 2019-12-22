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

// Efeito para barra de navegação, controlando cor e transparência
window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#183140";
    document.querySelector(".navegacao__itens").style.backgroundColor =
    "#183140";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});

// Efeito máquina de escrever no h1 do site
function digitaTexto(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 130 * i)

});
}
const titulo = document.querySelector('.titulo');
digitaTexto(titulo);

// Carousel
function setaImagem(){
  var settings = {
      primeiraImg: function(){
          elemento = document.querySelector("#slider a:first-child");
          elemento.classList.add("ativo");
          this.legenda(elemento);
      },

      slide: function(){
          elemento = document.querySelector(".ativo");

          if(elemento.nextElementSibling){
              elemento.nextElementSibling.classList.add("ativo");
              settings.legenda(elemento.nextElementSibling);
              elemento.classList.remove("ativo");
          }else{
              elemento.classList.remove("ativo");
              settings.primeiraImg();
          }

      },

      proximo: function(){
          clearInterval(intervalo);
          elemento = document.querySelector(".ativo");

          if(elemento.nextElementSibling){
              elemento.nextElementSibling.classList.add("ativo");
              settings.legenda(elemento.nextElementSibling);
              elemento.classList.remove("ativo");
          }else{
              elemento.classList.remove("ativo");
              settings.primeiraImg();
          }
          intervalo = setInterval(settings.slide,4000);
      },

      anterior: function(){
          clearInterval(intervalo);
          elemento = document.querySelector(".ativo");

          if(elemento.previousElementSibling){
              elemento.previousElementSibling.classList.add("ativo");
              settings.legenda(elemento.previousElementSibling);
              elemento.classList.remove("ativo");
          }else{
              elemento.classList.remove("ativo");                     
              elemento = document.querySelector("a:last-child");
              elemento.classList.add("ativo");
              this.legenda(elemento);
          }
          intervalo = setInterval(settings.slide,4000);
      },

      legenda: function(obj){
          var legenda = obj.querySelector("img").getAttribute("alt");
          document.querySelector("figcaption").innerHTML = legenda;
      }

  }

  //chama o slide
  settings.primeiraImg();

  //chama a legenda
  settings.legenda(elemento);

  //chama o slide à um determinado tempo
  var intervalo = setInterval(settings.slide,4000);
  document.querySelector(".next").addEventListener("click",settings.proximo,false);
  document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaImagem,false);