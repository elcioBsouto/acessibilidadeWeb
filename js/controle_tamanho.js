/* const buttons = document.querySelectorAll('a');

for (let button of buttons) {
  
  button.addEventListener('click', function (event) {
    document.body.style.setProperty('--body-font-size', this.dataset.fontSize);
  });
}

function setFontSize(value) {
  document.querySelector("body").style.fontSize = value;
}

if(localStorage.getItem('fontSize')) {
  var storedSize = localStorage.getItem('fontSize');
  setFontSize(storedSize);
} */

var htmlElem = document.querySelector('body');
var pElem = document.querySelector('p');
var inputElem = document.querySelector('input');
var labelElem = document.querySelector('label');
var imgElem = document.querySelector('img');


const buttons = document.querySelectorAll('a');
var Fontsize = document.getElementById('fontSize');
var imageForm = document.getElementById('image');


if(!localStorage.getItem('fontSize') ) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() { 
  localStorage.setItem('fontSize',document.getElementById('fontSize').value);
 
  setStyles();
}



function setStyles() {  
  const currentSize = localStorage.getItem('fontSize');  
 
  document.getElementById('fontSize').value=currentSize;  


  htmlElem.style.fontSize =currentSize;

  // labelElem.style.fontSize=currentSize;
}

Fontsize.onchange=populateStorage;



