import { loadCard } from '/assets/scripts/loadCard.js'
import { posts } from '/assets/dados/posts.js'

function shufflePosts(postsArray) {
    const shuffledArray = [...postsArray]; // Cria uma cópia de postsArray

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function loadCards() {
    const newsContainer = document.getElementById("news-container");

    const shuffledPosts = shufflePosts(posts);

    shuffledPosts.forEach(post => {
        loadCard(newsContainer, post);
    });
}

document.addEventListener("DOMContentLoaded", loadCards);
