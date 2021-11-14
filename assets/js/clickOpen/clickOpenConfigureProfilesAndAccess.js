document.getElementById('Btn').onclick = function() {
    if(document.getElementById('AllInfoConfigure').classList.contains('active2')) {
        document.getElementById('AllInfoConfigure').classList.remove('active2');
    }else
    document.getElementById('AllInfoConfigure').classList.add('active2');
  }
