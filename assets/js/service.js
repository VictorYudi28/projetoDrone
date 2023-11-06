// Objetos serviços

const objetosCardsServiços = [

    {
        imagem: "painelSolar.jpg",
        altImagem: 'Imagem de um homem analisando um painel solar',
        tituloH: "Painel Solar",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "fotografiaDrone.jpg",
        altImagem: 'Imagem de um drone com seus equipamentos',
        tituloH: "Fotografia Aérea",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },

    {
        imagem: "homemPilotandoDrone.jpg",
        altImagem: 'Imagem de um homem pilotando um drone',
        tituloH: "Filmagem",
        textoP:
            " Some quick example text to build on the card title and make up the bulk of the cards content.",
        btnLink: "#",
    },    

    

];

const serviceCont = document.querySelector(".service-cont");

objetosCardsServiços.forEach((objetoCard) => {

    serviceCont.innerHTML += `
    
    <div class=" col-lg-4 my-2">
        <div class="card">
            <img src="../assets/images/imagesService/${objetoCard.imagem}" class="card-img-top img-fluid" alt="${objetoCard.altImagem}" />
            <div class="card-body">
                <h5 class="card-title">${objetoCard.tituloH}</h5>
                <p class="card-text">
                    ${objetoCard.textoP}
                </p>
                <a href="${objetoCard.btnLink}" class="btn btn-primary">Saiba Mais</a>
            </div>
        </div>
    </div>
    
    `;

});

const cards = serviceCont.querySelectorAll('.card')

cards.forEach((card) => {

    card.addEventListener('mouseover' , ()=> {

        card.classList.add('scale')

    })

})
