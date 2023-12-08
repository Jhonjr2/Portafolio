



export function mode() {
    const body = document.querySelector('body')
    const btn = document.querySelector('.icon-mode')
    const icon = document.querySelector('.icon-mode ion-icon')
    const image = document.querySelector('.dark-mode-image');


    const modoClick = () => {
        body.classList.toggle('dark')
        if (icon.name.includes("moon-outline")) {
            icon.name = "sunny-outline";
            image.src = './src/img/lampara-light1.png';
        } else {
            icon.name = "moon-outline";
            image.src = './src/img/lampara-dark.png';


        }
        image.removeEventListener('click', lamparaClick);
        image.addEventListener('click', lamparaClick);

        if(link.getAttribute("href")==="./src/particles/dark.css"){
            link.href= "./src/particles/brigth.css"; 
        } else {
            link.href= "./src/particles/dark.css";

        }
        
    };

    btn.addEventListener('click', modoClick);

    const lamparaClick = () => {
        body.classList.toggle('dark')
        if (image.src.includes('lampara-light1.png')) {
            image.src = './src/img/lampara-dark.png';
            icon.name = "moon-outline";
        } else {
            image.src = './src/img/lampara-light1.png';
            icon.name = "sunny-outline";
        }
        btn.removeEventListener('click', modoClick);
        btn.addEventListener('click', modoClick);


    }

    image.addEventListener('click', lamparaClick)
    
}