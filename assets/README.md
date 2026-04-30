# Assets Directory

Organized storage for Figma exports and UI assets.

## Folder Structure

- **`icons/`** - UI icons, ability icons, item icons
- **`panels/`** - Menu backgrounds, dialog boxes, inventory panels
- **`buttons/`** - Button states (idle, hover, pressed, disabled)
- **`backgrounds/`** - Map backgrounds, menu backgrounds
- **`characters/`** - Character sprites, portraits, avatars
- **`ui-elements/`** - Health bars, progress bars, badges, etc.
- **`wireframes/`** - Reference wireframes and mockups from Figma

## Export Guidelines from Figma

### For Pixel Art / Game Assets
- **Format**: PNG with transparency
- **Scale**: Export at @2x and @3x for retina displays
- **Naming**: Use lowercase with hyphens (e.g., `button-primary-hover.png`)

### For Icons
- **Format**: SVG (preferred) or PNG
- **Size**: Export at actual size needed (16px, 24px, 32px, etc.)

### For Backgrounds
- **Format**: JPG for photos, PNG for graphics with transparency
- **Optimize**: Use compression to keep file sizes small

### For UI Elements
- **Format**: PNG with alpha channel
- **Include states**: idle, hover, active, disabled
- **Name consistently**: `element-name-state.png`

## Using Assets in Prototypes

Once exported here, Claude can automatically:
- Reference them in HTML/CSS/JS prototypes
- Generate sprite sheets
- Create responsive variants
- Optimize for web/mobile

## Quick Export from Figma

1. Select frame/asset in Figma
2. Right sidebar → Export section
3. Choose format (PNG/SVG)
4. Click "Export [name]"
5. Save to appropriate folder here
