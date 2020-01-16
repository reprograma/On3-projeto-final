(function () {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function () {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").classList.add("-active")
    // style.backgroundColor = "#674582";
  } else {
    document.querySelector(".navegacao").classList.remove("-active")
  }
});

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

