const btnLerMais = document.getElementById("LeiaMaisButton")
const btnLerMenos = document.getElementById("LeiaMenosButton")

const textHidden = document.getElementById("text-hidden")
// Garante que o texto oculto esteja escondido ao carregar
textHidden.style.display = "none";

function esconderTexto(){
    if(textHidden.style.display === "none"){
        textHidden.style.display = "flex";
        textHidden.style.flexDirection = "column";
        btnLerMais.style.display = "none"
    }else{
        btnLerMais.style.display = "block"
        textHidden.style.display = "none";
    }
}

btnLerMais.addEventListener('click', esconderTexto)
btnLerMenos.addEventListener('click', esconderTexto)