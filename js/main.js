const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    menu.classList.toggle('is-active'); // ← esto faltaba (anima las barras)
});

document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        menu.classList.remove('is-active'); // ← y esto también
    });
});