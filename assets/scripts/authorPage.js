import { authors } from '/assets/dados/autores.js'
import { loadCards } from '/assets/scripts/cardsAuthor.js'
import { posts } from '/assets/dados/posts.js'

const path = window.location.pathname;

const countPostsByAuthorId = (posts, authorId) => {
    return posts.filter(post => post["author-id"] === authorId).length;
};

function loadContentAuthor(author, author_id) {
    document.title = "@" + author["author-page"]

    const postsCount = countPostsByAuthorId(posts, Number(author_id));

    var publicacoesText = postsCount > 1 ? "publicações" : "publicação";
    
    var divider = postsCount > 0 ? '<hr class="border border-1 opacity-50" style="border-color: #ffde59 !important;">' : ""; 

    document.getElementById("404error").outerHTML = `
    <section id="author@${author['author-page']}" class="sined-1 text-white section-scrollbar" style="padding-top: 70px;">
        <div class="container">
            <div class="row" id="news-container">
                <div class="text-center mb-4">
                    <h1 class="display-4" style="font-weight: normal;">${author['author-nickname']}</h1>
                    <h2 class="h4 text-white" style="font-weight: lighter;">${author['author-name']}</h2>
                    <h3 class="h5 text-tertiary">@${author['author-page']}</h3>
                    <p class="text-light"><strong class="text-tertiary">${postsCount}</strong> ${publicacoesText}</p>
                    ${divider}
                </div>
            </div>
        </div>
    </section>
    `

}

function activeAutoresNavbar() {
    const autoresLink = document.querySelector('a.nav-link[href="/autores/"]');
    
    if (autoresLink) {
        autoresLink.classList.add('active');
        const icon = autoresLink.querySelector('i.bi-person');
        if (icon) {
            icon.classList.remove('bi-person');
            icon.classList.add('bi-person-fill');
        }
    }
}

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

if (path.split('/')[1] === "autores") {

    const author_page = (splitRemoveEmpty(path).pop()).split('@').pop();

    authors.forEach((author, author_id) => {

        if (author["author-page"] === author_page) {
            activeAutoresNavbar()
            loadContentAuthor(author, author_id);
            loadCards(author_id)
        }
    });

}