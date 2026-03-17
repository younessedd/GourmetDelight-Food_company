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
        title_fr: 'Champignons Farcis',
        title_ar: 'فطر محشي',
        category: 'starters',
        price: 11.99,
        img: 'images/stuffed-mushrooms.jpg',
        desc: 'Button mushrooms stuffed with herbs, cheese, and breadcrumbs.',
        desc_fr: 'Champignons de Paris farcis aux herbes, fromage et chapelure.',
        desc_ar: 'فطر أجارون محشي بالأعشاب والجبن وفتات الخبز.'
    },
    {
        id: 5,
        title: 'Shrimp Cocktail',
        title_fr: 'Cocktail de Crevettes',
        title_ar: 'كوكتيل الروبيان',
        category: 'starters',
        price: 12.99,
        img: 'images/shrimp-cocktail.jpg',
        desc: 'Chilled shrimp with cocktail sauce, lemon, and fresh herbs.',
        desc_fr: 'Crevettes refroidies avec sauce cocktail, citron et herbes fraîches.',
        desc_ar: 'روبيان مبرد مع صلصة الكوكتيل والليمون والأعشاب الطازجة.'
    },
    {
        id: 6,
        title: 'Garlic Bread',
        title_fr: 'Pain à l\'Ail',
        title_ar: 'خبز الثوم',
        category: 'starters',
        price: 7.99,
        img: 'images/garlic-bread.jpg',
        desc: 'Warm garlic bread with herbs and melted mozzarella cheese.',
        desc_fr: 'Pain à l\'ail chaud avec herbes et fromage mozzarella fondu.',
        desc_ar: 'خبز ثوم دافئ بالأعشاب وجبن الموتزاريلا المذاب.'
    },
    
    // Main Courses
    {
        id: 7,
        title: 'Grilled Salmon',
        title_fr: 'Saumon Grillé',
        title_ar: 'سلمون مشوي',
        category: 'mains',
        price: 24.99,
        img: 'images/grilled-salmon.jpg',
        desc: 'Fresh salmon fillet grilled to perfection with lemon butter sauce.',
        desc_fr: 'Filet de saumon frais grillé à la perfection avec sauce au beurre de citron.',
        desc_ar: 'سمك السلمون الطازج المشوي بشكل مثالي مع صلصة الزبدة والليمون.'
    },
    {
        id: 8,
        title: 'Beef Tenderloin',
        title_fr: 'Filet de Bœuf',
        title_ar: 'فيلف لحم البقر',
        category: 'mains',
        price: 32.99,
        img: 'images/beef-tenderloin-alt.jpg',
        desc: 'Premium cut beef tenderloin with roasted vegetables and red wine reduction.',
        desc_fr: 'Filet de bœuf de qualité supérieure avec légumes rôtis et réduction de vin rouge.',
        desc_ar: 'قطعة فيليف لحم بقري ممتازة مع خضروات مشوية وصلصة نبيذ أحمر.'
    },
    {
        id: 9,
        title: 'Chicken Parmesan',
        title_fr: 'Poulet Parmesan',
        title_ar: 'دجاج بارميزان',
        category: 'mains',
        price: 22.99,
        img: 'images/fried-chicken.jpg',
        desc: 'Breaded chicken breast topped with marinara sauce and melted mozzarella.',
        desc_fr: 'Poitrine de poulet panée avec sauce marinara et mozzarella fondue.',
        desc_ar: 'صدر دجاج مغطى بالبقسماط مع صلصة مارينارا وجبن الموتزاريلا المذاب.'
    },
    {
        id: 10,
        title: 'Pasta Carbonara',
        title_fr: 'Pâtes Carbonara',
        title_ar: 'باستا كاربونارا',
        category: 'mains',
        price: 18.99,
        img: 'images/pasta.jpg',
        desc: 'Classic Italian pasta with eggs, pecorino cheese, and crispy pancetta.',
        desc_fr: 'Pâtes italiennes classiques avec œufs, fromage pecorino et pancetta croustillante.',
        desc_ar: 'باستا إيطالية كلاسيكية مع البيض وجبن بيكورينو وبانشيتا مقرمشة.'
    },
    {
        id: 11,
        title: 'Lobster Tail',
        title_fr: 'Queue de Homard',
        title_ar: 'ذيل جراد البحر',
        category: 'mains',
        price: 36.99,
        img: 'images/sushi.jpg',
        desc: 'Fresh lobster tail with garlic butter and seasonal vegetables.',
        desc_fr: 'Queue de homard fraîche avec beurre d\'ail et légumes de saison.',
        desc_ar: 'ذيل جراد البحر الطازج مع زبدة الثوم والخضروات الموسمية.'
    },
    {
        id: 12,
        title: 'Vegetable Stir Fry',
        title_fr: 'Légumes Sautés',
        title_ar: 'خضروات مقلية',
        category: 'mains',
        price: 16.99,
        img: 'images/pizza.jpg',
        desc: 'Fresh seasonal vegetables stir-fried with ginger and soy sauce.',
        desc_fr: 'Légumes frais de saison sautés au gingembre et sauce soja.',
        desc_ar: 'خضروات طازجة موسمية مقلية مع الزنجبيل وصلصة الصويا.'
    },
    {
        id: 13,
        title: 'Ribeye Steak',
        title_fr: 'Steak Ribeye',
        title_ar: 'شريحة لحم ضلع',
        category: 'mains',
        price: 38.99,
        img: 'images/beef-tenderloin-alt.jpg',
        desc: 'Premium ribeye steak grilled to your preference with roasted garlic.',
        desc_fr: 'Steak ribeye premium grillé selon votre préférence avec ail rôti.',
        desc_ar: 'شريحة لحم ضلع ممتازة مشوية حسب تفضيلك مع ثوم محمر.'
    },
    
    // Desserts
    {
        id: 14,
        title: 'Chocolate Lava Cake',
        title_fr: 'Gâteau Coulant au Chocolat',
        title_ar: 'كيك الشوكولاتة الحممي',
        category: 'desserts',
        price: 8.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
        desc_fr: 'Gâteau au chocolat chaud à cœur coulant, servi avec glace à la vanille.',
        desc_ar: 'كيك شوكولاتا دافئ بقلب سائل، يقدم مع آيس كريم الفانيليا.'
    },
    {
        id: 15,
        title: 'Tiramisu',
        title_fr: 'Tiramisu',
        title_ar: 'تيراميسو',
        category: 'desserts',
        price: 7.99,
        img: 'images/ice-cream-sundae.jpg',
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        desc_fr: 'Dessert italien classique avec couches de biscuits à la cuillère imbibés de café et crème mascarpone.',
        desc_ar: 'حلوى إيطالية كلاسيكية مع طبقات من البسكويت المنقوع بالقهوة وكريمة الماسكاربون.'
    },
    {
        id: 16,
        title: 'Cheesecake',
        title_fr: 'Cheesecake',
        title_ar: 'تشيز كيك',
        category: 'desserts',
        price: 9.99,
        img: 'images/pancakes.jpg',
        desc: 'New York style cheesecake with berry compote and fresh cream.',
        desc_fr: 'Cheesecake style New York avec compote de baies et crème fraîche.',
        desc_ar: 'تشيز كيك على طراز نيويورك مع مربى التوت وكريمة طازجة.'
    },
    {
        id: 17,
        title: 'Crème Brûlée',
        title_fr: 'Crème Brûlée',
        title_ar: 'كريم بروليه',
        category: 'desserts',
        price: 8.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Classic French dessert with caramelized sugar top and creamy vanilla custard.',
        desc_fr: 'Dessert français classique avec dessus de sucre caramélisé et crème à la vanille onctueuse.',
        desc_ar: 'حلوى فرنسية كلاسيكية مع قمة سكر محمر وكاسترد الفانيليا الكريمي.'
    },
    {
        id: 18,
        title: 'Apple Pie',
        title_fr: 'Tarte aux Pommes',
        title_ar: 'فطيرة التفاح',
        category: 'desserts',
        price: 7.99,
        img: 'images/pancakes.jpg',
        desc: 'Traditional apple pie with cinnamon-spiced apples and flaky crust.',
        desc_fr: 'Tarte aux pommes traditionnelle avec pommes épicées à la cannelle et pâte feuilletée.',
        desc_ar: 'فطيرة تفاح تقليدية مع تفاح بالقرفة وقشرة هشة.'
    },
    {
        id: 19,
        title: 'Chocolate Mousse',
        title_fr: 'Mousse au Chocolat',
        title_ar: 'موس الشوكولاتة',
        category: 'desserts',
        price: 6.99,
        img: 'images/chocolate-mousse.jpg',
        desc: 'Light and airy chocolate mousse topped with fresh berries and whipped cream.',
        desc_fr: 'Mousse au chocolat légère et aérée garnie de baies fraîches et crème fouettée.',
        desc_ar: 'موس شوكولاتة خفيف ومنعش مغطى بالتوت الطازج والكريمة المخفوقة.'
    },
    {
        id: 20,
        title: 'Ice Cream Sundae',
        title_fr: 'Sundae Glacé',
        title_ar: 'سوندي آيس كريم',
        category: 'desserts',
        price: 5.99,
        img: 'images/ice-cream-sundae.jpg',
        desc: 'Three scoops of premium ice cream with hot fudge, nuts, and cherry.',
        desc_fr: 'Trois boules de crème glacée premium avec sauce chocolat chaude, noix et cerise.',
        desc_ar: 'ثلاث كرات من آيس كريم ممتاز مع صلصة الشوكولاتة الساخنة والمكسرات والكرز.'
    },
    
    // Drinks
    {
        id: 21,
        title: 'Fresh Orange Juice',
        title_fr: 'Jus d\'Orange Frais',
        title_ar: 'عصير برتقال طازج',
        category: 'drinks',
        price: 4.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Freshly squeezed orange juice, served chilled with ice.',
        desc_fr: 'Jus d\'orange fraîchement pressé, servi frais avec des glaçons.',
        desc_ar: 'عصير برتقال طازج معصور على البارد، يقدم مع الثلج.'
    },
    {
        id: 22,
        title: 'Iced Tea',
        title_fr: 'Thé Glacé',
        title_ar: 'شاي مثلج',
        category: 'drinks',
        price: 3.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Freshly brewed iced tea with lemon and fresh mint.',
        desc_fr: 'Thé glacé fraîchement infusé avec citron et menthe fraîche.',
        desc_ar: 'شاي مثلج منعش حديثاً مع الليمون والنعناع الطازج.'
    },
    {
        id: 23,
        title: 'Coffee Latte',
        title_fr: 'Café Latte',
        title_ar: 'قهوة لاتيه',
        category: 'drinks',
        price: 5.99,
        img: 'images/coffee-latte.jpg',
        desc: 'Espresso with steamed milk foam, topped with latte art.',
        desc_fr: 'Espresso avec mousse de lait vapeur, garni de latte art.',
        desc_ar: 'إسبريسو مع رغوة الحليب البخاري، مزيّن بفن اللاتيه.'
    },
    {
        id: 24,
        title: 'Mojito',
        title_fr: 'Mojito',
        title_ar: 'موحيتو',
        category: 'drinks',
        price: 8.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Fresh mint, lime, sugar, and white rum muddled with soda water.',
        desc_fr: 'Menthe fraîche, citron vert, sucre et rhum blanc pilonnés avec eau gazeuse.',
        desc_ar: 'نعناع طازج، ليمون، سكر، وروم أبيض مضاف مع المياه الغازية.'
    },
    {
        id: 25,
        title: 'Smoothie Bowl',
        title_fr: 'Bol de Smoothie',
        title_ar: 'سلسلي بول',
        category: 'drinks',
        price: 7.99,
        img: 'images/pancakes.jpg',
        desc: 'Blend of mixed berries, banana, yogurt, and honey with granola topping.',
        desc_fr: 'Mélange de baies mélangées, banane, yaourt et miel avec topping granola.',
        desc_ar: 'خليط من التوت المختلط، الموز، الزبادي، والعسل مع تغطية الجرانولا.'
    },
    {
        id: 26,
        title: 'Lemonade',
        title_fr: 'Limonade',
        title_ar: 'ليمونادة',
        category: 'drinks',
        price: 4.99,
        img: 'images/fresh-orange-juice.jpg',
        desc: 'Fresh squeezed lemonade with mint and natural cane sugar.',
        desc_fr: 'Limonade fraîchement pressée avec menthe et sucre de canne naturel.',
        desc_ar: 'ليمونادة طازجة معصورة مع النعناع وسكر القصب الطبيعي.'
    }
];

// Display menu items
function displayMenuItems(items) {
    // Re-select menuGrid to ensure it exists
    const menuGridEl = document.querySelector('.menu-grid');
    if (!menuGridEl) return;
    
    menuGridEl.innerHTML = '';
    
    // Get current language for Quick View button text
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    let quickViewText = 'Quick View';
    if (currentLang === 'fr') quickViewText = 'Aperçu Rapide';
    else if (currentLang === 'ar') quickViewText = 'عرض سريع';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item fade-in';
        menuItem.setAttribute('data-category', item.category);
        menuItem.setAttribute('data-id', item.id);
        
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
                        <i class="fas fa-eye"></i> ${quickViewText}
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
        
        menuGridEl.appendChild(menuItem);
    });
    
    // Add animation
    setTimeout(() => {
        const menuItemElements = menuGridEl.querySelectorAll('.menu-item');
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
        
        // Get translated button texts
        let addToOrderText = 'Add to Order';
        let closeText = 'Close';
        if (currentLang === 'fr') {
            addToOrderText = 'Ajouter à la Commande';
            closeText = 'Fermer';
        } else if (currentLang === 'ar') {
            addToOrderText = 'أضف للطلب';
            closeText = 'إغلاق';
        }
        
        // Create modal for item details
        const modal = document.createElement('div');
        modal.className = 'menu-modal active';
        modal.innerHTML = `
            <div class="menu-modal-content">
                <span class="close-modal">&times;</span>
                <div class="menu-modal-img">
                    <img src="${item.img}" alt="${title}">
                </div>
                <div class="menu-modal-info">
                    <h2>${title}</h2>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <p class="description">${desc}</p>
                    <div class="modal-actions">
                        <button class="btn btn-primary" onclick="addToOrder(${item.id})">
                            <i class="fas fa-shopping-cart"></i> ${addToOrderText}
                        </button>
                        <button class="btn btn-secondary" onclick="closeMenuModal()">
                            ${closeText}
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
    
    // Update form placeholders specifically
    const formInputs = document.querySelectorAll('input[data-en-placeholder], textarea[data-en-placeholder]');
    formInputs.forEach(input => {
        const placeholder = input.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            input.placeholder = placeholder;
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
