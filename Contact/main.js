var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-email');
var inputMsg = document.getElementById('input-msg');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;

function checkInput() {
    if (inputName.value.trim() !== ""&& regEx.test(inputMail.value) && inputMsg.value.trim() !== "") {
        button.style.backgroundColor = '#9B3B91';
    }
    else{
        button.style.backgroundColor = '#979695';
    }
}