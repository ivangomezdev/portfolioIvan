const navTarget = document.querySelector(".nav__template")

navTarget.innerHTML =  `
      <a href="/"> 
        <img class="header__logo" src="../src/logo.png" alt="logo" />
        </a>
          <button class="hamburger" id="hamburgerButton">☰</button>
        <div class="menu" id="menu">
            <a href="/portfolio.html" class="nav__links">Portfolio</a>
            <a href="/servicios.html" class="nav__links">Servicios</a>
            <a href="/contacto.html" class="nav__links">Contacto</a>
            </div> 
           `

           document.addEventListener("DOMContentLoaded", () => {
            const hamburgerButton = document.getElementById("hamburgerButton");
            const menu = document.getElementById("menu");

            hamburgerButton.addEventListener("click", () => {
                menu.classList.toggle("visible"); // Alterna la clase 'visible'
            });
        });