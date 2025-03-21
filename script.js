// 1. Kategoriler için Hover Animasyonu
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('.category-title');
            title.style.transform = 'translateY(-10px)';
            title.style.transition = 'transform 0.3s ease';
            
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'all 0.5s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const title = this.querySelector('.category-title');
            title.style.transform = 'translateY(0)';
            
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});

// 2. Sayfa Kaydırma Animasyonu
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});

// CSS sınıfını ekleyin (style etiketinin içine):
// .animate-fadeIn {
//     animation: fadeIn 0.8s forwards;
// }
// @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(20px); }
//     to { opacity: 1; transform: translateY(0); }
// }

// 3. Başlık için Yazı Efekti
document.addEventListener('DOMContentLoaded', function() {
    const brandText = document.querySelector('.brand');
    const text = brandText.textContent;
    brandText.textContent = '';
    
    for(let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.2s ease';
        span.style.transitionDelay = (i * 0.1) + 's';
        brandText.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
        }, 100);
    }
});

// 4. Otomatik Değişen Slogan
document.addEventListener('DOMContentLoaded', function() {
    // Header'ın altına yeni bir div ekleyin
    const header = document.querySelector('.header');
    const sloganContainer = document.createElement('div');
    sloganContainer.className = 'slogan-container';
    sloganContainer.style.textAlign = 'center';
    sloganContainer.style.padding = '15px';
    sloganContainer.style.backgroundColor = '#a60000';
    sloganContainer.style.color = 'white';
    sloganContainer.style.fontWeight = 'bold';
    
    const sloganText = document.createElement('p');
    sloganText.id = 'changing-slogan';
    sloganContainer.appendChild(sloganText);
    
    header.parentNode.insertBefore(sloganContainer, header.nextSibling);
    
    const slogans = [
        "Ankara: Türkiye'nin Kalbi",
        "Tarihin ve Modernliğin Buluştuğu Şehir",
        "Başkentin Büyüsünü Keşfedin",
        "Ankara'nın Kültürel Zenginliğini Yaşayın",
        "Anıtkabir'den Kızılay'a, Ankara'nın Güzelliklerini Keşfedin"
    ];
    
    let currentSlogan = 0;
    
    function changeSlogan() {
        const slogan = document.getElementById('changing-slogan');
        slogan.style.opacity = '0';
        
        setTimeout(() => {
            slogan.textContent = slogans[currentSlogan];
            slogan.style.opacity = '1';
            currentSlogan = (currentSlogan + 1) % slogans.length;
        }, 500);
    }
    
    // İlk sloganı göster
    document.getElementById('changing-slogan').textContent = slogans[0];
    document.getElementById('changing-slogan').style.opacity = '1';
    document.getElementById('changing-slogan').style.transition = 'opacity 0.5s ease';
    
    // 5 saniyede bir sloganı değiştir
    setInterval(changeSlogan, 5000);
});

// 5. Navbar için Aktif Durum ve Animasyon
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Geçerli sayfayı belirle
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // Aktif sayfayı belirle
        if (href === currentPage) {
            item.classList.add('active-nav');
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }
        
        // Hover animasyonu
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active-nav')) {
                this.style.transform = 'translateY(-3px)';
                this.style.transition = 'all 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active-nav')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

// 6. Arama Kutusu Animasyonu
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.querySelector('.search-box');
    const searchContainer = document.querySelector('.search-container');
    
    searchBox.addEventListener('focus', function() {
        searchContainer.style.transform = 'scale(1.05)';
        searchContainer.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    });
    
    searchBox.addEventListener('blur', function() {
        searchContainer.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// 7. Sayfa Yükleme Animasyonu
document.addEventListener('DOMContentLoaded', function() {
    // Sayfayı gizleyen overlay'i oluştur
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#c41111';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.transition = 'opacity 0.8s ease';
    
    // Ankara yazısı ve simgesi
    const loaderContent = document.createElement('div');
    loaderContent.style.textAlign = 'center';
    loaderContent.style.color = 'white';
    
    const loaderText = document.createElement('h1');
    loaderText.textContent = 'ANKARA TANITIM';
    loaderText.style.fontSize = '2.5rem';
    loaderText.style.marginBottom = '20px';
    
    const loaderSubtext = document.createElement('p');
    loaderSubtext.textContent = 'Hoş geldiniz...';
    loaderSubtext.style.fontSize = '1.2rem';
    
    loaderContent.appendChild(loaderText);
    loaderContent.appendChild(loaderSubtext);
    overlay.appendChild(loaderContent);
    
    document.body.appendChild(overlay);
    
    // Animasyon
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 800);
    }, 1500);
});

// 8. Footer Sosyal Medya İkonları (Footera eklemek için)
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    
    const socialContainer = document.createElement('div');
    socialContainer.className = 'social-container';
    socialContainer.style.display = 'flex';
    socialContainer.style.justifyContent = 'center';
    socialContainer.style.margin = '20px 0';
    socialContainer.style.gap = '15px';
    
    const socialIcons = [
        { name: 'facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
        { name: 'twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
        { name: 'instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 7.5h.01 M7.5 2h9a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5z' },
        { name: 'youtube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z' }
    ];
    
    socialIcons.forEach(icon => {
        const socialLink = document.createElement('a');
        socialLink.href = '#';
        socialLink.style.display = 'flex';
        socialLink.style.alignItems = 'center';
        socialLink.style.justifyContent = 'center';
        socialLink.style.width = '40px';
        socialLink.style.height = '40px';
        socialLink.style.borderRadius = '50%';
        socialLink.style.backgroundColor = 'white';
        socialLink.style.transition = 'transform 0.3s ease';
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', '20');
        svg.setAttribute('height', '20');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', '#c41111');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', icon.path);
        
        svg.appendChild(path);
        socialLink.appendChild(svg);
        
        socialLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        socialLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        socialContainer.appendChild(socialLink);
    });
    
    footer.insertBefore(socialContainer, footer.firstChild);
});
