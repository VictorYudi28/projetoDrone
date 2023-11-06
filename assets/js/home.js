// Objetos cards principal

const objetosCardsHome = [

    {
        imagem: "drone1.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Lorem Ipsum",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "drone2.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Lorem Ipsum",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "drone3.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Lorem Ipsum",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "drone4.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Lorem Ipsum",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

]

const sectionCardsElement = document.querySelector('.section-cards-cont');

objetosCardsHome.forEach( objetoCard => {
    
    sectionCardsElement.innerHTML += `
    
    <div class="col-md-6 col-lg-3 p-2">
        <div class="card">
            <img src="/assets/images/imagesIndex/${objetoCard.imagem}" class="card-img-top" alt="${objetoCard.altImagem}">
            <div class="card-body">
                <h5 class="card-title">${objetoCard.tituloH}</h5>
                <p class="card-text">
                    ${objetoCard.textoP}
                </p>
                <a href="${objetoCard.btnLink}" class="btn btn-primary">Saiba mais</a>
            </div>
        </div>
    </div>

    `

});

const cards = sectionCardsElement.querySelectorAll('.card')

cards.forEach((card) => {

    card.addEventListener('mouseover' , ()=> {

        card.classList.add('scale')

    })

})