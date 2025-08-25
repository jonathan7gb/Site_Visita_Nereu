document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.getElementById('menuMobile');
    const hamburgerMenuIcon = document.getElementById('menuHamburger');
    const btnClose = document.getElementById('btnClose');

    if (menuMobile && hamburgerMenuIcon && btnClose) {
        hamburgerMenuIcon.addEventListener('click', function(e) {
            e.preventDefault();
            menuMobile.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        btnClose.addEventListener('click', function(e) {
            e.preventDefault();
            menuMobile.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
});

const imgCards = document.querySelectorAll('.img-card, .img-card2, .img-card3, .img-card4');
imgCards.forEach(img => {
    img.style.transform = 'perspective(1000px)';
    img.addEventListener('mousemove', function(e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxAngle = 15;
        const rotateY = Math.max(-maxAngle, Math.min(maxAngle, ((x - centerX) / centerX) * maxAngle));
        const rotateX = Math.max(-maxAngle, Math.min(maxAngle, ((centerY - y) / centerY) * maxAngle));
        img.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    img.addEventListener('mouseleave', function() {
        img.style.transform = 'perspective(1000px)';
    });
});

// Carrossel de imagens para todas as seções com .carousel-container
const carousels = document.querySelectorAll('.carousel-container');
carousels.forEach(carouselContainer => {
    const track = carouselContainer.querySelector('.carousel-track');
    const items = track.querySelectorAll('.carousel-item');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    updateCarousel();
});
    
// Função genérica para todos os blocos Leia Mais/Ler Menos
function setupLeiaMaisMenos(btnMaisId, btnMenosId, hiddenId) {
    const btnMais = document.getElementById(btnMaisId);
    const btnMenos = document.getElementById(btnMenosId);
    const textHidden = document.getElementById(hiddenId);
    if (!btnMais || !btnMenos || !textHidden) return;
    textHidden.style.display = "none";
    btnMais.addEventListener('click', function() {
        textHidden.style.display = "flex";
        textHidden.style.flexDirection = "column";
        btnMais.style.display = "none";
    });
    btnMenos.addEventListener('click', function() {
        textHidden.style.display = "none";
        btnMais.style.display = "inline-block";
    });
}

// Chama para cada bloco
setupLeiaMaisMenos("LeiaMaisButton", "LeiaMenosButton", "text-hidden");
setupLeiaMaisMenos("LeiaMaisButton2", "LeiaMenosButton2", "text-hidden2");
setupLeiaMaisMenos("LeiaMaisButton3", "LeiaMenosButton3", "text-hidden3");
setupLeiaMaisMenos("LeiaMaisButton4", "LeiaMenosButton4", "text-hidden4");

