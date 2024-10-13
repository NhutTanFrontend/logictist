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

    const vhThreshold = windowHeight * 0.6; // 60% chiều cao màn hình

    // Thêm hoặc xóa lớp "hidden" dựa trên vị trí cuộn
    if (scrollPosition > vhThreshold) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

// Sự kiện cuộn trang
window.onscroll = checkScroll;

// Đảm bảo kiểm tra khi trang mới tải
window.onload = checkScroll;

// Ẩn nút ngay lập tức khi người dùng bắt đầu chuyển trang
window.addEventListener('beforeunload', function() {
    const button = document.getElementById("scrollToTopButton");
    button.classList.add('hidden');
});

document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);