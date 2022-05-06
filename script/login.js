import{navbar} from "../components/navbar.js";

let n=document.getElementById("header-container");
n.innerHTML=navbar();




const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




//actuall signUp part
document.querySelector("#signUpDetails").addEventListener("click",signUpFunction);


let details=JSON.parse(localStorage.getItem("loginDetailsLocal"))||[];

function signUpFunction(){
event.preventDefault();
let userEmail=document.getElementById("signUpEmail").value;

let userPassword=document.getElementById("signUpPassword").value;
let userName=document.getElementById("signUpName").value;

if(userName==="" || userName ===null){
   alert("Please enter your Name");
    
}
else if(userEmail===""|| userEmail===null){
alert("Please enter your email");

}
else if(userPassword==""|| userPassword===null){
 alert("Please enter your password")
}
else if(userPassword.length<=6){
  alert("enter password length grater than 4");
}

else{
	let detailInformation={
		email:userEmail,
		password:userPassword,
	 }
	 details.push(detailInformation);
	 
	 localStorage.setItem("loginDetailsLocal",JSON.stringify(details));
	 setTimeout(()=>{
		 alert("Hurray SignUp Sucessfull");
	 },2000)
	 console.log(details);
}




	
}









//Actuall login Part
document.querySelector("#loginDetails").addEventListener("click",loginFunction);

let loginDetails=JSON.parse(localStorage.getItem("loginDetailsLocal"))

console.log(loginDetails);
function loginFunction(){
	event.preventDefault();
	let email=document.getElementById("loginEmail").value;
	let password=document.getElementById("loginPassword").value;


	
	//checking value is remainging
    for(let i=0; i<loginDetails.length; i++){
		if(loginDetails[i].email===email && loginDetails[i].password===password){
			setTimeout(()=>{
				alert("hurray Login Sucessfull");
				window.location.href="index.html"
			},2000)
			break;
			
		}
		else{
			
			alert("incorrect data please fill correct data");
		}
	}


	}




