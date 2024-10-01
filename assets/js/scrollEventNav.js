const navbarBlock = document.getElementById("navbar-block")

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Vị trí hiện tại của cuộn trang
    const triggerPosition = 180; // Thay thế bằng vị trí mà bạn muốn thêm class

    if (scrollPosition > triggerPosition) {
        navbarBlock.classList.add('fixed');
    } else {
        navbarBlock.classList.remove('fixed');
    }
});