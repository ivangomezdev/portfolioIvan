import { getData,getImageUrl } from "../pages/index.js";




export const addCards = (type,contents) => {
//obtenemos la data del fetch (products) y creamos una card nueva para cada producto
getData(type).then(data => {
    

  
    
      data.items.map((i)=>{
        const images = i.fields.image.sys.id
      
        //agrego imagenes iteradas (uso dentro el getImage no por fuera ya que debo irterarlo)
        
        getImageUrl(images).then((imgUrl)=>{

        const data = i.fields
        const createCard = document.createElement("div")
            
        createCard.innerHTML = `
           
            <div class="services__cards">
                <div>
                     <img class="services__img" src="https:${imgUrl}" alt="Imagen">
                    <h2>${data.title}</h2>
                    <p>${data.description.content[0].content[0].value}</p>
                </div>
    
              
            </div>
        `
        contents.append(createCard)
  })
   


   }); // Maneja los datos aquí
}).catch(error => {
    console.error('Error al obtener datos:', error);
});

}


