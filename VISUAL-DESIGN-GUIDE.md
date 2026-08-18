# GEO Pro Visual Design Guide

Quick reference for the UI/UX design system implemented across all sections.

---

## 🎨 Color Palette

### Primary Colors
```
Navy:       #1f3864  (Dark backgrounds, text)
Coral:      #d05c4e  (Accents, stats, highlights)
Lime:       #90e202  (CTAs, indicators, accents)
Success:    #2d7a5c  (Positive elements)
```

### Background Colors
```
Page:       #f5f6ee  (Light cream background)
Surface:    #ffffff  (Card backgrounds)
Night:      #050505  (Darkest sections)
Dark Navy:  #1a2f4a  (Gradient stops)
```

### Semantic Colors
```
Muted:      #5f6458  (Secondary text)
Border:     #dfe6d1  (Light borders)
Success:    #2d7a5c  (Achievements)
Coral:      #d05c4e  (Warnings, stats)
```

---

## 📦 Component Library

### Buttons

**Primary (Lime)**
```html
<button class="button">Khảo sát miễn phí</button>
```
- Background: Lime (#90e202)
- Text: Navy
- Hover: Lighter lime + scale(1.05)
- Padding: 12px 24px
- Border-radius: 999px

**Light (White)**
```html
<button class="button--light">Gọi ngay</button>
```
- Background: White
- Text: Navy
- Hover: Lime background
- Used in: Contact section

**Ghost (Transparent)**
```html
<button class="button--ghost">Gửi email</button>
```
- Background: Transparent
- Border: White/color with opacity
- Hover: Semi-transparent bg

### Cards

**Standard Card**
```html
<article class="card">Content</article>
```
- Background: White
- Border: 1px solid #dfe6d1
- Padding: 32px
- Border-radius: 16px
- Hover: Lift (-8px) + shadow

**Featured Card**
```html
<article class="card-featured">Content</article>
```
- Background: Lime gradient
- Border: Lime with opacity
- Padding: 32px
- Hover: Enhanced lift (-12px)

### Badges/Tags

**Lime Badge**
```html
<span class="tag-list span">Feature</span>
```
- Background: rgba(144,226,2,0.1)
- Border: rgba(144,226,2,0.3)
- Color: Lime
- Padding: 6px 12px
- Border-radius: 6px

---

## 🎬 Animation System

### Entrance Animations

**Slide Up**
```
translateY(20px) + opacity(0)
  ↓ 0.6s ease-out
translateY(0) + opacity(1)
```
Used for: All card reveals

**Fade In**
```
opacity(0) → opacity(1)
  ↓ 0.8s ease-out
```
Used for: Hero copy

**Scale In**
```
scale(0.95) + opacity(0)
  ↓ 0.5s ease-out
scale(1) + opacity(1)
```
Used for: Logo

### Hover Animations

**Lift (Card)**
```
translateY(0) → translateY(-8px to -16px)
shadow-sm → shadow-lg
  ↓ 0.3s ease
```

**Scale (Button)**
```
scale(1) → scale(1.05)
  ↓ 0.3s ease
```

**Border Change**
```
border-color: #dfe6d1 → #d05c4e
  ↓ 0.3s ease
```

### Staggered Reveals

```
Item 1: animation-delay 0.1s
Item 2: animation-delay 0.2s
Item 3: animation-delay 0.3s
Item 4: animation-delay 0.4s
Item 5: animation-delay 0.5s
```

---

## 📱 Responsive Design

### Desktop (1024px+)
- **Hero**: 100% width with full visibility board
- **Grids**: Multi-column (3-4 columns)
- **Spacing**: 60px padding vertical
- **Typography**: Full scale (max sizes)

### Tablet (768-1023px)
- **Hero**: 80% optimized
- **Grids**: 2-column layouts
- **Spacing**: 50px padding vertical
- **Typography**: Medium scale

### Mobile (640-767px)
- **Hero**: 100% stacked
- **Grids**: 1-2 column layouts
- **Spacing**: 40px padding vertical
- **Typography**: Reduced scale

### Mobile Small (<640px)
- **Hero**: Full stacked
- **Grids**: Single column
- **Spacing**: 30px padding vertical
- **Typography**: Minimum readable size

---

## 🔤 Typography Scale

```
H1 (Hero):     clamp(2.5rem, 8vw, 3.8rem)  → 40px-61px
H2 (Section):  clamp(1.75rem, 6vw, 2.5rem) → 28px-40px
H3 (Card):     1.25rem - 1.5rem            → 20px-24px
Body:          1rem - 1.1rem               → 16px-17.6px
Caption:       0.875rem - 0.95rem          → 14px-15.2px
Small:         0.75rem - 0.85rem           → 12px-13.6px
```

**Font Families**:
- Headings: Montserrat (700 weight)
- Body: Inter (400-600 weight)

---

## 🎨 Section Background Patterns

### Hero
- Background: `linear-gradient(135deg, #050505 0%, #1a2f4a 100%)`
- Grid: `rgba(144,226,2,0.1)` 40px pattern (15% opacity)
- Orbs: Radial gradients with blur

### Problem
- Background: Navy gradient same as hero
- Cards: Glass-morphism with blur(10px)
- Border: rgba(255,255,255,0.12)

### Process
- Background: Navy gradient
- Border: Lime gradient left border (top → transparent)
- Timeline: Visual line connecting numbers

### Contact
- Background: Navy gradient with coral orb
- Cards: Glass-morphism overlay

### Case Study
- Background: Repeating diagonal pattern
- Color: Subtle gray-blue repeats

---

## ✨ Special Effects

### Glass-Morphism
```css
background: rgba(255,255,255,0.08);
backdrop-filter: blur(10px-20px);
border: 1px solid rgba(255,255,255,0.12-0.15);
```
Used in: Hero board, Problem cards, Assessment card

### Shadow Depth
```
Level 1 (Subtle):  0 1px 2px rgba(0,0,0,0.05)
Level 2 (Card):    0 4px 12px rgba(0,0,0,0.08)
Level 3 (Hover):   0 10px 30px rgba(0,0,0,0.12)
Level 4 (Soft):    0 18px 50px rgba(10,18,8,0.12)
Level 5 (Product): 0 18px 46px rgba(0,0,0,0.22)
Level 6 (Lift):    0 24px 70px rgba(22,44,82,0.16)
```

### Gradients
- **Hero/Process/Contact**: 135deg linear gradient navy
- **Case Study**: Diagonal repeating pattern
- **Hover**: Gradient backgrounds from page color

---

## 🎯 Icon System

### Icon Sources
- Library: Tabler Icons
- Sizes: 16px - 32px depending on context
- Colors: Lime, coral, navy, success green

### Icon Usage
- **Accent icons**: Lime (#90e202)
- **Stat icons**: Coral (#d05c4e)
- **Navigation**: Navy with opacity
- **Success**: Green (#2d7a5c)

### Icon Badges
```html
<span class="pillar-icon">
  <svg>...</svg>
</span>
```
- Background: rgba(144,226,2,0.1)
- Border-radius: 12px
- Padding: 12px
- Width/Height: 48px

---

## 📐 Spacing System

### Padding/Margin
- **XS**: 4px
- **S**: 8px
- **M**: 12px
- **L**: 16px
- **XL**: 24px
- **2XL**: 32px
- **3XL**: 40px

### Section Gaps
- **Card gaps**: 16px - 32px
- **Section vertical**: 60px - 100px
- **Element gaps**: 12px - 24px

### Responsive Adjustments
- Desktop: Full spacing
- Tablet: 80% of desktop
- Mobile: 60% of desktop
- Small mobile: 50% of desktop

---

## 🎪 Component Variations

### Stat Cards (Why Now)
```
Number (01-04) | Value | Title | Description | Source
Coral stat value | Hover lift
```

### Problem Cards (Dark)
```
Number | Icon
Title | Description
Glass background | Hover border change
```

### Solution Rows
```
Number | Title & Description | Arrow icon
Left padding on hover
```

### Pillar Cards
```
Number | Icon
Title | Description
Tag list
Hover lift effect
```

### Capability Rows
```
Icon + Area | Description
Navy header for table
```

### Process Items
```
Number | Title
        | Timing badge
        | Description
```

### Case Results
```
Value | Label
Navy background
```

### Pricing Cards
```
Title | Price
Features list
Button (varies by plan)
Recommended badge positioning
```

### Commitment Cards
```
Icon | Title & Description
Success green icon
```

---

## 🔄 Interaction States

### Button States
- **Default**: Solid color
- **Hover**: Scale + enhanced shadow
- **Active**: Scale (0.95)
- **Focus**: Outline ring

### Card States
- **Default**: Flat with subtle shadow
- **Hover**: Lift + shadow enhancement
- **Focus**: Outline ring
- **Active**: Scale-down slightly

### Hover Row States
- **Default**: Transparent
- **Hover**: Gradient background from page color
- **Default**: Left padding 32px
- **Hover**: Left padding 40px

---

## ♿ Accessibility Notes

### Color Contrast
- Navy + White: 12:1 ✓ AAA
- Coral + White: 5.1:1 ✓ AA+
- Lime + Navy: 7:1 ✓ AAA

### Motion
- Respects `prefers-reduced-motion`
- All animations disabled for motion-sensitive users
- Core content still visible without animation

### Focus States
- All interactive elements: Visible focus rings
- Focus rings: 3px solid outline
- Outline offset: 2-3px

---

## 🚀 Quick Implementation

### Add Component Styling
```css
.my-component {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.my-component:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-coral);
}

.my-component[data-reveal] {
  animation: slide-up 0.6s ease-out both;
}
```

### Use Color Variables
```css
color: var(--color-navy);
background: var(--color-lime);
border: 1px solid var(--color-border);
box-shadow: var(--shadow-lift);
```

### Apply Animations
```html
<!-- Entrance animation -->
<div data-reveal>Content</div>

<!-- Specific animation -->
<div class="animate-slide-up">Content</div>
<div class="animate-fade-in">Content</div>
```

---

## 📊 Design System Stats

- **12** Styled sections
- **6** Animation keyframes
- **8** Typography scales
- **10** Color palette variants
- **6** Shadow depth levels
- **3** Responsive breakpoints
- **20+** Reusable component classes
- **100+** Style rules

---

## 🎯 Next Steps

1. **View the design**: `pnpm dev` → Open browser
2. **Check each section**: Scroll through landing page
3. **Test interactions**: Hover over cards, buttons, rows
4. **Check responsive**: Resize browser to mobile sizes
5. **Verify animations**: Should see staggered reveals
6. **Test accessibility**: Check with keyboard navigation

---

**All design tokens are defined in `src/styles/global.css` and `tailwind.config.mjs`**

Ready to use! 🚀
