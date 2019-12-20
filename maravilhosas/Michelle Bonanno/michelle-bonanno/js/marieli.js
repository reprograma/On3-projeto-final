var i = 0;
var txt = 'Marielle Presente!';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("author-js").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction() {
  var x = document.getElementById('aboutBox');
  var y = document.getElementById('aboutPlus')
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.transform = 'rotate(135deg)';
  } else {
    x.style.display = 'none';
    y.style.transform = 'rotate(0deg)';
  }
}

// js reprograma
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



