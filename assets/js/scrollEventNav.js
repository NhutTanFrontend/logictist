const navbarBlock = document.getElementById("navbar-block")

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const triggerPosition = 180;

    if (scrollPosition > triggerPosition) {
        navbarBlock.classList.add('fixed');
    } else {
        navbarBlock.classList.remove('fixed');
    }
});