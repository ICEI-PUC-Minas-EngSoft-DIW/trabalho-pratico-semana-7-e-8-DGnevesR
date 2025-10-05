const posts = [
    {
        id: 1,
        username: "user.maneiro",
        handle: "@user.bolado",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "img/sol.jpg",
        date: "2025-10-01",
        likes: 120,
        retweets: 45,
        comments: [
            {
                username: "ana_aninha",
                handle: "@Ana_Aninha_Anão",
                text: "Cê tá bem mano ?",
                date: "2025-10-01"
            },
            {
                username: "frio_gelado",
                handle: "@Frio_Gelado",
                text: "Foto mídia",
                date: "2025-10-01"
            }
        ]
    },
    {
        id: 2,
        username: "yoga_lover",
        handle: "@yoga_peace",
        text: "Enjoying a peaceful yoga session this morning!",
        image: "img/yoga.jpg",
        date: "2025-10-02",
        likes: 85,
        retweets: 30,
        comments: [
            {
                username: "boca_085",
                handle: "@Boca_085",
                text: "Tenho nem osso pra isso",
                date: "2025-10-02"
            }
        ]
    },
    {
        id: 3,
        username: "nature_explorer",
        handle: "@wild_adventures",
        text: "Text of the printing and typesetting industry lorem Ipsum is simply dummy Took a galley to make a type when an unknown printer specimen book.",
        image: "img/aguia.jpg",
        date: "2025-10-03",
        likes: 200,
        retweets: 60,
        comments: [
            {
                username: "flakes_power",
                handle: "@Flakes_Power",
                text: "Parece até IA KAAKAKKAKAAKAKA",
                date: "2025-10-03"
            },
            {
                username: "nobru_oapelao",
                handle: "@Nobru_OApelão",
                text: "Cócóóóóóóóóó",
                date: "2025-10-03"
            }
        ]
    }
];

function renderPosts() {
    
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const feed = document.querySelector('.feed');
        if (!feed) return;

        feed.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p><strong>${post.username}</strong> ${post.handle} · ${post.date}</p>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Imagem do post">` : ''}
                <p>❤️ ${post.likes} 🔄 ${post.retweets} 💬 ${post.comments.length}</p>
                <a href="detalhes.html?id=${post.id}" class="highlight-button">Ver detalhes</a>
            `;
            feed.appendChild(postElement);
        });
    }
}

function renderPostDetails() {
    
    if (window.location.pathname.includes('detalhes.html')) {
        const postDetails = document.getElementById('post-details');
        const commentsSection = document.getElementById('comments-section');
        if (!postDetails || !commentsSection) return;

        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));

        const post = posts.find(p => p.id === postId);

        if (post) {
            
            postDetails.innerHTML = `
                <p><strong>${post.username}</strong> ${post.handle} · ${post.date}</p>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Imagem do post">` : ''}
                <p>❤️ ${post.likes} 🔄 ${post.retweets} 💬 ${post.comments.length}</p>
            `;

            commentsSection.innerHTML = '<h3>Comentários</h3>';
            if (post.comments.length > 0) {
                post.comments.forEach(comment => {
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    commentElement.innerHTML = `
                        <p><strong>${comment.username}</strong> ${comment.handle} · ${comment.date}</p>
                        <p>${comment.text}</p>
                    `;
                    commentsSection.appendChild(commentElement);
                });
            } else {
                commentsSection.innerHTML += '<p>Sem comentários ainda.</p>';
            }

            const commentInput = document.getElementById('novo-comentario');
            const commentButton = document.getElementById('enviar-comentario');
            if (commentButton && commentInput) {
                commentButton.addEventListener('click', () => {
                    const commentText = commentInput.value.trim();
                    if (commentText) {
                        
                        const newComment = {
                            username: "user.maneiro",
                            handle: "@user.bolado",
                            text: commentText,
                            date: new Date().toISOString().split('T')[0] // Data atual no formato YYYY-MM-DD
                        };
                        post.comments.push(newComment);

                        commentsSection.innerHTML = '<h3>Comentários</h3>';
                        post.comments.forEach(comment => {
                            const commentElement = document.createElement('div');
                            commentElement.classList.add('comment');
                            commentElement.innerHTML = `
                                <p><strong>${comment.username}</strong> ${comment.handle} · ${comment.date}</p>
                                <p>${comment.text}</p>
                            `;
                            commentsSection.appendChild(commentElement);
                        });

                        postDetails.querySelector('p:last-child').innerHTML = `
                            ❤️ ${post.likes} 🔄 ${post.retweets} 💬 ${post.comments.length}
                        `;

                        commentInput.value = '';
                    }
                });
            }
        } else {
            postDetails.innerHTML = '<p>Post não encontrado.</p>';
            commentsSection.innerHTML = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderPostDetails();
});