document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});

function toggleAsideMenu() {
    const menu = document.getElementById('asideMenu');
    menu.classList.toggle('show');
}