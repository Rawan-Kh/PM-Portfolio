// Function to duplicate carousel items for seamless loop
function setupCarousels() {
    const carousels = document.querySelectorAll('.tools-carousel-container');
    carousels.forEach(carousel => {
        const items = carousel.innerHTML;
        carousel.innerHTML = items + items; // Duplicate the items

        // Adjust the width of the container
        const itemCount = carousel.children.length;
        const itemWidth = carousel.children[0].offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(carousel.children[0]).marginRight);
        carousel.style.width = `${(itemWidth + marginRight) * itemCount}px`;
    });
}

// Animation frames
const frames = document.querySelectorAll('.frame');
let currentFrame = 0;

function animate() {
    frames.forEach(frame => frame.style.display = 'none');
    currentFrame = (currentFrame + 1) % frames.length;
    requestAnimationFrame(animate);
}

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeToggleButton(newTheme);
}

function updateThemeToggleButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggleButton(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeToggleButton('dark');
    }
}

// Loader functionality
function hideLoader() {
    const loader = document.getElementById('loader-wrapper');
    loader.classList.add('loader-hidden');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}

// Main initialization function
function initialize() {

    const themeToggle = document.getElementById('theme-toggle');
    const fadeElements = document.querySelectorAll('.fade-up');

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Fade-up effect
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    }

    // Check fade on scroll
    window.addEventListener('scroll', checkFade);
    
    // Initial check for elements in view
    checkFade();

    // Set up carousels
    setupCarousels();

    // Start animation
    animate();

    // Set initial theme
    setInitialTheme();

    // Hide loader
    hideLoader();
}

// Run initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

// Recalculate carousels on window resize
window.addEventListener('resize', setupCarousels);

// Hide loader when everything is loaded
window.addEventListener('load', hideLoader);


document.addEventListener('DOMContentLoaded', function () {
    // Fading on scrolling
    const jumbotron = document.querySelector('.jumbotron');
    let lastScrollTop = 0;

    if (jumbotron) {  // Check if the jumbotron element exists
        window.addEventListener('scroll', function () {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                jumbotron.classList.add('hidden');
            } else {
                // Scrolling up
                jumbotron.classList.remove('hidden');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure it never goes negative
        });
    } else {
        console.error('Jumbotron element not found.');
    }
});

function createProjectCard(project) {
    return `
      <div class="card">
        <img src="${project.img}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button onclick="window.open('${project.link}', '_blank')"> View </button>
      </div>
    `;
  }
  
  function displayProjects() {
    const cardContainer = document.querySelector('.projects-container');
    const projectCardsHTML = projects.map(createProjectCard).join('');
    cardContainer.innerHTML = projectCardsHTML;
  }
  
  window.addEventListener('DOMContentLoaded', displayProjects);
