// Xử lý FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');
        
        // Kiểm tra xem nó có đang mở không
        const isCurrentlyOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

        // Toggle answer
        if (isCurrentlyOpen) {
            answer.style.maxHeight = null; // Đóng lại
            icon.style.transform = 'rotate(0deg)'; // Quay lại 0 độ
        } else {
            // Mở ra
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)'; // Xoay 180 độ
        }
    });
});

// Xử lý Mobile Menu (Hamburger)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        // Toggle class 'active' để hiển thị/ẩn menu
        navMenu.classList.toggle('active');
    });

    // Đóng menu khi click vào một link (chỉ áp dụng trên mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
            }
        });
    });
}


// Scroll mượt (Đã điều chỉnh để tính toán vị trí cuộn)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight; // Lấy chiều cao header
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight, 
                behavior: 'smooth'
            });
        }
    });
});
// @headrozing (HoangLong)