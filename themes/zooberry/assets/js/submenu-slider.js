document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.side-li');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;

            // Close all other submenus
            document.querySelectorAll('.submenu').forEach(sub => {
                if (sub !== submenu) {
                    sub.classList.remove('submenu-open');
                }
            });

            // Toggle the clicked submenu
            submenu.classList.toggle('submenu-open');
        });
    });
});