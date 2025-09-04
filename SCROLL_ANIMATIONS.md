# Scroll Animations Documentation

## Overview
The Pneuma homepage features scroll-triggered animations and improved layout structure for an engaging user experience.

## 1. "Positive Pressure Perfected" Section

### Features:
- **100vh height** - Full viewport experience
- **Scroll-triggered text animations** - Words fade in elegantly as user scrolls
- **Image parallax effects** - Background image scales and fades with scroll
- **Staggered word reveals** - Each phrase animates in sequence

### Technical Implementation:
- Uses Framer Motion's `useScroll` hook with target ref
- `useTransform` creates smooth progress-based animations
- Individual scroll progress tracking for each text phrase
- Offset configuration: `["start end", "end start"]`

### Animation Sequence:
1. "Positive pressure" (0.2-0.4 scroll progress)
2. "perfected." (0.3-0.5 scroll progress)
3. "For patients" (0.4-0.6 scroll progress)
4. "who need it the most." (0.5-0.7 scroll progress)

## 2. "Patients with Medical Issues" Section

### Features:
- **Standard section flow** - Proper document flow without overlap
- **Staggered stat reveals** - Statistics animate in with view-based triggers
- **Responsive layout** - Mobile-first responsive design
- **Clean animations** - Smooth entrance animations for each statistic

### Technical Implementation:
- Standard section with `min-h-screen` for full viewport coverage
- `whileInView` animations trigger when statistics enter viewport
- Staggered delay timing for sequential reveals
- Mobile-responsive breakpoints maintained

### Animation Sequence:
1. **26% OSA stat** - Animates in first (0.2s delay)
2. **42.4% Obesity stat** - Follows with reduced opacity (0.4s delay)
3. **76.4% Chronic Conditions** - Final stat with reduced opacity (0.6s delay)

## Layout Improvements

### Hero Section:
- **Proper container structure** - Max-width container with consistent padding
- **Mobile-responsive layout** - Flexbox-based responsive design
- **Content spacing** - Proper margins prevent content from touching screen edges
- **Semantic structure** - Better accessibility and layout flow

### Statistics Section:
- **Fixed positioning issues** - Removed complex sticky positioning that caused overlap
- **Standard document flow** - Section flows naturally with previous content
- **Maintained animations** - Kept engaging entrance animations without positioning conflicts

## Performance Considerations

### Optimizations:
- `will-change: auto` prevents unnecessary GPU layer promotion
- Smooth scroll behavior enabled globally
- Efficient scroll progress calculations
- Mobile-responsive breakpoints maintained

### Browser Support:
- Modern browsers with CSS scroll-snap support
- Framer Motion handles cross-browser compatibility
- Graceful degradation for older browsers

## Usage Tips

### For Developers:
- Scroll animations are contained within their respective components
- Easy to modify scroll trigger points by adjusting `useTransform` ranges
- Debug scroll progress using Framer Motion dev tools

### For Content Editors:
- Text content can be updated without affecting animations
- Animation timing can be adjusted via the progress arrays
- New statistics can be added by extending the stats array

## Dependencies
- Framer Motion (for scroll-triggered animations)
- React hooks (useRef for section targeting)
- CSS custom properties (for gradient effects)
