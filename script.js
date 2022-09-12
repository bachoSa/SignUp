var form = document.getElementById('form');
var username = document.getElementById('Username');
var email = document.getElementById('Email');
var password = document.getElementById('Password');
var password2 = document.getElementById('Password2');


//error
function showError(input, message){
    var formControl= input.parentElement;
    formControl.className='form-control error';
    var small=formControl.querySelector('small');
    small.innerText= message;
}

//success
function showSuccess(input){
    var formControl= input.parentElement;
    formControl.className='form-control success';
}

//Email validation
function checkEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) showSuccess(input);
    else showError(input,'Email is not valid');
}


//Are fields full

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value== '') {showError(input, input.id + ' is required') ;}
        else showSuccess(input);
    })

}

// Checking length
function checkLength(input,min,max){
    if(input.value.length < min) showError(input,input.id + ' must be at least '+ min +' characters');
    else  if(input.value.length > max)  showError(input,input.id + ' must be less than '+ max+ ' characters')

    else showSuccess(input);
}


// Do passwords match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value) showError(input2,'Passwords do not match')
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username, email , password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25)
    checkEmail(email);
    checkPasswordMatch(password,password2);  
  
});
