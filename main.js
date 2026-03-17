// Modern Restaurant Website - Premium JavaScript
// GourmetDelight - Advanced Frontend Features

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
const navbar = document.querySelector('.navbar');

// Hero Slider Elements
const heroSlider = document.querySelector('.hero-slider');
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
const heroIndicators = document.querySelector('.hero-indicators');

let currentSlide = 0;
let slideInterval;

// Menu Data with Realistic Food Images
const menuItems = [
    // Starters
    {
        id: 1,
        title: 'Bruschetta',
        category: 'starters',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.'
    },
    {
        id: 2,
        title: 'Caesar Salad',
        category: 'starters',
        price: 10.99,
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.'
    },
    {
        id: 3,
        title: 'Spinach Artichoke Dip',
        category: 'starters',
        price: 9.99,
        img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Creamy spinach and artichoke dip served with warm pita bread.'
    },
    {
        id: 4,
        title: 'Stuffed Mushrooms',
        category: 'starters',
        price: 11.99,
        img: 'https://images.unsplash.com/photo-1576162219657-134095c32b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Button mushrooms stuffed with herbs, cheese, and breadcrumbs.'
    },
    {
        id: 5,
        title: 'Shrimp Cocktail',
        category: 'starters',
        price: 12.99,
        img: 'https://images.unsplash.com/photo-1689698622690-ce30ba292b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Chilled shrimp with cocktail sauce, lemon, and fresh herbs.'
    },
    {
        id: 6,
        title: 'Garlic Bread',
        category: 'starters',
        price: 7.99,
        img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Warm garlic bread with herbs and melted mozzarella cheese.'
    },
    
    // Main Courses
    {
        id: 7,
        title: 'Grilled Salmon',
        category: 'mains',
        price: 24.99,
        img: 'https://images.unsplash.com/photo-1467003909585-2cd19ce73130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Fresh salmon fillet grilled to perfection with lemon butter sauce.'
    },
    {
        id: 8,
        title: 'Beef Tenderloin',
        category: 'mains',
        price: 32.99,
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Premium cut beef tenderloin with roasted vegetables and red wine reduction.'
    },
    {
        id: 9,
        title: 'Chicken Parmesan',
        category: 'mains',
        price: 22.99,
        img: 'https://images.unsplash.com/photo-1603095425989-3262b1971e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Breaded chicken breast topped with marinara sauce and melted mozzarella.'
    },
    {
        id: 10,
        title: 'Pasta Carbonara',
        category: 'mains',
        price: 18.99,
        img: 'https://images.unsplash.com/photo-1612879542022-2e4b0a633bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Classic Italian pasta with eggs, pecorino cheese, and crispy pancetta.'
    },
    {
        id: 11,
        title: 'Lobster Tail',
        category: 'mains',
        price: 36.99,
        img: 'https://images.unsplash.com/photo-1604066879180-de71305f9362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Fresh lobster tail with garlic butter and seasonal vegetables.'
    },
    {
        id: 12,
        title: 'Vegetable Stir Fry',
        category: 'mains',
        price: 16.99,
        img: 'https://images.unsplash.com/photo-1512058564366-810a673b3a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Fresh seasonal vegetables stir-fried with ginger and soy sauce.'
    },
    {
        id: 13,
        title: 'Ribeye Steak',
        category: 'mains',
        price: 38.99,
        img: 'https://images.unsplash.com/photo-1546823998-b6c06c524256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Premium ribeye steak grilled to your preference with roasted garlic.'
    },
    
    // Desserts
    {
        id: 14,
        title: 'Chocolate Lava Cake',
        category: 'desserts',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1578988831306-80d814ba3c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.'
    },
    {
        id: 15,
        title: 'Tiramisu',
        category: 'desserts',
        price: 7.99,
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea60709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.'
    },
    {
        id: 16,
        title: 'Cheesecake',
        category: 'desserts',
        price: 9.99,
        img: 'https://images.unsplash.com/photo-1528735602780-2552fd9441d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'New York style cheesecake with berry compote and fresh cream.'
    },
    {
        id: 17,
        title: 'Crème Brûlée',
        category: 'desserts',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1559804973-116cb75a55ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Classic French dessert with caramelized sugar top and creamy vanilla custard.'
    },
    {
        id: 18,
        title: 'Apple Pie',
        category: 'desserts',
        price: 7.99,
        img: 'https://images.unsplash.com/photo-1593115042334-863926b79a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Traditional apple pie with cinnamon-spiced apples and flaky crust.'
    },
    {
        id: 19,
        title: 'Chocolate Mousse',
        category: 'desserts',
        price: 6.99,
        img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Light and airy chocolate mousse topped with fresh berries and whipped cream.'
    },
    {
        id: 20,
        title: 'Ice Cream Sundae',
        category: 'desserts',
        price: 5.99,
        img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Three scoops of premium ice cream with hot fudge, nuts, and cherry.'
    },
    
    // Drinks
    {
        id: 21,
        title: 'Fresh Orange Juice',
        category: 'drinks',
        price: 4.99,
        img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Freshly squeezed orange juice, served chilled with ice.'
    },
    {
        id: 22,
        title: 'Iced Tea',
        category: 'drinks',
        price: 3.99,
        img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Freshly brewed iced tea with lemon and fresh mint.'
    },
    {
        id: 23,
        title: 'Coffee Latte',
        category: 'drinks',
        price: 5.99,
        img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Espresso with steamed milk foam, topped with latte art.'
    },
    {
        id: 24,
        title: 'Mojito',
        category: 'drinks',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1551024601-b578cdd94ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Fresh mint, lime, sugar, and white rum muddled with soda water.'
    },
    {
        id: 25,
        title: 'Smoothie Bowl',
        category: 'drinks',
        price: 7.99,
        img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Blend of mixed berries, banana, yogurt, and honey with granola topping.'
    },
    {
        id: 26,
        title: 'Lemonade',
        category: 'drinks',
        price: 4.99,
        img: 'https://images.unsplash.com/photo-1544145945-f7646f5d8d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        desc: 'Fresh squeezed lemonade with mint and natural cane sugar.'
    }
];

// Display menu items with modern cards
function displayMenuItems(items) {
    if (!menuGrid) return;
    
    let displayMenu = items.map((item, index) => `
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
    `);
    
    displayMenu = displayMenu.join('');
    menuGrid.innerHTML = displayMenu;
    
    // Add staggered animation to menu items
    const menuItemElements = document.querySelectorAll('.menu-item');
    menuItemElements.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
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

// View menu item details (modal)
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
                        <button class="btn btn-primary" onclick="addToOrder(${item.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Order
                        </button>
                        <button class="btn btn-secondary" onclick="closeMenuModal()">
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
        closeMenuModal();
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
    }

    // Create indicators
    createIndicators();
    
    // Show first slide
    showSlide(0);
    
    // Start auto-play (4 seconds as requested)
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
    slideInterval = setInterval(nextSlide, 4000); // 4 seconds as requested
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

// Scroll Animations using IntersectionObserver
function initScrollAnimations() {
    const animationElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animationElements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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

// Mobile menu toggle
function initMobileMenu() {
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
}

// Back to top button
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn?.classList.add('show');
        } else {
            backToTopBtn?.classList.remove('show');
        }
    });
    
    backToTopBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form handling
function handleContactForm(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }, 1500);
}

// Close success message
function closeSuccessMessage() {
    successMessage.classList.remove('show');
}

// Newsletter form handling
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            }
        });
    }
}

// Add animation classes to elements
function addAnimationClasses() {
    // About section
    document.querySelector('.about-text')?.classList.add('slide-left');
    document.querySelector('.about-image')?.classList.add('slide-right');
    
    // Menu items (added dynamically when displayed)
    
    // Location section
    document.querySelector('.location-info')?.classList.add('slide-left');
    document.querySelector('.map')?.classList.add('slide-right');
    
    // Contact section
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Footer sections
    document.querySelectorAll('.footer-section').forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize everything when DOM is loaded
function init() {
    // Initialize hero slider
    initHeroSlider();
    
    // Load menu items
    displayMenuItems(menuItems);
    
    // Initialize filter functionality
    filterMenu();
    
    // Add animation classes
    addAnimationClasses();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize back to top
    initBackToTop();
    
    // Initialize newsletter
    initNewsletter();
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Close success message
    if (closeMessage) {
        closeMessage.addEventListener('click', closeSuccessMessage);
    }
    
    // Close success message when clicking outside
    successMessage?.addEventListener('click', (e) => {
        if (e.target === successMessage) {
            closeSuccessMessage();
        }
    });
    
    // Close success message with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessMessage();
            closeMenuModal();
        }
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Add CSS for modal and notification
const additionalCSS = `
    .menu-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }
    
    .menu-modal.active {
        opacity: 1;
        visibility: visible;
    }
    
    .menu-modal-content {
        background: var(--card-bg);
        border-radius: var(--border-radius);
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        border: 1px solid rgba(197, 157, 95, 0.2);
    }
    
    .close-modal {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 2rem;
        color: var(--text-primary);
        cursor: pointer;
        z-index: 10;
        transition: var(--transition);
    }
    
    .close-modal:hover {
        color: var(--primary-gold);
    }
    
    .menu-modal-img {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
    
    .menu-modal-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .menu-modal-info {
        padding: 30px;
    }
    
    .menu-modal-info h2 {
        color: var(--text-primary);
        margin-bottom: 10px;
        font-family: 'Playfair Display', serif;
    }
    
    .menu-modal-info .price {
        color: var(--primary-gold);
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 15px;
    }
    
    .menu-modal-info .description {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 25px;
    }
    
    .modal-actions {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-gold);
        color: var(--dark-bg);
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification i {
        font-size: 1.2rem;
    }
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

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
