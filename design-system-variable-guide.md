# Design System Variable Usage Guide

## Font Families

- `--ff-head: "Merriweather", serif;`
  - Use for all headings (h1-h6)
  - Can be used for important callouts or quotes

- `--ff-body: "Muli", sans-serif;`
  - Use for all body text, paragraphs, and general content
  - Also suitable for buttons, links, and form elements

## Font Sizes

- `--fs-body: 16px;`
  - Default size for body text, paragraphs, and general content

- `--fs-h1: 2.5rem;` to `--fs-h6: 1.1rem;`
  - Use for corresponding heading levels (h1 to h6)
  - Can also be used for creating size hierarchy in other elements:
    - `--fs-h1`: Main page titles
    - `--fs-h2`: Section titles
    - `--fs-h3`: Subsection titles
    - `--fs-h4`: Card titles, important callouts
    - `--fs-h5`: Smaller card titles, sidebar headings
    - `--fs-h6`: Captions, labels, smallest headings

## Font Weights

- `--fw-normal: 400;`
  - Use for body text and general content

- `--fw-medium: 500;`
  - Use for slightly emphasized text
  - Good for subheadings or important phrases within paragraphs

- `--fw-bold: 700;`
  - Use for headings
  - Buttons and call-to-action elements
  - Strongly emphasized text

## Line Heights

- `--lh-body: 1.5;`
  - Use for body text, paragraphs, and general content

- `--lh-heading: 1.2;`
  - Use for all heading levels (h1-h6)
  - Can also be used for short phrases or single-line elements

## Spacing

- `--space-xs: 0.25rem;` to `--space-xl: 2rem;`
  - Use these for consistent spacing throughout the design:
    - `--space-xs`: Tiny gaps, inside compact components
    - `--space-sm`: Small padding, gaps between related items
    - `--space-md`: Standard spacing for most elements
    - `--space-lg`: Larger gaps, section separators
    - `--space-xl`: Very large gaps, major section separators

## Colors

### Light Theme

- `--color-bg: #f8fefa;`
  - Main background color for the entire site

- `--color-bg-alt: #eaf9ef;`
  - Alternative background for cards, sections, or to create visual hierarchy

- `--color-text: #030e06;`
  - Main text color for body content

- `--color-text-light: #4a5d4e;`
  - Secondary text color for less emphasis, captions, or helper text

- `--color-primary: #3dd973;`
  - Primary brand color
  - Use for main call-to-action buttons, important icons, links

- `--color-primary-light: #65e391;`
  - Lighter version of primary color
  - Use for hover states, backgrounds, or to create depth

- `--color-primary-dark: #2fb85e;`
  - Darker version of primary color
  - Use for active states, borders, or to create contrast

- `--color-secondary: #8acbe8;`
  - Secondary brand color
  - Use for secondary buttons, accents, or to complement primary color

- `--color-secondary-light: #a7d8ef;` and `--color-secondary-dark: #6dbfe1;`
  - Light and dark versions of secondary color
  - Use similar to primary light/dark variants

- `--color-accent: #6786e2;`
  - Accent color for highlights, special elements
  - Use sparingly to draw attention

- `--color-accent-light: #8ba2e8;` and `--color-accent-dark: #4b6ad8;`
  - Light and dark versions of accent color
  - Use similar to primary and secondary light/dark variants

### Dark Theme

- Dark theme colors follow the same usage patterns as light theme
- Adjusted for better contrast and readability in dark environments

## Shadows

- `--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);`
  - Subtle shadow for slight elevation (e.g., buttons, form inputs)

- `--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);`
  - Medium shadow for noticeable elevation (e.g., cards, dropdowns)

- `--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);`
  - Large shadow for significant elevation (e.g., modals, popovers)

- `--color-card-shadow: rgba(0, 0, 0, 0.1);`
  - Specific shadow color for cards, can be used with different opacities

## Borders

- `--border-width: 1px;`
  - Standard border width for consistency across the design

- `--border-radius: 10px;`
  - Standard border radius for rounded corners on elements like cards, buttons, and form inputs
