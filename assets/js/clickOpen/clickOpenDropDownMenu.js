/* Кнопки изменение данных */
document.getElementById('Geolocation').onclick = function() {
    if(document.getElementById('LongAndWidth').classList.contains('activeShow')) {
        document.getElementById('LongAndWidth').classList.remove('activeShow');
    }else
    document.getElementById('LongAndWidth').classList.add('activeShow');
  }

  document.getElementById('moreInfo').onclick = function() {
    if(document.getElementById('infoCar').classList.contains('activeShowInfoCar')) {
        document.getElementById('infoCar').classList.remove('activeShowInfoCar');
    }else
    document.getElementById('infoCar').classList.add('activeShowInfoCar');
  }

document.getElementById('NameAndAddress').onclick = function() {
  if(document.getElementById('NameAndAddressbox').classList.contains('activeShowNameAndAddress')) {
      document.getElementById('NameAndAddressbox').classList.remove('activeShowNameAndAddress');
  }else
  document.getElementById('NameAndAddressbox').classList.add('activeShowNameAndAddress');
}
/* */

/* кнопки показа информации */
  document.getElementById('APICISBtn').onclick = function() {
    if(document.getElementById('APICISInput').classList.contains('activeShowApi')) {
        document.getElementById('APICISInput').classList.remove('activeShowApi');
    }else
    document.getElementById('APICISInput').classList.add('activeShowApi');
  }

  document.getElementById('SpecificationBtn').onclick = function() {
    if(document.getElementById('specificationInput').classList.contains('activeShowSpecification')) {
        document.getElementById('specificationInput').classList.remove('activeShowSpecification');
    }else
    document.getElementById('specificationInput').classList.add('activeShowSpecification');
  }
  document.getElementById('InfoCarMorebtn').onclick = function() {
    if(document.getElementById('InfoCarMoreVisibility').classList.contains('activeShowCarMore')) {
        document.getElementById('InfoCarMoreVisibility').classList.remove('activeShowCarMore');
    }else
    document.getElementById('InfoCarMoreVisibility').classList.add('activeShowCarMore');
  }
/* */



