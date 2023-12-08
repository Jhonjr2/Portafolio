import { menu } from './menu.js'
import { mode } from './mode.js'
import { skills, slider} from './slider.js'
import { social } from './social.js'
import {sound} from './sound.js'
import {PrintProject, initMap} from './print.js'
import {getApi} from './API.js'



window.scrollTo({
    top: 0,
    behavior: "smooth"
});



async function main() {
    // const data = JSON.parse(localStorage.getItem('projects'))
    const projects = JSON.parse(localStorage.getItem('projects')) || await getApi();
    PrintProject(projects);
    skills()
    menu();
    mode();
    sound();
    slider();
    social();
    initMap()
}

main();



