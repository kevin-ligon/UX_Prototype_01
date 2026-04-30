# UX Prototype 01 - Interactive Map Prototype

An interactive prototype for testing building interactions on a strategy game map interface. Built for web and mobile devices with smooth animations and touch-optimized interactions.

## Features

- **Interactive Map**: Tap/click on buildings to reveal contextual menus
- **Touch Optimized**: Full support for mobile touch interactions with haptic feedback
- **Visual Feedback**: Ripple effects, pulse animations, and smooth transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Contextual Menus**: Dynamic menus that adapt based on building type

## Quick Start

### Option 1: Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. Tap/click on buildings to interact

### Option 2: GitHub Pages
Visit the live demo at: `https://kevin-ligon.github.io/UX_Prototype_01/`

### Option 3: Mobile Testing
Scan the QR code (once deployed) or serve locally:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve

# Then visit on mobile device using your local IP
# Example: http://192.168.1.100:8000
```

## Interaction Guide

1. **Tap on Buildings**: Click or tap any building on the map
2. **View Menu**: A contextual menu appears above the building
3. **Select Action**: Choose from available options (Deploy, Upgrade, Search, etc.)
4. **Visual Feedback**: Watch for ripple effects and animations
5. **Close Menu**: Click the X button or tap outside the menu

## Building Types

- **Castle** (🏰): Deploy swordmen, upgrade, or search
- **Tower** (🗼): Deploy archers, upgrade, or fortify
- **Fort** (🏛️): Station troops, upgrade, or scout
- **Village** (🏘️): Collect resources, upgrade, or assign workers
- **Barracks** (⚔️): Train soldiers, upgrade, or deploy

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **Touch Events**: Optimized for both mouse and touch interactions
- **Responsive SVG**: Scalable map that works on any screen size
- **CSS Animations**: Smooth, hardware-accelerated transitions
- **Mobile Optimized**: Prevents zoom, double-tap, and provides haptic feedback

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interaction logic and event handling
- `Reference Images/` - Original wireframes

## Browser Support

- Chrome/Edge (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- All modern browsers with ES6 support

## Testing Checklist

- [ ] Tap buildings to trigger menus
- [ ] Test ripple effects on tap
- [ ] Verify menu positioning on different buildings
- [ ] Test close menu functionality
- [ ] Check responsive design on different screen sizes
- [ ] Test on actual mobile devices
- [ ] Verify animations are smooth
- [ ] Test touch feedback (vibration on supported devices)

## Next Steps

This prototype is designed for UX testing. Consider:
- Gathering user feedback on interaction feel
- Testing menu positioning preferences
- Evaluating animation timing and smoothness
- Assessing touch target sizes on mobile
- Testing with various building densities

## License

MIT License - Feel free to use and modify for your projects.
