import { menu } from './menu.js'
import { mode } from './mode.js'
import { skills} from './slider.js'
import { social } from './social.js'
import {sound} from './sound.js'
import {initMap} from './print.js'



window.scrollTo({
    top: 0,
    behavior: "smooth"
});



async function main() {
    skills()
    menu();
    mode();
    sound();
    social();
    initMap()
}

main();



