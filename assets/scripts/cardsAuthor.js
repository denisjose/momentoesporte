import { loadCard } from '/assets/scripts/loadCard.js';
import { posts } from '/assets/dados/posts.js';

export function loadCards(author_id) {
    const newsContainer = document.getElementById("news-container");

    function padZero(value) {
        return value.toString().padStart(2, '0');
    }

    const sortedPosts = posts
        .filter(post => post["author-id"] === author_id)
        .sort((a, b) => {
            const dateA = new Date(
                `${a["publish-date"]["date"][2]}-${padZero(a["publish-date"]["date"][1])}-${padZero(a["publish-date"]["date"][0])}T${padZero(a["publish-date"]["hour"][0])}:${padZero(a["publish-date"]["hour"][1])}`
            );
            const dateB = new Date(
                `${b["publish-date"]["date"][2]}-${padZero(b["publish-date"]["date"][1])}-${padZero(b["publish-date"]["date"][0])}T${padZero(b["publish-date"]["hour"][0])}:${padZero(b["publish-date"]["hour"][1])}`
            );
            return dateB - dateA;
        });

    sortedPosts.forEach(post => {
        loadCard(newsContainer, post);
    });
}
