// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. DOWNLOAD CV BUTTON FUNCTIONALITY
    // ============================================
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from navigating
            
            // Create a professional CV text content based on your actual CV
            const cvContent = `BIRUK SISAY ABATE - PROFESSIONAL CV

================================
CONTACT INFORMATION
================================
Name: Biruk Sisay Abate
Email: bsisa4@gmail.com
Phone: +251 91 555 0174
Location: Addis Ababa, Ethiopia
LinkedIn: linkedin.com/in/biruk-sisay-485785240/
Nationality: Ethiopian

================================
PROFESSIONAL SUMMARY
================================
Results-driven Project Management professional with extensive experience leading multi-million dollar ICT and infrastructure projects. Currently serving as PMO Manager at IE Network Solutions, overseeing a portfolio of high-value projects. PMP candidate and CAPM certified, with an MBA (3.8 GPA) and a BSc in Construction Technology and Management. Known for delivering projects ahead of schedule (including a $4.72M project completed 76 days early) and for strong stakeholder management, negotiation, and problem-solving skills.

================================
WORK EXPERIENCE
================================

IE NETWORK SOLUTIONS - ADDIS ABABA, ETHIOPIA
Project Management Office Manager | April 2025 - Present
• Lead and oversee entire project portfolio across departments, ensuring alignment with strategic goals
• Supervise and mentor project managers, coordinators, and cross-functional teams
• Establish and enforce project governance frameworks, tools, and best practices
• Develop and maintain project dashboards and executive reports for stakeholders
• Manage stakeholder communications and resolve escalated issues
• Facilitate resource allocation, risk assessment, and contingency planning
• Drive development of standard operating procedures (SOPs) and performance metrics

IE NETWORK SOLUTIONS - ADDIS ABABA, ETHIOPIA
Project Manager | August 2023 - April 2025
• Led end-to-end planning and execution of large-scale ICT and infrastructure projects
• Defined project scope, developed detailed project plans, and managed timelines and deliverables
• Monitored subcontractors' performance to ensure compliance with project specifications
• Handled client communications, status updates, and issue resolution
• Ensured risk management and timely escalation to senior management
• Coordinated internal resources to achieve key milestones

LUNAR INTERNATIONAL COLLEGE - ADDIS ABABA, ETHIOPIA
Head, Department of Management | October 2022 - June 2023
• Oversaw academic operations of the Management Department
• Supervised and supported faculty members in research, curriculum planning, and class delivery
• Assigned instructors to classes and prepared course and exam schedules
• Ensured effective monitoring of student progress and academic advising
• Promoted faculty development and supported implementation of institutional policies

ADDIS ABABA CITY ADMINISTRATION PLAN AND DEVELOPMENT COMMISSION
Infrastructure Plan Implementation Follow Up and Regulation Expert | February 2020 - October 2022
• Reviewed infrastructure development proposals for compliance with city structural plan
• Conducted field inspections to monitor construction activities and identify violations
• Reported non-compliance cases and provided corrective action recommendations
• Issued official correspondence to stakeholders and government agencies
• Provided technical guidance to sub-city offices

================================
PROJECTS MANAGED AS PROJECT MANAGER
================================
• Ministry of Innovation and Technology (MINT) - Smart Communication Rooms: $4.72M USD (completed 76 days ahead of schedule)
• Ethiopia Pharmaceuticals Supply Service (EPSS) - Networking Infrastructure & Modular Data Center: $4M USD + 10M ETB
• Ethiopian Institute of Architecture (EiABC) - Data Center License Renewal: 41M ETB
• Office of the Federal Auditor General (OFAG) - FortiSIEM Security Solution: 11M ETB
• Office of the Federal Auditor General (OFAG) - Audio-Video System: $211,000 USD
• United Nations Economic Commission for Africa (UNECA) - Storage System Support: $85,000 USD
• Dar Al-Handasah - Office Lighting Equipment: 2M ETB

================================
CURRENT PROJECTS AS PMO MANAGER (OVERSEEING)
================================
• Dashin Bank HCI: 809M ETB
• CBE HCI: 352M ETB
• Ethio telecom / Ministry of Health - Office 365: 59.9M ETB
• Hibert Bank SDN: 72.9M ETB
• Zemen Bank SIEM-FIM & WAAP: 34.3M ETB
• Abay Bank Cisco Infrastructure: 23.5M ETB
• AUC Security: $883K USD
• Safaricom SOAR: $338K USD
• Flipper International School Networking: $1.2M USD
• MINT NOC Room: $4M USD
• UNDP Access Control: $200K USD
• Berhan Bank Privilege Access Management: $115K USD

================================
EDUCATION
================================
• MBA (Master of Business Administration) - Lunar International College (2021-2022)
  Graduated with Great Distinction (3.8 GPA)
• BSc in Construction Technology and Management - Hawassa University (2014-2018)
  Graduated with Distinction (3.18 GPA)

================================
CERTIFICATIONS
================================
• Project Management Professional (PMP) - Project Management Institute (2025-2028, in progress)
• Certified Associate in Project Management (CAPM) - Project Management Institute (2024-2027)

================================
LANGUAGES
================================
• Amharic: Native
• English: C1/C2 Proficient

================================
SKILLS
================================
Project Management | Leadership | Negotiation | Stakeholder Management | Risk Assessment
Problem Solving | Strategic Planning | Team Mentoring | Budget Management | Contract Negotiation
Data Analysis (STATA) | GIS | Strategic Planning (BSC) | Report Writing
`;

            // Create a downloadable file (as .txt; you can replace with actual PDF later)
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Biruk_Sisay_Abate_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Optional: Show a message
            alert('CV download started! (This is a text version. You can replace with PDF later.)');
        });
    }
    
    // ============================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ============================================
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // skip if just "#"
            
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
    // 4. HIGHLIGHT ACTIVE MENU ITEM ON SCROLL
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
    
    // Add style for active menu item (if not already in CSS)
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
    // 5. SCROLL ANIMATIONS FOR CARDS
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
    
    // ============================================
    // 6. UPDATE FOOTER YEAR
    // ============================================
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
    }
    
    // ============================================
    // 7. FORMAT NUMBERS (optional utility)
    // ============================================
    function formatNumber(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // If you have any numbers to format dynamically, you can use this function.
    
    console.log('Portfolio site loaded successfully!');
});