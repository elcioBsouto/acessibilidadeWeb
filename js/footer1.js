const createFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML = `   
     <footer class="section">

    <div class="container grid">
      <div class="brand">
        <a class="logo logo-alt" href="#carousel">Acessibilidade<span class="logo-color">Web.</span></a>
        <p>Site Construido usando Acessibilidade.</p>
        <p>Todos os direitos reservados</p>
      </div>
      <div class="social">
        <a href="https://www.instagram.com" target="_blank"><i class="icon-instagram"></i></a>
        <a href="https://www.facebook.com" target="_blank"><i class="icon-facebook"></i></a>
        <a href="https://www.youtube.com" target="_blank"><i class="icon-youtube"></i></a>
      </div>
    </div>
  </footer>

     `;
}

createFooter();