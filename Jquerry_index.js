/*

Jquery js file for CA2 Software Development(order pizza site)
Jquerry_index.js
Marek Augustyn
25.11.2020

*/



//jQuerry for discount code error

$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#discount").val();
        if(regex.test(currentValue) == false){
            $("#alarm_discount").html('<p class="error">Discount code Not valid!</p>').show().fadeOut(5000);
			
            // Preventing form submission
            event.preventDefault();
        }
    });
});


