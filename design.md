# F5 TTS Web App Design Guide

## Design Philosophy

### Visual Language
**Modern AI Aesthetic**: Clean, sophisticated interface that reflects cutting-edge AI technology while maintaining professional credibility. The design emphasizes precision, innovation, and accessibility.

### Color Palette
**Primary Colors**:
- **Deep Slate**: `#1e293b` - Primary background, navigation
- **Warm White**: `#fafafa` - Content backgrounds, cards
- **Accent Teal**: `#0d9488` - Primary actions, highlights
- **Soft Gray**: `#64748b` - Secondary text, borders

**Supporting Colors**:
- **Success Green**: `#059669` - Completion states, success indicators
- **Warning Amber**: `#d97706` - Processing states, attention
- **Error Red**: `#dc2626` - Error states, critical alerts
- **Neutral Blue**: `#475569` - Information states, links

### Typography
**Primary Font**: Inter (Sans-serif) - Clean, modern, highly readable
**Secondary Font**: JetBrains Mono (Monospace) - Code blocks, technical content
**Display Font**: Poppins (Sans-serif) - Headings, hero text

**Hierarchy**:
- **H1**: 3.5rem, bold, Poppins
- **H2**: 2.5rem, semibold, Poppins  
- **H3**: 1.875rem, medium, Inter
- **Body**: 1rem, regular, Inter
- **Caption**: 0.875rem, regular, Inter

## Visual Effects & Styling

### Background Treatment
**Liquid Metal Displacement**: Subtle animated background using shader effects
- Base: Deep slate with metallic texture
- Animation: Slow, organic flow patterns
- Opacity: 15% to maintain readability

### Interactive Elements
**Glass Morphism Cards**: Semi-transparent cards with backdrop blur
- Background: rgba(255, 255, 255, 0.1)
- Backdrop-filter: blur(20px)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

### Button Styles
**Primary Button**: 
- Background: Linear gradient from teal to cyan
- Hover: Subtle glow effect with scale transform
- Active: Pressed state with inner shadow

**Secondary Button**:
- Background: Transparent
- Border: 2px solid teal
- Hover: Background fill animation

### Form Elements
**Input Fields**:
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Focus: Teal border with soft glow
- Placeholder: Muted gray text

### Audio Visualization
**Waveform Display**: Real-time audio waveform using p5.js
- Color: Gradient from teal to white
- Animation: Smooth transitions, particle effects
- Background: Dark overlay for contrast

## Layout & Structure

### Grid System
**12-column responsive grid** with consistent spacing
- Desktop: 1200px max-width, 24px gutters
- Tablet: 768px max-width, 16px gutters  
- Mobile: 100% width, 12px gutters

### Component Spacing
**Vertical Rhythm**: 24px base unit for consistent spacing
- Section padding: 96px top/bottom
- Component margins: 24px, 48px, 72px increments
- Text line-height: 1.6 for optimal readability

### Navigation
**Fixed Header**: Transparent background with backdrop blur
- Height: 80px
- Logo: Left-aligned, 32px height
- Navigation: Center-aligned, horizontal layout
- Actions: Right-aligned, primary button

## Animation & Motion

### Micro-interactions
**Button Hover**: 
- Scale: 1.02 transform
- Transition: 200ms ease-out
- Glow: Box-shadow with teal accent

**Card Hover**:
- Lift: TranslateY(-4px)
- Shadow: Enhanced depth
- Transition: 300ms ease-out

### Loading States
**Progress Indicators**:
- Skeleton screens for content loading
- Spinner animations for actions
- Progress bars for file uploads

### Page Transitions
**Smooth Navigation**:
- Fade transitions between pages
- Stagger animations for content reveal
- Parallax effects for hero sections

## Component Specifications

### Hero Section
**Background**: Animated shader with liquid metal effect
**Content**: Center-aligned, max-width 800px
**Typography**: Large heading with gradient text effect
**CTA**: Prominent primary button with pulse animation

### Voice Synthesis Interface
**Layout**: Two-column on desktop, stacked on mobile
**Left Panel**: Controls and settings (40% width)
**Right Panel**: Audio preview and visualization (60% width)
**Background**: Subtle pattern overlay for texture

### Voice Library
**Grid Layout**: 3-column responsive grid
**Cards**: Glass morphism with voice preview
**Hover States**: Audio wave animation preview
**Selection**: Teal border highlight

### Code Blocks
**Theme**: Dark theme with syntax highlighting
**Background**: #0f172a with rounded corners
**Copy Button**: Top-right corner, subtle styling
**Font**: JetBrains Mono, 14px

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Mobile Adaptations
- **Navigation**: Hamburger menu with slide-out drawer
- **Forms**: Full-width inputs, stacked labels
- **Audio Player**: Simplified controls, larger touch targets
- **Grid Layouts**: Single column with card stacking

## Accessibility Features

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Interactive Elements**: Clear focus indicators
- **Status Colors**: Accompanying icons and text

### Keyboard Navigation
- **Tab Order**: Logical flow through interface
- **Focus Indicators**: Visible outline on all interactive elements
- **Shortcuts**: Quick access to primary actions

### Screen Reader Support
- **ARIA Labels**: Comprehensive labeling
- **Live Regions**: Status updates for dynamic content
- **Alt Text**: Descriptive text for all images

## Technical Implementation

### CSS Framework
**Tailwind CSS** as the foundation with custom components
- Utility-first approach for rapid development
- Custom color palette extension
- Component classes for repeated patterns

### Animation Libraries
- **Anime.js**: Smooth micro-interactions and transitions
- **p5.js**: Audio visualization and creative coding
- **Shader-park**: Background shader effects

### Performance Optimizations
- **Lazy Loading**: Images and heavy components
- **Code Splitting**: Route-based bundle splitting
- **Asset Optimization**: WebP images, minified assets
- **Caching Strategy**: Service worker for offline capability