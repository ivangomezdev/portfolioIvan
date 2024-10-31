const footerCont = document.querySelector(".footer__template")


footerCont.innerHTML = `
<img class="footer__logo" src="../src/logo.png" alt="logo" />

<div class="footer__link">
<a href="/" ><img  src="./src/home.png" />  Home</a>
<a href="/servicios.html"> <img  src="./src/user.png" /> Servicios</a>
<a href="/contacto.html" ><img  src="./src/phone.png" />  Contacto </a>
 </div>
 
 <div class="footer__icons"> 
  <a href="https://www.linkedin.com/in/ivan-gomez-ab957021a/">
  <img class="icons" src="./src/linkedin.png" />
  </a>
  <a href="https://github.com/ivangomezdev">
   
 <img class="icons" src="./src/github.png" />
 </a>
  <img class="icons" src="./src/twitter.png" />
  </div>

<p>©2022 - Estudiante en: https://apx.school</p>
`

