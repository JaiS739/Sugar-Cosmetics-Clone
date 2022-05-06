import{navbar} from "../components/navbar.js";

let n=document.getElementById("header-container");
n.innerHTML=navbar();





document.querySelector("#form1").addEventListener("submit",shipfun);

var addressArr = JSON.parse(localStorage.getItem("shippingaddress")) || [];

function shipfun(){
    event.preventDefault();
   
    var objAdress = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        address : document.querySelector("#address").value,
        city : document.querySelector("#city").value,
        state : document.querySelector("#state").value,
        zipcode : document.querySelector("#zipcode").value,
        country : document.querySelector("#country").value,
        phoneNumber : document.querySelector("#phoneNumber").value,
    }

    addressArr.push(objAdress);
   
    localStorage.setItem("shippingaddress",JSON.stringify(addressArr));

    alert("Thanks For filling Shipping Address. Please choose payment method");
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#address").value="";
    document.querySelector("#city").value="";
    document.querySelector("#state").value="";
    document.querySelector("#zipcode").value="";
    document.querySelector("#country").value="";
    document.querySelector("#phoneNumber").value="";

}

document.querySelector("#form2").addEventListener("submit",orderfun);

function orderfun(){
    event.preventDefault();
 //    alert("Order has been placed Successfully.");
 //    document.querySelector("#cardnum").value="";
 //    document.querySelector("#cvv").value="";
 //    document.querySelector("#date").value="";
 //    document.querySelector("#name").value="";
 window.location.href="recipt.html";
}