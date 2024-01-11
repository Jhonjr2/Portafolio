




// export function PrintProject(projects) {
//     const list = document.querySelectorAll('.splide__slide');
//     const path = location.href.split('/').at(-1).at(0);
//     projects.forEach((project, i) => {
//         const {descripcion, image, tecnologias, titulo, description, technologies, title} = project;
//         let html = '';
//         if (path === 'e') {
//             html += ` 
//             <div>
//               <h3>${title}</h3>
//               <p>${description}</p>
//               <p>${technologies}</p>
//             </div>
//             <figure>
//               <img src="${image}" alt="slider item">
//             </figure>`;
//         }else{
//             html += ` 
//             <div>
//               <h3>${titulo}</h3>
//               <p>${descripcion}</p>
//               <p>${tecnologias}</p>
//             </div>
//             <figure>
//               <img src="${image}" alt="slider item">
//             </figure>`;
//         }
       

//         list[i].innerHTML = html;

//     });

// }

//Mapa - Ubicación

export function initMap() {
    // Coordenadas del centro de tu país
    let centroPais = { lat: LATITUD, lng: LONGITUD };

    // Configuración del mapa
    let mapOptions = {
        zoom: 6, // Nivel de zoom inicial
        center: centroPais // Centro del mapa
    };

    // Crear el mapa
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Puedes agregar marcadores, líneas, polígonos, etc. según tus necesidades.
}