/* ============================================
   AgentForge v3.0 - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Background Canvas (Particle Field) ----------
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 18000);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.3,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity})`;
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - p.x;
                const dy = particles[j].y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(88, 166, 255, ${0.04 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animationId = requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    // ---------- Header Scroll ----------
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    });

    // ---------- Mobile Toggle ----------
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');

    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        mobileToggle.classList.toggle('active');
    });

    // Close nav on link click
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            mobileToggle.classList.remove('active');
        });
    });

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---------- Active Nav Link ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ---------- Counter Animation ----------
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let countersAnimated = false;

    function animateCounters() {
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const start = performance.now();

            function updateCounter(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    el.textContent = target;
                    if (target === 93) el.textContent = '93+';
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        observer.observe(heroStats);
    }

    // ---------- Scroll Animations ----------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate feature cards, framework cards, etc.
    const animateElements = document.querySelectorAll(
        '.feature-card, .framework-card, .tech-category, .api-card, .model-card, .arch-layer, .test-results'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index % 4 * 0.1}s`;
        scrollObserver.observe(el);
    });

    // ---------- Framework Generation Tabs ----------
    const genTabs = document.querySelectorAll('.gen-tab');
    const frameworkCards = document.querySelectorAll('.framework-card');

    genTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            genTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const gen = tab.getAttribute('data-gen');

            frameworkCards.forEach(card => {
                if (gen === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.getAttribute('data-gen') === gen) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ---------- Test Ring Animation ----------
    const ringFill = document.querySelector('.ring-fill');
    if (ringFill) {
        const circumference = 2 * Math.PI * 85; // r=85
        ringFill.style.strokeDasharray = circumference;
        ringFill.style.strokeDashoffset = circumference;

        const ringObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        ringFill.style.strokeDashoffset = '0';
                    }, 300);
                }
            });
        }, { threshold: 0.5 });

        ringObserver.observe(ringFill.closest('.test-progress-ring'));
    }

    // ---------- Tilt Effect on Cards ----------
    document.querySelectorAll('.feature-card, .framework-card, .stat-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

});
