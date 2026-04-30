// Building data configuration
const buildingData = {
    castle: {
        title: 'Castle',
        icon: '🏰',
        primaryOption: '1.5 Million Swordmen',
        options: [
            { icon: '⚔️', text: '1.5 Million Swordmen' },
            { icon: '⬆️', text: 'Upgrade' },
            { icon: '🔍', text: 'Search' }
        ]
    },
    tower: {
        title: 'Tower',
        icon: '🗼',
        primaryOption: 'Deploy Archers',
        options: [
            { icon: '🏹', text: 'Deploy Archers' },
            { icon: '⬆️', text: 'Upgrade' },
            { icon: '🛡️', text: 'Fortify' }
        ]
    },
    fort: {
        title: 'Fort',
        icon: '🏛️',
        primaryOption: 'Station Troops',
        options: [
            { icon: '👥', text: 'Station Troops' },
            { icon: '⬆️', text: 'Upgrade' },
            { icon: '🔍', text: 'Scout' }
        ]
    },
    village: {
        title: 'Village',
        icon: '🏘️',
        primaryOption: 'Collect Resources',
        options: [
            { icon: '💰', text: 'Collect Resources' },
            { icon: '⬆️', text: 'Upgrade' },
            { icon: '👨‍🌾', text: 'Assign Workers' }
        ]
    },
    barracks: {
        title: 'Barracks',
        icon: '⚔️',
        primaryOption: 'Train Soldiers',
        options: [
            { icon: '⚔️', text: 'Train Soldiers' },
            { icon: '⬆️', text: 'Upgrade' },
            { icon: '🎯', text: 'Deploy' }
        ]
    }
};

// State management
let activeBuilding = null;
let menuVisible = false;

// Get DOM elements
const mapContainer = document.getElementById('mapContainer');
const contextualMenu = document.getElementById('contextualMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const rippleContainer = document.getElementById('rippleContainer');
const buildings = document.querySelectorAll('.building');

// Initialize event listeners
function init() {
    // Add click/touch listeners to buildings
    buildings.forEach(building => {
        // Support both mouse and touch events
        building.addEventListener('click', handleBuildingClick);
        building.addEventListener('touchstart', handleBuildingTouch, { passive: true });
    });

    // Close menu button
    closeMenuBtn.addEventListener('click', hideMenu);
    closeMenuBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        hideMenu();
    });

    // Close menu when clicking outside
    mapContainer.addEventListener('click', (e) => {
        if (menuVisible && !contextualMenu.contains(e.target) && !e.target.closest('.building')) {
            hideMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuVisible) {
            hideMenu();
        }
    });

    // Add ripple effect to menu options
    const menuOptions = document.querySelectorAll('.menu-option');
    menuOptions.forEach(option => {
        option.addEventListener('click', handleMenuOptionClick);
    });

    // Prevent default touch behavior on map
    mapContainer.addEventListener('touchmove', (e) => {
        if (e.target.closest('.contextual-menu')) {
            return;
        }
        // Allow normal scrolling on menu
    }, { passive: true });
}

// Handle building click
function handleBuildingClick(e) {
    e.stopPropagation();
    const building = e.currentTarget;
    showBuildingMenu(building, e);
}

// Handle building touch
function handleBuildingTouch(e) {
    const building = e.currentTarget;
    const touch = e.touches[0];

    // Add visual feedback
    building.classList.add('tapped');
    setTimeout(() => building.classList.remove('tapped'), 600);

    // Create ripple effect
    createRipple(touch.clientX, touch.clientY);
}

// Show contextual menu for building
function showBuildingMenu(building, event) {
    const buildingType = building.dataset.type;
    const buildingId = building.dataset.buildingId;
    const data = buildingData[buildingType];

    if (!data) return;

    // Update menu content
    updateMenuContent(data);

    // Get building position
    const rect = building.getBoundingClientRect();
    const buildingCenterX = rect.left + rect.width / 2;
    const buildingCenterY = rect.top + rect.height / 2;

    // Position menu above the building
    positionMenu(buildingCenterX, buildingCenterY);

    // Add active class to building
    if (activeBuilding) {
        activeBuilding.classList.remove('active');
    }
    building.classList.add('active');
    activeBuilding = building;

    // Show menu with animation
    setTimeout(() => {
        contextualMenu.classList.add('visible');
        menuVisible = true;
    }, 50);

    // Create ripple effect at click/tap position
    const x = event.clientX || event.touches?.[0]?.clientX || buildingCenterX;
    const y = event.clientY || event.touches?.[0]?.clientY || buildingCenterY;
    createRipple(x, y);

    // Haptic feedback on mobile
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

// Update menu content
function updateMenuContent(data) {
    const menuTitle = document.getElementById('menuTitle');
    const menuContent = document.querySelector('.menu-content');

    menuTitle.textContent = data.title;

    // Clear existing options
    menuContent.innerHTML = '';

    // Add options
    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'menu-option' + (index === 0 ? ' primary' : '');
        btn.innerHTML = `
            <span class="option-icon">${option.icon}</span>
            <span class="option-text">${option.text}</span>
        `;
        btn.addEventListener('click', handleMenuOptionClick);
        menuContent.appendChild(btn);
    });
}

// Position menu
function positionMenu(x, y) {
    const menuWidth = 280;
    const menuHeight = 220;
    const padding = 20;

    // Calculate position (above the building)
    let left = x - menuWidth / 2;
    let top = y - menuHeight - 40;

    // Keep menu within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < padding) left = padding;
    if (left + menuWidth > viewportWidth - padding) {
        left = viewportWidth - menuWidth - padding;
    }

    if (top < padding + 60) {
        // If not enough space above, show below
        top = y + 40;
    }

    if (top + menuHeight > viewportHeight - padding) {
        top = viewportHeight - menuHeight - padding;
    }

    contextualMenu.style.left = `${left}px`;
    contextualMenu.style.top = `${top}px`;
}

// Hide menu
function hideMenu() {
    contextualMenu.classList.remove('visible');
    menuVisible = false;

    if (activeBuilding) {
        activeBuilding.classList.remove('active');
        activeBuilding = null;
    }
}

// Handle menu option click
function handleMenuOptionClick(e) {
    const option = e.currentTarget;
    const optionText = option.querySelector('.option-text').textContent;

    // Visual feedback
    option.style.transform = 'scale(0.95)';
    setTimeout(() => {
        option.style.transform = '';
    }, 200);

    // Haptic feedback
    if (window.navigator.vibrate) {
        window.navigator.vibrate(15);
    }

    // Log action (in production, this would trigger game logic)
    console.log('Action selected:', optionText);

    // Show feedback animation
    showActionFeedback(optionText);

    // Close menu after a short delay
    setTimeout(() => {
        hideMenu();
    }, 300);
}

// Create ripple effect
function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x - 10}px`;
    ripple.style.top = `${y - 10}px`;

    rippleContainer.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Show action feedback
function showActionFeedback(text) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(40, 40, 80, 0.95);
        color: #ffd700;
        padding: 20px 40px;
        border-radius: 16px;
        font-size: 16px;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(255, 215, 0, 0.5);
        pointer-events: none;
        animation: feedbackPop 0.6s ease-out;
    `;
    feedback.textContent = text;
    document.body.appendChild(feedback);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes feedbackPop {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.05);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        feedback.remove();
        style.remove();
    }, 600);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (menuVisible && activeBuilding) {
        const rect = activeBuilding.getBoundingClientRect();
        const buildingCenterX = rect.left + rect.width / 2;
        const buildingCenterY = rect.top + rect.height / 2;
        positionMenu(buildingCenterX, buildingCenterY);
    }
});

// Prevent double-tap zoom on mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Initialize the app
init();

console.log('Map Interaction Prototype loaded successfully!');
console.log('Tap on any building to see the contextual menu.');
