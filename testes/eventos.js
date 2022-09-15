const htmlElem = document.querySelector('html');
const button = document.querySelector('input');

const sizeForm = document.getElementById('fontSize');

if(!localStorage.getItem('fontSize')) {
  populateStorage();
} else {
  setStyles();
}


function setStyles(){
  const currentSize = localStorage.getItem('fontSize');
  document.getElementById('fontSize').value=currentSize;

  htmlElem.style.fontSize =currentSize;
}

function populateStorage(){
  localStorage.setItem('fontSize',document.getElementById('fontSize').value);

  setStyles();
  
}





sizeForm.onchange=populateStorage; 