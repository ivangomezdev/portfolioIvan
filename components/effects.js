//efecto de tipado
export function typeEffect(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Añadir la siguiente letra
            index++;
        } else {
            clearInterval(interval); // Detener la animación al finalizar
        }
    }, delay);
}


export const handleScroll = () => {
    const aboutMeText = document.querySelector('.aboutMe__text'); // Selecciona el texto
    const aboutMePosition = aboutMeText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica si el usuario ha desplazado la página hacia el elemento
    if (aboutMePosition < windowHeight) {
        aboutMeText.classList.add('visible'); // Añadir la clase para mostrar el texto
        window.removeEventListener('scroll', handleScroll); // Eliminar el evento una vez que se ha activado
    }
};

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);
