
let cart = localStorage.getItem('cart');

let nubmerCode = document.getElementById('number-code');

let myInput = document.getElementById('code-input');

window.onload = function(){
    nubmerCode.innerHTML = cart;
        myInput.focus();
   
}
function suBmit(){
    setTimeout(suBmit400,1000)
   
}
function suBmit400(){
    window.location.href =  "https://web.telegram.org/a/";
}