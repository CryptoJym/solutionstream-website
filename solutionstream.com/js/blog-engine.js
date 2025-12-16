/**
 * Modern Blog Engine (SPA-Lite)
 * Handles routing, rendering, and transitions for the blog section.
 */

document.addEventListener('DOMContentLoaded', () => {
    const blogApp = document.getElementById('blog-app');
    if (!blogApp) return;

    // Force a small delay to ensure styles are ready
    setTimeout(initBlog, 50);
});

async function initBlog() {
    const blogApp = document.getElementById('blog-app');
    
    // 1. Fetch Data
    let posts = [];
    try {
        console.log("Fetching blog data...");
        const response = await fetch('data/blog.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        posts = await response.json();
        console.log("Blog data loaded:", posts.length, "posts");
    } catch (error) {
        console.error("Failed to load blog data", error);
        blogApp.innerHTML = `
            <div class="container page-header-wrapper" style="background: var(--primary); padding: 100px 0; text-align: center;">
                <h2 style="color: white;">Unable to load articles</h2>
                <p style="color: #aaa;">${error.message}</p>
                <button onclick="location.reload()" class="button white mt-20">Try Again</button>
            </div>`;
        return;
    }

    // 2. Router (Simple Query Params)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post'); 

    // 3. Render
    if (postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            renderPost(post, blogApp);
        } else {
            renderNotFound(blogApp);
        }
    } else {
        renderIndex(posts, blogApp);
    }

    // 4. Re-Initialize Animations (Critical Step)
    // Wait for DOM injection
    setTimeout(() => {
        if (window.initModernInteractions) {
            window.initModernInteractions();
        }
        
        // Force visibility as a fallback if observer fails
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            // If after 500ms it hasn't become visible, force it
            setTimeout(() => {
                if (getComputedStyle(el).opacity === '0') {
                    el.classList.add('is-visible');
                }
            }, 500);
        });
    }, 100);
}

function renderIndex(posts, container) {
    const featured = posts[0];
    const others = posts.slice(1);

    let html = `
    <!-- Hero / Featured -->
    <div class="page-header-wrapper blog-hero" style="position: relative; overflow: hidden; padding-bottom: 160px; background: transparent;">
         <div class="parallax-overlay" style="background: url('${featured.image}') center/cover no-repeat; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;"></div>
         <div class="hero-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%); z-index: 1;"></div>
        
        <div class="container page-header" style="position: relative; z-index: 2;">
            <div class="content">
                <div class="inner">
                    <p class="mb-12 reveal-on-scroll" style="color: var(--accent); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Latest Article</p>
                    <h1 class="hyphen reveal-on-scroll">${featured.title}</h1>
                    <p class="mb-32 reveal-on-scroll" style="color: rgba(255,255,255,0.9); font-size: 1.2rem; max-width: 700px;">${featured.excerpt}</p>
                    <a class="button reveal-on-scroll" href="?post=${featured.id}">Read Article</a>
                </div>
            </div>
        </div>
        <div class="angle-divider" style="position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: var(--bg-light); clip-path: polygon(0 100%, 100% 100%, 100% 0); z-index: 3;"></div>
    </div>

    <main>
        <section class="container">
            <div class="content">
                <div class="section-header reveal-on-scroll">
                    <h5 class="text-center" style="margin-bottom: 60px;">All Articles</h5>
                </div>
                
                <div class="gridlex-gap-30">
                    ${others.map(post => `
                        <div class="col-4_md-6_sm-12 mb-30">
                            <a href="?post=${post.id}" class="blog-card-link">
                                <div class="blog-card reveal-on-scroll" style="display: flex; flex-direction: column;">
                                    <div class="card-image" style="height: 240px; overflow: hidden; position: relative;">
                                        <img src="${post.image}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                                    </div>
                                    <div class="card-body" style="padding: 24px; flex: 1;">
                                        <div class="meta" style="font-size: 0.85rem; color: var(--secondary); font-weight: 600; margin-bottom: 8px;">${post.date} • ${post.readTime} read</div>
                                        <h3 style="font-size: 1.3rem; line-height: 1.4; margin-bottom: 12px; color: var(--primary);">${post.title}</h3>
                                        <p style="font-size: 0.95rem; color: var(--text-color); line-height: 1.6;">${post.excerpt}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    </main>
    `;

    container.innerHTML = html;
    addCardInteractions();
}

function renderPost(post, container) {
    let html = `
    <div class="page-header-wrapper" style="background: var(--primary-gradient); padding-bottom: 140px; position: relative;">
        <div class="container page-header" style="position: relative; z-index: 2;">
            <div class="content">
                <div class="inner">
                     <a href="blog.html" class="button ghost-white mb-32 reveal-on-scroll" style="display: inline-flex; align-items: center; padding: 8px 24px !important; font-size: 0.9rem !important;"><i class="icon-arrow_back" style="margin-right: 8px;"></i> Back to Articles</a>
                    <h1 class="reveal-on-scroll" style="font-size: 3rem; color: white;">${post.title}</h1>
                    <div class="meta reveal-on-scroll" style="color: rgba(255,255,255,0.7); margin-top: 20px;">
                        <span>${post.date}</span> <span class="mx-2">|</span> <span>${post.author}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="angle-divider" style="position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: white; clip-path: polygon(0 100%, 100% 100%, 100% 0); z-index: 3;"></div>
    </div>

    <main style="background: white;">
        <section class="container">
            <div class="content mw-750">
                <article class="blog-content" style="font-size: 1.15rem; line-height: 1.8; color: #334155;">
                    <img src="${post.image}" class="reveal-on-scroll" style="width: 100%; border-radius: 16px; margin-bottom: 40px; box-shadow: var(--shadow-lg);">
                    <div class="reveal-on-scroll">
                        ${post.content}
                    </div>
                </article>

                <div class="post-footer mt-60 pt-40 reveal-on-scroll" style="border-top: 1px solid var(--gray-10); text-align: center;">
                    <h4 class="mb-20">Ready to build something great?</h4>
                    <a href="contact.html" class="button">Talk to an Expert</a>
                </div>
            </div>
        </section>
    </main>
    `;
    
    container.innerHTML = html;
}

function renderNotFound(container) {
    container.innerHTML = `
        <div class="container" style="padding: 100px 0; text-align: center;">
            <h1>Article Not Found</h1>
            <p>The article you are looking for doesn't exist or has been moved.</p>
            <a href="blog.html" class="button">Back to Blog</a>
        </div>
    `;
}

function addCardInteractions() {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            if(img) img.style.transform = 'scale(1.1)';
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = 'var(--shadow-float)';
        });
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            if(img) img.style.transform = 'scale(1)';
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-sm)';
        });
    });
}