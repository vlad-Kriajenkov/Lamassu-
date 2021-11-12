document.getElementById('redactBtn').onclick = function() {
    if(document.getElementById('Marginalitydynamic').classList.contains('active') && document.getElementById('Marginalitystatic').classList.contains('active') ) {
        document.getElementById('Marginalitydynamic').classList.remove('active')
        document.getElementById('Marginalitystatic').classList.remove('active')
    }else
    document.getElementById('Marginalitydynamic').classList.add('active')
    document.getElementById('Marginalitystatic').classList.add('active')
  }

