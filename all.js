const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const success = document.querySelector(".success");
const email = document.querySelector("span");
const input_email = document.querySelector("#email");
const error = document.querySelector(".label p")
btn.addEventListener("click", function(e){
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@.+\.com$/;
    if(input_email.value === "" || !emailPattern.test(input_email.value)){
        input_email.classList.add("error")
        input_email.classList.add("::placeholder")
        error.style.display = "block";
        input_email.value = "" ;
    }else{
        input_email.classList.remove("error")
        error.style.display = "none";
        main.style.display = "none";
        success.style.display = "flex";
        email.textContent = input_email.value;
    }
})

const s_btn = document.querySelector(".s_btn");
s_btn.addEventListener("click", function(){
    main.style.display = "flex";
    success.style.display = "none";
    input_email.value = "";
})