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
            // Đặt max-height đủ lớn để chứa nội dung, kích hoạt cuộn nếu cần
            answer.style.maxHeight = answer.scrollHeight + 'px'; 
            icon.style.transform = 'rotate(180deg)'; // Xoay 180 độ
        }
    });
});

// Scroll mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// @headrozing (HoangLong)