/*

Javascrip js file for CA2 Software Development(order pizza site)
calculations_orders.js
Marek Augustyn
25.11.2020

*/

//Validation user name and password
function validatePassword() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Input your name!!!");
    return false;
  } else if (password.length < 7) {
    alert("Password must be 7 characters long.");
    return false;
  } else if (password.length > 7) {
    alert("Password must be at least 7 characters long.");
    return false;
  } else {
    alert("Password accepted, Thank You.");
    return true;
  }
}

//Declare variables
var pizza_prices = new Array();
pizza_prices["Large"] = 5.0;
pizza_prices["Extra_large"] = 7.0;
pizza_prices["Super_size"] = 17.0;

var discountPrice = 1.0;

//drop down selection
//validation pizza size
function getPizzaPrice() {
  var pizzaprice = 0;
  //Get a reference to the form id="pizzaform"
  var theForm = document.forms["pizzaform"];
  //Get a reference to the select id="pizza_size"
  var selectedsize = theForm.elements["pizza_size"];

  pizzaprice = pizza_prices[selectedsize.value];
  if (pizzaprice == 17.0) {
    alert(
      "Are you sure? For health and safety reason it is not recomended to eat so big pizza!!!"
    );
    $(document).ready(function () {
      $("#alarmSupersize")
        .html(
          '<p class="error">Supersize not so nice, you are hungry bastard</p>'
        )
        .show()
        .fadeOut(5000);
    });
    return pizzaprice;
  } else {
    return pizzaprice;
  }
}

//jQuerry for discount code error
//jQuerry for discount code error
/*
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
});;

*/

//validation discount
//calculation for order total including discount
function validateDiscount(quantity) {
  var discountPrice = 1;
  var pizzaquantity = document.getElementById("quantity").value;
  var orderprice = getPizzaPrice() * parseFloat(pizzaquantity);
  var theForm = document.forms["pizzaform"];
  var discount = theForm.elements["discount"].value;

  if (discount == "extracheese" || discount == "Extracheese") {
    alert("10% discount applied");
    //display the result after discount
    var divobj = document.getElementById("totalPrice");
    divobj.style.display = "block";
    orderprice = orderprice - orderprice * 0.1; //calculation discount 10%
    divobj.innerHTML =
      "Total Price for the order after discount  €" + orderprice;
  } else {
    //alert("wrong code");
    var divobj = document.getElementById("totalPrice");
    divobj.style.display = "block";
    document.getElementById("discount").value = "Discount code not valid.!!!";
    calculateTotal(quantity);
  }
} //end function validateDiscount

//validation pizza quantity
//claculation order price except discount
function calculateTotal(quantity) {
  var pizzaquantity = /^[0-9]+$/;
  if (quantity.value.match(pizzaquantity)) {
    var pizzaquantity = document.getElementById("quantity").value;
    var orderprice =
      getPizzaPrice() * parseFloat(pizzaquantity) * discountPrice;

    //display the result
    var divobj = document.getElementById("totalPrice");
    divobj.style.display = "block";
    divobj.innerHTML = "Price for the order €" + orderprice;
    alert("Number of pizza accepted");
    return true;
  } else {
    alert("Please input numeric characters only");
    document.getElementById("quantity").value = "0";
    calculateTotal(quantity);
  }
}
