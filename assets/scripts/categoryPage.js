import { categories } from '/assets/dados/categories.js'
import { loadCards } from '/assets/scripts/cardsCategory.js'

const path = window.location.pathname;

function loadContentCategoryPage(category_id) {
    document.getElementById("404error").outerHTML = `
        <section id="${categories[category_id]["category-page"]}Category" class="sined-2 text-white section-scrollbar" style="padding-top: 70px;">
            <div class="container">
                <div class="row" id="news-container">
                    <h1>${categories[category_id]["category"]}</h1>
                </div>
            </div>
        </section>
    `
}

function activeNavbar(category_id, categoria = true) {
    const categoriaNavItem = document.querySelector('a.nav-link.dropdown-toggle#navbarDropdown');
    document.querySelector('li.nav-item.dropdown[title="Categorias"]>ul.dropdown-menu').querySelectorAll("li")[category_id].querySelector('a.dropdown-item').classList.add('active');
    if (categoria === true) {
        if (categoriaNavItem) {
            categoriaNavItem.classList.add('active');
            const icon = categoriaNavItem.querySelector('i.bi-bookmarks');
            if (icon) {
                icon.classList.remove('bi-bookmarks');
                icon.classList.add('bi-bookmarks-fill');
            }
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

if (splitRemoveEmpty(path)[0] === "categorias") {

    const category_page = splitRemoveEmpty(path).pop();

    categories.forEach((categories, category_id) => {
        if (categories["category-page"] === category_page) {
            loadContentCategoryPage(category_id);
            activeNavbar(category_id);
            loadCards(category_id)
        }
    });

}