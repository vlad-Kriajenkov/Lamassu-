document.getElementById('Geolocation').onclick = function() {
    if(document.getElementById('LongAndWidth').classList.contains('activeShow')) {
        document.getElementById('LongAndWidth').classList.remove('activeShow');
    }else
    document.getElementById('LongAndWidth').classList.add('activeShow');
  }

  document.getElementById('APICISBtn').onclick = function() {
    if(document.getElementById('APICISInput').classList.contains('activeShow')) {
        document.getElementById('APICISInput').classList.remove('activeShow');
    }else
    document.getElementById('APICISInput').classList.add('activeShow');
  }

  document.getElementById('SpecificationBtn').onclick = function() {
    if(document.getElementById('specificationInput').classList.contains('activeShowSpecification')) {
        document.getElementById('specificationInput').classList.remove('activeShowSpecification');
    }else
    document.getElementById('specificationInput').classList.add('activeShowSpecification');
  }






