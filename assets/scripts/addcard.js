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

export function loadCard(element, post) {
    const newsCard = document.createElement("div");
    newsCard.className = "col-md-4 mb-4";

    const date = post["publish-date"]["date"];
    const hour = post["publish-date"]["hour"];

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
    `
    element.appendChild(newsCard);
}