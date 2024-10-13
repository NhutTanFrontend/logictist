function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    const button = document.getElementById("scrollToTopButton");
    const windowHeight = window.innerHeight;
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    
    const vhThreshold = windowHeight * 0.5;

    if (scrollPosition > vhThreshold) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);