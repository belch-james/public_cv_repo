# Mobile QA Checklist

This document provides guidance for testing the mobile responsiveness and reliability of the portfolio site.

## Target Device Sizes

Test at these viewport widths to cover the range of common devices:

| Width | Description | Examples |
|-------|-------------|----------|
| 320px | Small phones | iPhone SE (1st gen), older Android |
| 360px | Typical Android | Samsung Galaxy S series |
| 375px | Standard iPhone | iPhone 6/7/8, iPhone SE (2nd gen) |
| 390px | Modern iPhone | iPhone 12/13/14 |
| 414px | Large phones | iPhone Plus models |
| 430px | Max-size phones | iPhone Pro Max |
| 768px | Tablet portrait | iPad |
| 1024px+ | Desktop | Standard monitors |

## Testing with Chrome DevTools

1. Open Chrome DevTools (F12 or Cmd+Opt+I)
2. Click the "Toggle device toolbar" icon (or Cmd+Shift+M)
3. Select a device preset or enter custom dimensions
4. Refresh the page after changing viewport size
5. Test both portrait and landscape orientations

### Recommended Device Presets
- iPhone SE
- iPhone 12 Pro
- Pixel 5
- iPad
- Galaxy Fold (for narrow widths)

## QA Checklist

### Layout & Overflow

- [ ] **No horizontal scrolling** at any viewport width
- [ ] All content fits within viewport bounds
- [ ] No elements cut off at screen edges
- [ ] Consistent 16px gutters on mobile (320-430px)
- [ ] Cards/Papers have appropriate padding at all sizes
- [ ] Grid layouts stack properly on mobile (xs: 12 columns)

### Navigation

- [ ] **Hamburger menu** visible on mobile (< 900px)
- [ ] Drawer opens/closes smoothly
- [ ] All nav links accessible and tappable
- [ ] Close button visible and functional
- [ ] Desktop nav hidden on mobile
- [ ] Mobile nav hidden on desktop

### Touch Targets

- [ ] All buttons at least 44px tall
- [ ] Links have adequate tap area (padding)
- [ ] Chips/tags easily tappable
- [ ] No overlapping interactive elements
- [ ] Sufficient spacing between tap targets

### Typography

- [ ] Headings scale down appropriately on mobile
- [ ] Body text remains readable (14-16px minimum)
- [ ] No text overflow or truncation issues
- [ ] Long words/URLs break properly
- [ ] Line lengths appropriate for screen width

### Images & Media

- [ ] Images scale responsively (max-width: 100%)
- [ ] Avatar sizes appropriate for mobile
- [ ] No layout shift when images load
- [ ] Hero background doesn't crop text

### Forms & Inputs (if applicable)

- [ ] Input font-size >= 16px (prevents iOS zoom)
- [ ] Form fields full-width on mobile
- [ ] Submit buttons easily tappable
- [ ] Error messages visible and readable

### Accessibility

- [ ] Focus styles visible on all interactive elements
- [ ] Proper heading hierarchy maintained
- [ ] ARIA labels translated and correct
- [ ] Color contrast unchanged
- [ ] Screen reader navigation logical

## Known Considerations

### iOS Safari

- Uses `100dvh` instead of `100vh` for proper viewport height
- Input font-size set to 16px to prevent auto-zoom on focus
- Overflow hidden on html/body to prevent horizontal scroll

### Android Chrome

- Touch target sizes meet 44px minimum
- Smooth scrolling behavior maintained

## Component-Specific Notes

### Header (components/Header.tsx)
- Shows hamburger menu at `md` breakpoint (< 900px)
- Uses MUI Drawer for mobile navigation
- Links have focus-visible outlines

### Hero (features/landing_page/Hero.tsx)
- Avatar scales from 140px (xs) to 180px (sm) to full-width (md)
- Text centers on mobile, left-aligns on desktop
- Reduced padding on mobile for better content density

### Footer (components/Footer.tsx)
- Links stack vertically on mobile
- Adequate spacing between links for touch
- Focus styles on all interactive elements

### CV Page (app/cv/CvPageClient.tsx)
- Paper extends edge-to-edge on mobile (xs)
- Reduced border radius on mobile
- Tighter spacing between sections

## Performance Notes

- Drawer uses `keepMounted: true` for faster subsequent opens
- No hover-only interactions (all work with touch)
- Avoid expensive CSS on mobile (transforms disabled on xs)

## Testing Workflow

1. Start at 320px width and work up
2. Test each page: Home, CV
3. Check all interactive elements
4. Verify navigation flow
5. Test both orientations
6. Check on actual devices if possible

## Reporting Issues

When reporting mobile issues, include:
- Device/viewport width
- Browser and version
- Screenshot or screen recording
- Steps to reproduce
- Expected vs actual behavior
