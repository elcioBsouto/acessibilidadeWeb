
var imageForm = document.getElementById('image');
const btn = document.getElementById("escolhaImagem")
const texto = document.getElementById("saida")



if ((!localStorage.getItem('image'))) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {

  localStorage.setItem('image', document.getElementById('image').value);
  setStyles();
}



function setStyles() {

  var currentImage = localStorage.getItem('image');

  document.getElementById('image').value = currentImage;


  imgElem.setAttribute('src', currentImage);

}


imageForm.onchange = populateStorage;


//actualizar imagem dinamicamente
/* imageForm.onclick = (event) => {
  var currentImage = localStorage.getItem('image');
  document.getElementById('image').value = currentImage;
  imgElem.setAttribute('src', currentImage);


}; */

btn.onclick = function () {
  var value = imageForm.value
  var currentImage = localStorage.getItem('image');
  if (value == "imagens/deuteranope.PNG") {
    imgElem.setAttribute('src', currentImage);
  }
  else if (value == "imagens/protanopia.PNG") {
    imgElem.setAttribute('src', currentImage);
  }else if (value == "imagens/tritanope.PNG") {
    imgElem.setAttribute('src', currentImage);
  }

};