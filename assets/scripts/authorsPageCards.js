import { authors } from '/assets/dados/autores.js'
import { posts } from '/assets/dados/posts.js'

const path = window.location.pathname;

if (path === "/autores/") {
    document.getElementById("404error").outerHTML = `
    <section id="autores" class="text-white section-scrollbar" style="padding-top: 70px;">
    </section>
    `
}

const element = document.querySelector('section#autores').querySelector('div.container').querySelector('div.row');

const countPostsByAuthorId = (posts, authorId) => {
    return posts.filter(post => post["author-id"] === authorId).length;
};

function loadAuthorCard(author_id) {
    const postsCount = countPostsByAuthorId(posts, Number(author_id));

    var publicacoesText = postsCount > 1 ? "publicações" : "publicação";

    const authorCard = element.innerHTML = element.innerHTML + `
        <div class="row">
            <div class="col-8 col-md-4">
                <a href="/autores/@${authors[author_id]["author-page"]}" class="text-decoration-none text-white">
                    <div class="p-3 border rounded border-secondary author-card">
                    <h2 class="h5" style="font-weight: normal;">${authors[author_id]["author-nickname"]}</h2>
                    <h6 class="text-tertiary">@${authors[author_id]["author-page"]}</h6>
                    <p class="text-light"><strong class="text-tertiary">${postsCount}</strong> ${publicacoesText}</p>
                    </div>
                </a>
            </div>
        </div>
    `
}

function loadAllAuthorsCards() {
    const shuffledAuthors = authors.map((author, index) => ({ author, index }));
    
    for (let i = shuffledAuthors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAuthors[i], shuffledAuthors[j]] = [shuffledAuthors[j], shuffledAuthors[i]];
    }

    shuffledAuthors.forEach(item => {
        loadAuthorCard(item.index);
    });
}

if (path === "/autores/") {
    document.addEventListener("DOMContentLoaded", loadAllAuthorsCards);
}