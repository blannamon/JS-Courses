let input_name = document.querySelector('form').firstElementChild;
let input_password = document.querySelector('form').lastElementChild;

input_name.onkeyup = checkName;

function checkName(){
    if(input_name.value.length > 5 && input_name.value.includes(' ')){
        input_password.disabled = false;
    }
    else {
        input_password.disabled = true;
    }
}