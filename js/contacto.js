const form = document.querySelector('form');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const mensagemInput = document.querySelector('#mensagem');
const submitBtn = document.querySelector('#submit');

const h1 = document.querySelector('h1');
const personalGreetings = document.querySelector('.personal');

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function () {
    // store the entered name in web storage
    localStorage.setItem('nome', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('assunto', assuntoInput.value);
    localStorage.setItem('mensagem', mensagemInput.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
})

// define the nameDisplayCheck() function
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web 
    if ((localStorage.getItem('nome')) || (localStorage.getItem('email')) ||
        (localStorage.getItem('assunto')) || (localStorage.getItem('mensagem'))) {
        // If it is, display personalized greeting
        let nome = localStorage.getItem('nome');
        let email = localStorage.getItem('email');
        let assunto = localStorage.getItem('assunto');
        let mensagem = localStorage.getItem('mensagem');
        // h1.textContent = 'Welcome' + pergunta;
        document.getElementById('nomme').value = ''; // Limpa o campo
        document.getElementById('email').value = ''; // Limpa o campo
        document.getElementById('assunto').value = ''; // Limpa o campo
        document.getElementById('mensagem').value = ''; // Limpa o campo
        personalGreetings.textContent = 'Muito Obrigado : ' + nome + ' por se interesar sobre um assunto tao essencial a sociendade,assim que tiver uma opotunidade,entrarei e contacto ';
    } else {
        // if not, display generic greeting
        //   h1.textContent='Welcome to our Website'+pergunta;
        personalGreetings.textContent = ' Campo de Captcha Vazio';
    }
}
document.body.onload = nameDisplayCheck;