function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    const button = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);