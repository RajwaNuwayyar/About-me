/* ============================================
   PORTFOLIO - Main JavaScript (Multi-Page Version)
   Rajwa Nuwayyar Saif Lawahidz
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize modules
    initPageTransitions();
    initScrollProgress();
    initServiceAccordion();
    initExperienceFloatingPreview();
    initWorkFilter();
    initParallaxEffects();
    initNavbarScroll();
});

/* ============================================
   PAGE TRANSITIONS (Smooth Multi-Page Routing)
   ============================================ */
function initPageTransitions() {
    const pageWrapper = document.getElementById('page-content');
    
    // Intercept internal links for page transition fade
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.getAttribute('target') === '_blank' || link.hasAttribute('download')) return;

        link.addEventListener('click', (e) => {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            if (href === currentPath || href === window.location.pathname) return;

            e.preventDefault();
            if (pageWrapper) {
                pageWrapper.classList.add('page-fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 350);
            } else {
                window.location.href = href;
            }
        });
    });
}

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
function initScrollProgress() {
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.id = 'scroll-progress';
        document.body.appendChild(progressBar);
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
}

/* ============================================
   SERVICE ACCORDION (Interactive Expanded Preview)
   ============================================ */
function initServiceAccordion() {
    const serviceItems = document.querySelectorAll('.service-item');
    if (!serviceItems.length) return;

    serviceItems.forEach(item => {
        const header = item.querySelector('.service-item-header');
        if (!header) return;
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            serviceItems.forEach(si => {
                si.classList.remove('active');
                const toggle = si.querySelector('.toggle-icon');
                if (toggle) toggle.textContent = '↗';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const toggle = item.querySelector('.toggle-icon');
                if (toggle) toggle.textContent = '✕';
            }
        });
    });
}

/* ============================================
   EXPERIENCE FLOATING HOVER PREVIEW (Cursor Following)
   ============================================ */
function initExperienceFloatingPreview() {
    const expItems = document.querySelectorAll('.experience-item');
    const tooltip = document.getElementById('exp-floating-preview');
    const tooltipImg = document.getElementById('exp-preview-img');
    const tooltipCaption = document.getElementById('exp-preview-caption');

    if (!expItems.length || !tooltip) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isHovering = false;

    // Smooth cursor follow interpolation loop
    function updateTooltipPosition() {
        if (isHovering) {
            targetX += (mouseX - targetX) * 0.15;
            targetY += (mouseY - targetY) * 0.15;
            tooltip.style.left = `${targetX}px`;
            tooltip.style.top = `${targetY}px`;
            requestAnimationFrame(updateTooltipPosition);
        }
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    expItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const previewSrc = item.dataset.preview;
            const previewTitle = item.dataset.title || 'Project Showcase';

            if (previewSrc && tooltipImg) {
                tooltipImg.src = previewSrc;
                if (tooltipCaption) tooltipCaption.textContent = previewTitle;
                
                mouseX = e.clientX;
                mouseY = e.clientY;
                targetX = mouseX;
                targetY = mouseY;
                tooltip.style.left = `${targetX}px`;
                tooltip.style.top = `${targetY}px`;

                tooltip.classList.add('visible');
                isHovering = true;
                requestAnimationFrame(updateTooltipPosition);
            }
        });

        item.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
            isHovering = false;
        });
    });
}

/* ============================================
   WORK CATEGORY FILTER
   ============================================ */
function initWorkFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workLinks = document.querySelectorAll('.work-card-link');

    if (!filterBtns.length || !workLinks.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            workLinks.forEach(link => {
                const category = link.dataset.category;

                if (filter === 'all' || category === filter) {
                    link.style.display = 'block';
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        link.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ============================================
   PARALLAX EFFECTS
   ============================================ */
function initParallaxEffects() {
    const heroPhoto = document.getElementById('hero-photo');
    const heroName = document.getElementById('hero-name');
    const cloudBg = document.getElementById('cloud-bg');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                if (heroPhoto && scrollY < windowHeight) {
                    const photoTranslate = scrollY * 0.2;
                    heroPhoto.style.transform = `translateX(-50%) translateY(${photoTranslate}px)`;
                }

                if (heroName && scrollY < windowHeight) {
                    const nameTranslate = scrollY * 0.1;
                    const nameOpacity = 1 - (scrollY / (windowHeight * 0.6));
                    heroName.style.transform = `translateY(${nameTranslate}px)`;
                    heroName.style.opacity = Math.max(0, nameOpacity);
                }

                if (cloudBg) {
                    const cloudTranslate = scrollY * 0.04;
                    cloudBg.style.transform = `translateY(${cloudTranslate}px)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Mouse tilt on hero photo
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            if (heroPhoto) {
                heroPhoto.style.transform = `translateX(calc(-50% + ${x * 12}px)) translateY(${y * 10}px)`;
            }
        });
    }
}

/* ============================================
   NAVBAR SCROLL BEHAVIOR
   ============================================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 80) {
            navbar.style.background = 'rgba(255, 255, 255, 0.92)';
            navbar.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            navbar.style.boxShadow = 'none';
        }

        if (currentScroll > lastScroll && currentScroll > 250) {
            navbar.style.transform = 'translateY(-120%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

/* ============================================
   BUTTON HOVER RIPPLE EFFECT
   ============================================ */
document.querySelectorAll('.btn-collaborate, .btn-lets-talk, .btn-contact, .btn-view-all, .social-btn, .footer-social-btn, .btn-back, .btn-live-preview').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.25);
            transform: translate(-50%, -50%);
            left: ${x}px;
            top: ${y}px;
            animation: rippleExpand 0.6s ease-out forwards;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('🚀 Portfolio loaded — Rajwa Nuwayyar Saif Lawahidz (Multi-Page)');
