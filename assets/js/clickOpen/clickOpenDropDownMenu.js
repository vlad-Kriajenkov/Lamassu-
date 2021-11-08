document.getElementById('Geolocation').onclick = function() {
    if(document.getElementById('LongAndWidth').classList.contains('activeShow')) {
        document.getElementById('LongAndWidth').classList.remove('activeShow');
    }else
    document.getElementById('LongAndWidth').classList.add('activeShow');
  }
