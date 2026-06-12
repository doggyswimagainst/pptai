---
name: Cazadores de Ciberamenazas - Hospital Metropolitano (CSIRT Style)
colors:
  surface: '#FFFFFF'
  surface-dim: '#F0F4F8'
  surface-bright: '#FFFFFF'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#F8FAFC'
  surface-container: '#FFFFFF'
  surface-container-high: '#EDF2F7'
  surface-container-highest: '#E2E8F0'
  on-surface: '#0F1E36'
  on-surface-variant: '#4A5568'
  inverse-surface: '#0F1E36'
  inverse-on-surface: '#FFFFFF'
  outline: '#CBD5E0'
  outline-variant: '#E2E8F0'
  surface-tint: '#0B2545'
  primary: '#0B2545'
  on-primary: '#FFFFFF'
  primary-container: '#E2E8F0'
  on-primary-container: '#0B2545'
  inverse-primary: '#3182CE'
  secondary: '#FF5A5F'
  on-secondary: '#FFFFFF'
  secondary-container: '#FFEBEB'
  on-secondary-container: '#FF5A5F'
  tertiary: '#2F855A'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#E6F4EA'
  on-tertiary-container: '#2F855A'
  error: '#FF5A5F'
  on-error: '#FFFFFF'
  error-container: '#FFEBEB'
  on-error-container: '#FF5A5F'
  primary-fixed: '#D9E2EC'
  primary-fixed-dim: '#BCCCDC'
  on-primary-fixed: '#0B2545'
  on-primary-fixed-variant: '#102A43'
  secondary-fixed: '#FFD8D8'
  secondary-fixed-dim: '#FFB3B3'
  on-secondary-fixed: '#610505'
  on-secondary-fixed-variant: '#8A0A0A'
  tertiary-fixed: '#D1E7DD'
  tertiary-fixed-dim: '#A3CFBB'
  on-tertiary-fixed: '#0F5132'
  on-tertiary-fixed-variant: '#146C43'
  background: '#F0F4F8'
  on-background: '#0F1E36'
  surface-variant: '#EDF2F7'
  outline-glow: 'rgba(11, 37, 69, 0.1)'
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  h2:
    fontFamily: Public Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The visual identity is redesigned to project a highly professional, institutional, and accessible cibersecurity environment based on CSIRT advisory publications. It uses a **Light and Bright** theme that replaces clandestine neon tones with clean, structured surfaces and corporate authority.

The brand image continues to support the **Hospital Metropolitano** and is combined with CSIRT's national cybersecurity guidelines.

## Colors

- **CSIRT Light Grey/Blue (#F0F4F8):** Primary background layer to evoke cleanliness, modernity, and clarity.
- **CSIRT Navy (#0B2545):** Primary brand color, representing institutional security, authority, and official verification.
- **Advisory Coral (#FF5A5F):** Accent color reserved for critical warnings, "NUNCA" indicators, and threat alerts.
- **Trust Green (#2F855A):** Dedicated to safety protocols, mitigated state indicators, and successful actions.

## Typography

- **Public Sans (Headlines):** High-density geometric sans-serif, rendered in heavy weights and uppercase styling for official notifications.
- **Inter (Body & UI):** For high readability of technical descriptions, reducing cognitive fatigue.

## Shapes & Geometry

The interface incorporates **diagonal/slanted geometric accents** and **infographic connecting lines** inspired by the CSIRT publication layout:
- Containers use 12px (`xl`) rounded corners with soft box shadows to look elevated.
- Navigation elements are connected via vertical lines with nodes, guiding the user through the 15 cases.
- Accent shapes are cut at angles (using CSS gradients or clip-path) to match the layout of the recommendations PDF.
