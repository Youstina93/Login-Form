password = document.getElementById("password");
repeatPassword = document.getElementById("repass");
submit = document.getElementsByClassName("submit");
error= document.getElementById("error");
input = document.querySelectorAll("input");

document.forms[0].onsubmit = function (e){
    let inputPass = false;
    if (repeatPassword.value === password.value){
     inputPass= true;
     
    }
    else {
         e.preventDefault();
         error.innerHTML = "Password Doesn't Mach!";
    }
}