console.log("oi")



// PARALLAX BANNER

$('div.bgParallax').each(function(){
    let $objeto = $(this);
    
        $(window).scroll(function() {
        let pos = -($(window).scrollTop() / $objeto.data('speed')); 
        let backgpos = '50% '+ pos + 'px';
    
        $objeto.css('background-position', backgpos );
        }); 
    });


// BOTÃO RESPONSIVO PADRONIZADO


(function(){

    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");
    
    btnResponsivo.addEventListener('click', function(e){
        e.preventDefault();
        document.body.scrollTop += 0;
        if (menuResponsivo.className === "navegacao__itens") {
            menuResponsivo.className += " ativo";
        } else {
            menuResponsivo.className = "navegacao__itens";
        }
    });

})();


// NAVEGACAO PADRONIZADA

window.addEventListener("scroll", function(){
   
    if(pageYOffset >= 250) {
       document.querySelector('.navegacao').style.backgroundColor = '#674582';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
    } else {
       document.querySelector('.navegacao').style.backgroundColor = 'transparent';
       document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
    }

})

//ARROW PADRONIZADO

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



// SLIDER 


/*let intervalo = 3000;

function slide1(){
    document.getElementById("banner").src ="/img/ada-pensador1.jpg";
    setTimeout(slide2(), intervalo);
    
}

function slide2(){
    document.getElementById("banner").src ="/img/ada-pensador2.jpg";
    setTimeout(slide3(), intervalo);
}

function slide3(){
    document.getElementById("banner").src ="/img/ada-pensador3.jpg";
    setTimeout(slide1(), intervalo);
}
*/
//window.onload = slide1()


/*
let images = [];
let time = 3000;

images [0] = '/img/ada-pensador1.jpg';
images [1] = 'img/ada-pensador2.jpg';
images [2] = 'img/ada-pensador3.jpg';

function changeImg(){
    document.hasChildNodes.src = images[i];
    if (1 < images.length - 1){
        i++;
    } else {
         i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
*/