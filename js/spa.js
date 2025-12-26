/* SPA Content and Router */

window.productsData = {
    safety: [
        { id: 'saf-01', name_i18n: 'page.products.cat1Item1', img: 'images/logo.png', alt_id: 'Helm Keselamatan', desc_id: 'Helm keselamatan berkualitas tinggi yang dirancang untuk perlindungan maksimal di lingkungan kerja. Material kuat, tahan benturan, dengan suspensi yang nyaman.', desc_en: 'High-quality safety helmet designed for maximum protection in the work environment. Strong, impact-resistant material with a comfortable suspension.' },
        { id: 'saf-02', name_i18n: 'page.products.cat1Item2', img: 'images/logo.png', alt_id: 'Rompi Pengaman', desc_id: 'Rompi dengan visibilitas tinggi, dilengkapi dengan strip reflektif untuk keamanan kerja di malam hari atau kondisi minim cahaya.', desc_en: 'High-visibility vest equipped with reflective strips for work safety at night or in low-light conditions.' },
        { id: 'saf-03', name_i18n: 'page.products.cat1Item3', img: 'images/logo.png', alt_id: 'Sarung Tangan', desc_id: 'Sarung tangan pelindung multi-fungsi, memberikan cengkeraman kuat dan proteksi terhadap goresan dan bahan kimia ringan.', desc_en: 'Multi-functional protective gloves, providing a strong grip and protection against scratches and light chemicals.' },
        { id: 'saf-04', name_i18n: 'page.products.cat1Item4', img: 'images/logo.png', alt_id: 'Sepatu Kerja', desc_id: 'Sepatu kerja dengan ujung baja dan sol anti-slip, memberikan perlindungan dan kenyamanan sepanjang hari kerja.', desc_en: 'Work shoes with steel toes and anti-slip soles, providing protection and comfort throughout the workday.' }
    ],
    agriculture: [
        { id: 'agr-01', name_i18n: 'page.products.cat2Item1', img: 'images/logo.png', alt_id: 'Bibit Berkualitas', desc_id: 'Bibit tanaman unggul yang telah melalui proses seleksi ketat untuk menjamin hasil panen yang optimal dan berkualitas.', desc_en: 'Superior plant seeds that have undergone a rigorous selection process to ensure optimal and high-quality yields.' },
        { id: 'agr-02', name_i18n: 'page.products.cat2Item2', img: 'images/logo.png', alt_id: 'Pupuk Organik', desc_id: 'Pupuk organik murni yang menyuburkan tanah dan menutrisi tanaman secara alami, ramah lingkungan dan berkelanjutan.', desc_en: 'Pure organic fertilizer that naturally enriches the soil and nourishes plants, environmentally friendly and sustainable.' },
        { id: 'agr-03', name_i18n: 'page.products.cat2Item3', img: 'images/logo.png', alt_id: 'Pestisida', desc_id: 'Pestisida efektif untuk mengendalikan hama dan penyakit tanaman, dengan formula yang aman bagi lingkungan jika digunakan sesuai anjuran.', desc_en: 'Effective pesticide for controlling plant pests and diseases, with an environmentally safe formula when used as directed.' },
        { id: 'agr-04', name_i18n: 'page.products.cat2Item4', img: 'images/logo.png', alt_id: 'Peralatan Mesin', desc_id: 'Berbagai macam peralatan mesin pertanian modern untuk meningkatkan efisiensi dan kecepatan dalam proses pengolahan lahan.', desc_en: 'A wide range of agricultural machinery to increase efficiency and speed in land processing.' }
    ],
    industrial: [
        { id: 'ind-01', name_i18n: 'page.products.cat3Item1', img: 'images/logo.png', alt_id: 'Pompa Industri', desc_id: 'Pompa industri heavy-duty dengan daya tahan tinggi, cocok untuk berbagai kebutuhan transfer cairan di lingkungan pabrik.', desc_en: 'Heavy-duty industrial pump with high durability, suitable for various fluid transfer needs in a factory environment.' },
        { id: 'ind-02', name_i18n: 'page.products.cat3Item2', img: 'images/logo.png', alt_id: 'Motor Listrik', desc_id: 'Motor listrik efisiensi tinggi yang memberikan tenaga handal untuk berbagai aplikasi mesin industri.', desc_en: 'High-efficiency electric motor that provides reliable power for various industrial machine applications.' },
        { id: 'ind-03', name_i18n: 'page.products.cat3Item3', img: 'images/logo.png', alt_id: 'Pipa & Fitting', desc_id: 'Sistem perpipaan dan fitting lengkap dengan material berkualitas, tahan korosi, dan tekanan tinggi.', desc_en: 'Complete piping and fitting system with quality materials, resistant to corrosion and high pressure.' },
        { id: 'ind-04', name_i18n: 'page.products.cat3Item4', img: 'images/logo.png', alt_id: 'Sistem Otomasi', desc_id: 'Solusi sistem otomasi industri untuk meningkatkan produktivitas, presisi, dan mengurangi biaya operasional.', desc_en: 'Industrial automation system solutions to increase productivity, precision, and reduce operational costs.' }
    ]
};

function generateProductCards(category) {
    return productsData[category].map(product => `
        <div class="product-card" data-product-id="${product.id}" data-category="${category}">
            <img src="${product.img}" alt="${product.alt_id}">
            <div class="product-card-content">
                <h4 data-i18n="${product.name_i18n}">${product.alt_id}</h4>
            </div>
        </div>
    `).join('');
}

function generateProductPage() {
    return `
        <section id="products-page" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.products.title">Produk Kami</h2>
                    <p data-i18n="page.products.intro">Koleksi produk berkualitas tinggi untuk memenuhi kebutuhan industri Anda.</p>
                </div>

                <!-- Safety Equipment -->
                <div class="text-center" style="margin-bottom: 30px;">
                     <h3 class="product-category-title" data-i18n="page.products.cat1">Safety Equipment</h3>
                </div>
                <div class="products-grid">
                    ${generateProductCards('safety')}
                </div>

                <!-- Agricultural Tools -->
                <div class="text-center" style="margin-bottom: 30px;">
                    <h3 class="product-category-title" data-i18n="page.products.cat2">Alat Pertanian</h3>
                </div>
                <div class="products-grid">
                    ${generateProductCards('agriculture')}
                </div>

                <!-- Industrial Equipment -->
                <div class="text-center" style="margin-bottom: 30px;">
                    <h3 class="product-category-title" data-i18n="page.products.cat3">Peralatan Industri</h3>
                </div>
                <div class="products-grid">
                    ${generateProductCards('industrial')}
                </div>
            </div>
        </section>
    `;
}

const pages = {
    home: `
        <section id="hero">
            <div class="container hero-content">
                <h1 data-i18n="hero.title">Your Reliable Partner for <br><span style="color: var(--accent-green);">Sustainable Business</span></h1>
                <p data-i18n="hero.subtitle">Mitra terpercaya dalam penyediaan barang dan jasa. Kami menghadirkan produk berkualitas serta layanan profesional untuk keberhasilan operasional Anda.</p>
                <a href="#contact" class="btn btn-primary" data-i18n="btn.contact">Hubungi Kami</a>
                <a href="#products" class="btn btn-secondary" style="margin-left: 10px;" data-i18n="btn.products">Lihat Produk</a>
            </div>
        </section>
    `,
    about: `
        <section id="about-page" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.about.title">Tentang Kami</h2>
                </div>
        
                <div class="about-main-text">
                    <p data-i18n="page.about.intro"><strong>PT Geberindo Antar Sukses (GAS)</strong> merupakan perusahaan yang bergerak di bidang jasa dan perdagangan besar, dengan fokus pada penyediaan alat-alat perkebunan, peralatan keselamatan kerja (safety equipment), dan berbagai kebutuhan industri lainnya. Kami hadir untuk menjadi mitra strategis bagi perusahaan yang membutuhkan solusi pengadaan barang dan jasa yang cepat, efisien, dan terpercaya.</p>
                </div>
        
                <div class="vision-container">
                    <h3><i class="fa-solid fa-eye"></i> <span data-i18n="page.about.vision">Visi</span></h3>
                    <p data-i18n="page.about.visionText">Menjadi perusahaan jasa dan perdagangan besar yang terpercaya, inovatif, berkelanjutan dan berdaya saing tinggi di tingkat nasional maupun internasional, dengan memberikan solusi terbaik bagi pelanggan dan mitra usaha.</p>
                </div>
        
                <div class="mission-container">
                    <h3><i class="fa-solid fa-bullseye"></i> <span data-i18n="page.about.mission">Misi</span></h3>
                    <ul>
                        <li><i class="fa-solid fa-check"></i> <span data-i18n="page.about.mission1">Memberikan layanan jasa dan produk perdagangan yang berkualitas, tepat waktu, dan sesuai kebutuhan pelanggan.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span data-i18n="page.about.mission2">Membangun jaringan distribusi dan kemitraan jangka panjang yang saling menguntungkan dengan pelanggan, pemasok dan pemangku kepentingan.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span data-i18n="page.about.mission3">Mengembangkan sumber daya manusia yang profesional, berintegritas dan berorientasi pada kepuasan pelanggan.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span data-i18n="page.about.mission4">Mengoptimalkan teknologi dan sistem manajemen modern untuk meningkatkan efisiensi dan daya saing perusahaan.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span data-i18n="page.about.mission5">Berkontribusi aktif terhadap pembangunan ekonomi nasional melalui kegiatan usaha yang beretika dan berkelanjutan.</span></li>
                    </ul>
                </div>
        
                <div class="values-container">
                     <h3 class="text-center section-title" data-i18n="page.about.values">Nilai Perusahaan</h3>
                     <div class="values-grid">
                        <div class="value-card">
                            <i class="fa-solid fa-handshake"></i>
                            <h4 data-i18n="page.about.integrity">Integritas</h4>
                            <p data-i18n="page.about.integrityText">Menjaga kejujuran dan profesionalitas dalam setiap langkah.</p>
                        </div>
                        <div class="value-card">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <h4 data-i18n="page.about.commitment">Komitmen</h4>
                            <p data-i18n="page.about.commitmentText">Fokus pada hasil dan kepuasan pelanggan.</p>
                        </div>
                        <div class="value-card">
                            <i class="fa-solid fa-users"></i>
                            <h4 data-i18n="page.about.collaboration">Kolaborasi</h4>
                            <p data-i18n="page.about.collaborationText">Bekerja sama dengan mitra dan pelanggan untuk hasil terbaik.</p>
                        </div>
                        <div class="value-card">
                            <i class="fa-solid fa-lightbulb"></i>
                            <h4 data-i18n="page.about.innovation">Inovasi</h4>
                            <p data-i18n="page.about.innovationText">Terus beradaptasi dengan teknologi dan kebutuhan pasar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    services: `
        <section id="services-page" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.services.title">Layanan Kami</h2>
                    <p data-i18n="page.services.intro">Kami tidak hanya menjual produk, tetapi juga menghadirkan solusi terpadu untuk kebutuhan industri Anda.</p>
                </div>
                <div class="service-details-grid">
                    <div class="service-detail-card">
                        <i class="fa-solid fa-industry"></i>
                        <h4 data-i18n="page.services.service1">Pengadaan Barang Industri &amp; Safety Equipment</h4>
                        <p data-i18n="page.services.service1Text">Menyediakan berbagai produk keselamatan kerja, APD, dan peralatan industri dengan standar nasional &amp; internasional.</p>
                    </div>
                    <div class="service-detail-card">
                        <i class="fa-solid fa-tractor"></i>
                        <h4 data-i18n="page.services.service2">Perdagangan Alat Perkebunan &amp; Pertanian</h4>
                        <p data-i18n="page.services.service2Text">Distribusi alat-alat modern untuk mendukung produktivitas di sektor perkebunan dan pertanian.</p>
                    </div>
                    <div class="service-detail-card">
                        <i class="fa-solid fa-comments"></i>
                        <h4 data-i18n="page.services.service3">Konsultasi &amp; Solusi Pengadaan</h4>
                        <p data-i18n="page.services.service3Text">Membantu klien dalam menentukan kebutuhan dan spesifikasi barang sesuai standar perusahaan dan anggaran.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    products: generateProductPage(),
    clients: `
        <section id="clients" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.clients.title">Klien Kami</h2>
                    <p data-i18n="page.clients.intro">Kami telah dipercaya oleh berbagai perusahaan di berbagai sektor.</p>
                </div>
                <div class="clients-grid">
                    <div class="client-sektor">
                        <h3 data-i18n="page.clients.sectors">Sektor Utama</h3>
                        <ul>
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector1">Perkebunan</span></li>
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector2">Pertanian</span></li>
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector3">Industri Manufaktur</span></li>
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector4">Konstruksi</span></li>
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector5">Energi &amp; Pertambangan</span></li>
                        </ul>
                    </div>
                    <div class="client-proyek">
                        <h3 data-i18n="page.clients.projects">Proyek Terpilih</h3>
                        <div class="proyek-item">
                            <h4 data-i18n="page.clients.project1">Pengadaan APD Pabrik</h4>
                            <p style="color:#999;font-size:0.9rem;" data-i18n="page.clients.project1Desc">Penyediaan lengkap equipment keselamatan kerja</p>
                        </div>
                        <div class="proyek-item">
                            <h4 data-i18n="page.clients.project2">Distribusi Bibit Perkebunan</h4>
                            <p style="color:#999;font-size:0.9rem;" data-i18n="page.clients.project2Desc">Pengiriman bibit unggul ke seluruh nusantara</p>
                        </div>
                        <div class="proyek-item">
                            <h4 data-i18n="page.clients.project3">Sistem Otomasi Pertanian</h4>
                            <p style="color:#999;font-size:0.9rem;" data-i18n="page.clients.project3Desc">Implementasi teknologi IoT untuk efisiensi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    contact: `
        <section id="contact-page" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.contact.title">Hubungi Kami</h2>
                    <p data-i18n="page.contact.intro">Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-details">
                        <h3 data-i18n="page.contact.contactInfo">Informasi Kontak</h3>
                        <div class="contact-item">
                            <i class="fa-solid fa-map-pin"></i>
                            <div>
                                <strong data-i18n="page.contact.address">Alamat</strong>
                                <p data-i18n="footer.address">Gedung Menara 165, Lantai 17 Unit A<br>Jl. TB Simatupang Kav-1, Jakarta Selatan 12560</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-phone"></i>
                            <p>
                                <strong data-i18n="page.contact.phone">Telepon</strong><br>
                                <span data-i18n="footer.phone">021-38820017 / 0813 8080 810 (WA)</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-envelope"></i>
                            <p>
                                <strong data-i18n="page.contact.email">Email</strong><br>
                                <a href="mailto:info@geberindo.com">info@geberindo.com</a>
                            </p>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-clock"></i>
                            <p>
                                <strong data-i18n="page.contact.hours">Jam Operasional</strong><br>
                                <span data-i18n="footer.hours">Senin - Jumat: 08.00-17.00 WIB</span>
                            </p>
                        </div>
                    </div>
                    <div class="contact-map">
                        <h3 data-i18n="page.contact.message">Kirim Pesan</h3>
                        <form id="contact-form" style="display:flex;flex-direction:column;gap:12px;">
                            <input name="name" type="text" placeholder="Nama Anda" data-i18n-placeholder="page.contact.namePlaceholder" style="padding:10px;border:1px solid #ddd;border-radius:8px;"/>
                            <input name="email" type="email" placeholder="Email Anda" data-i18n-placeholder="page.contact.emailPlaceholder" style="padding:10px;border:1px solid #ddd;border-radius:8px;"/>
                            <textarea name="message" placeholder="Pesan Anda" data-i18n-placeholder="page.contact.messagePlaceholder" rows="4" style="padding:10px;border:1px solid #ddd;border-radius:8px;"></textarea>
                            <button type="submit" class="btn btn-primary" data-i18n="page.contact.send">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
};

function renderPage(pageName) {
    const appContent = document.getElementById('app-content');
    const preloader = document.getElementById('preloader');

    // 1. Show preloader and start fading out content
    if (preloader) {
        preloader.classList.remove('hidden');
    }
    if (appContent) {
        appContent.classList.add('fade-out');
    }

    // 2. Wait for fade-out, then change content and fade back in
    setTimeout(() => {
        const content = pages[pageName] || pages['home'];
        if (appContent) {
            appContent.innerHTML = content;
            if(typeof applyTranslations === 'function' && typeof currentLang !== 'undefined'){
                applyTranslations(currentLang);
            }
            
            // Add contact form listener if on contact page
            if (pageName === 'contact') {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                    contactForm.addEventListener('submit', function(event) {
                        event.preventDefault();
                        
                        const contactForm = event.target;
                        const submitButton = contactForm.querySelector('button[type="submit"]');
                        
                        // Remove any existing message
                        let existingMessage = contactForm.querySelector('.form-message');
                        if (existingMessage) {
                            existingMessage.remove();
                        }

                        // Create and show a "sending" message
                        const sendingMsg = document.createElement('p');
                        sendingMsg.className = 'form-message';
                        sendingMsg.textContent = 'Mempersiapkan aplikasi email Anda...';
                        sendingMsg.style.marginTop = '10px';
                        sendingMsg.style.fontWeight = '500';
                        sendingMsg.style.color = 'var(--primary-color)';
                        contactForm.appendChild(sendingMsg);
                        submitButton.disabled = true;

                        // Construct mailto link
                        const name = contactForm.elements.name.value;
                        const fromEmail = contactForm.elements.email.value;
                        const message = contactForm.elements.message.value;
                        const toEmail = 'info@geberindo.com';
                        const subject = `Pesan dari ${name} (via Website)`;
                        const body = `Pengirim: ${name}\nEmail: ${fromEmail}\n\nPesan:\n${message}`;
                        const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        
                        // After a delay, attempt to open mail client and reset the form
                        setTimeout(() => {
                            window.location.href = mailtoLink;
                            
                            // Reset form state for when the user returns to the tab
                            contactForm.reset(); 
                            submitButton.disabled = false;
                            if(contactForm.querySelector('.form-message')) {
                                contactForm.querySelector('.form-message').remove();
                            }
                        }, 800);
                    });
                }
            }

            // Add product card listener if on product page
            if (pageName === 'products') {
                const productCards = document.querySelectorAll('.product-card');
                productCards.forEach(card => {
                    card.addEventListener('click', () => {
                        const productId = card.dataset.productId;
                        const category = card.dataset.category;
                        if(typeof window.openProductModal === 'function') {
                            window.openProductModal(category, productId);
                        }
                    });
                });
            }

            // 3. Remove fade-out to trigger fade-in animation
            appContent.classList.remove('fade-out');
        }

        // 4. Hide preloader after a short delay to let content start rendering
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
            }
        }, 50); 

        window.scrollTo(0, 0);
        
        if (typeof closeMenu === 'function') {
            closeMenu();
        }
    }, 300); // This duration should match the fade-out transition
}

function router() {
    const hash = window.location.hash.slice(1) || 'home';
    renderPage(hash);
    updateNavActive(hash);
}

function updateNavActive(page) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        link.classList.toggle('active', href === page);
    });
    document.querySelectorAll('.mobile-bottom-nav .mbn-item').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        link.classList.toggle('active', href === page);
    });
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', () => {
    router();
});
