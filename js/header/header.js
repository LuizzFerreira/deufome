const menuToggle = document.getElementById('menuToggle');
const asideMenu = document.getElementById('asideMenu');
const iconX = document.getElementById('iconX');

menuToggle.addEventListener('click', () => {
    asideMenu.classList.toggle('show'); // Alterna a visibilidade do menu
});

iconX.addEventListener('click', () => {
    asideMenu.classList.remove('show'); // Esconde o menu ao clicar no X
});
