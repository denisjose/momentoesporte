import { categories } from '/assets/dados/categories.js'
import { posts } from '/assets/dados/posts.js'
import { authors } from '/assets/dados/autores.js'

const path = window.location.pathname;

function splitRemoveEmpty(string) {
    const splited = string.split('/');
    let New = [];
    splited.forEach(element => {
        if (element !== "") {
            New.push(element);
        }
    });
    return New;
}

if (path.startsWith("/post/")) {
    const post_id = Number(splitRemoveEmpty(path)[1]);
    const post = posts[post_id]
    const authorPost = authors[post["author-id"]]

    const date = post["publish-date"]["date"];
    const hour = post["publish-date"]["hour"];
    
    const section = document.querySelector("section#notice");

    section.classList.add("container")
    section.classList.add("section-scrollbar");
    section.style.paddingTop = "70px";

    section.innerHTML = `
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <a href="/categorias/${categories[post["category-id"]]["category-page"]}" class="notice-category text-decoration-none text-tertiary">
                    ${categories[post["category-id"]]["category"]}
                </a>

                <h1 class="notice-title mt-2">
                    ${post["headline"]}
                </h1>

                <p class="notice-content fst-italic mb-3">
                    ${post["fine-line"]}
                </p>

                <p class="mb-1">
                    <span class="notice-author">
                        Por
                        <a href="/autores/@${authorPost["author-page"]}" class="text-decoration-none" style="color: antiquewhite;">
                            ${authorPost["author-nickname"]}
                        </a>
                    </span>
                    <span class="notice-date">
                        • ${date[0]}/${date[1]}/${date[2]} • ${hour[0]}:${hour[1]}
                    </span>
                </p>

                <hr class="text-secondary">

                <div class="notice-header">
                    <img src='/assets/imgs/posts/${post["img-src"] === "" ? "notfound.png" : post["img-src"]}'class="img-fluid rounded">
                </div>

                <div class="notice-content mt-4">
                    ${post["noticeHTML"]}
                </div>

                <a href="/" class="btn btn-outline-tertiary mt-4">
                    <i class="bi bi-arrow-left"></i>
                    Voltar para a Página Inicial
                </a>
            </div>
        </div>
    `;
}
