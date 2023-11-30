document.addEventListener("DOMContentLoaded", function () {
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
            menuItems.forEach(item => item.classList.remove('selected'));
            // Agrega la clase 'selected' al elemento clicado
            clickedItem.classList.add('selected');

            // Cambia el color del texto del ícono y su texto
            const icons = clickedItem.querySelectorAll('box-icon, ion-icon');
            if (icons) {
                icons.forEach(icon => {
                    icon.style.color = '#232425';
                });
            }
            const text = clickedItem.querySelector('span');
            if (text) {
                text.style.color = '#232425';
            }
        });
    });

    // Agrego un event listener al documento para cerrar el menú cuando se haga clic fuera de él
    document.addEventListener('click', function (event) {
        if (!header.contains(event.target)) {

            // Restaura el color del texto del ícono y su texto
            menuItems.forEach(item => {
                const icons = item.querySelectorAll('box-icon, ion-icon');
                if (icons) {
                    icons.forEach(icon => {
                        icon.style.color = ''; // Restaura el color predeterminado o al que desees
                    });
                }
                const text = item.querySelector('span');
                if (text) {
                    text.style.color = ''; // Restaura el color predeterminado o al que desees
                }
            });
        }
    });

    // Agrega un event listener a todos los enlaces del menú para el desplazamiento suave
    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetSectionId = this.getAttribute('href').substring(1); // Obtiene el identificador de la sección

            // Desplázate suavemente a la sección correspondiente
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
});
