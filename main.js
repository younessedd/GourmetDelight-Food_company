// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.querySelector('.back-to-top');
const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');
const closeMessage = document.querySelector('.close-message');

// Hero Slider Elements
const heroSlider = document.querySelector('.hero-slider');
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
const heroIndicators = document.querySelector('.hero-indicators');

let currentSlide = 0;
let slideInterval;

// Menu Data
const menuItems = [
    // Starters
    {
        id: 1,
        title: 'Bruschetta',
        category: 'starters',
        price: 8.99,
        img: 'images/bruschetta.jpg',
        desc: 'Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.'
    },
    {
        id: 2,
        title: 'Caesar Salad',
        category: 'starters',
        price: 10.99,
        img: 'images/caesar-salad.jpg',
        desc: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.'
    },
    {
        id: 3,
        title: 'Spinach Artichoke Dip',
        category: 'starters',
        price: 9.99,
        img: 'images/spinach-artichoke-dip.jpg',
        desc: 'Creamy spinach and artichoke dip served with warm pita bread.'
    },
    {
        id: 4,
        title: 'Stuffed Mushrooms',
        category: 'starters',
        price: 11.99,
        img: 'images/stuffed-mushrooms.jpg',
        desc: 'Button mushrooms stuffed with herbs, cheese, and breadcrumbs.'
    },
    {
        id: 5,
        title: 'Shrimp Cocktail',
        category: 'starters',
        price: 12.99,
        img: 'images/shrimp-cocktail.jpg',
        desc: 'Chilled shrimp with cocktail sauce, lemon, and fresh herbs.'
    },
    {
        id: 6,
        title: 'Garlic Bread',
        category: 'starters',
        price: 7.99,
        img: 'images/garlic-bread.jpg',
        desc: 'Warm garlic bread with herbs and melted mozzarella cheese.'
    },
    
    // Main Courses
    {
        id: 7,
        title: 'Grilled Salmon',
        category: 'mains',
        price: 24.99,
        img: 'images/grilled-salmon.jpg',
        desc: 'Fresh salmon fillet grilled to perfection with lemon butter sauce.'
    },
    {
        id: 8,
        title: 'Beef Tenderloin',
        category: 'mains',
        price: 32.99,
        img: 'images/beef-tenderloin-alt.jpg',
        desc: 'Premium cut beef tenderloin with roasted vegetables and red wine reduction.'
    },
    {
        id: 9,
        title: 'Chicken Parmesan',
        category: 'mains',
        price: 22.99,
        img: 'images/fried-chicken.jpg',
        desc: 'Breaded chicken breast topped with marinara sauce and melted mozzarella.'
    },
    {
        id: 10,
        title: 'Pasta Carbonara',
        category: 'mains',
        price: 18.99,
        img: 'images/pasta.jpg',
        desc: 'Classic Italian pasta with eggs, pecorino cheese, and crispy pancetta.'
    },
    {
        id: 11,
        title: 'Lobster Tail',
        category: 'mains',
        price: 36.99,
        img: 'images/sushi.jpg',
        desc: 'Fresh lobster tail with garlic butter and seasonal vegetables.'
    },
    {
        id: 12,
        title: 'Vegetable Stir Fry',
        category: 'mains',
        price: 16.99,
        img: 'images/tacos.jpg',
        desc: 'Fresh seasonal vegetables stir-fried with ginger and soy sauce.'
    },
    {
        id: 13,
        title: 'Ribeye Steak',
        category: 'mains',
        price: 38.99,
        img: 'images/beef-tenderloin-alt.jpg',
        desc: 'Premium ribeye steak grilled to your preference with roasted garlic.'
    },
    
    // Desserts
    {
        id: 14,
        title: 'Chocolate Lava Cake',
        category: 'desserts',
        price: 8.99,
        img: 'images/pancakes.jpg',
        desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.'
    },
    {
        id: 15,
        title: 'Tiramisu',
        category: 'desserts',
        price: 7.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.'
    },
    {
        id: 16,
        title: 'Cheesecake',
        category: 'desserts',
        price: 9.99,
        img: 'images/burger.jpg',
        desc: 'New York style cheesecake with berry compote and fresh cream.'
    },
    {
        id: 17,
        title: 'Crème Brûlée',
        category: 'desserts',
        price: 8.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Classic French dessert with caramelized sugar top and creamy vanilla custard.'
    },
    {
        id: 18,
        title: 'Apple Pie',
        category: 'desserts',
        price: 7.99,
        img: 'images/pancakes.jpg',
        desc: 'Traditional apple pie with cinnamon-spiced apples and flaky crust.'
    },
    {
        id: 19,
        title: 'Chocolate Mousse',
        category: 'desserts',
        price: 6.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Light and airy chocolate mousse topped with fresh berries and whipped cream.'
    },
    {
        id: 20,
        title: 'Ice Cream Sundae',
        category: 'desserts',
        price: 5.99,
        img: 'images/ice-cream-sundae.jpg',
        desc: 'Three scoops of premium ice cream with hot fudge, nuts, and cherry.'
    },
    
    // Drinks
    {
        id: 21,
        title: 'Fresh Orange Juice',
        category: 'drinks',
        price: 4.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Freshly squeezed orange juice, served chilled with ice.'
    },
    {
        id: 22,
        title: 'Iced Tea',
        category: 'drinks',
        price: 3.99,
        img: 'images/lemonade.jpg',
        desc: 'Freshly brewed iced tea with lemon and fresh mint.'
    },
    {
        id: 23,
        title: 'Coffee Latte',
        category: 'drinks',
        price: 5.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Espresso with steamed milk foam, topped with latte art.'
    },
    {
        id: 24,
        title: 'Mojito',
        category: 'drinks',
        price: 8.99,
        img: 'images/pizza.jpg',
        desc: 'Fresh mint, lime, sugar, and white rum muddled with soda water.'
    },
    {
        id: 25,
        title: 'Smoothie Bowl',
        category: 'drinks',
        price: 7.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Blend of mixed berries, banana, yogurt, and honey with granola topping.'
    },
    {
        id: 26,
        title: 'Lemonade',
        category: 'drinks',
        price: 4.99,
        img: 'images/lemonade-new.jpg',
        desc: 'Fresh squeezed lemonade with mint and natural cane sugar.'
    }
];

// Display menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item, index) => {
        return `
        <div class="menu-item fade-in" data-category="${item.category}" data-id="${item.id}">
            <div class="menu-item-img">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="menu-item-overlay">
                    <button class="menu-item-btn" onclick="viewMenuItem(${item.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
            </div>
        </div>
        `;
    });
    
    displayMenu = displayMenu.join('');
    menuGrid.innerHTML = displayMenu;
    
    // Add staggered animation to menu items
    const menuItemElements = document.querySelectorAll('.menu-item');
    menuItemElements.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Filter menu items
function filterMenu() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.filter;
            
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Filter menu items
            if (category === 'all') {
                displayMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                displayMenuItems(filteredItems);
            }
        });
    });
}

// View menu item details
function viewMenuItem(id) {
    const item = menuItems.find(item => item.id === id);
    if (item) {
        // Create modal for item details
        const modal = document.createElement('div');
        modal.className = 'menu-modal active';
        modal.innerHTML = `
            <div class="menu-modal-content">
                <span class="close-modal">&times;</span>
                <div class="menu-modal-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="menu-modal-info">
                    <h2>${item.title}</h2>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <p class="description">${item.desc}</p>
                    <div class="modal-actions">
                        <button class="btn btn-outline" onclick="closeMenuModal()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Close modal events
        modal.querySelector('.close-modal').addEventListener('click', closeMenuModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeMenuModal();
            }
        });
    }
}

// Close menu modal
function closeMenuModal() {
    const modal = document.querySelector('.menu-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add to order functionality
function addToOrder(id) {
    const item = menuItems.find(item => item.id === id);
    if (item) {
        // Create order notification
        showNotification(`${item.title} added to your order!`);
        
        // You can extend this to actually manage orders
        console.log('Added to order:', item);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }, 100);
}

// Hero Slider Functions
function initHeroSlider() {
    if (!heroSlider || heroSlides.length === 0) return;

    // Ensure first slide is immediately visible
    if (heroSlides.length > 0) {
        heroSlides[0].classList.add('active');
        const firstSlideContent = heroSlides[0].querySelector('.hero-content');
        if (firstSlideContent) {
            firstSlideContent.style.opacity = '1';
            firstSlideContent.style.visibility = 'visible';
        }
    }

    // Create indicators
    createIndicators();
    
    // Show first slide (redundant but ensures consistency)
    showSlide(0);
    
    // Start auto-play
    startSlideShow();
    
    // Event listeners
    if (heroPrev) {
        heroPrev.addEventListener('click', () => {
            prevSlide();
            resetSlideShow();
        });
    }
    
    if (heroNext) {
        heroNext.addEventListener('click', () => {
            nextSlide();
            resetSlideShow();
        });
    }
    
    // Pause on hover
    heroSlider.addEventListener('mouseenter', stopSlideShow);
    heroSlider.addEventListener('mouseleave', startSlideShow);
}

function createIndicators() {
    if (!heroIndicators) return;
    
    heroIndicators.innerHTML = '';
    heroSlides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetSlideShow();
        });
        heroIndicators.appendChild(indicator);
    });
}

function showSlide(index) {
    // Hide all slides
    heroSlides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all indicators
    const indicators = heroIndicators?.querySelectorAll('.indicator');
    indicators?.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    heroSlides[index].classList.add('active');
    if (indicators) indicators[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
}

function startSlideShow() {
    stopSlideShow();
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

function resetSlideShow() {
    stopSlideShow();
    startSlideShow();
}

// Initialize
function init() {
    // Add loading class to hero initially
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('loading');
    }
    
    // Initialize hero slider
    initHeroSlider();
    
    // Load menu items
    displayMenuItems(menuItems);
    
    // Initialize filter functionality
    filterMenu();
    
    // Remove loading class after everything is initialized
    setTimeout(() => {
        if (heroSection) {
            heroSection.classList.remove('loading');
        }
    }, 100);
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formObject)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
}

// Close success message
function closeSuccessMessage() {
    successMessage.classList.remove('show');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Close success message
    if (closeMessage) {
        closeMessage.addEventListener('click', closeSuccessMessage);
    }
    
    // Close success message when clicking outside
    successMessage.addEventListener('click', (e) => {
        if (e.target === successMessage) {
            closeSuccessMessage();
        }
    });
    
    // Close success message with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessMessage();
        }
    });
});
