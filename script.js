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

$(document).ready(function(){
    const slider = $('.imgsViagem');

    slider.slick({
        dots: true,           // bolinhas de navegação
        infinite: true,       // loop infinito
        speed: 500,           // velocidade transição
        autoplay: true,       // passar sozinho
        autoplaySpeed: 15000,
        responsive: [
            {
                breakpoint: 768, // Quando a tela for 768px ou menor
                settings: {
                    slidesToShow: 1, // Mostra 1 slide
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // Quando a tela for 1024px ou menor
                settings: {
                    slidesToShow: 2, // Mostra 2 slides
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 9999, // Qualquer valor acima de 1024px
                settings: {
                    slidesToShow: 3, // Mostra 2 slides
                    slidesToScroll: 3
                }
            }
        ]   // tempo de cada slide
    });
    // Botão anterior
    $('#back').on('click', function(){
        slider.slick('slickPrev');
    });

    // Botão próximo
    $('#next').on('click', function(){
        slider.slick('slickNext');
    });
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

