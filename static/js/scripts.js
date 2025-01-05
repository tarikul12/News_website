// JavaScript for Global News Network

// Add a sticky navigation bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Load news items dynamically (simulate with a timeout)
const newsContainer = document.querySelector('.news-container');
function loadNews() {
    const dummyArticles = [
        { title: 'Advancements in AI', description: 'AI is transforming industries worldwide...', image: './images/placeholder2.jpg' },
        { title: 'Global Economy Update', description: 'Experts predict a stable growth...', image: './images/placeholder3.jpg' },
        { title: 'Space Exploration', description: 'New discoveries await in the cosmos...', image: './images/placeholder4.jpg' }
        // Add more articles here
    ];

    dummyArticles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="world.html">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Call the function to load news after a delay
setTimeout(loadNews, 1000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Footer social icons hover effect
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#007BFF'; // Change to blue on hover
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = ''; // Reset to original color
    });
});

// Display current year in footer
const yearElement = document.querySelector('.footer-bottom p');
yearElement.innerHTML = `@${new Date().getFullYear()} AiPromoting.com all rights reserved.`;
