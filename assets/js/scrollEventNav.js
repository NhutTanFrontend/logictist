const navbarBlock = document.getElementById("navbar-block")
const navbarBlock2 = document.getElementById("navbar-block-2")

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const triggerPosition = 160;

    if (scrollPosition > triggerPosition) {
        navbarBlock.classList.add('opacity-0');
        navbarBlock2.classList.add('opacity-100');
        navbarBlock2.classList.remove('pointer-events-none')
    } else {
        navbarBlock.classList.remove('opacity-0');
        navbarBlock2.classList.remove('opacity-100');
        navbarBlock2.classList.add('pointer-events-none')
    }
});