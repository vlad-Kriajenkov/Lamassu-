$('#btn2').click(function () {
    let valueInputFulfillment = $('#FulfillmentEmulation').val();
    let valueInputWarnings = $('#WarningsEmulation').val();
    var visibilityBody = $('.cashOutBody');
    var visibilityBorder = $('.cashOutBorder');
    var Interest = $(".cashOutText");
    if (valueInputFulfillment < 50) {
        Interest.css({
            "top" : "-18px",
            "color": "black",
            "left": "33px"
        });
    }else if (valueInputFulfillment > 50) {
        Interest.css({
            "top" : "0px",
            "color": "white",
            "left": "33px"
        });
    }    
    
    if (valueInputFulfillment > valueInputWarnings) {
        if (valueInputFulfillment == 0 ) {
            visibilityBody.css('height', "0px");
            visibilityBody.css('margin-top', '100px');
            Interest.text('0%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 5){
            visibilityBody.css('height', "5px");
            visibilityBody.css('margin-top', '95px');
            Interest.text('5%');
            visibilityBody.css('background-color', '#1b2559');
        } else if( valueInputFulfillment == 10 ){
            visibilityBody.css('height', "10px");
            visibilityBody.css('margin-top', '90px');
            Interest.text('10%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 15 ){
            visibilityBody.css('height', "15px");
            visibilityBody.css('margin-top', '85px');
            Interest.text('15%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 20 ){
            visibilityBody.css('height', "20px");
            visibilityBody.css('margin-top', '80px');
            Interest.text('20%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 25 ){
            visibilityBody.css('height', "25px");
            visibilityBody.css('margin-top', '73px');
            Interest.text('25%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 30 ){
            visibilityBody.css('height', "30px");
            visibilityBody.css('margin-top', '75px');
            Interest.text('30%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 35 ){
            visibilityBody.css('height', "35px");
            visibilityBody.css('margin-top', '65px');
            Interest.text('35%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 40 ){
            visibilityBody.css('height', "40px");
            visibilityBody.css('margin-top', '60px');
            Interest.text('40%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 45 ){
            visibilityBody.css('height', "45px");
            visibilityBody.css('margin-top', '55px');
            Interest.text('45%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 50 ){
            visibilityBody.css('height', "50px");
            visibilityBody.css('margin-top', '50px');
            Interest.text('50%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 55 ){
            visibilityBody.css('height', "55px");
            visibilityBody.css('margin-top', '45px');
            Interest.text('55%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 60 ){
            visibilityBody.css('height', "60px");
            visibilityBody.css('margin-top', '40px');
            Interest.text('60%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 65 ){
            visibilityBody.css('height', "65px");
            visibilityBody.css('margin-top', '35px');
            Interest.text('65%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 70){
            visibilityBody.css('height', "70px");
            visibilityBody.css('margin-top', '30px');
            Interest.text('70%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 75){
            visibilityBody.css('height', "75px");
            visibilityBody.css('margin-top', '25px');
            Interest.text('75%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 80 ){
            visibilityBody.css('height', "80px");
            visibilityBody.css('margin-top', '20px');
            Interest.text('80%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 85 ){
            visibilityBody.css('height', "85px");
            visibilityBody.css('margin-top', '15px');
            Interest.text('85%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 90 ){
            visibilityBody.css('height', "90px");
            visibilityBody.css('margin-top', '10px');
            Interest.text('90%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 95 ){
            visibilityBody.css('height', "95px");
            visibilityBody.css('margin-top', '5px');
            Interest.text('95%');
            visibilityBody.css('background-color', '#1b2559');
        }else if( valueInputFulfillment == 100 ){
            visibilityBody.css('margin-top', '0px');
            Interest.text('100%');
            visibilityBody.css('background-color', '#1b2559');
        }
    
    }else{
        if (valueInputFulfillment == 0 ) {
            visibilityBody.css('height', "0px");
            visibilityBody.css('margin-top', '100px');
            Interest.text('0%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 5){
            visibilityBody.css('height', "5px");
            visibilityBody.css('margin-top', '95px');
            Interest.text('5%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        } else if( valueInputFulfillment == 10 ){
            visibilityBody.css('height', "10px");
            visibilityBody.css('margin-top', '90px');
            Interest.text('10%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 15 ){
            visibilityBody.css('height', "15px");
            visibilityBody.css('margin-top', '85px');
            Interest.text('15%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 20 ){
            visibilityBody.css('height', "20px");
            visibilityBody.css('margin-top', '80px');
            Interest.text('20%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 25 ){
            visibilityBody.css('height', "25px");
            visibilityBody.css('margin-top', '73px');
            Interest.text('25%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 30 ){
            visibilityBody.css('height', "30px");
            visibilityBody.css('margin-top', '75px');
            Interest.text('30%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 35 ){
            visibilityBody.css('height', "35px");
            visibilityBody.css('margin-top', '65px');
            Interest.text('35%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 40 ){
            visibilityBody.css('height', "40px");
            visibilityBody.css('margin-top', '60px');
            Interest.text('40%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 45 ){
            visibilityBody.css('height', "45px");
            visibilityBody.css('margin-top', '55px');
            Interest.text('45%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 50 ){
            visibilityBody.css('height', "50px");
            visibilityBody.css('margin-top', '50px');
            Interest.text('50%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 55 ){
            visibilityBody.css('height', "55px");
            visibilityBody.css('margin-top', '45px');
            Interest.text('55%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 60 ){
            visibilityBody.css('height', "60px");
            visibilityBody.css('margin-top', '40px');
            Interest.text('60%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 65 ){
            visibilityBody.css('height', "65px");
            visibilityBody.css('margin-top', '35px');
            Interest.text('65%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 70){
            visibilityBody.css('height', "70px");
            visibilityBody.css('margin-top', '30px');
            Interest.text('70%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 75){
            visibilityBody.css('height', "75px");
            visibilityBody.css('margin-top', '25px');
            Interest.text('75%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 80 ){
            visibilityBody.css('height', "80px");
            visibilityBody.css('margin-top', '20px');
            Interest.text('80%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 85 ){
            visibilityBody.css('height', "85px");
            visibilityBody.css('margin-top', '15px');
            Interest.text('85%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 90 ){
            visibilityBody.css('height', "90px");
            visibilityBody.css('margin-top', '10px');
            Interest.text('90%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 95 ){
            visibilityBody.css('height', "95px");
            visibilityBody.css('margin-top', '5px');
            Interest.text('95%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }else if( valueInputFulfillment == 100 ){
            visibilityBody.css('margin-top', '0px');
            Interest.text('100%');
            visibilityBody.css('background-color', 'red');
            visibilityBorder.css('border','2px solid red');
        }
    }
    console.log(valueInputFulfillment);
});
  