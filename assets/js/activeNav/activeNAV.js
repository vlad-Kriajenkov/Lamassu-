try{
    var el=document.getElementById('logoAndNav').getElementsByClassName('nav__link');
    var url=document.location.href;
    for(var i=0;i<el.length; i++){
    if (url==el[i].href){
    el[i].className += ' active';
        };
    };
    }catch(e){}