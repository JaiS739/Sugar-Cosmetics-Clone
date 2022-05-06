
import{footer} from "../componentsfooter/footer.js";

let n=document.getElementById("footer");
n.innerHTML=footer();

var div1 = document.createElement("div")
div1.setAttribute("id","div1");
var div1img = document.createElement("img");
div1img.setAttribute("src","https://in.sugarcosmetics.com/Footer_sugar_icon.png")
div1.append(div1img)

var div2 = document.createElement("div")
div2.setAttribute("id","div2");
var div2img1 = document.createElement("img")
div2img1.setAttribute("src","https://in.sugarcosmetics.com/desc-images/facebook.svg");

var div2img2 = document.createElement("img")
div2img2.setAttribute("src","data:image/png;base64,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");

var div2img3 = document.createElement("img")
div2img3.setAttribute("src","https://in.sugarcosmetics.com/desc-images/Instagram.svg");

var div2img4 = document.createElement("img")
div2img4.setAttribute("src","https://in.sugarcosmetics.com/desc-images/Pinterest.svg");

var div2img5 = document.createElement("img")
div2img5.setAttribute("src","https://in.sugarcosmetics.com/desc-images/Tumblr.svg");

var div2img6 = document.createElement("img")
div2img6.setAttribute("src","https://in.sugarcosmetics.com/desc-images/Youtube.svg");

var div2img7 = document.createElement("img")
div2img7.setAttribute("src","https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-twitter-1.png");

div2.append(div2img1,div2img2,div2img3,div2img4,div2img5,div2img6,div2img7)

var div3 = document.createElement("div")
div3.setAttribute("id","div3")

var div3text1 = document.createElement("div")
div3text1.innerText="SUBSCRIBE TO OUR NEWSLETTER"
var div3text2 = document.createElement("div")
div3text2.innerText="GET THE NEW SUGAR APP TODAY."
div3.append(div3text1,div3text2)

var div4 = document.createElement("div");
div4.setAttribute("id","div4")
var div4input = document.createElement("input")
div4input.setAttribute("placeholder","Your email address")

var div4btn = document.createElement("button")
div4btn.innerText="SIGN UP"

var div4text = document.createElement("div")
div4text.innerText="Tap into a better shopping experience."

var div4img1 = document.createElement("img")
div4img1.setAttribute("src","https://in.sugarcosmetics.com/playstore.png")

var div4img2 = document.createElement("img");
div4img2.setAttribute("src","https://in.sugarcosmetics.com/apple-store.png")

div4.append(div4input,div4btn,div4text,div4img1,div4img2)

var hr = document.createElement("hr")
hr.setAttribute("id","hr")

var div5 = document.createElement("div")
div5.innerText="INFORMATION"
div5.setAttribute("id","div5")

var div6 = document.createElement("div");
div6.setAttribute("id","div6")

var div61 = document.createElement("div");
div61.innerText="Contact Us"
var div62 = document.createElement("div");
div62.innerText="Terms & Conditions"
var div63 = document.createElement("div");
div63.innerText="Returns"
var div64 = document.createElement("div");
div64.innerText="FAQs"
var div65 = document.createElement("div");
div65.innerText="About Us"

div6.append(div61,div62,div63,div64,div65)

var div7 = document.createElement("div")
div7.innerText="GET IN TOUCH"
div7.setAttribute("id","div7")


var div8 = document.createElement("div")
 div8.setAttribute("id","div8")

 var parentdiv81 = document.createElement("div")
 parentdiv81.setAttribute("id","parentdiv81")
 
 var div81img = document.createElement("img")
 div81img.setAttribute("src","https://in.sugarcosmetics.com/desc-images/phone_android_white.svg")

 var div81 = document.createElement("div")
 div81.innerHTML="Call us at <p id=cate1>022-2847-5555</p> <p id=cate2>Monday to Friday : 9 AM to 7 PM</p>"

 parentdiv81.append(div81img,div81)
  
 var div82 = document.createElement("div");
 div82.innerHTML="Support <p id=cate1n>hello@sugarcosmetics.com</p>"

 var div83 = document.createElement("div");
 div83.innerHTML="WORK WITH US <p id=cate1>careers@sugarcosmetics.com</p>"
 var div84 = document.createElement("div");
 div84.innerHTML="PRESS & MEDIA <p id=cate1>pr@sugarcosmetics.com</p>"
 var div85 = document.createElement("div");
 div85.innerHTML="INFLUENCER COLLAB <p id=cate1>JOIN US</p>"


div8.append(parentdiv81,div82,div83,div84,div85)

var hr2 = document.createElement("hr")
hr2.setAttribute("id","hr2")

var div9 = document.createElement("div")
div9.innerText="Copyright © 2022 SUGAR Cosmetics. All rights reserved."
div9.setAttribute("id","div9")
document.getElementById("footer").append(div1,div2,div3,div4,hr,div5,div6,div7,div8,hr2,div9)
