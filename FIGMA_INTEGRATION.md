# Figma Integration Guide

Complete integration with your Figma projects for seamless design-to-prototype workflow.

## ✅ Setup Complete

All three integration methods are now configured:

### 🔗 **Option 1: Figma Links** (Ready Now)
Share any Figma URL with Claude:
```
https://www.figma.com/file/ABC123/My-Design
https://www.figma.com/design/ABC123/My-Game-UI
```

Claude can view and analyze:
- Layouts and spacing
- Color palettes
- Typography
- Component structure
- Interaction states

### 🐍 **Option 2: Figma API** (Configured)
Programmatic access via Python script:

```bash
# Get entire file structure
python3 figma-api.py get-file <file-key>

# Extract color palette
python3 figma-api.py get-colors <file-key>

# Get image export URLs
python3 figma-api.py get-images <file-key> <node-id>
```

**Your API Token**: Stored securely in `.env.local` (gitignored)

### 📁 **Option 3: Asset Exports** (Folders Ready)
Export from Figma → Save to organized folders:

```
/assets/
├── icons/          # UI icons, ability icons
├── panels/         # Menu backgrounds, dialogs
├── buttons/        # Button states
├── backgrounds/    # Map/menu backgrounds
├── characters/     # Sprites, portraits
├── ui-elements/    # Health bars, badges
└── wireframes/     # Reference mockups
```

---

## 📖 How to Use Each Method

### **Method 1: Share Links**

**Best for**: Quick reference, design reviews, extracting specs

1. Open your Figma file
2. Click "Share" → "Copy link"
3. Paste in chat with Claude
4. Claude analyzes and extracts what you need

**Example conversation:**
```
You: "Here's my inventory UI: https://figma.com/file/..."
Claude: [analyzes] "I can see you're using #D4AF37 gold and 
        16px spacing. The panels are 320px wide. Let me 
        create a prototype matching these specs..."
```

---

### **Method 2: API Access**

**Best for**: Automated workflows, batch exports, design tokens

#### Get File Key from URL
```
https://figma.com/file/ABC123xyz/My-Design
                     ↑↑↑↑↑↑↑↑↑
                   This is your file key
```

#### Common Commands

**1. Get Full File Data**
```bash
python3 figma-api.py get-file ABC123xyz
```
Returns JSON with complete file structure, all frames, components, etc.

**2. Extract Color Palette**
```bash
python3 figma-api.py get-colors ABC123xyz
```
Returns all unique colors used in the file:
```json
[
  "#D4AF37",
  "#8B5CF6",
  "rgba(255, 255, 255, 0.8)"
]
```

**3. Get Image Export URLs**
```bash
python3 figma-api.py get-images ABC123xyz 123:456 123:457
```
Returns URLs to download rendered images of specific nodes.

**Finding Node IDs:**
1. In Figma, select a frame/component
2. Right-click → "Copy/Paste as" → "Copy link"
3. URL will be: `figma.com/file/ABC123?node-id=123-456`
4. Node ID is `123:456` (replace dash with colon)

---

### **Method 3: Manual Exports**

**Best for**: Production-ready assets, full control over quality

#### Export from Figma

**For UI Elements:**
1. Select frame/component
2. Right sidebar → Export section
3. Format: PNG (with transparency)
4. Scale: @2x for retina
5. Export → Save to `/assets/ui-elements/`

**For Icons:**
1. Select icon
2. Format: SVG (preferred) or PNG
3. Export → Save to `/assets/icons/`

**For Backgrounds:**
1. Select background frame
2. Format: JPG or PNG
3. Quality: High
4. Export → Save to `/assets/backgrounds/`

#### Naming Convention
```
button-primary-idle.png
button-primary-hover.png
button-primary-pressed.png
icon-sword-24px.svg
panel-inventory-bg.png
character-knight-portrait.png
```

---

## 🎮 Complete Workflow Example

**Scenario**: Creating inventory UI prototype

### Step 1: Share Figma Link
```
"Here's my inventory design:
https://figma.com/file/ABC123/Inventory-UI"
```

Claude analyzes:
- Grid layout (3 columns)
- Colors (#2A1F3D purple, #D4AF37 gold)
- Spacing (16px gaps)
- Font (Cinzel for titles, Inter for body)

### Step 2: Extract Design Tokens
```bash
python3 figma-api.py get-colors ABC123
```

Claude creates CSS variables:
```css
:root {
  --color-primary: #2A1F3D;
  --color-accent: #D4AF37;
  --spacing-base: 16px;
  --font-heading: 'Cinzel', serif;
}
```

### Step 3: Export Key Assets
Export from Figma:
- `panel-inventory-bg.png` → `/assets/panels/`
- `icon-sword.svg` → `/assets/icons/`
- `button-equip.png` → `/assets/buttons/`

### Step 4: Build Prototype
```
"Build the inventory prototype using the Figma specs
and assets I just exported"
```

Claude creates:
- HTML structure matching Figma layout
- CSS using extracted colors/spacing
- JS with interactions
- Your actual PNG/SVG assets integrated

---

## 🔧 Advanced Usage

### Batch Extract All Colors
```bash
python3 figma-api.py get-colors FILE_KEY > colors.json
```

### Get All Frames in a File
```bash
python3 figma-api.py get-file FILE_KEY | \
  jq '.document.children[].children[] | {name, id}'
```

### Download Exported Images
```bash
# Get image URLs
python3 figma-api.py get-images FILE_KEY "123:456" > urls.json

# Download images
jq -r '.images[]' urls.json | while read url; do
  curl -o "image-$(date +%s).png" "$url"
done
```

---

## 🚀 Quick Reference

| Task | Method | Command |
|------|--------|---------|
| View design | Link | Share Figma URL in chat |
| Get colors | API | `python3 figma-api.py get-colors <key>` |
| Get structure | API | `python3 figma-api.py get-file <key>` |
| Export asset | Manual | Export in Figma → Save to `/assets/` |
| Build prototype | All 3 | Share link + API + export assets |

---

## 🔒 Security

✅ **Your Figma token is secure:**
- Stored in `.env.local` (gitignored)
- Never committed to git
- Only accessible locally

❌ **Never share:**
- Your `.env.local` file
- Your Figma access token
- Exported files if they contain sensitive designs

---

## 💡 Pro Tips

1. **Use all three methods together** for best results
2. **Share Figma links first** so Claude understands context
3. **Export only final assets** - let Claude recreate intermediate states
4. **Organize exports by type** using the folder structure
5. **Keep wireframes** in `/assets/wireframes/` for reference

---

## ❓ Troubleshooting

**"Error: FIGMA_ACCESS_TOKEN not found"**
- Check `.env.local` exists in project root
- Verify token is on the line: `FIGMA_ACCESS_TOKEN=figd_...`

**"HTTP Error 403"**
- Token might be expired - regenerate in Figma
- File might be private - ensure "Anyone with link" can view

**"Command not found: python3"**
- Run: `python figma-api.py` (without the 3)

---

## 📚 Resources

- [Figma API Docs](https://www.figma.com/developers/api)
- [Your Figma Settings](https://www.figma.com/settings)
- [Generate New Token](https://www.figma.com/settings) → Account → Personal Access Tokens

---

**Ready to go!** Share a Figma link to get started. 🎨
