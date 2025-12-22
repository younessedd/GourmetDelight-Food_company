// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const backToTopBtn = document.querySelector('.back-to-top');
const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const contactForm = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');
const closeMessage = document.querySelector('.close-message');

// Menu Data
const menuItems = [
    {
        id: 1,
        title: 'Bruschetta',
        category: 'starters',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1551183053-bf91a1f81111?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
        desc: 'Toasted bread topped with tomatoes, garlic, and fresh basil.'
    },
    {
        id: 2,
        title: 'Caesar Salad',
        category: 'starters',
        price: 10.99,
        img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        desc: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.'
    },
    {
        id: 3,
        title: 'Grilled Salmon',
        category: 'mains',
        price: 24.99,
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        desc: 'Fresh salmon fillet grilled to perfection with lemon butter sauce.'
    },
    {
        id: 4,
        title: 'Beef Tenderloin',
        category: 'mains',
        price: 32.99,
        img: 'https://images.unsplash.com/photo-1546964124-0cce068f3bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        desc: 'Premium cut beef tenderloin with roasted vegetables and red wine reduction.'
    },
    {
        id: 5,
        title: 'Chocolate Lava Cake',
        category: 'desserts',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1571115177091-12b7d5a9e3f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.'
    },
    {
        id: 6,
        title: 'Tiramisu',
        category: 'desserts',
        price: 7.99,
        img: 'https://images.unsplash.com/photo-1571870180611-1831a7d3a9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.'
    },
    {
        id: 7,
        title: 'Fresh Orange Juice',
        category: 'drinks',
        price: 4.99,
        img: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        desc: 'Freshly squeezed orange juice, served chilled.'
    },
    {
        id: 8,
        title: 'Iced Tea',
        category: 'drinks',
        price: 3.99,
        img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1430&q=80',
        desc: 'Freshly brewed iced tea with lemon.'
    }
];

// Enhanced menu functionality with animations and interactions
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
                <button class="btn btn-primary btn-small" onclick="addToOrder(${item.id})">
                    <i class="fas fa-plus"></i> Add to Order
                </button>
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

// Enhanced filter menu with smooth transitions
function filterMenu() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.filter;
            
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Add loading state
            menuGrid.classList.add('loading');
            
            // Filter menu items with animation
            setTimeout(() => {
                if (category === 'all') {
                    displayMenuItems(menuItems);
                } else {
                    const filteredItems = menuItems.filter(item => item.category === category);
                    displayMenuItems(filteredItems);
                }
                menuGrid.classList.remove('loading');
            }, 300);
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
                        <button class="btn btn-primary" onclick="addToOrder(${item.id})">
                            <i class="fas fa-plus"></i> Add to Order
                        </button>
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

// Initialize
function init() {
    // Load menu items
    displayMenuItems(menuItems);
    
    // Initialize filter functionality
    filterMenu();
    
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
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 
                document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            );
            // Toggle between sun and moon icons
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        });
    }
    
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

// Gallery Images
const galleryImages = [
    'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1555396273-8b3f41d5a50f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1555396273-8b3f41d5a50f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
];

// Display gallery images
function displayGalleryImages() {
    const galleryHTML = galleryImages.map((img, index) => {
        return `
        <div class="gallery-item" style="background-image: url('${img}');" data-index="${index}">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
        `;
    }).join('');
    
    galleryGrid.innerHTML = galleryHTML;
    
    // Add click event to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const imgIndex = item.getAttribute('data-index');
            lightboxImg.src = galleryImages[imgIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
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
    
    // Initialize gallery
    displayGalleryImages();
    
    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
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