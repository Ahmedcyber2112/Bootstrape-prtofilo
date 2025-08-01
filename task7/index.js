const toggleBtn = document.getElementById('menuToggleBtn');
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.addEventListener('show.bs.offcanvas', () => {
      toggleBtn.innerHTML = '×';
    });

    sideMenu.addEventListener('hide.bs.offcanvas', () => {
      toggleBtn.innerHTML = '☰';
    });