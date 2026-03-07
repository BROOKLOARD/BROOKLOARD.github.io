// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. DOWNLOAD CV BUTTON - LINKS TO YOUR PDF
    // ============================================
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from navigating
            
            // Link to your PDF file
            const pdfUrl = 'Biruk_Sisay_CV.pdf';
            
            // Create a temporary link and click it
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Biruk_Sisay_CV.pdf'; // Name when downloaded
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional success message
            console.log('CV download started');
        });
    }
    
    // ============================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION
    // ============================================
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // 3. CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]')?.value || '';
            const email = this.querySelector('input[type="email"]')?.value || '';
            const message = this.querySelector('textarea')?.value || '';
            
            if (name && email && message) {
                alert(`Thank you for your message, ${name}! I will get back to you soon at ${email}.`);
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // ============================================
    // 4. ACTIVE MENU HIGHLIGHT ON SCROLL
    // ============================================
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // 5. ADD STYLE FOR ACTIVE MENU
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: #2563eb;
            font-weight: bold;
            border-bottom: 2px solid #2563eb;
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // 6. UPDATE FOOTER YEAR
    // ============================================
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
    }
    
    // ============================================
    // 7. FADE-IN ANIMATION ON SCROLL
    // ============================================
    const animatedItems = document.querySelectorAll('.project-card, .education-card, .pmo-project-item, .timeline-item');
    
    function checkScroll() {
        animatedItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 80) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles
    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // initial check
    
    console.log('Portfolio site loaded successfully!');
});