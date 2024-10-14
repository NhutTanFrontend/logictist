function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function checkScroll() {
    const button = document.getElementById("scrollToTopButton");
    const windowHeight = window.innerHeight;
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    const vhThreshold = windowHeight * 0.6;

    if (scrollPosition > vhThreshold) {
        button.classList.remove('opacity-0');
        button.classList.remove('pointer-events-none');
    } else {
        button.classList.add('opacity-0');
        button.classList.add('pointer-events-none');
    }
}

window.onscroll = checkScroll;

window.onload = checkScroll;

window.addEventListener('beforeunload', function() {
    const button = document.getElementById("scrollToTopButton");
    button.classList.add('hidden');
});

document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);