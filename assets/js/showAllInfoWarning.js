function showAllInfoWarning() {
    var x = document.getElementById("showAllInfoWarning");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else { 
        x.style.display = "block";
        
    }
}
function showAllInfoNotification() {
    var x = document.getElementById("showAllInfoNotification");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else { 
        x.style.display = "block";
        
    }
}
function shownotification() {
    var x = document.getElementById("windowNotification");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else { 
        x.style.display = "block";
        
    }
} 

function СonditionSystemShow() {
    var x = document.getElementById("СonditionSystemShow");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else {
        x.style.display = "block";
        
    }
}

function periodComparisonShow() {
    var x = document.getElementById("periodComparisonShow");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transitionDuration = "1s";
        
    } else {
        x.style.display = "block";
        
    }
}


document.getElementById('shippingboxbtn').onclick = function() {
    if(document.getElementById('formShippin').classList.contains('activeShow')) {
        document.getElementById('formShippin').classList.remove('activeShow');
    }else
    document.getElementById('formShippin').classList.add('activeShow');
  }

