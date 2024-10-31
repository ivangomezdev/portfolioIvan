import { addCards } from "../components/cards.js"
import { typeEffect } from "../components/effects.js";
import { getData, getImageUrl } from "./index.js";
// mi contenedor de cards
const portfolio__intro = document.querySelector(".portfolio__intro")
const portfolio__cards = document.querySelector(".portfolio__cards")
console.log(portfolio__cards)

const titleData = () => {
    getData("blog").then((data) => {
        const portfolioImage= data.items[0].fields.rocket.sys.id;
        console.log(portfolioImage)
    
        getImageUrl(portfolioImage).then((image)=>{
            
        portfolio__intro.innerHTML = `
        <h1 id="typing-effect">
            <span class="intro__hola">${data.items[0].fields.title}</span><br>
            <span id="name" class="intro__nombre"></span>
            <span class="cursor">|</span>
        </h1>
        <div class="intro__imgBox">
            <img class="img rocket-img" src="https:${image}">
           
        </div>
    `;

    const nameElement = document.getElementById("name");
    typeEffect(nameElement, data.items[0].fields.name, 100); // 100 ms entre letras

  
      })
    });
 
  
};

    titleData()

//agrego las cards desde servicios.js
addCards("trabajos", portfolio__cards)
