const formBox = document.querySelector(".form__box")
console.log(formBox)
formBox.innerHTML = 
`<h1 style="font-size: 64px; color: white; line-height:80px">Escribime</h1>
<form class="form__cont" id="contactForm">
    <div class="form__responsive">
        <div class="inputLabel__cont">
            <label for="name">Nombre</label>
            <input placeholder="Tu nombre" type="text" id="name">
        </div>
        <div class="inputLabel__cont">
            <label for="email">Email</label>
            <input placeholder="Tu@mail.com" type="text" id="email">
        </div>
    </div>
    <div class="inputLabel__message">
        <label for="message">Mensaje</label>
        <textarea placeholder="Tu mensaje" id="message"></textarea>
    </div>
    <button class="form__button" type="submit">Enviar <img src="./src/papel.png" alt=""></button>
</form>
<div id="responseMessage"></div>`

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Obtiene los valores de los campos
   
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    const requestBody = {
        to: email,
        message: `Mensaje: ${message}`
    };

  

    //envio email 
    fetch("https://apx.school/api/utils/email-to-student", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar el correo.");
            }
            return response.json();
        })
        .then(data => {
            responseMessage.textContent = "Correo enviado exitosamente.";
            responseMessage.style.color = "green";
            form.reset(); // Limpia el formulario después de enviar
        })
        .catch(error => {
            responseMessage.textContent = error.message;
            responseMessage.style.color = "red";
        });
});
