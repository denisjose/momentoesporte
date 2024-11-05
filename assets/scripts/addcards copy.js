const authors = [
    {
        "author-name": "Mateus Augusto",
        "author-nickname": "Mateus",
        "author-page": "mateus"
    },
    {
        "author-name": "Gilberto Gil",
        "author-nickname": "Gil Gil",
        "author-page": "gilgil"
    }
]

const posts = [
    {
        "card-img-src": "/assets/imgs/posts/Bola_de_Ouro_por_que_Vini_Jr_e_Real_Madrid_boicotaram_a_premiação.png",
        "card-title": "Bola de Ouro: por que Vini Jr. e Real Madrid boicotaram a premiação?",
        "card-text": "Atacante do Real Madrid e vencedor da Champions League, Vini Jr. era considerado um dos favoritos para vencer o prêmio Bola de Ouro masculino nesta segunda-feira (28/10). Mas o jogador brasileiro nem chegou a viajar para Paris, onde ocorreu a cerimônia de premiação.",
        "author-id": 0,
        "publish-date": {
            "date": ["31","10","2024"],
            "hour": ["20","34"]
        }
    },

    {
        "card-img-src": "/assets/imgs/posts/Caio_Ribeiro_revela_votos_de_Cleber_Machado_para_a_Bola_de_Ouro.png",
        "card-title": "Caio Ribeiro revela votos de Cleber Machado para a Bola de Ouro",
        "card-text": "Bola de Ouro foi entregue a Rodri, volante do Manchester City, nesta segunda-feira (28/10); saiba como representante brasileiro votou",
        "author-id": 1,
        "publish-date": {
            "date": ["28","10","2024"],
            "hour": ["23","47"]
        }
    }
];

function renderNews() {
    const newsContainer = document.getElementById("news-container");
    posts.forEach(post => {
        const newsCard = document.createElement("div");
        newsCard.className = "col-md-4 mb-4";

        const date = post["publish-date"]["date"]
        const hour = post["publish-date"]["hour"]

        newsCard.innerHTML = `
            <div class="card bg-dark text-white">
                <img src="${post["card-img-src"]}">
                <div class="card-body">
                    <h5 class="card-title">${post["card-title"]}</h5>
                    <p class="card-text" style="font-weight: lighter;">${post["card-text"]}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="btn btn-tertiary">Leia mais</a>
                        <div class="text-end">
                            <p class="mb-0" style="font-size: 1rem;">Por <a href="autores/index.html" style="text-decoration-line: none; color: antiquewhite;">${authors[post["author-id"]]["author-name"]}</a></p>
                            <p class="text-light mb-0" style="font-size: 0.8rem; font-weight: 300;">
                                ${date[0]}/${date[1]}/${date[2]} • ${hour[0]}:${hour[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

function renderNew(element, post) {
    
}

document.addEventListener("DOMContentLoaded", renderNews);