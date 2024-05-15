let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
    if(menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    }else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Função Carrosel 

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numerSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    // numrSlides = 3
    // numrSlides = 1 -> 2
    // estou no último? 2

    // [0, 1, 2]

    if(slideAtual < (numerSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    //Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0){
        slideAtual--
    } else {
        slideAtual = numerSlides - 1
    }

    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=54",
        descricao: "Uma empresa de tecnologia lança um desafioo de gamificação onde os funcionarios devem propor e implementar ideias inovadoras.",
        link: "",
        idproduto: ""
    },

    {
        imagem: "https://unsplash.it/600/400?image=20",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para oseu programa de treinamento.",
        link: "",
        idproduto: ""
    },
    
    {
        imagem: "https://unsplash.it/600/400?image=17",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que complementem que competem pelo topo do ranking.",
        link: "",
        idproduto: ""
    },

    {
        imagem: "https://unsplash.it/600/400?image=26",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio da gamificação de condicionamento físico.",
        link: "",
        idproduto: ""
    },
]

const renderizarCases =() => {
    let elementoLista = document.getElementById("lista-cards")

    // template Strings
    let template = ""

    listaCases.forEach( cardCase => {
        // template++ ou template +=1 ambos são iguais
        // SRC é para imagem e P é para descrição só trocar do html para o js colocar dentro da crase ${e aqui dentro colocar a descrição ou a imagem }
            template += ` <div class="card">
            <img src="${cardCase.imagem}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>
        </div>`
    } )

    elementoLista.innerHTML = template
}




