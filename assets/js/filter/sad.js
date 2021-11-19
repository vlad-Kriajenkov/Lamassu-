

/*Configure-Notifications filter */
$(document).ready(function() {
    $('.ConfigureNotificationsName').select2({
        width: "330px",
        placeholder: 'Выберите сотрудника для уведомлений'
    });
});

$(document).ready(function() {
    $('.ConfigureNotificationsCar').select2({
        width: "330px",
        placeholder: 'Назначить сотруднику мишину для контроля'
    }); 
});

$(document).ready(function() {
    $('.ConfigureNotificationsCity').select2({
        width: "330px",
        placeholder: 'Назначить сотруднику мишины по городу'
    });
}); 

/*Configure-Notifications filter */

$(document).ready(function() {
    $('.filterCar').select2({
        width: "200px",
        
    }); 
});

$(document).ready(function() {
    $('.filterCarOrenge').select2({
        width: "180px",
        
    }); 
});

$(document).ready(function() {
    $('.filterCarOrengeLong').select2({
        width: "100%",
        
    }); 
});