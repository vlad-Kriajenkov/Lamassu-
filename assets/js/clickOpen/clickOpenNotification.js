
document.getElementById('shippingboxbtn').onclick = function() {
    if(document.getElementById('formShippin').classList.contains('activeShow')) {
        document.getElementById('formShippin').classList.remove('activeShow');
    }else
    document.getElementById('formShippin').classList.add('activeShow');
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