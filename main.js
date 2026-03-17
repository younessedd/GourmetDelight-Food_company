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

// Language Selector Elements
const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');
const langCurrent = document.querySelector('.lang-current');

// Hero Slider Elements
const heroSlider = document.querySelector('.hero-slider');
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
const heroIndicators = document.querySelector('.hero-indicators');

let currentSlide = 0;
let slideInterval;

// Menu Data with Local Food Images - Updated for GitHub Pages
const menuItems = [
    // Starters
    {
        id: 1,
        title: 'Bruschetta',
        title_fr: 'Bruschetta',
        title_ar: 'بروشيتا',
        category: 'starters',
        price: 8.99,
        img: 'images/bruschetta.jpg',
        desc: 'Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.',
        desc_fr: 'Pain grillé garni de tomates fraîches, d\'ail, de basilic et d\'huile d\'olive vierge extra.',
        desc_ar: 'خبز محمص مغطى بالطماطم الطازجة والثوم والريحان وزيت الزيتون البكر الممتاز.'
    },
    {
        id: 2,
        title: 'Caesar Salad',
        title_fr: 'Salade César',
        title_ar: 'سلطة قيصر',
        category: 'starters',
        price: 10.99,
        img: 'images/caesar-salad.jpg',
        desc: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.',
        desc_fr: 'Laitue romaine croustillante avec vinaigrette César, croûtons et parmesan.',
        desc_ar: 'خس روماني مقرمش مع صلصة قيصر والكروتون وجبن البارميزان.'
    },
    {
        id: 3,
        title: 'Spinach Artichoke Dip',
        title_fr: 'Dip aux Épinards et Artichauts',
        title_ar: 'غمس السبانخ والخرشوف',
        category: 'starters',
        price: 9.99,
        img: 'images/spinach-artichoke-dip.jpg',
        desc: 'Creamy spinach and artichoke dip served with warm pita bread.',
        desc_fr: 'Dip crémeux aux épinards et artichauts servi avec du pain pita chaud.',
        desc_ar: 'غمس كريمي بالسبانخ والخرشوف يقدم مع خبز بيتا دافئ.'
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
        img: 'images/pizza.jpg',
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
        img: 'images/chocolate-mousse.jpg',
        desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.'
    },
    {
        id: 15,
        title: 'Tiramisu',
        category: 'desserts',
        price: 7.99,
        img: 'images/ice-cream-sundae.jpg',
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.'
    },
    {
        id: 16,
        title: 'Cheesecake',
        category: 'desserts',
        price: 9.99,
        img: 'images/pancakes.jpg',
        desc: 'New York style cheesecake with berry compote and fresh cream.'
    },
    {
        id: 17,
        title: 'Crème Brûlée',
        category: 'desserts',
        price: 8.99,
        img: 'images/chocolate-mousse.jpg',
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
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Freshly brewed iced tea with lemon and fresh mint.'
    },
    {
        id: 23,
        title: 'Coffee Latte',
        category: 'drinks',
        price: 5.99,
        img: 'images/coffee-latte.jpg',
        desc: 'Espresso with steamed milk foam, topped with latte art.'
    },
    {
        id: 24,
        title: 'Mojito',
        category: 'drinks',
        price: 8.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Fresh mint, lime, sugar, and white rum muddled with soda water.'
    },
    {
        id: 25,
        title: 'Smoothie Bowl',
        category: 'drinks',
        price: 7.99,
        img: 'images/pancakes.jpg',
        desc: 'Blend of mixed berries, banana, yogurt, and honey with granola topping.'
    },
    {
        id: 26,
        title: 'Lemonade',
        category: 'drinks',
        price: 4.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Fresh squeezed lemonade with mint and natural cane sugar.'
    }
];

// Display menu items
function displayMenuItems(items) {
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item fade-in';
        menuItem.setAttribute('data-category', item.category);
        menuItem.setAttribute('data-id', item.id);
        
        // Get current language
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        
        // Select appropriate title and description
        let title = item.title;
        let desc = item.desc;
        
        if (currentLang === 'fr' && item.title_fr) {
            title = item.title_fr;
            desc = item.desc_fr || desc;
        } else if (currentLang === 'ar' && item.title_ar) {
            title = item.title_ar;
            desc = item.desc_ar || desc;
        }
        
        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.img}" alt="${title}" loading="lazy">
                <div class="menu-item-overlay">
                    <button class="menu-item-btn" onclick="viewMenuItem(${item.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${title}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-desc">${desc}</p>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Add animation
    setTimeout(() => {
        const menuItemElements = menuGrid.querySelectorAll('.menu-item');
        menuItemElements.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    }, 100);
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

// Language Selector Functionality
function initLanguageSelector() {
    // Re-select elements to ensure they exist
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const langCurrent = document.querySelector('.lang-current');
    
    console.log('Language selector elements:', { langBtn, langDropdown, langOptions, langCurrent });
    
    if (!langBtn || !langDropdown) {
        console.warn('Language selector elements not found');
        return;
    }
    
    // Remove existing listeners to prevent duplicates
    const newLangBtn = langBtn.cloneNode(true);
    langBtn.parentNode.replaceChild(newLangBtn, langBtn);
    
    // Toggle dropdown
    newLangBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Language button clicked');
        const isOpen = langDropdown.classList.contains('active');
        langDropdown.classList.toggle('active');
        newLangBtn.setAttribute('aria-expanded', !isOpen);
        console.log('Dropdown toggled:', !isOpen);
    });
    
    // Handle language selection
    langOptions.forEach(option => {
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
        
        newOption.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = newOption.dataset.lang;
            console.log('Language selected:', selectedLang);
            switchLanguage(selectedLang);
            langDropdown.classList.remove('active');
            newLangBtn.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!newLangBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
            newLangBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Switch language function
function switchLanguage(lang) {
    // Re-select elements to ensure they exist
    const langCurrent = document.querySelector('.lang-current');
    
    console.log('Switching to language:', lang);
    
    // Update current language display
    if (langCurrent) {
        langCurrent.textContent = lang.toUpperCase();
        console.log('Language display updated to:', lang.toUpperCase());
    }
    
    // Handle RTL/LTR direction for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.setAttribute('lang', 'ar');
        console.log('RTL direction set for Arabic');
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.setAttribute('lang', lang);
        console.log('LTR direction set for', lang);
    }
    
    // Update all elements with translation attributes
    const elements = document.querySelectorAll('[data-en][data-fr][data-ar]');
    console.log('Found translatable elements:', elements.length);
    
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text' || 
                element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update filter buttons specifically
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const translation = btn.getAttribute(`data-${lang}`);
        if (translation) {
            btn.textContent = translation;
        }
    });
    
    // Refresh menu items to show correct language
    const activeFilter = document.querySelector('.filter-btn.active');
    const currentCategory = activeFilter ? activeFilter.dataset.filter : 'all';
    if (currentCategory === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === currentCategory);
        displayMenuItems(filteredItems);
    }
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    console.log('Language preference saved:', lang);
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLang);
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
    
    // Initialize language selector
    initLanguageSelector();
    
    // Load saved language preference
    loadSavedLanguage();
    
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
