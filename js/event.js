

  var htmlElem = document.querySelector('body');



  function setStyles() {
   
    const currentSize = localStorage.getItem('fontSize');
    // var currentImage = localStorage.getItem('image');
    htmlElem.style.fontSize =currentSize;
    // imgElem.setAttribute('src', currentImage);
  }

  setStyles();