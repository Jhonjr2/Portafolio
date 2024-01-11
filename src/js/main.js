import { menu } from './menu.js'
import { mode } from './mode.js'
import { skills, slider} from './slider.js'
import { social } from './social.js'
import {sound} from './sound.js'
import {initMap} from './print.js'



window.scrollTo({
    top: 0,
    behavior: "smooth"
});



async function main() {
    // const data = JSON.parse(localStorage.getItem('projects'))
    // const projects = JSON.parse(localStorage.getItem('projects')) || await getApi();
    // PrintProject();
    skills()
    menu();
    mode();
    sound();
    slider();
    social();
    initMap()
}

main();



