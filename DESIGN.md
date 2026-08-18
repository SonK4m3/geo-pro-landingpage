# DESIGN.md

## Visual Identity

**Brand voice:** Strong, precise, trustworthy, technical but not too "developer".
**Design personality:** Enterprise SaaS x Search Engine x AI Infrastructure. NOT traditional SEO agency.
**Mode:** Persuade — the visitor decides and acts; design is the product.

**Visual keywords:** Authority, Search, AI Discovery, Citation, Structured Data, Entity, Growth

## 3 Principles

1. **Don't make it "AI neon."** No purple gradient, glow, 3D robots. Keep navy + orange.
2. **Use real UI instead of generic illustration.** Search result, citation, AI answer, knowledge graph.
3. **Headline must be visual asset.** Large Barlow Condensed uppercase = 40-50% visual impact.

## Color System

| Token | Value | Usage |
|---|---|---|
| `--navy-950` | `#041A34` | Background chính |
| `--navy-900` | `#082544` | Section dark |
| `--navy-800` | `#0D3158` | Card / hover |
| `--navy-700` | `#174875` | Border / illustration |
| `--orange-500` | `#F5672F` | CTA, keyword, highlight |
| `--orange-600` | `#E95416` | CTA hover |
| `--orange-100` | `#FFE8DD` | Badge / soft background |
| `--white` | `#FFFFFF` | Surface |
| `--gray-50` | `#F7F9FC` | Background light |
| `--gray-100` | `#EEF2F7` | Card |
| `--gray-300` | `#CBD4DF` | Border |
| `--gray-500` | `#7E8FA4` | Secondary text |
| `--gray-700` | `#42536A` | Body text |
| `--success` | `#18A968` | Success / verified |

### Color Ratio
- 55-65% navy/dark
- 25-35% white/off-white
- 5-10% orange accent (signal color only, never background)

### Gradient
```css
background: linear-gradient(135deg, #041A34 0%, #072646 55%, #0B3158 100%);
```

## Typography

### Display / Hero: Barlow Condensed
```css
font-family: "Barlow Condensed";
font-weight: 800;
letter-spacing: -0.02em;
line-height: 0.95;
text-transform: uppercase;
```

### UI / Body: Inter

### Scale

| Style | Desktop | Mobile |
|---|---|---|
| Display XL | 88-104px | 52-60px |
| H1 | 72-88px | 46-56px |
| H2 | 48-56px | 36-42px |
| H3 | 28-32px | 24-28px |
| Body XL | 20px | 18px |
| Body | 16-18px | 16px |
| Small | 14px | 14px |
| Label | 13-14px | 12-13px |

## Spacing (8pt Grid)

```
4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160
```

- Section padding: 96-128px (desktop), 64-80px (mobile)
- Container max-width: 1280px
- H2 → description: 24px
- Content → CTA: 32-40px

## Grid

- 12 columns, max-width 1280px, gutter 24px
- Hero: 5 col text / 7 col visual
- Content sections: 6/6, 4/8, 3/3/3/3
- Prefer asymmetric layout, not center-aligned

## Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-pill: 999px;
```

- Card: 16-20px
- CTA button: 10-12px
- Search bar: 28-32px

## Shadows (navy-tinted)

Card on light:
```css
box-shadow: 0 16px 40px rgba(4, 26, 52, 0.10);
```

Floating UI:
```css
box-shadow: 0 24px 60px rgba(4, 26, 52, 0.16);
```

Never pure black shadows.

## Button System

### Primary CTA (Orange)
- Background: #F5672F, text: white
- Height: 52-56px, padding: 0 28px
- Radius: 10-12px
- Hover: #E95416, translateY(-1px)

### Secondary (Ghost on dark)
- Background: transparent
- Border: 1px solid rgba(255,255,255,.3)
- Color: white

### Tertiary (Text link)
- Arrow turns orange on hover

## Card System

4 types: Feature Card, Metric Card, Search Result Card, AI Citation Card.
- White background / muted border on light sections
- Dark glass (rgba white 4%) on dark sections
- Radius: 20px

## Icon System

- Tabler icons (outline, 1.5-2px stroke, geometric, soft corners)
- Default: navy color
- Important: orange
- Success: green

## Background Motifs

- Dot grid + circuit lines + small orange nodes
- Opacity: 5-20%
- Use on Hero, final CTA, and section dividers
- Lines: navy/blue-grey, 1px. Nodes: orange.

## Shape Language

Signature: Dark geometry → white geometry via large organic curve (border-radius 100px+ or SVG mask).

## Navigation

- Height: 80px
- Background: navy-950
- Font: 15-16px / 600
- CTA: orange
- Sticky: rgba(4,26,52,.88) + backdrop-filter blur(16px)

## Anti-patterns

- No purple/neon AI aesthetics
- No stock photography
- No generic SaaS illustrations
- No center-aligned everything
- No lime/green as accent (use orange only)
- No glass-morphism as decoration
- No scattered identical animations
- Orange is signal only, never background
