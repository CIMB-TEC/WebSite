document.addEventListener("DOMContentLoaded", () => {
  let current = "";
    function hideAll() {
        $(".info").css("display", "none");
        $(".col-7").css("height", "160px");
        $(".proyecto-slider .slick-slide div").css("height", "160px");
        $(".fader").css("background-color", "rgba(0,0,0,.5)");
        
      }

    function show(bloque) {
        bloque=bloque.toString();        
        document.getElementById(bloque).scrollIntoView();
        $("#"+bloque+" .info").toggle(400, function() {});
        $("#"+bloque+" .col-7").css("height", "284px");
        $("#"+bloque+" .proyecto-slider .slick-slide div").css("height", "284px");
        $("#"+bloque+" .col-7 .fader").css("background-color", "rgba(0,0,0,0)"); 
        
      }

    
    function activar(bloque){
        var display=$("#"+bloque+" .info").css("display");
        var comp=display.localeCompare("none");
        if(comp==0){
            hideAll();
            show(bloque);
        }else{
            hideAll();
        }
    }
    
    
    function selectPeriod(){
        var selected_option = $('.periodo option').filter(':selected').val();
        selected_option=selected_option.toString();
        $(".proyectos-wrapper").css("display", "none");
        $("#"+selected_option).toggle(400, function() {});
    }
    
    $(".col-7").click(function(e) {  
        let parent= $(this).parent('div').prop('id');
        activar(parent.toString());
    });

    
    
    $(".periodo").change(function(){  
        selectPeriod();
    });

    
    
    
  let showMoreButtons = Array.from(
    document.getElementsByClassName("show-more-button")
  );

  let handleShowMoreClick = el => {
    let colaborador = getCollaborator(el);
    let biografia = document.getElementById(colaborador);
    if(el.target.innerHTML.includes("Read")||el.target.innerHTML.includes("Hide")){
         if (biografia.classList.contains("active")) {
          el.target.innerHTML = 'Read More <img src="http://www.cimb.com.mx/img/icons/icon-cheveron-down.svg">'
        } else {
          el.target.innerHTML = 'Hide <img src="http://www.cimb.com.mx/img/icons/icon-cheveron-up.svg">'
        }
    }else{
        if (biografia.classList.contains("active")) {
          el.target.innerHTML = 'Leer más <img src="http://www.cimb.com.mx/img/icons/icon-cheveron-down.svg">'
        } else {
          el.target.innerHTML = 'Esconder <img src="http://www.cimb.com.mx/img/icons/icon-cheveron-up.svg">'
        }
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
