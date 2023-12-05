window.scrollTo({
    top: 0,
    behavior: "smooth"
});

function menu() {

    const header = document.querySelector('header');
    const menuItems = document.querySelectorAll('.menu a');

    header.addEventListener('mouseenter', function () {
        this.classList.add('active');
    });

    header.addEventListener('mouseleave', function () {
        this.classList.remove('active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const clickedItem = this; // Almacena el elemento clicado

            // Quita la clase 'selected' de todos los elementos del menú
            menuItems.forEach(item => item.classList.remove('selected', 'focused'));
            // Agrega la clase 'selected' al elemento clicado
            clickedItem.classList.add('selected', 'focused');
        });
    });

};

function skills() {
    const skill = document.querySelector('.slider-skills');
    const array = document.querySelectorAll('.slider-skills img')

    const images = Array.from(array).map(element => element.getAttribute('src'));
    let count = 0;
    let html = `<img src="${images[count]}" alt="hard skills">`;
    skill.innerHTML = html;

    const prev = document.querySelector('.btn-prev');
    const next = document.querySelector('.btn-next');
    prev.addEventListener('click', () => {
        clearInterval(interval)
        if (0 < count) {
            count--;
        } else {
            count = images.length - 1;
        }
        let html = `<img src="${images[count]}" alt="hard skills">`;
        skill.innerHTML = html;
    })
    next.addEventListener('click', () => {
        clearInterval(interval)
        if (count < images.length - 1) {
            count++
        } else {
            count = 0;
        }
        let html = `<img src="${images[count]}" alt="hard skills">`;
        skill.innerHTML = html;
    })
    const interval = setInterval(() => {
        if (count < images.length - 1) {
            count++
        } else {
            count = 0;
        }
        let html = `<img src="${images[count]}" alt="hard skills">`;
        skill.innerHTML = html;

    }, 2000);



}




function mode() {
    const body = document.querySelector('body')
    const btn = document.querySelector('.icon-mode')
    const icon = document.querySelector('.icon-mode ion-icon')

    btn.addEventListener('click', () => {
        body.classList.toggle('dark')
        if (icon.name === "sunny-outline") {
            icon.name = "moon-outline"
        } else {
            icon.name = "sunny-outline"
        }
        if(link.getAttribute("href")==="./src/particles/dark.css"){
            link.href= "./src/particles/brigth.css"; 
        } else {
            link.href= "./src/particles/dark.css";
        }
    });
}

function sound() {
    const btn = document.querySelector('.icon-sound')
    const icon = document.querySelector('.icon-sound ion-icon')
    const audio = document.querySelector('.icon-sound audio')


    btn.addEventListener('click', () => {
        if (icon.name === 'volume-mute-outline') {
            icon.name = 'volume-high-outline'
        } else {
            icon.name = 'volume-mute-outline'
        }
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    })


}

function initMap() {
    // Coordenadas del centro de tu país
    var centroPais = { lat: LATITUD, lng: LONGITUD };

    // Configuración del mapa
    var mapOptions = {
        zoom: 6, // Nivel de zoom inicial
        center: centroPais // Centro del mapa
    };

    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Puedes agregar marcadores, líneas, polígonos, etc. según tus necesidades.
}




async function getApi() {
    const url = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

    try {
        const data = await fetch(url);
        const res = await data.json();
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}

function PrintProject(projects) {
    const list = document.querySelectorAll('.splide__slide');

    projects.forEach((project, i) => {
        const {descripcion, image, tecnologias, titulo, description, technologies, title} = project;

        const html = ` 
        <div>
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
          <p>${tecnologias}</p>
        </div>
        <figure>
          <img src="${image}" alt="slider item">
        </figure>`;

        list[i].innerHTML = html;

    });

}

function slider() {
    const splide = new Splide('.splide', {
        type: 'loop',
        breakpoints: {
            849: {
                direction: 'ttb',
                height: '75vh'
            },
        }
    });
    splide.mount();
}

async function main() {
    const projects = await getApi();
    console.log(projects);
    PrintProject(projects);
    skills()
    menu();
    mode();
    sound();
    slider();
   
}

main();



