/* SPA Content and Router */

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
                        <h4 data-i18n="page.services.service1">Pengadaan Barang Industri & Safety Equipment</h4>
                        <p data-i18n="page.services.service1Text">Menyediakan berbagai produk keselamatan kerja, APD, dan peralatan industri dengan standar nasional & internasional.</p>
                    </div>
                    <div class="service-detail-card">
                        <i class="fa-solid fa-tractor"></i>
                        <h4 data-i18n="page.services.service2">Perdagangan Alat Perkebunan & Pertanian</h4>
                        <p data-i18n="page.services.service2Text">Distribusi alat-alat modern untuk mendukung produktivitas di sektor perkebunan dan pertanian.</p>
                    </div>
                    <div class="service-detail-card">
                        <i class="fa-solid fa-comments"></i>
                        <h4 data-i18n="page.services.service3">Konsultasi & Solusi Pengadaan</h4>
                        <p data-i18n="page.services.service3Text">Membantu klien dalam menentukan kebutuhan dan spesifikasi barang sesuai standar perusahaan dan anggaran.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    products: `
        <section id="products-page" class="section-padding">
            <div class="container">
                <div class="text-center" style="margin-bottom: 50px;">
                    <h2 class="section-title" data-i18n="page.products.title">Produk Kami</h2>
                    <p data-i18n="page.products.intro">Koleksi produk berkualitas tinggi untuk memenuhi kebutuhan industri Anda.</p>
                </div>
                <div class="service-container">
                    <div class="service-box">
                        <div class="service-header">
                            <i class="fa-solid fa-hard-hat"></i>
                            <h3 data-i18n="page.products.cat1">Safety Equipment</h3>
                        </div>
                        <div class="service-body">
                            <ul>
                                <li data-i18n="page.products.cat1Item1">Helm Keselamatan</li>
                                <li data-i18n="page.products.cat1Item2">Rompi Pengaman</li>
                                <li data-i18n="page.products.cat1Item3">Sarung Tangan</li>
                                <li data-i18n="page.products.cat1Item4">Sepatu Kerja</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-header">
                            <i class="fa-solid fa-tractor"></i>
                            <h3 data-i18n="page.products.cat2">Alat Pertanian</h3>
                        </div>
                        <div class="service-body">
                            <ul>
                                <li data-i18n="page.products.cat2Item1">Bibit Berkualitas</li>
                                <li data-i18n="page.products.cat2Item2">Pupuk Organik</li>
                                <li data-i18n="page.products.cat2Item3">Pestisida</li>
                                <li data-i18n="page.products.cat2Item4">Peralatan Mesin</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-box">
                        <div class="service-header">
                            <i class="fa-solid fa-wrench"></i>
                            <h3 data-i18n="page.products.cat3">Peralatan Industri</h3>
                        </div>
                        <div class="service-body">
                            <ul>
                                <li data-i18n="page.products.cat3Item1">Pompa Industri</li>
                                <li data-i18n="page.products.cat3Item2">Motor Listrik</li>
                                <li data-i18n="page.products.cat3Item3">Pipa & Fitting</li>
                                <li data-i18n="page.products.cat3Item4">Sistem Otomasi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
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
                            <li><i class="fa-solid fa-check-circle"></i> <span data-i18n="page.clients.sector5">Energi & Pertambangan</span></li>
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
                            <p>
                                <strong data-i18n="page.contact.address">Alamat</strong><br>
                                <span data-i18n="footer.address">Gedung Menara 165, Lantai 17 Unit A<br>Jl. TB Simatupang Kav-1, Jakarta Selatan 12560</span>
                            </p>
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
                        <form style="display:flex;flex-direction:column;gap:12px;">
                            <input type="text" placeholder="Nama Anda" data-i18n-placeholder="page.contact.namePlaceholder" style="padding:10px;border:1px solid #ddd;border-radius:8px;"/>
                            <input type="email" placeholder="Email Anda" data-i18n-placeholder="page.contact.emailPlaceholder" style="padding:10px;border:1px solid #ddd;border-radius:8px;"/>
                            <textarea placeholder="Pesan Anda" data-i18n-placeholder="page.contact.messagePlaceholder" rows="4" style="padding:10px;border:1px solid #ddd;border-radius:8px;"></textarea>
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
    const content = pages[pageName] || pages['home'];
    appContent.innerHTML = content;
    setTimeout(() => {
        applyTranslations(currentLang);
    }, 50);
    window.scrollTo(0, 0);
    closeMenu();
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
