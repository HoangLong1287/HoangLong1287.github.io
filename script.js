document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.menu-toggle i');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Đổi icon từ bars sang times (X)
            if (navMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // Đóng menu khi click vào link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // 2. FAQ Accordion (Nâng cấp)
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            
            // Đóng các câu hỏi khác (nếu muốn accordion chỉ mở 1 cái 1 lúc)
            /* document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) {
                    a.style.maxHeight = null;
                    a.previousElementSibling.classList.remove('active');
                }
            }); 
            */

            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                item.querySelector('i').style.transform = 'rotate(180deg)';
            } else {
                answer.style.maxHeight = null;
                item.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
    });

    // 3. Smooth Scroll (Điều chỉnh Header Offset)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20, // Thêm chút khoảng trống
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Scroll Reveal Animation (Hiệu ứng khi cuộn tới đâu hiện tới đó)
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Khoảng cách từ đáy màn hình để bắt đầu hiện

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('reveal-active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chạy lần đầu khi load trang
});

// 5. Hàm Copy IP Server
function copyIP() {
    const ipText = document.getElementById('serverIp').innerText;
    navigator.clipboard.writeText(ipText).then(() => {
        const btn = document.querySelector('.server-box .btn-outline');
        const originalText = btn.innerHTML;
        
        // Đổi nút thành "Đã copy!"
        btn.innerHTML = '<i class="fas fa-check"></i> Đã Copy!';
        btn.style.borderColor = '#10b981';
        btn.style.color = '#10b981';

        // Reset lại sau 2 giây
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Không thể copy text: ', err);
        alert('Lỗi copy, vui lòng bôi đen và copy thủ công!');
    });
}