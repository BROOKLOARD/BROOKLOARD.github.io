// SUPER SIMPLE CV DOWNLOAD
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // DOWNLOAD CV BUTTON - DIRECT PDF LINK
    // ============================================
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Force download the PDF
            window.location.href = 'Biruk_Sisay_CV.pdf';
            
            // No alert, no extra code - just direct download
        });
    }
    
    // ============================================
    // SMOOTH SCROLLING (keep this)
    // ============================================
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // ============================================
    // CONTACT FORM (keep this)
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! I will respond soon.');
            this.reset();
        });
    }
    
    // ============================================
    // UPDATE FOOTER YEAR (keep this)
    // ============================================
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());
    }
});