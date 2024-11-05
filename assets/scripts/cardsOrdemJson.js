import { loadCard } from '/assets/scripts/loadCard.js'
import { posts } from '/assets/dados/posts.js'

function loadCards() {
    const newsContainer = document.getElementById("news-container");
    posts.forEach(post => {
        loadCard(newsContainer, post);
    });
}

document.addEventListener("DOMContentLoaded", loadCards);