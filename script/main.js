let toggle = document.getElementsByClassName('mobile-nav-toggle')[0];
toggle.addEventListener('click', () => {
    console.log('anu');
    toggle.parentNode.classList.toggle('navbar-mobile');
    toggle.classList.toggle('bi-x')
    toggle.classList.toggle('bi-list')

});

const ptfimages = [
    { src: 'assets/images/portfolio/portfolio-1', category: 'app', alt: '1' },
    { src: 'assets/images/portfolio/portfolio-2', category: 'app', alt: '2' },
    { src: 'assets/images/portfolio/portfolio-3', category: 'app', alt: '3' },
    { src: 'assets/images/portfolio/portfolio-4', category: 'web', alt: '4' },
    { src: 'assets/images/portfolio/portfolio-5', category: 'web', alt: '5' },
    { src: 'assets/images/portfolio/portfolio-6', category: 'web', alt: '6' },
    { src: 'assets/images/portfolio/portfolio-7', category: 'card', alt: '7' },
    { src: 'assets/images/portfolio/portfolio-8', category: 'card', alt: '8' },
    { src: 'assets/images/portfolio/portfolio-9', category: 'card', alt: '9' }
];

const filterListItems = document.querySelectorAll('.portfolio-flters li');
const portfolioContainer = document.getElementById('portfolio-sec');

// Function to filter and display items based on the selected category
function filterPortfolioItems(categorys) {
    // Clear the existing portfolio items
    portfolioContainer.innerHTML = '';

    // Filter items from the ptfimages array based on the selected category
    const filteredItems = categorys === 'All' ? ptfimages : ptfimages.filter(item => item.category === categorys);

    // Loop through the filtered items and create HTML elements
    filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('p-imgs', 'col-lg-4', 'col-md-6');
        portfolioItem.innerHTML = `
            <div class="pf-items">
                <img src="${item.src}.jpg" alt="${item.alt}">
                <div class="portfolio-links">
                    <a href="${item.src}.jpg" title="app ${item.alt}"><i class="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
            </div>
        `;

        // Append the portfolio item to the container
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Add click event listeners to filter list items
filterListItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'active' class from all filter list items
        filterListItems.forEach(li => li.classList.remove('active'));

        // Add the 'active' class to the clicked filter item
        item.classList.add('active');

        // Get the selected category from the filter item's text
        const selectedCategory = item.textContent.trim();

        // Call the function to filter and display items based on the selected category
        filterPortfolioItems(selectedCategory);
    });
});

// Initial display of all items when the page loads
filterPortfolioItems('All');
