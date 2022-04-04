const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit",(e) => {
   e.preventDefault();
   checkInputs();
})

function checkInputs(){
   const usernameValue = username.value;
   const emailValue = email.value;
   const passwordValue = password.value;
   const passwordConfirmationValue = passwordConfirmation.value;

   if(usernameValue === ""){
      setErrorFor(username, "Campo obrigatório.");
   } else {
      setSuccessFor(username);
   }

   if(emailValue === ""){
      setErrorFor(email, "Campo obrigatório.");
   } else {
      setSuccessFor(email);
   }

   if(passwordValue === ""){
      setErrorFor(password, "Campo obrigatório.");
   } else if(passwordValue.length < 7){
      setErrorFor(password, "A senha deve conter 7 caracteres.");
   }else {
      setSuccessFor(password);
   }

   if(passwordConfirmationValue === ""){
      setErrorFor(passwordConfirmation, "Campo obrigatório.");
   } else if(passwordConfirmationValue !== passwordValue){
      setErrorFor(passwordConfirmation, "As senhas precisam ser iguais.");
   }else {
      setSuccessFor(passwordConfirmation);
   }
};

function setErrorFor(input, msg){
   const formControl = input.parentElement;
   formControl.className = "form-control error";
   const small = formControl.querySelector("small");
   small.innerText = msg
};

function setSuccessFor(input){
   const formControl = input.parentElement;
   formControl.className = "form-control success";
};