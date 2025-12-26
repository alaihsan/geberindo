/* Main JS with I18N, SPA Router, Preloader, Floating Buttons, etc */

let currentLang = 'id';

document.addEventListener('DOMContentLoaded', function() {

    // Sets up the mobile menu functionality
    function setupMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            });
        }
    }

    // Toggle Mobile Menu
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks) {
            navLinks.classList.toggle('active');
        }
    }

    window.closeMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }

    // Fade-In Animation on Scroll
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

        document.querySelectorAll('.value-card, .service-box, .service-detail-card, .client-sektor, .client-proyek').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });
    }

    // Header shadow on scroll
    const header = document.querySelector('header');
    function onScroll() {
        if (!header) return;
        if (window.scrollY > 10) header.classList.add('header-scrolled');
        else header.classList.remove('header-scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll);

    // Initialize
    setupMenu();
    setupScrollAnimations();
});

/* --- I18N TRANSLATIONS --- */
const translations = {
    id: {
        'nav.beranda':'Beranda',
        'nav.tentang':'Tentang Kami',
        'nav.layanan':'Layanan',
        'nav.produk':'Produk',
        'nav.klien':'Klien',
        'nav.kontak':'Kontak',
        'nav.nilai':'Nilai',
        'btn.contact':'Hubungi Kami',
        'btn.products':'Lihat Produk',
        'btn.beli':'Beli',
        'hero.title':'Mitra Terpercaya untuk Bisnis Berkelanjutan',
        'hero.subtitle':'Mitra terpercaya dalam penyediaan barang dan jasa. Kami menghadirkan produk berkualitas serta layanan profesional untuk keberhasilan operasional Anda.',
        'footer.company':'PT Geberindo Antar Sukses',
        'footer.address':'Gedung Menara 165, Lantai 17 Unit A<br>Jl. TB Simatupang Kav-1, Jakarta Selatan 12560',
        'footer.contactTitle':'Kontak',
        'footer.phone':'021-38820017 / 0813 8080 810 (WA)',
        'footer.email':'info@geberindo.com',
        'footer.hours':'Senin - Jumat: 08.00-17.00 WIB',
        'footer.quickLinks':'Tautan Cepat',
        'page.about.title':'Tentang Kami',
        'page.about.intro':'<strong>PT Geberindo Antar Sukses (GAS)</strong> merupakan perusahaan yang bergerak di bidang jasa dan perdagangan besar, dengan fokus pada penyediaan alat-alat perkebunan, peralatan keselamatan kerja (safety equipment), dan berbagai kebutuhan industri lainnya. Kami hadir untuk menjadi mitra strategis bagi perusahaan yang membutuhkan solusi pengadaan barang dan jasa yang cepat, efisien, dan terpercaya.',
        'page.about.vision':'Visi',
        'page.about.visionText':'Menjadi perusahaan jasa dan perdagangan besar yang terpercaya, inovatif, berkelanjutan dan berdaya saing tinggi di tingkat nasional maupun internasional, dengan memberikan solusi terbaik bagi pelanggan dan mitra usaha.',
        'page.about.mission':'Misi',
        'page.about.mission1':'Memberikan layanan jasa dan produk perdagangan yang berkualitas, tepat waktu, dan sesuai kebutuhan pelanggan.',
        'page.about.mission2':'Membangun jaringan distribusi dan kemitraan jangka panjang yang saling menguntungkan dengan pelanggan, pemasok dan pemangku kepentingan.',
        'page.about.mission3':'Mengembangkan sumber daya manusia yang profesional, berintegritas dan berorientasi pada kepuasan pelanggan.',
        'page.about.mission4':'Mengoptimalkan teknologi dan sistem manajemen modern untuk meningkatkan efisiensi dan daya saing perusahaan.',
        'page.about.mission5':'Berkontribusi aktif terhadap pembangunan ekonomi nasional melalui kegiatan usaha yang beretika dan berkelanjutan.',
        'page.about.values':'Nilai Perusahaan',
        'page.about.integrity':'Integritas',
        'page.about.integrityText':'Menjaga kejujuran dan profesionalitas dalam setiap langkah.',
        'page.about.commitment':'Komitmen',
        'page.about.commitmentText':'Fokus pada hasil dan kepuasan pelanggan.',
        'page.about.collaboration':'Kolaborasi',
        'page.about.collaborationText':'Bekerja sama dengan mitra dan pelanggan untuk hasil terbaik.',
        'page.about.innovation':'Inovasi',
        'page.about.innovationText':'Terus beradaptasi dengan teknologi dan kebutuhan pasar.',
        'page.services.title':'Layanan Kami',
        'page.services.intro':'Kami tidak hanya menjual produk, tetapi juga menghadirkan solusi terpadu untuk kebutuhan industri Anda.',
        'page.services.service1':'Pengadaan Barang Industri & Safety Equipment',
        'page.services.service1Text':'Menyediakan berbagai produk keselamatan kerja, APD, dan peralatan industri dengan standar nasional & internasional.',
        'page.services.service2':'Perdagangan Alat Perkebunan & Pertanian',
        'page.services.service2Text':'Distribusi alat-alat modern untuk mendukung produktivitas di sektor perkebunan dan pertanian.',
        'page.services.service3':'Konsultasi & Solusi Pengadaan',
        'page.services.service3Text':'Membantu klien dalam menentukan kebutuhan dan spesifikasi barang sesuai standar perusahaan dan anggaran.',
        'page.products.title':'Produk Kami',
        'page.products.intro':'Koleksi produk berkualitas tinggi untuk memenuhi kebutuhan industri Anda.',
        'page.products.cat1':'Safety Equipment',
        'page.products.cat1Item1':'Helm Keselamatan',
        'page.products.cat1Item2':'Rompi Pengaman',
        'page.products.cat1Item3':'Sarung Tangan',
        'page.products.cat1Item4':'Sepatu Kerja',
        'page.products.cat2':'Alat Pertanian',
        'page.products.cat2Item1':'Bibit Berkualitas',
        'page.products.cat2Item2':'Pupuk Organik',
        'page.products.cat2Item3':'Pestisida',
        'page.products.cat2Item4':'Peralatan Mesin',
        'page.products.cat3':'Peralatan Industri',
        'page.products.cat3Item1':'Pompa Industri',
        'page.products.cat3Item2':'Motor Listrik',
        'page.products.cat3Item3':'Pipa & Fitting',
        'page.products.cat3Item4':'Sistem Otomasi',
        'page.clients.title':'Klien Kami',
        'page.clients.intro':'Kami telah dipercaya oleh berbagai perusahaan di berbagai sektor.',
        'page.clients.sectors':'Sektor Utama',
        'page.clients.sector1':'Perkebunan',
        'page.clients.sector2':'Pertanian',
        'page.clients.sector3':'Industri Manufaktur',
        'page.clients.sector4':'Konstruksi',
        'page.clients.sector5':'Energi & Pertambangan',
        'page.clients.projects':'Proyek Terpilih',
        'page.clients.project1':'Pengadaan APD Pabrik',
        'page.clients.project1Desc':'Penyediaan lengkap equipment keselamatan kerja',
        'page.clients.project2':'Distribusi Bibit Perkebunan',
        'page.clients.project2Desc':'Pengiriman bibit unggul ke seluruh nusantara',
        'page.clients.project3':'Sistem Otomasi Pertanian',
        'page.clients.project3Desc':'Implementasi teknologi IoT untuk efisiensi',
        'page.contact.title':'Hubungi Kami',
        'page.contact.intro':'Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.',
        'page.contact.contactInfo':'Informasi Kontak',
        'page.contact.address':'Alamat',
        'page.contact.phone':'Telepon',
        'page.contact.email':'Email',
        'page.contact.hours':'Jam Operasional',
        'page.contact.message':'Kirim Pesan',
        'page.contact.namePlaceholder':'Nama Anda',
        'page.contact.emailPlaceholder':'Email Anda',
        'page.contact.messagePlaceholder':'Pesan Anda',
        'page.contact.send':'Kirim'
    },
    en: {
        'nav.beranda':'Home',
        'nav.tentang':'About Us',
        'nav.layanan':'Services',
        'nav.produk':'Products',
        'nav.klien':'Clients',
        'nav.kontak':'Contact',
        'nav.nilai':'Values',
        'btn.contact':'Contact Us',
        'btn.products':'View Products',
        'btn.beli':'Buy',
        'hero.title':'Your Reliable Partner for Sustainable Business',
        'hero.subtitle':'A trusted partner providing quality products and professional services for your operational success.',
        'footer.company':'PT Geberindo Antar Sukses',
        'footer.address':'Gedung Menara 165, Floor 17 Unit A<br>Jl. TB Simatupang Kav-1, South Jakarta 12560',
        'footer.contactTitle':'Contact',
        'footer.phone':'021-38820017 / 0813 8080 810 (WA)',
        'footer.email':'info@geberindo.com',
        'footer.hours':'Mon - Fri: 08.00-17.00 WIB',
        'footer.quickLinks':'Quick Links',
        'page.about.title':'About Us',
        'page.about.intro':'<strong>PT Geberindo Antar Sukses (GAS)</strong> is a company engaged in services and large-scale trading, with a focus on providing agricultural tools, work safety equipment, and various other industrial needs. We are here to be a strategic partner for companies that need quick, efficient, and reliable procurement solutions.',
        'page.about.vision':'Vision',
        'page.about.visionText':'To become a trusted, innovative, sustainable and highly competitive services and large-scale trading company at both national and international levels, by providing the best solutions for customers and business partners.',
        'page.about.mission':'Mission',
        'page.about.mission1':'Provide quality services and trading products, on time, and according to customer needs.',
        'page.about.mission2':'Build long-term distribution networks and partnerships that are mutually beneficial with customers, suppliers and stakeholders.',
        'page.about.mission3':'Develop professional, integrity-driven human resources oriented towards customer satisfaction.',
        'page.about.mission4':'Optimize modern technology and management systems to increase efficiency and company competitiveness.',
        'page.about.mission5':'Actively contribute to national economic development through ethical and sustainable business activities.',
        'page.about.values':'Company Values',
        'page.about.integrity':'Integrity',
        'page.about.integrityText':'Maintaining honesty and professionalism in every step.',
        'page.about.commitment':'Commitment',
        'page.about.commitmentText':'Focus on results and customer satisfaction.',
        'page.about.collaboration':'Collaboration',
        'page.about.collaborationText':'Working together with partners and customers for the best results.',
        'page.about.innovation':'Innovation',
        'page.about.innovationText':'Continuously adapting to technology and market needs.',
        'page.services.title':'Our Services',
        'page.services.intro':'We not only sell products, but also provide integrated solutions for your industrial needs.',
        'page.services.service1':'Industrial Goods Procurement & Safety Equipment',
        'page.services.service1Text':'Provides various work safety products, PPE, and industrial equipment with national & international standards.',
        'page.services.service2':'Trading of Agricultural & Plantation Equipment',
        'page.services.service2Text':'Distribution of modern tools to support productivity in the plantation and agricultural sectors.',
        'page.services.service3':'Consultation & Procurement Solutions',
        'page.services.service3Text':'Help clients determine needs and goods specifications according to company standards and budget.',
        'page.products.title':'Our Products',
        'page.products.intro':'A collection of high-quality products to meet your industrial needs.',
        'page.products.cat1':'Safety Equipment',
        'page.products.cat1Item1':'Safety Helmets',
        'page.products.cat1Item2':'Safety Vests',
        'page.products.cat1Item3':'Work Gloves',
        'page.products.cat1Item4':'Work Shoes',
        'page.products.cat2':'Agricultural Tools',
        'page.products.cat2Item1':'Quality Seeds',
        'page.products.cat2Item2':'Organic Fertilizers',
        'page.products.cat2Item3':'Pesticides',
        'page.products.cat2Item4':'Machinery Equipment',
        'page.products.cat3':'Industrial Equipment',
        'page.products.cat3Item1':'Industrial Pumps',
        'page.products.cat3Item2':'Electric Motors',
        'page.products.cat3Item3':'Pipes & Fittings',
        'page.products.cat3Item4':'Automation Systems',
        'page.clients.title':'Our Clients',
        'page.clients.intro':'We have been trusted by various companies in various sectors.',
        'page.clients.sectors':'Main Sectors',
        'page.clients.sector1':'Plantation',
        'page.clients.sector2':'Agriculture',
        'page.clients.sector3':'Manufacturing Industry',
        'page.clients.sector4':'Construction',
        'page.clients.sector5':'Energy & Mining',
        'page.clients.projects':'Selected Projects',
        'page.clients.project1':'Factory PPE Procurement',
        'page.clients.project1Desc':'Complete work safety equipment provision',
        'page.clients.project2':'Plantation Seed Distribution',
        'page.clients.project2Desc':'Superior seed shipment throughout the archipelago',
        'page.clients.project3':'Agricultural Automation System',
        'page.clients.project3Desc':'IoT technology implementation for efficiency',
        'page.contact.title':'Contact Us',
        'page.contact.intro':'We are ready to help you. Feel free to contact us.',
        'page.contact.contactInfo':'Contact Information',
        'page.contact.address':'Address',
        'page.contact.phone':'Phone',
        'page.contact.email':'Email',
        'page.contact.hours':'Operating Hours',
        'page.contact.message':'Send Message',
        'page.contact.namePlaceholder':'Your Name',
        'page.contact.emailPlaceholder':'Your Email',
        'page.contact.messagePlaceholder':'Your Message',
        'page.contact.send':'Send'
    }
};

function applyTranslations(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang] && translations[lang][key];
        if (text) {
            if ((el.tagName.toLowerCase() === 'h1' || el.tagName.toLowerCase() === 'p') && text.includes('<')) {
                el.innerHTML = text;
            } else {
                el.textContent = text.replace(/\\n/g, '\n');
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = translations[lang] && translations[lang][key];
        if (text) el.placeholder = text;
    });
    document.querySelectorAll('.lang-btn').forEach(b => {
        const isActive = b.getAttribute('data-lang') === lang;
        b.classList.toggle('active', isActive);
        b.setAttribute('data-active', isActive);
    });
}

window.setLang = function(lang){
    currentLang = lang;
    try { localStorage.setItem('site_lang', lang); } catch(e){}
    applyTranslations(lang);
}

function setupPreloader(){
    const pre = document.getElementById('preloader');
    if (!pre) return;
    window.addEventListener('load', () => {
        setTimeout(()=>{ pre.classList.add('hidden'); document.body.classList.add('page-visible'); }, 300);
    });
}

function scrollToTopAccelerated(){
    const duration = 600;
    const start = window.scrollY;
    const startTime = performance.now();
    function step(now){
        const t = Math.min(1, (now - startTime)/duration);
        const eased = t<0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
        window.scrollTo(0, Math.round(start * (1 - eased)));
        if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function setupFloatingButtons(){
    if (!document.querySelector('.floating-buttons')){
        const container = document.createElement('div');
        container.className = 'floating-buttons';
        const wa = document.createElement('button');
        wa.className = 'floating-btn whatsapp';
        wa.title = 'Chat WhatsApp';
        wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
        wa.addEventListener('click', ()=>{
            const phone = '6281380808810';
            window.open(`https://wa.me/${phone}`, '_blank');
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

document.addEventListener('DOMContentLoaded', ()=>{
    const lang = localStorage.getItem('site_lang') || 'id';
    currentLang = lang;
    applyTranslations(lang);
    setupPreloader();
    setupFloatingButtons();
});
