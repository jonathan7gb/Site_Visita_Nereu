const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}, {})

const galeria = document.querySelectorAll(".img")
galeria.forEach(foto => observer.observe(foto))

const textos = document.querySelectorAll(".textMain")
textos.forEach(textos => observer.observe(textos))

const cardsIntegrante = document.querySelectorAll(".cardIntegrante")
cardsIntegrante.forEach(card => observer.observe(card))

const cardInicio = document.querySelectorAll(".card")
cardInicio.forEach(card => observer.observe(card))