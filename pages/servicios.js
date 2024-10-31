import { addCards } from "../components/cards.js"
import { getData } from "./index.js";
//target a component
const services__container = document.querySelector(".services__containerFlex")
const services__cont = document.querySelector(".services__cont")

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

//agrego cards de servicios
addCards("products",services__container)