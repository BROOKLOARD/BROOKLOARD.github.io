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
// Web3Forms Contact Form Handler
const contactForm = document.getElementById('contactForm');
const successDiv = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show sending state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        
        // Prepare form data
        const formData = new FormData(this);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        try {
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (response.status === 200) {
                // Success - hide form, show success message
                this.style.display = 'none';
                successDiv.style.display = 'block';
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    this.style.display = 'block';
                    successDiv.style.display = 'none';
                    this.reset();
                }, 5000);
            } else {
                alert('Something went wrong. Please try again or email me directly.');
                console.log(result);
            }
        } catch (error) {
            alert('Network error. Please try again.');
            console.error(error);
        } finally {
            // Restore button
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}