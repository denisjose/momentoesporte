import { authors } from '/assets/dados/autores.js'
import { categories } from '/assets/dados/categories.js'
import { posts } from '/assets/dados/posts.js'

export function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/[^a-zA-Z0-9]/g, "_")
      .toLowerCase();
  }

export function loadCard(element, post) {
    const newsCard = document.createElement("div");
    newsCard.className = "col-md-4 mb-4";

    const date = post["publish-date"]["date"];
    const hour = post["publish-date"]["hour"];

    const authorPost = authors[post["author-id"]]

    const postLink = `/post/${posts.indexOf(post)}/${normalizeText(post["fine-line"])}`

    newsCard.innerHTML = `
            <div class="card shadow bg-dark text-white">
                <a href="${postLink}" class="image-link">
                    <img src="/assets/imgs/posts/${post["img-src"] === "" ? "notfound.png" : post["img-src"]}" alt="${postLink}">
                </a>
                <div class="card-body">
                    <a href="/categorias/${categories[post["category-id"]]["category-page"]}" class="text-light text-tertiary mb-0" style="text-decoration-line: none; font-size: 0.8rem; font-weight: 300;">${categories[post["category-id"]]["category"]}</a>
                    <h5 class="card-title">${post["headline"]}</h5>
                    <p class="card-text" style="font-weight: lighter;">${post["fine-line"]}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="${postLink}" class="btn btn-tertiary">Leia mais</a>
                        <div class="text-end">
                            <p class="mb-0" style="font-size: 1rem;">Por <a
                            href="/autores/@${authorPost["author-page"]}"
                            style="text-decoration-line: none; color: antiquewhite;">${authorPost["author-nickname"]}</a></p>
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