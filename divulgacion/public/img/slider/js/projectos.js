document.addEventListener("DOMContentLoaded", () => {
  
    function hideAll() {
        $(".info").css("display", "none");
        $(".col-7").css("height", "160px");
        $(".fader").css("background-color", "rgba(0,0,0,.5)");
      }
    
    function activar(bloque){
        bloque=bloque.toString();
        hideAll();
        document.getElementById(bloque).scrollIntoView();
        $("#"+bloque+" .info").toggle(400, function() {});
        $("#"+bloque+" .col-7").css("height", "284px");
        $("#"+bloque+" .col-7 .fader").css("background-color", "rgba(0,0,0,0)");
    

        
    }
    
        $(".col-7").click(function(e) {  
            let parent= $(this).parent('div').prop('id');
            activar(parent.toString());
        });
    
    
    //onclick="activar('ADMAS')

  let showMoreButtons = Array.from(
    document.getElementsByClassName("show-more-button")
  );

  let handleShowMoreClick = el => {
    let colaborador = getCollaborator(el);
    let biografia = document.getElementById(colaborador);
    if (biografia.classList.contains("active")) {
      el.target.innerHTML = 'Leer más <img src="./img/icons/icon-cheveron-down.svg">'
    } else {
      el.target.innerHTML = 'Esconder <img src="./img/icons/icon-cheveron-up.svg">'
    }
    biografia.classList.toggle("active");
  };

  let getCollaborator = el => {
    return el.target.dataset.colaborador;
  };

  showMoreButtons.forEach(button => {
    button.addEventListener("click", handleShowMoreClick);
  });
});
