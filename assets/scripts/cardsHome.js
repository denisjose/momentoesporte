import { loadCard } from '/assets/scripts/loadCard.js'
import { posts } from '/assets/dados/posts.js'

function shufflePosts(postsArray) {
    for (let i = postsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [postsArray[i], postsArray[j]] = [postsArray[j], postsArray[i]];
    }
    return postsArray;
}

function loadCards() {
    const newsContainer = document.getElementById("news-container");

    const shuffledPosts = shufflePosts(posts);

    shuffledPosts.forEach(post => {
        loadCard(newsContainer, post);
    });
}

document.addEventListener("DOMContentLoaded", loadCards);
