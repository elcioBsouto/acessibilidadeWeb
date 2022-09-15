const createheader = () => {
    let header = document.querySelector('.header');
    header.innerHTML = `    
    <header id="header">
    <nav class="container1" >
     
      <div class="menu">
        <ul class="grid">
          <li><a class="title" href="#carousel">Ir para conteudo (1)</a></li>       
          <li><a class="title" href="#services">Ir para menu (2)</a></li>
          <li><a class="title" href="#multimidia">Ir para pesquisa (3)</a></li>
          <li><a class="title" href="#contact">Ir para rodape (4)</a></li>
          
        </ul>
      </div>

      <div class="menu">
        <ul class="grid">
        
          <li><a class="title" href="acessibilidadesite.html">Acessibilidade deste Site</a></li>  
          <li><a class="title" href="mapa.html">Mapa do Site</a></li>             
          <li><a class="title" href="#altocontraste" id="altocontraste" accesskey="3" onclick="window.toggleContrast()"onkeydown="window.toggleContrast()">Alto Contraste [Alt + 3]</a></li>   
          <li><a class="title" data-font-size="0.5rem">A[ + ]</a></li>
          <li><a class="title" data-font-size="1.0rem">A[ . ]</a></li>
          <li><a class="title" data-font-size="1.5rem">A[ - ]</a></li>        

        </ul>
      </div>

      <div class="toggle icon-menu"></div>
      <div class="toggle icon-close"></div>
    </nav>

    <div class="divider-1"></div>


    <nav class="container">
      <a class="logo" href="index.html">Acessibilidade<span class="logo-color">Web.</span></a>

      <div class="menu">
        <ul class="grid">
         
          <li><a class="title" href="padroes.html">Padrões Web</a></li>
          <li><a class="title" href="tecnologiasassistivas.html">Tecnologias Assistivas</a></li>
          <li><a class="title" href="perguntasfrequentes.html">Perguntas Frequentes</a></li>
  
          <li><a class="title" href="contacto.html">Contato</a></li>       

        </ul>

       
      </div>
  

      <div class="toggle icon-menu"></div>
      <div class="toggle icon-close"></div>
    </nav>
    <div class="divider-1"></div>

    

   

  </header>
    `;
}

createheader();