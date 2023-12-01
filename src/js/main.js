   
function menu() {

    const header = document.querySelector('header');
    const menuItems = document.querySelectorAll('.menu a');
    
    header.addEventListener('mouseenter',function () {
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


function mode(){
        const body = document.querySelector('body')
        const btn = document.querySelector('.icon-mode')
        const icon = document.querySelector('.icon-mode ion-icon')


        btn.addEventListener('click', () => {
            body.classList.toggle('dark')
            if (icon.name === "sunny-outline" ) {
                icon.name = "moon-outline"
                console.log(icon.name);
            }else{
                icon.name = "sunny-outline"
            }

            
        })


}

// async function getApi () {
//     const url = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'
    
//     try {
//         const data = await fetch(url);
//         const res = await data.json();
//         console.log(res);
//         return res;
//     }catch(error){
//         console.log(error);
//     }
// }


function main() {
    // const projects = await getApi();
    // console.log(projects);

    menu();
    mode();

} 

   
    
