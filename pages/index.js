import { typeEffect,handleScroll } from "../components/effects.js";
const introBox = document.querySelector('.intro__box');
const aboutMeBox = document.querySelector(".aboutMe__box");



export const getData = (type) => {
    return fetch(`https://cdn.contentful.com/spaces/m1cppdxq6ns4/environments/master/entries?content_type=${type}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 8XoO43KgBHfohr6pkSDNQuaDGgr-EnzzFtqEPvJiyf4`
        }

    })
        .then(response => response.json())
        .then(data => data
        )
        .catch(error => console.error('Error:', error));

}

export const getImageUrl = (assetId) => {
    return fetch(`https://cdn.contentful.com/spaces/m1cppdxq6ns4/environments/master/assets/${assetId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 8XoO43KgBHfohr6pkSDNQuaDGgr-EnzzFtqEPvJiyf4`
        }
    })
        .then(response => response.json())
        .then(asset => asset.fields.file.url) // Obtiene la URL del archivo de imagen
        .catch(error => console.error('Error al obtener la imagen:', error));
};


const titleData = () => {
    getData("blog").then((data) => {
        const rocketImgId = data.items[1].fields.rocket.sys.id;
        const ellipseImgId = data.items[1].fields.downRocket.sys.id;
        const yoImgId = data.items[1].fields.yo.sys.id;
        


        // Obtengo las URLs de mis imágenes
        Promise.all([getImageUrl(rocketImgId), getImageUrl(ellipseImgId), getImageUrl(yoImgId)]).then((urls) => {
            const [rocketImageUrl, ellipseImageUrl, yoImgId] = urls;

            // Muestra los datos en la pantalla
            introBox.innerHTML = `
                <h1 id="typing-effect">
                    <span class="intro__hola">${data.items[1].fields.title}</span><br>
                    <span id="name" class="intro__nombre"></span>
                    <span class="cursor">|</span>
                </h1>
                <div class="intro__imgBox">
                    <img class="img rocket-img" src="https:${rocketImageUrl}" alt="Imagen Rocket">
                    <img style="margin-top: 80px;" src="https:${ellipseImageUrl}" alt="Imagen Ellipse">
                </div>
            `;

            const nameElement = document.getElementById("name");
            typeEffect(nameElement, data.items[1].fields.name, 100); // 100 ms entre letras

            aboutMeBox.innerHTML = `
                <div class="aboutMe__text">
                    <h1>Sobre mí</h1>
                    <p>Soy un desarrollador web.
                        Me apasiona construir soluciones digitales que combinan funcionalidad y diseño, 
                        ayudando a empresas y emprendedores a tener una presencia online efectiva.
                        Con experiencia en frontend y backend, trabajo con diversas tecnologías para crear sitios web y aplicaciones 
                        modernas, optimizadas y escalables. Como freelancer, me enorgullece colaborar con clientes para llevar sus ideas a
                        la realidad, priorizando siempre la calidad y la eficiencia.
                    </p>
                </div>
                 <img  style="margin-top: 80px;border-radius:20px;" src="https:${yoImgId}" alt="Me">
            `;
        });
    });
};




titleData();






