

const LATITUD = 4.5709;
const LONGITUD = -74.2973;

//Mapa - Ubicación

export function initMap() {
    let centroPais = { lat: LATITUD, lng: LONGITUD };

    // Configuración del mapa
    let mapOptions = {
        zoom: 6, 
        center: centroPais 
    };

    // Crear el mapa
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

}