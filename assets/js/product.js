// Objetos Product

const objetosCardsProduct = [

    {
        imagem: "drone1.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Drone",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "drone2.jpg",
        altImagem: 'Imagem de um um drone voando',
        tituloH: "Drone",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "drone3.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Drone",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },  
    
    {
        imagem: "drone4.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Drone",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },    

    {
        imagem: "drone5.jpg",
        altImagem: 'Imagem de um drone voando',
        tituloH: "Drone",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    }  

];

const productCont = document.querySelector('.product-cont');

objetosCardsProduct.forEach((objetoCard) => {

    productCont.innerHTML += `
    
    <div class="col-md-6 col-lg-4 p-2">
        <div class="card">
            <img src="../assets/images/imagesIndex/${objetoCard.imagem}" class="card-img-top" alt="${objetoCard.altImagem}">
            <div class="card-body">
                <h5 class="card-title">${objetoCard.tituloH}</h5>
                <p class="card-text">
                    ${objetoCard.textoP}
                </p>
                <a href="${objetoCard.btnLink}" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>

    `

})

const cards = productCont.querySelectorAll('.card')

cards.forEach((card) => {

    card.addEventListener('mouseover' , ()=> {

        card.classList.add('scale')

    })

})