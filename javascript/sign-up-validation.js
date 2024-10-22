const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const correctness = document.getElementById('correctness');
const correctnessPass1 = document.getElementById('password1-correctness');
const correctnessPass2 = document.getElementById('password2-correctness');

let isValid = false;
let passwordMatch = false;

function formValidation(){
    console.log("fv");
    isValid = form.checkValidity();
    if(password1El.value === password2El.value){
        passwordMatch = true;
        correctnessPass1.style.backgroundColor =  rgb(103, 236, 159);
        correctnessPass2.style.backgroundColor =  rgb(103, 236, 159);
    }
    else{
        passwordMatch = false;
        correctnessPass1.style.backgroundColor =  rgb(250, 161, 139); 
        correctnessPass2.style.backgroundColor =  rgb(250, 161, 139); 
        return;
    }
}

// store data for send to server 
function storeFormData(){
    // console.log("hi");
    const user={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
    };
    console.log(user);
}

// process form data 
function processFormData(e){
    e.preventDefault();  //evoid submiting form
    formValidation();
    if(isValid && passwordMatch){
        storeFormData();
    }
}

//submit event listener
form.addEventListener('submit', processFormData);



