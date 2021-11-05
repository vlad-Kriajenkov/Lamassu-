/* Dropdown Filter Menu*/
$('.search__inputText').click(function () {
    $(".search__body").toggleClass('activeFilter');
});



/*Dropdown Filter Box*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle("slow");
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp("slow");
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
}); 


/*Скрытие Filter__Data подпунктов   */
$('#ThisDay').click(function () {
    $('.select__mounth').removeClass('active'); 
     $('.select__range').removeClass('active'); 
 });
 $('#Yesterday').click(function () {
    $('.select__mounth').removeClass('active'); 
     $('.select__range').removeClass('active'); 
 });
 $('#ThisWeek').click(function () {
    $('.select__mounth').removeClass('active'); 
     $('.select__range').removeClass('active'); 
 });
$('#Month').click(function () {
   $('.select__mounth').addClass('active'); 
   $('.select__range').removeClass('active');
});
$('#RangeData').click(function () {
    $('.select__mounth').removeClass('active'); 
    $('.select__range').addClass('active'); 
 });


/* Скрытие Filter__amountInCurrency подпунктов  */
$('#Exactly').click(function () {
    $('.select__volute').addClass('active'); 
    $('.select__rangeSum').removeClass('active'); 
    $('.select__more').removeClass('active'); 
    $('.select__smaller').removeClass('active');
 });
 $('#RangeSum').click(function () {
    $('.select__rangeSum').addClass('active'); 
    $('.select__volute').removeClass('active'); 
    $('.select__more').removeClass('active'); 
    $('.select__smaller').removeClass('active');
 });
 $('#More').click(function () {
    $('.select__more').addClass('active'); 
    $('.select__rangeSum').removeClass('active'); 
    $('.select__volute').removeClass('active'); 
    $('.select__smaller').removeClass('active');
 });
$('#Smaller').click(function () {
    $('.select__smaller').addClass('active'); 
    $('.select__rangeSum').removeClass('active'); 
    $('.select__volute').removeClass('active');
    $('.select__more').removeClass('active'); 
});
/*End Dropdown Menu*/


// $('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
//   msg = '<span class="msg">Hidden input value: ';
// $('.msg').html(msg + input + '</span>');
// }); 



/////
$('.selectCar').click(function () {
    // $(this).attr('tabindex', 1).focus();
    $(this).addClass('active');
    $(".dropdownСar").find('.dropdown-menuCar').slideToggle("slow");
});
$('.dropdownСar').focusout(function () {
    $(this).removeClass('active');
    // $(this).find('.dropdown-menuCar').slideUp("slow");
});
$('.dropdownСar .dropdown-menuCar li').click(function () {
    $(this).parents('.dropdownСar').find('span').text($(this).text());
    // $(this).parents('.dropdownСar').find('input').attr('value', $(this).attr('id'));
}); 
////