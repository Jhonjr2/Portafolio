




//Slider manual
export function skills() {
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



