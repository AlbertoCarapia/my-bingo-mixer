---
name: design-guide-cyberpunk
description: "Use when designing or styling Bingo Mixer components with Cyberpunk Neon theme. Covers color palette, typography, effects, animations, and component patterns."
applyTo: ["src/components/**/*.tsx", "src/index.css"]
---

# Cyberpunk Neon Design Guide

Bingo Mixer uses a **vibrant, high-contrast Cyberpunk Neon aesthetic** for maximum energy and memorability.

## Color Palette

```
🔴 Magenta Neon:    #ff006e  (primary, interactive, highlights)
🔵 Cyan Electric:   #00f5ff  (accents, secondary text, glow)
💜 Purple Neon:     #b537f2  (borders, depth)
⚫ Dark Background: #0a0e27  (main bg)
⚪ Dark Surface:    #1a1f3a  (cards, elevated surfaces)
⚪ White Pure:      #ffffff  (primary text)
```

### Usage Rules
- **Backgrounds**: Dark only (`#0a0e27`, `#1a1f3a`)
- **Interactive Elements**: Magenta primary, Cyan secondary
- **Text**: White for body, Cyan for secondary info, Magenta for emphasis
- **Borders**: Cyan (`/30` opacity) for default, Magenta/Purple for active/highlighted
- **Accents**: Use Cyan glow for hover states, Magenta pulsation for marked states

## Typography

### Font Stack
- **Titles/Mono**: `'Space Mono'` 700 weight, uppercase, letter-spacing `0.1em`
- **Body/UI**: `'Inter'` 400-700, normal case, letter-spacing `0.02em`
- **Buttons**: `'Space Mono'` bold, uppercase, tracking-widest

### Size Hierarchy
| Context | Size | Weight | Color |
|---------|------|--------|-------|
| Page Title | 3.5rem | 700 | Magenta glow |
| Subtitle | 1.25rem | 500 | Cyan glow |
| Button Labels | 1rem | 700 | White/Dark |
| Card Titles | 1.25rem | 700 | Cyan |
| Body Text | 1rem | 400 | White/Gray |

## Effects & Animations

### Glow Effects
```tsx
// Magenta glow (primary interactive)
className="glow-magenta"  // 0 0 20px rgba(255, 0, 110, 0.6)

// Cyan glow (secondary/hover)
className="glow-cyan"     // 0 0 20px rgba(0, 245, 255, 0.6)

// Purple glow (borders/depth)
className="glow-purple"   // 0 0 20px rgba(181, 55, 242, 0.6)
```

### Core Animations
| Name | Use | Duration |
|------|-----|----------|
| `neon-glow` | Marked squares pulsing | 2s infinite |
| `cyan-pulse` | Winning lines | 2s infinite |
| `slide-in-top` | Page/card entry | 0.6s ease-out |
| `bounce-in` | Modal/button entry | 0.4s ease-out |
| `animate-pulse` | Native CSS pulsation | varies |

### Staggered Entry Pattern
```tsx
// Use animationDelay for sequential reveals
<h1 style={{ animationDelay: '0s' }}>BINGO</h1>
<p style={{ animationDelay: '0.1s' }}>Subtitle</p>
<div style={{ animationDelay: '0.2s' }}>Content</div>
```

## Component Patterns

### Background Structure
```tsx
// Layered cyberspace background with orbs
<div className="bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
  {/* Decorative animated orbs */}
  <div className="absolute top-20 -left-32 w-96 h-96 bg-[#ff006e] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f5ff] rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10"></div>
  {/* Content with relative z-index */}
  <div className="relative z-10">...</div>
</div>
```

### Buttons (Interactive)
```tsx
// Primary CTA: Magenta with glow + hover brightness
className="bg-[#ff006e] hover:bg-[#ff3b7a] text-white font-mono font-bold uppercase tracking-widest glow-magenta active:scale-95 transition-all duration-200"

// Secondary: Cyan with inverse colors
className="bg-[#00f5ff] hover:bg-[#33ffff] text-[#0a0e27] font-mono font-bold uppercase tracking-widest glow-cyan"
```

### Cards (Content Containers)
```tsx
// Base card styling
className="bg-[#1a1f3a] border-2 border-[#b537f2] rounded-xl p-8 glow-purple backdrop-blur-sm shadow-lg"

// Variants
// - Active/Hovered: border-[#ff006e], glow-magenta
// - Winning: border-[#00f5ff], glow-cyan, animate-pulse
```

### Interactive Squares/Buttons
```tsx
// Unmarked state
className="bg-[#1a1f3a]/50 border-[#00f5ff]/30 hover:border-[#00f5ff]"

// Marked state
className="bg-gradient-to-br from-[#ff006e]/20 to-[#b537f2]/20 border-[#ff006e] glow-magenta animate-pulse"

// Winning state
className="bg-gradient-to-br from-[#ff006e] to-[#b537f2] border-[#00f5ff] glow-cyan animate-pulse shadow-2xl"
```

## Do's & Don'ts

### ✅ DO
- Use **consistent color system**: Magenta for primary, Cyan for secondary
- Apply **glow effects** on interactive elements
- **Animate state changes** (marked, winning, hover)
- Use **uppercase + wide tracking** for emphasis
- Layer **gradients + blur** for depth
- Include **backdrop-blur-md** on floating elements
- Stagger animations for **progressive reveal**

### ❌ DON'T
- Mix in light backgrounds (stay dark)
- Use colors outside the defined palette
- Apply glow to non-interactive elements (creates visual noise)
- Use serif fonts (Space Mono + Inter only)
- Default-scale buttons (scale-95 on active, scale-110 on hover)
- Forget `pointer-events-none` on decorative overlays
- Make text too small (min 0.75rem for body)

## Accessibility Notes

- ✅ High contrast: Magenta/Cyan on dark backgrounds ~7:1 ratio
- ✅ Clear active states: Glow + border changes + animations
- ✅ Sufficient padding: min-h-[70px] for touch targets
- ✅ ARIA labels: All buttons + state indicators
- ⚠️ Animations: Use `prefers-reduced-motion` for respect (optional enhancement)

## Pattern Examples

### StartScreen Entry
```tsx
<h1 className="title-neon animate-slide-in">BINGO</h1>
<h1 className="title-neon text-[#00f5ff] animate-slide-in" style={{ animationDelay: '0.1s' }}>MIXER</h1>
<button className="bg-[#ff006e] glow-magenta animate-bounce-in" style={{ animationDelay: '0.2s' }}>START GAME</button>
```

### Marked Square with Win State
```tsx
<button className={square.isMarked 
  ? isWinning 
    ? 'bg-gradient-to-br from-[#ff006e] to-[#b537f2] border-[#00f5ff] glow-cyan animate-pulse shadow-2xl'
    : 'bg-gradient-to-br from-[#ff006e]/20 to-[#b537f2]/20 border-[#ff006e] glow-magenta'
  : 'bg-[#1a1f3a]/50 border-[#00f5ff]/30'}>
  {text}
  {square.isMarked && <span className="text-[#00f5ff] animate-bounce">✓</span>}
</button>
```

---

**Theme Philosophy**: Bold, energetic, immersive. Every interaction should feel rewarding and modern. Think arcade meets cyberpunk—playful but powerful.
