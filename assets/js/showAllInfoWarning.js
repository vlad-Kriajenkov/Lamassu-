/* Оповещания(0) */
function showAllInfoWarning() {
    var x = document.getElementById("showAllInfoWarning");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else { 
        x.style.display = "block";
        
    }
}
/*End */
/* Состояние системы */
function СonditionSystemShow() {
    var x = document.getElementById("СonditionSystemShow");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else {
        x.style.display = "block";
        
    }
}
/*End */

/* Статистика не рабочего стостояния Машины за «Период» Страница Аналитика */
function periodComparisonShow() {
    var x = document.getElementById("periodComparisonShow");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else {
        x.style.display = "block";
        
    }
}
/*End */






/* клик по колокольчику в шапке */

/*End */
/* */
document.getElementById('shippingboxbtn').onclick = function() {
    if(document.getElementById('formShippin').classList.contains('activeShow')) {
        document.getElementById('formShippin').classList.remove('activeShow');
    }else
    document.getElementById('formShippin').classList.add('activeShow');
  }

