





export function social() {
    const nav = document.querySelector('.menu');
    const social = document.querySelector('.social-icons');

    social.classList.toggle('active');

    setTimeout(() => {
        social.classList.toggle('active');
    }, 2000);

    nav.addEventListener('click', () => {
        social.classList.toggle('active');

        setTimeout(() => {
            social.classList.toggle('active');
        }, 2000);
        
    });
}