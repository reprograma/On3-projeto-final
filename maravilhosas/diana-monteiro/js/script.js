(function () {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
      document.querySelector(".navegacao__itens").style.backgroundColor = "#674582";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function () {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#674582";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});

const titulo = document.querySelector('#efeito');
typeWriter(titulo);

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  for (let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  }
}

try {
  const buttonAutora = document.querySelector('.arrow')
  buttonAutora.addEventListener('click', function (e) {
    e.preventDefault()
    buttonAutora.classList.toggle('arrow-close')
    const autoraInfos = document.querySelector('.secao-autora__about')
    autoraInfos.classList.toggle('opened');
  })
} catch {
  if (!buttonAutora) {

  }
}


