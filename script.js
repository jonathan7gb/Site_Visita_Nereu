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