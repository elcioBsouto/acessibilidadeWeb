const form = document.querySelector('form');
const nameInput = document.querySelector('#pergunta');
const submitBtn = document.querySelector('#enviar');

const h1 = document.querySelector('h1');
const personalGreetings = document.querySelector('.personalgreeting');

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function () {
    // store the entered name in web storage
    localStorage.setItem('pergunta', nameInput.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
})

// define the nameDisplayCheck() function
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web 
    if (localStorage.getItem('pergunta')) {
        // If it is, display personalized greeting
        let pergunta = localStorage.getItem('pergunta');
        // h1.textContent = 'Welcome' + pergunta;
        document.getElementById('pergunta').value = ''; // Limpa o campo
        personalGreetings.textContent = 'Captcha: ' + pergunta;
  
    } else {
        // if not, display generic greeting
        //   h1.textContent='Welcome to our Website'+pergunta;
        personalGreetings.textContent = ' Campo de Captcha Vazio';
    }
}
document.body.onload = nameDisplayCheck;