const icons = [
    {
        "icon": '<i class="bi bi-house-door"></i>',
        "icon-filled": '<i class="bi bi-house-door-fill"></i>'
    },
    {
        "icon": '<i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/></svg></i>',
        "icon-filled": '<i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16z"/></svg></i>'
    },
    {
        "icon": '<i class="bi bi-bookmarks"></i>',
        "icon-filled": '<i class="bi bi-bookmarks-fill"></i>' 
    },
    {
        "icon": '<i class="bi bi-person"></i>',
        "icon-filled": '<i class="bi bi-person-fill"></i>' 
    }
]

const navTag = document.getElementById("navigator")

navTag.classList.add("navbar")
navTag.classList.add("fixed-top")
navTag.classList.add("navbar-expand-sm")
navTag.classList.add("navbar-dark")
navTag.style.backgroundColor = "#14171a"

let active;
let activeCategoria;

if (navTag.getAttribute('active') === null || navTag.getAttribute('active') === "") {
    active = false;
} else {
    active = Number(navTag.getAttribute('active'))
}

if (navTag.getAttribute('categoria') === null || navTag.getAttribute('categoria') === "") {
    activeCategoria = false;
} else {
    activeCategoria = Number(navTag.getAttribute('categoria'))
}

function activeNavItem(active) {
    if (active !== false) {
        let asd = document.querySelector('nav#navigator').querySelector('div.container').querySelector('div.collapse').querySelector('ul.navbar-nav').querySelectorAll('li.nav-item')[active].querySelector('a.nav-link');
        asd.classList.add("active");
        const icon = asd.querySelector("i");
        icon.outerHTML = icons[active]["icon-filled"];
    }
}

function activeDropdownItem(activeCategoria) {
    if (activeCategoria !== false) {
        let asd = document.querySelector('nav#navigator').querySelector('div.container').querySelector('div.collapse').querySelector('ul.navbar-nav').querySelectorAll('li.dropdown')[0].querySelector('ul.dropdown-menu').querySelectorAll('li')[activeCategoria].querySelector('a.dropdown-item');
        asd.classList.add("active");
    }
}

navTag.innerHTML = `
    <div class="container">
        <a href="/" class="navbar-brand mb-0 h1">
            <img class="d-line-block align-top"
            src="/assets/imgs/logo_momentoesporte.png"
            width="125px" height="30px"
            title="Momento Esporte"
            >
        </a>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" class="navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" title="Início">
                    <a href="/" class="nav-link">
                        ${icons[0]["icon"]}
                        Início
                    </a>
                </li>
                <li class="nav-item" title="Momento">
                    <a href="/momento/" class="nav-link">
                        ${icons[1]["icon"]}
                        Momento
                    </a>
                </li>
                <li class="nav-item dropdown" title="Categorias">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${icons[2]["icon"]}
                        Categorias
                    </a>
                    <ul class="dropdown-menu" data-bs-theme="dark" aria-labelledby="navbarDropdown">
                        <li><a href="/categorias/futebol" class="dropdown-item">
                            <i class="material-symbols-outlined nav-icon">sports_soccer</i>
                            Futebol
                        <a></li>
                        <li><a href="/categorias/basquete" class="dropdown-item">
                            <i class="material-symbols-outlined nav-icon">sports_basketball</i>
                            Basquete
                        </a></li>
                        <li><a href="/categorias/tenis" class="dropdown-item">
                            <i class="material-symbols-outlined nav-icon">sports_baseball</i>
                            Tênis
                        </a></li>
                        <hr class="dropdown-divider">
                        <li><a href="/categorias/tabuleiro" class="dropdown-item">
                            <i class="material-symbols-outlined nav-icon">chess</i>
                            Tabuleiro
                        </a></li>
                    </ul>
                </li>
                <li class="nav-item" title="Autores">
                    <a href="/autores/" class="nav-link">
                        <i class="bi bi-person"></i>
                        Autores
                    </a>
                </li>
                <test class="nav-item"></test>
            </ul>
        </div>
    </div>
`

activeNavItem(active);
activeDropdownItem(activeCategoria);