let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function myfun() {
    var a = document.get.ElementById("mobilenumber").value; 
    if(a == ""){
     document.getElementById("meassages").innerHTML="** please Enter Mobile Number";
     return false;
    }
    if(a.length < 10){
     document.getElementById("meassages").innerHTML="** please Enter valid Mobile Number";
     return false;
    }
    if(a.length >10){
     document.getElementById("meassages").innerHTML="** please Enter valid Mobile Number";
     return false;
    }
    if ((charAt(0) != 9) && (charAt(0) != 8) && (charAt(0) != 7)) {
     document.getElementById("meassages").innerHTML="** please Enter valid Mobile Number";
     return false;
    }
    return true;
 }