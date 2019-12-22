(function(){

  let hambResponsivo = document.getElementById('menuResponsivo');
  let botaoResponsivo = document.getElementById('btnResponsivo');
  
  botaoResponsivo.addEventListener('click', function(e){
      e.preventDefault();
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
          menuResponsivo.className += " ativo";
      } else {
          menuResponsivo.className = "navegacao__itens";
      }
  });

})();

window.addEventListener("scroll", function(){
 
  if(pageYOffset >= 250) {
     document.querySelector('.navegacao').style.backgroundColor = '#8a4545';
     document.querySelector('.navegacao__itens').style.backgroundColor = '#8a4545';
  } else {
     document.querySelector('.navegacao').style.backgroundColor = 'transparent';
     document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
  }

})



try {
  const buttonAutora = document.querySelector('.arrow')
  buttonAutora.addEventListener('click', function(e){
      e.preventDefault()
      buttonAutora.classList.toggle('arrow-close')
      const autoraInfos = document.querySelector('.secao-autora__about')
      autoraInfos.classList.toggle('opened');
  })
} catch {
  if(!buttonAutora) {
      
  } 
}


