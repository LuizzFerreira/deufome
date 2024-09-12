document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuHome');
    const menuContent = document.getElementById('asideMenu');
  
    menuButton.addEventListener('click', function (event) {
      event.stopPropagation();
      if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
      } else {
        menuContent.style.display = 'block';
      }
    });
  
    document.addEventListener('click', function (event) {
      const target = event.target;
      if (!menuContent.contains(target) && target !== iconX) {
        menuContent.style.display = 'none';
      }
    });
  });