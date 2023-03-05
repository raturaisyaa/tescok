var password = "grandescape"

function passcheck() {

if(document.getElementById('pass1').value != password)  { 
alert('Wrong password. Ask ra for hint.');
return false
}

if(document.getElementById('pass1').value == password) {  
alert('Correct password. Please continue.');
}
}