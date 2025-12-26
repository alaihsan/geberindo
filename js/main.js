document.addEventListener('DOMContentLoaded', function() {

    // Sets up the mobile menu functionality
    function setupMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            // The onclick attribute in the HTML is already handling the toggle,
            // so we just need to handle closing the menu on link click.
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            });
        }
    }

    // Toggle Mobile Menu - making it globally accessible from onclick attribute
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks) {
            navLinks.classList.toggle('active');
        }
    }

    // Simple Fade-In Animation on Scroll
    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply animation style initially
        document.querySelectorAll('.value-card, .service-box, .about-text, .vm-card').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });
    }

    // Initialize everything
    setupMenu();
    setupScrollAnimations();
});

// Additional interactions: header shadow on scroll and mobile-bottom-nav active item
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const bottomNav = document.querySelectorAll('.mobile-bottom-nav .mbn-item');

    function onScroll() {
        if (!header) return;
        if (window.scrollY > 10) header.classList.add('header-scrolled');
        else header.classList.remove('header-scrolled');
    }

    onScroll();
    window.addEventListener('scroll', onScroll);

    // Highlight bottom nav based on path
    if (bottomNav.length) {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        bottomNav.forEach(a => {
            try {
                const href = a.getAttribute('href');
                if (href && (href === path || (href === 'index.html' && path === '')) ) {
                    a.classList.add('active');
                }
            } catch(e){}
        });
    }
});

/* --- I18N, caching, preloader, scroll-to-top, whatsapp --- */
(function(){
    const translations = {
        id: {
            'nav.beranda':'Beranda',
            'nav.tentang':'Tentang Kami',
            'nav.layanan':'Layanan',
            'nav.produk':'Produk',
            'nav.klien':'Klien',
            'nav.kontak':'Kontak',
            'nav.nilai':'Nilai',
            'hero.title':'Mitra Terpercaya untuk Bisnis Berkelanjutan',
            'hero.subtitle':'Mitra terpercaya dalam penyediaan barang dan jasa. Kami menghadirkan produk berkualitas serta layanan profesional untuk keberhasilan operasional Anda.',
            'btn.contact':'Hubungi Kami',
            'btn.products':'Lihat Produk',
            'footer.company':'PT Geberindo Antar Sukses',
            'footer.address':'Gedung Menara 165, Lantai 17 Unit A\nJl. TB Simatupang Kav-1, Jakarta Selatan 12560',
            'footer.contactTitle':'Kontak',
            'footer.phone':'021-38820017 / 0813 8080 810 (WA)',
            'footer.email':'info@geberindo.com',
            'footer.hours':'Senin - Jumat: 08.00-17.00 WIB',
            'footer.quickLinks':'Tautan Cepat'
        },
        en: {
            'nav.beranda':'Home',
            'nav.tentang':'About Us',
            'nav.layanan':'Services',
            'nav.produk':'Products',
            'nav.klien':'Clients',
            'nav.kontak':'Contact',
            'nav.nilai':'Values',
            'hero.title':'Your Reliable Partner for Sustainable Business',
            'hero.subtitle':'A trusted partner providing quality products and professional services for your operational success.',
            'btn.contact':'Contact Us',
            'btn.products':'View Products',
            'footer.company':'PT Geberindo Antar Sukses',
            'footer.address':'Gedung Menara 165, Floor 17 Unit A\nJl. TB Simatupang Kav-1, South Jakarta 12560',
            'footer.contactTitle':'Contact',
            'footer.phone':'021-38820017 / 0813 8080 810 (WA)',
            'footer.email':'info@geberindo.com',
            'footer.hours':'Mon - Fri: 08.00-17.00 WIB',
            'footer.quickLinks':'Quick Links'
        }
    };

    function applyTranslations(lang){
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang] && translations[lang][key];
            if (text) {
                // respect html formatting for hero title if contains tags
                if (el.tagName.toLowerCase() === 'h1' && text.includes('<')) el.innerHTML = text;
                else el.textContent = text.replace(/\\n/g, '\n');
            }
        });
        // mark active language button
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
            b.setAttribute('data-active', b.getAttribute('data-lang') === lang);
        });
    }

    window.setLang = function(lang){
        try { localStorage.setItem('site_lang', lang); } catch(e){}
        applyTranslations(lang);
    }

    // quick nav caching: cache innerHTML of nav-links for snappy loads
    function cacheNav() {
        try {
            const navLinks = document.querySelector('.nav-links');
            if (!navLinks) return;
            const key = 'cached_nav_links';
            const cached = localStorage.getItem(key);
            if (cached) {
                navLinks.innerHTML = cached;
            } else {
                localStorage.setItem(key, navLinks.innerHTML);
            }
        } catch(e){}
    }

    // Preloader show/hide
    function setupPreloader(){
        const pre = document.getElementById('preloader');
        if (!pre) return;
        // hide after load
        window.addEventListener('load', () => {
            setTimeout(()=>{ pre.classList.add('hidden'); document.body.classList.add('page-visible'); }, 300);
        });
        window.addEventListener('beforeunload', ()=>{ pre.classList.remove('hidden'); });
    }

    // Smooth accelerated scroll-to-top
    function scrollToTopAccelerated(){
        const duration = 600; // ms
        const start = window.scrollY;
        const startTime = performance.now();
        function step(now){
            const t = Math.min(1, (now - startTime)/duration);
            // ease-in cubic for accelerating then ease-out
            const eased = t<0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
            window.scrollTo(0, Math.round(start * (1 - eased)));
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function setupFloatingButtons(){
        // create container if not exists
        if (!document.querySelector('.floating-buttons')){
            const container = document.createElement('div');
            container.className = 'floating-buttons';
            const wa = document.createElement('button');
            wa.className = 'floating-btn whatsapp';
            wa.title = 'Chat WhatsApp';
            wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
            wa.addEventListener('click', ()=>{
                const phone = '6281380808810';
                const url = `https://wa.me/${phone}`;
                window.open(url, '_blank');
            });
            const top = document.createElement('button');
            top.className = 'floating-btn scroll-top';
            top.title = 'Scroll to top';
            top.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            top.addEventListener('click', scrollToTopAccelerated);
            container.appendChild(wa);
            container.appendChild(top);
            document.body.appendChild(container);
        }
    }

    // init
    document.addEventListener('DOMContentLoaded', ()=>{
        const lang = localStorage.getItem('site_lang') || 'id';
        applyTranslations(lang);
        cacheNav();
        setupPreloader();
        setupFloatingButtons();
    });
})();