const form = document.getElementById("form");
const inputsForm = document.querySelectorAll(".inputRequired");
const msgError = document.querySelectorAll(".msgError");
const msgReturn = document.querySelector(".return");
const returnPositive = document.querySelector(".returnPositive")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
    cpfValidate();
    passwordValidate();
})

function formValidate(form){
  
}

function setError(index){
msgError[index].style.display = 'block';
msgReturn.style.display = 'block';
}

function noError(index){
    msgError[index].style.display = 'none'; 
    msgReturn.style.display = 'none'; 
}

function sucess(){
    returnPositive.style.display = 'block';
}

function nameValidate(){
    if(form[0].value.length <= 2)
    {
        setError(0); 
    }
    else  
    {
       noError(0); 
       return true;
    }
   
    
}

function emailValidate(){
   if(!emailRegex.test(form[1].value)){
    setError(1);
   }
   else{
    noError(1);
   }
   
}

function phoneValidate(){
    if(form[2].value.length < 11){
        setError(2);
    }
    else{
        noError(2); 
    }
}

function cpfValidate(){
    if(form[3].value.length < 11){
        setError(3);
    }
    else{
        noError(3); 
    }
}

function passwordValidate(){
    if(form[4].value.length < 6){
        setError(4);
    }
    else{
        noError(4); 
    }
   
}

