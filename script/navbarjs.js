
import{navbar} from "../components/navbar.js";

let n=document.getElementById("header-container");
n.innerHTML=navbar();

var cart = document.querySelector("#cart");
 cart.addEventListener('click', function(){
   window.location.href ="cart.html"
 })
  var wishlist = document.querySelector("#wishlist");
 wishlist.addEventListener('click', function(){
   window.location.href ="wishlist.html"
 })
  var discount = document.querySelector("#discount");
 discount.addEventListener('click', function(){
   window.location.href ="offer.html"
 })

    var logo = document.querySelector(".logo");
 logo.addEventListener('click', function(){
   window.location.href ="index.html"
 })

 var slideIndex = 0;
 showSlides();

 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }

 document.querySelectorAll(".nav_link").addEventListener("mouseover",function(){
  document.querySelectorAll(".dropdown-makeup").style.display="block"
})

document.querySelectorAll(".nav_link").addEventListener("mouseleave",function(){
  document.querySelectorAll(".dropdown-makeup").style.display="none"
})





document.querySelector("#lips").addEventListener("click",()=>{
window.location.href="lips.html"
})
document.querySelector("#face").addEventListener("click",()=>{
window.location.href="highliters.html"
})
document.querySelector("#kajal").addEventListener("click",()=>{
window.location.href="kajal.html"
})
document.querySelector("#facebrushes").addEventListener("click",()=>{
window.location.href="brush.html"
})
document.querySelector("#eyebrushes").addEventListener("click",()=>{
window.location.href="brush.html"
})
document.querySelector("#featured").addEventListener("click",()=>{
window.location.href="blog.html"
})
document.querySelector("#makeupblog").addEventListener("click",()=>{
window.location.href="blogMakeup.html"
})
document.querySelector("#skincareblog").addEventListener("click",()=>{
window.location.href="blog_Skin.html"
})


document.querySelector("#MASKS").addEventListener("click",()=>{
window.location.href="mask.html"
})

document.querySelector("#MOISTURIZERS").addEventListener("click",()=>{
window.location.href="moisturizers.html"
})

document.querySelector("#SETTINGMISTS").addEventListener("click",()=>{
window.location.href="settingmist.html"
})

document.querySelector("#SHEETMASKCOMBO").addEventListener("click",()=>{
window.location.href="sheetmaskcombo.html"
})

document.querySelector("#COFFEECULTURERANGE").addEventListener("click",()=>{
window.location.href="coffeeculturerange.html"
})

document.querySelector("#BESTSELLERS").addEventListener("click",()=>{
window.location.href="bestseller1.html"
})

document.querySelector("#MAKEUPKITS").addEventListener("click",()=>{
window.location.href="makeupkits1.html"
})

document.querySelector("#SUGARMERCHSTATION").addEventListener("click",()=>{
window.location.href="sugermerch.html"
})