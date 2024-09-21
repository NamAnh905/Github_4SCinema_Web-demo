const links = document.querySelectorAll('.banner__menu-link');

links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

