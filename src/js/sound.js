


export function sound() {
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