let loginBox= document.getElementById("login-form");
let regBox= document.getElementById("register-form");

let toggleBtn= document.getElementById("toggle-button");
let toggleText= document.getElementById("toggle-text");

let isloginpage = true;

toggleBtn.addEventListener("click",() =>{


    if(isloginpage){

        loginBox.style.display="block";
        toggleText.innerHTML="Don,t have an account?"
        toggleBtn.innerHTML="Register";
        regBox.style.display="none";
        isloginpage= false;

    }else{
        regBox.style.display="block";
        toggleText.innerHTML="Allrady have an account?"
        toggleBtn.innerHTML="Login";
        loginBox.style.display="none";
        isloginpage= true;
    }

});
