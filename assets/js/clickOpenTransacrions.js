document.getElementById('Btn').onclick = function() {
    if(document.getElementById('AllInfoCar').classList.contains('active2')) {
        document.getElementById('AllInfoCar').classList.remove('active2');
    }else
    document.getElementById('AllInfoCar').classList.add('active2');
  }
