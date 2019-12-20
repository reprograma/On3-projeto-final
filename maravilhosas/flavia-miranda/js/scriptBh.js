/* EFEITO MENU*/
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

  /*EFEITO POESIA*/

$(document).ready(function () {
    $("#lerPoesia1").click(function () {
        $(".textPoesia1").show();
        $(".textInicial1").hide();
    });
    $("#voltarPoesia1").click(function () {
        $(".textInicial1").show();
        $(".textPoesia1").hide();
    });

    $("#lerPoesia2").click(function () {
        $(".textPoesia2").show();
        $(".textInicial2").hide();
    });
    $("#voltarPoesia2").click(function () {
        $(".textInicial2").show();
        $(".textPoesia2").hide();
    });

    $("#lerPoesia3").click(function () {
        $(".textPoesia3").show();
        $(".textInicial3").hide();
    });
    $("#voltarPoesia3").click(function () {
        $(".textInicial3").show();
        $(".textPoesia3").hide();
    });
});
