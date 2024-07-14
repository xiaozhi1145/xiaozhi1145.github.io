const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.style.width = menu.style.width === '250px' ? '0' : '250px';
});