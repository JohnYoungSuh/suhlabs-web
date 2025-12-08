/**
 * Suhlabs Photos - Minimal Vanilla JS App
 * Handles content fetching and rendering.
 */

const App = {
    // Utility: Fetch JSON Data
    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch Error:', error);
            return [];
        }
    },

    // Page: Work (Masonry Gallery)
    async initWork() {
        const gallery = document.getElementById('gallery-grid');
        if (!gallery) return;

        const data = await this.fetchData('content/work/metadata.json');
        
        // Simple HTML string generation
        gallery.innerHTML = data.map(item => `
            <div class="gallery-item">
                <img src="assets/img/${item.filename}" alt="${item.title}" loading="lazy">
                <div class="image-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            </div>
        `).join('');
    },

    // Page: Store (Payhip)
    async initStore() {
        const grid = document.getElementById('store-grid');
        if (!grid) return;

        const products = await this.fetchData('content/store/products.json');

        grid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image">
                   <!-- Placeholder if image missing -->
                   <img src="assets/img/${product.image}" alt="${product.title}" onerror="this.style.display='none'"> 
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.format}</p>
                    <div class="price-action">
                        <span class="price">$${product.price}</span>
                        <a href="${product.payhip_url}" class="btn-buy" target="_blank">Buy</a>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Page: News (Markdown List)
    async initNews() {
        const container = document.getElementById('news-container');
        if (!container) return;

        // In a real static setup without a build step, listing files is hard.
        // We will fetch a 'posts.json' index which we will manually maintain or generate.
        // For V1, we will assume a posts.json exists.
        
        // Creating a dummy posts.json content here for logic demonstration if it existed
        // But since we didn't plan for a news index JSON, let's just hardcode a fetch for now 
        // or checking for a specific file. 
        // Ideally, we should have added 'content/news/index.json' to the plan.
        // Let's fallback to a manual list or specific known posts for this lightweight version.
        
        container.innerHTML = '<p>News section under construction.</p>';
    },
    
    // Header/Mobile Menu Logic
    initNavigation() {
        // TBD: Simple class toggle for mobile menu
    }
};

// Auto-initialize based on body class or URL
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#gallery-grid')) App.initWork();
    if (document.querySelector('#store-grid')) App.initStore();
    if (document.querySelector('#news-container')) App.initNews();
    App.initNavigation();
});
