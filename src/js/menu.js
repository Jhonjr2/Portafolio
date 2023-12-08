




export function menu() {

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