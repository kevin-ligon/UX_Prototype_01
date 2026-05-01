# Wireframe Usability Review
**Project:** Meta - Building & Hero Collection Mobile RPG  
**Date:** April 30, 2026  
**Screens Reviewed:** 13 wireframes  
**Reviewer:** Claude (UX Analysis)

---

## 📋 Executive Summary

**Overall Assessment:** 7.5/10

The wireframes demonstrate a solid foundation for a mobile RPG building/hero collection system with **excellent visual feedback** and **clear progression mechanics**. However, there are **critical usability concerns** around information density, button placement, and accessibility that should be addressed before development.

### **Strengths:**
✅ Strong visual feedback (green stat increases, celebration screens)  
✅ Clear progression system (levels, ranks, requirements)  
✅ Consistent visual language and iconography  
✅ Good use of color coding (green = positive, red = negative)

### **Critical Issues:**
❌ Bottom UI elements may be obscured by mobile OS controls  
❌ Some tap targets appear too small (<44x44px)  
❌ High information density could overwhelm new players  
❌ Missing clear "back" navigation on some screens  
❌ Stat increase visibility could be improved

---

## 🎮 Screen-by-Screen Analysis

### **1. Building Collection: Resource Generators**

**What it shows:** Horizontal carousel of 4 building variants with level indicators and upgrade icons.

#### ✅ **Strengths:**
- Clean card-based layout
- Clear level indicators (Lv 3)
- Resource icons visible at top
- Good visual hierarchy with building images prominent

#### ❌ **Issues:**

**Critical - Navigation Indicators:**
```
Current: Small dots below buildings (barely visible)
Problem: Users can't tell how many buildings exist or where they are in sequence
Fix: Add larger, more prominent pagination dots with numbers
     Example: "3 / 8" or larger dots like Clash Royale uses
```

**High - Card Size:**
```
Current: 4 buildings visible (cards appear ~140px wide)
Problem: Small tap targets, unclear which building is "selected"
Fix: Show 2-3 buildings max, with larger cards (~200px+ wide)
     Add clear selection state (border, glow, or scale)
```

**Medium - Building Type Indicators:**
```
Current: Icons at top-left (Fire, Resource, Barracks, Building Type)
Problem: These seem like filter tabs but appear inactive
Fix: If these are filters, make them interactive with clear states
     If they're info displays, move to a legend or tooltip
```

**Low - Header:**
```
Current: "BARRACKS" title with diamond icon
Suggestion: Add breadcrumb or back button
Example: "← Buildings / Barracks"
```

#### 📊 **Recommended Changes:**

**Before:**
```
[≡] BARRACKS                                    [Ldk] [Ldk]
    [🔥 Filter] [⚔️ Filter] [🏰 Filter] [🏛️ Filter]

[Building] [Building] [Building] [Building]
     ●         ●         ●         ●
```

**After:**
```
← BARRACKS                                      [1.5k] [1.5k]

[    Larger Building    ] [    Larger Building    ]
              Card                    Card
           
           2 / 8 buildings  →
```

---

### **2. Building Rankup Requirements: Barracks**

**What it shows:** Requirements checklist for ranking up the Melee Barracks.

#### ✅ **Strengths:**
- Excellent requirement visualization (✅ vs ❌)
- Clear hierarchy: completed items at top
- Good color coding (green checkmarks, red X's)
- Stat preview shows +20 increases (motivating)

#### ❌ **Issues:**

**Critical - Bottom Button Placement:**
```
Current: "RANK UP!" button at bottom edge
Problem: May be obscured by iPhone home indicator or Android nav bar
        Users might struggle to tap it
Fix: Add 20-30px padding above phone bottom
     Or move button to center/top of screen
```

**High - Missing Resources Context:**
```
Current: Red X's on "Research Lv 10", "Empire Lv 10", "Kingdom Lv 10"
Problem: No indication of current progress (are you Lv 5? Lv 9?)
Fix: Show current progress: "Empire Lv 10 (Currently Lv 8)"
     Add progress bars for partially complete requirements
```

**Medium - Stat Preview:**
```
Current: Small numbers with green arrows on right
Problem: Easy to miss the benefits, low motivation
Fix: Make stat increases more prominent
     Add "Total Power: +600" summary at top
     Consider animation/glow on the preview
```

**Low - Progress Indicator:**
```
Current: Bottom bar shows "NEW RANK AVAILABLE!" with checkmarks
Suggestion: Show progress fraction "4/6 requirements met"
```

#### 📊 **Recommended Changes:**

**Before:**
```
Requirements:
✅ Research Lv 10         100  +20 ▲
✅ Empire Lv 10           80   +20 ▲
❌ Kingdom Lv 10          60   +20 ▲
❌ Whirlpool Game Mode
❌ Building Level 10

[Level 10 ————————○—— RANK UP!]
```

**After:**
```
Requirements (4/6 Complete):
✅ Research Lv 10 (Complete!)    100 → 120 (+20)
✅ Empire Lv 10 (Complete!)      80 → 100 (+20)
🔒 Kingdom Lv 10 (Currently 8)   60 → 80 (+20)
🔒 Unlock Whirlpool Mode
🔒 Building Level 10 (Currently 7)

Total Power Increase: +200

                 [RANK UP!]
              (30px from bottom)
```

---

### **3. Building Rankup: Barracks (Ready State)**

**What it shows:** Same screen but all requirements met, ready to rank up.

#### ✅ **Strengths:**
- Clear "all green" success state
- Avatar/character portrait adds personality
- Stat increases very visible

#### ❌ **Issues:**

**Medium - Redundant Information:**
```
Current: Shows same stats 3 times:
  - Right panel (100, 80, 60)
  - Right panel with increases (+20)
  - Bottom progress bar
Problem: Information overload
Fix: Consolidate into one clear section
     Remove redundancy
```

**Low - Character Portrait:**
```
Current: Small portrait in bottom-right
Observation: Unclear what this represents (player? building owner?)
Suggestion: Either make it larger/more prominent or remove
            Add tooltip/label if keeping
```

---

### **4. Building Upgrade: Missing Resources**

**What it shows:** Level-up screen when player lacks sufficient resources.

#### ✅ **Strengths:**
- Progress bar clearly shows insufficient resources (4/10)
- "Next Rank:" indicator helps orient player
- Locked state is visually distinct (grayed button)

#### ❌ **Issues:**

**Critical - Button State Ambiguity:**
```
Current: "LEVEL UP!" button appears clickable but says "Next Rank:"
Problem: Users will tap and get frustrated/confused
Fix: Make button clearly disabled:
     - Gray it out completely
     - Show "Insufficient Resources" text
     - Or replace with "Get Resources" CTA
```

**High - Progress Communication:**
```
Current: "Next Rank: 4 / 10" (cryptic)
Problem: What does 4/10 mean? Resources? Levels? Stars?
Fix: Be explicit: "Resources: 4/10 Collected"
     Or: "Level 4 / 10 Required"
```

**Medium - Missing Actionable CTA:**
```
Current: Dead-end screen - can't proceed
Problem: Player is stuck, no next step
Fix: Add "Get Resources" button that shows where to farm
     Or "Auto-Play" to collect resources
     Or "Buy with Gems" option
```

#### 📊 **Recommended Changes:**

**Before:**
```
[Barracks Image]
Lv 4    10

Level: 4 ——●———————— 10
           Next Rank:

[LEVEL UP! (but actually disabled)]
```

**After:**
```
[Barracks Image]
Lv 4 → 10

Level Progress: 4/10
[████████░░░░░░░░░░░] 40%

[     LEVEL UP!      ]  (disabled/grayed)
Requires: 6 more levels

[  Find Resources  ]  (secondary button)
  ↳ Shows farming locations
```

---

### **5. Building Upgrade: Resource Generator (Ready)**

**What it shows:** Upgrade screen when resources are sufficient.

#### ✅ **Strengths:**
- Clear stat improvements visible (900m → +300/m ▲)
- Progress bar shows completion (3/10)
- Green "UPGRADE" button is actionable

#### ❌ **Issues:**

**High - Stat Comparison Clarity:**
```
Current: Shows "900m +300/m ▲" and "5.8k +1.8k ▲"
Problem: Hard to quickly understand the upgrade value
Fix: Show before/after more clearly:
     "Production: 900/min → 1,200/min (+33%)"
     Use visual bars or comparisons
```

**Medium - Resource Cost Missing:**
```
Current: No indication of upgrade cost
Problem: Players can't make informed decisions
Fix: Show cost on or near the button:
     "UPGRADE (Cost: 5,000 Gold)"
```

**Low - Generator Description:**
```
Current: "Resource generator utility description goes in this area"
Observation: Placeholder text - needs actual value prop
Suggestion: Show concrete benefits:
            "Produces Liquid Metal passively while offline"
```

---

### **6. Melee Type Unlocked (Celebration)**

**What it shows:** Modal/interstitial celebrating unlocking new unit type.

#### ✅ **Strengths:**
- Dramatic, centered, attention-grabbing
- Clear headline "NEW TYPE UNLOCKED!"
- Unit preview with Pros/Cons visible
- Good use of screen real estate

#### ❌ **Issues:**

**Medium - Dismissal Unclear:**
```
Current: No visible close/continue button
Problem: Users don't know how to proceed
Fix: Add "TAP TO CONTINUE" text at bottom
     Or add explicit "Continue" button
     Or "X" close button in corner
```

**Low - Pros/Cons Labels:**
```
Current: Shows "Pros" and "Cons" (not visible in wireframe)
Suggestion: Make these larger, more readable
            Consider icons instead of text
```

---

### **7. Rank Up Moment (Celebration)**

**What it shows:** Full-screen celebration for achieving rank up.

#### ✅ **Strengths:**
- Dramatic badge/emblem visual
- Clear "RANK UP!" message
- Simple, focused (no distractions)

#### ❌ **Issues:**

**High - Same as #6: No Dismissal:**
```
Problem: How does user continue?
Fix: Add tap-to-continue or auto-dismiss after 2-3 seconds
```

**Medium - Missing Context:**
```
Current: Generic "RANK UP!" message
Suggestion: Add specifics:
           "RANK UP! Melee Barracks → Rank 10"
           "New units unlocked!"
```

---

### **8. Rank Up Feedback (Post-Upgrade)**

**What it shows:** Building with green glow/particle effect after ranking up.

#### ✅ **Strengths:**
- Excellent visual feedback (green glow is unmistakable)
- All requirements now show checkmarks
- Stats show increases
- Clear progression from previous state

#### ❌ **Issues:**

**Low - Visual Noise:**
```
Current: Green particles/glow everywhere
Observation: Could be distracting if prolonged
Suggestion: Fade out effect after 3-5 seconds
            Or make it toggle-able
```

---

### **9. Updated Level (During Progression)**

**What it shows:** Similar to #4 but at level 4/10 with progress.

#### ✅ **Strengths:**
- Progress bar clearly shows advancement
- Level indicator is large and readable
- Consistent with other screens

#### ❌ **Issues:**

**Same issues as #4** - See Building Upgrade: Missing Resources

---

### **10 & 11. Updated Stats (Modal Overlays)**

**What it shows:** Stat increase notifications appearing during/after upgrades.

#### ✅ **Strengths:**
- Clear presentation of what changed
- Green color coding for increases
- Icon + Name + Old Value + New Value format

#### ❌ **Issues:**

**Critical - Readability:**
```
Current: Pink/purple background with small text
Problem: Low contrast, hard to read quickly
Fix: Use darker background or white text
     Increase font size by 20-30%
     Add more padding
```

**High - Icon Clarity:**
```
Current: Small icons (sword, heart, clock)
Problem: Icons are generic, hard to distinguish
Fix: Make icons larger
     Use distinct colors per stat type
     Or use text labels primarily
```

**Medium - Auto-Dismiss Timing:**
```
Current: Unclear if this auto-dismisses
Suggestion: Add subtle close button (X)
           Or auto-dismiss after 5 seconds
           Show progress timer
```

**Low - Header Text Difference:**
```
Current: "Melee Bot Stats Increased!" vs "Updated Bot Stats:"
Problem: Inconsistent messaging
Fix: Pick one format and stick with it
```

#### 📊 **Recommended Changes:**

**Before:**
```
[Pink gradient background]
Melee Bot Stats Increased!
[icon] Stat Name    800/m  +300/m ▲
[icon] Stat Name    18k    +1.8k  ▲
[icon] Time         10m    -26s   ▲
```

**After:**
```
[Dark navy/black background with 90% opacity]

✨ STATS INCREASED! ✨

⚔️ Attack:      800/m → 1,100/m (+300)
❤️ Health:      18k → 19.8k (+1.8k)
⏱️ Speed:       10m → 9m 34s (-26s faster!)

[Auto-closes in 5s] [X]
```

---

### **12 & 13. Upgrade Feedback (Variants)**

**What it shows:** Post-upgrade states with green glow and stat updates.

#### ✅ **Strengths:**
- Consistent with rank up feedback
- Clear visual distinction from pre-upgrade state

#### ❌ **Issues:**

**Same issues as #8** - See Rank Up Feedback

---

## 🎯 Critical Usability Issues (Fix Before Launch)

### **1. Bottom Button Safe Area**
**Severity:** CRITICAL  
**Impact:** Users can't tap primary CTA

**Problem:**
All primary action buttons ("UPGRADE", "RANK UP!", "LEVEL UP!") are placed at the very bottom of the screen, likely conflicting with:
- iPhone home indicator (34px)
- Android gesture navigation (48px)
- Notch/camera cutouts on modern phones

**Solution:**
```css
/* Add safe area padding */
.primary-button {
  margin-bottom: max(20px, env(safe-area-inset-bottom));
}
```

Or move buttons up 30-40px from absolute bottom.

**Reference:** Apple Human Interface Guidelines recommend 34px minimum clearance.

---

### **2. Insufficient Contrast (Stats Modal)**
**Severity:** CRITICAL  
**Impact:** Fails WCAG accessibility standards

**Problem:**
Pink/purple background + light text = ~2.5:1 contrast ratio  
Required: 4.5:1 for normal text, 3:1 for large text

**Solution:**
- Use dark background (navy/black at 90% opacity)
- Use pure white text (#FFFFFF)
- Increase font size to 16-18px minimum
- Test with color blindness simulators

**Tools:**
- WebAIM Contrast Checker
- Stark plugin for Figma

---

### **3. Disabled Button State Confusion**
**Severity:** HIGH  
**Impact:** User frustration, abandoned actions

**Problem:**
"LEVEL UP!" button looks clickable when resources insufficient, leading to failed taps and confusion.

**Solution:**
```
Enabled state:
- Green gradient background
- White text
- Drop shadow
- Text: "UPGRADE (5,000 Gold)"

Disabled state:
- Gray background (#4A5568)
- 50% opacity
- No shadow
- Text: "Insufficient Resources"
- Show what's needed below
```

**Pattern:** Follow iOS/Android native disabled button standards.

---

### **4. Progress Indicator Ambiguity**
**Severity:** HIGH  
**Impact:** Confusion about what progress means

**Problem:**
"4 / 10" and "3 / 10" appear without context - could mean:
- Levels collected
- Resources gathered
- Requirements met
- Stars earned

**Solution:**
Always label progress:
- "Level: 4/10"
- "Resources: 3/10 Collected"
- "Requirements: 4/6 Met"
- Add progress percentage: "40% Complete"

---

## 📐 Tap Target Analysis

### **Too Small (<44x44px):**
❌ Navigation dots below building cards (~8px)  
❌ Left/right carousel arrows (~24px)  
❌ Icon buttons in top corners (~32px)  
❌ Stats panel icons (~20px)  

### **Acceptable (44-48px):**
✓ Building cards (appears ~140x140px)  
✓ Primary buttons (appears ~48px height)  

### **Recommendations:**
```
Minimum tap targets (iOS/Android standards):
- Primary actions: 48x48px
- Secondary actions: 44x44px
- Tertiary actions: 40x40px (with padding)

Current fixes needed:
1. Carousel arrows: 44x44px minimum
2. Navigation dots: 32x32px minimum (or remove)
3. Top corner icons: 44x44px minimum
4. Make carousel cards swipeable (not just arrows)
```

---

## 🎨 Visual Hierarchy Suggestions

### **Information Density:**

**Current:** High (10+ elements compete for attention per screen)  
**Recommended:** Medium (5-7 primary elements)

**Changes:**
1. **Group related info** - Put all stats in one panel, not scattered
2. **Reduce redundancy** - Don't show progress in 3 places
3. **Progressive disclosure** - Hide advanced stats behind tap/toggle
4. **White space** - Add 16-24px padding between sections

---

### **Typography Scale:**

**Current Issues:**
- Too many font sizes (appears to be 8+ sizes)
- Inconsistent hierarchy
- Small body text (<14px)

**Recommended Scale:**
```
H1 (Screen Title):  28-32px, Bold
H2 (Section):       20-24px, Semibold
H3 (Card Title):    16-18px, Semibold
Body:               16px, Regular
Caption:            14px, Regular
Label:              12px, Medium
```

**Key Rule:** Body text minimum 16px for readability on mobile.

---

## 🔔 Notification Badge Integration

Based on our **badge system work**, here's how to integrate:

### **Building Collection Screen:**

**Add badges to cards when:**
- ↑ Green arrow: Can upgrade with current resources
- "NEW": Newly unlocked building (<24hrs)
- ●  Red dot: Building requires attention (damaged, idle, etc.)

**Example:**
```
[Building Card]
   ↑  ← Green arrow if upgradeable
Lv 3

vs.

[Building Card]
  NEW ← Blue "NEW" if just unlocked
Lv 1
```

### **Main HUD (Not shown in wireframes but recommended):**

Add building category badge:
```
[🏗️ Buildings] ← Show ↑ if ANY building upgradeable
                  Show # count if 2+
```

---

## 🎮 Mobile Game UX Best Practices Comparison

### **VS. Clash Royale:**

✅ **You do well:**
- Clear stat increases (they use green arrows too)
- Celebration moments (they have similar)
- Resource requirements visible

❌ **You could improve:**
- Simpler UI (Clash has ~5 elements max per screen)
- Larger tap targets
- More white space

---

### **VS. Marvel Strike Force:**

✅ **You do well:**
- Detailed stat breakdowns
- Clear progression paths
- Good use of color coding

❌ **You could improve:**
- They show resource costs more prominently
- They use bigger fonts (18-20px body)
- They have clearer "back" navigation

---

### **VS. Eternal Evolution:**

✅ **You do well:**
- Similar upgrade flow
- Stat preview before committing
- Celebration screens

❌ **You could improve:**
- They batch upgrade multiple buildings
- They show "Total Power" prominently
- They have "Upgrade All" shortcuts

---

## 🚀 Quick Wins (Easy Fixes, High Impact)

### **1. Add Safe Area Padding (1 hour)**
```css
Bottom buttons: Add 34px padding from screen bottom
```

### **2. Fix Stat Modal Contrast (30 min)**
```css
Background: rgba(15, 15, 30, 0.95)
Text: #FFFFFF
Font size: 16px → 18px
```

### **3. Add Progress Labels (1 hour)**
```
Change: "4 / 10" 
To: "Level: 4/10 (40% Complete)"
```

### **4. Clarify Disabled Buttons (1 hour)**
```
Add gray state + "Insufficient Resources" text
Show what's needed below button
```

### **5. Improve Tap Targets (2 hours)**
```
Carousel arrows: 24px → 44px
Navigation dots: 8px → 32px (or remove)
Corner icons: 32px → 44px
```

---

## 📊 Recommended Changes Summary

### **Must Fix (Before Development):**
1. ✅ Bottom button safe area padding
2. ✅ Stats modal contrast/accessibility
3. ✅ Disabled button visual clarity
4. ✅ Progress indicator labels
5. ✅ Tap target sizes

### **Should Fix (Before Beta):**
6. ✅ Add dismissal on celebration screens
7. ✅ Resource cost on upgrade buttons
8. ✅ Current progress on requirements
9. ✅ Reduce information density
10. ✅ Consolidate redundant stats

### **Nice to Have (Post-Launch):**
11. ✅ Notification badges on buildings
12. ✅ "Get Resources" CTA when blocked
13. ✅ Total power increase summary
14. ✅ Stat comparison visualization
15. ✅ Auto-dismiss timers on modals

---

## 🎯 Overall Recommendations

### **Strengths to Maintain:**
- ✅ Visual feedback (green glows, stat increases)
- ✅ Celebration moments (creates dopamine hits)
- ✅ Clear progression mechanics
- ✅ Consistent visual style

### **Critical Improvements:**
1. **Accessibility first** - Fix contrast, tap targets, safe areas
2. **Reduce complexity** - Less info per screen, group related elements
3. **Clearer CTAs** - Show costs, requirements, next steps
4. **Better navigation** - Add back buttons, breadcrumbs
5. **Mobile-optimized** - Bigger fonts, larger buttons, more padding

### **Testing Recommendations:**
- ✅ Test on actual devices (iPhone SE, large Android)
- ✅ Run accessibility audit (Lighthouse, axe)
- ✅ Conduct usability testing with 5-10 users
- ✅ A/B test button placements
- ✅ Monitor tap heatmaps post-launch

---

## 📈 Success Metrics

Track these to validate improvements:

**Engagement:**
- Upgrade completion rate (target: >80%)
- Time to complete upgrade (target: <30 seconds)
- Drop-off rate on upgrade screens (target: <10%)

**Usability:**
- Failed tap attempts (target: <2%)
- Back button usage (target: <30%)
- Help/support requests about upgrades (target: <5%)

**Retention:**
- Return rate after first upgrade (target: >70%)
- Session length when upgrading (target: +20%)

---

## 🔗 Additional Resources

**Design Systems:**
- iOS Human Interface Guidelines (Safe Areas)
- Material Design 3 (Accessibility)
- WCAG 2.1 AA Standards

**Testing Tools:**
- Figma: Stark plugin (accessibility)
- Chrome: Lighthouse audit
- Mobile: BrowserStack (device testing)

**Reference Games:**
- Clash Royale (simplicity)
- Marvel Strike Force (stat detail)
- Eternal Evolution (upgrade flow)

---

**Next Steps:**
1. Review this document with team
2. Prioritize fixes (Must → Should → Nice)
3. Create updated wireframes
4. Schedule usability testing
5. Iterate based on feedback

---

**Questions or need clarification on any recommendations?**  
Happy to provide detailed mockups or examples for any specific screen!
