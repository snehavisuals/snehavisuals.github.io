# Snehavisuals Website Color & Typography Guide

**Applies to:** beta website and future pages using the same brand system  
**Source of truth:** current beta design tokens in [`styles.css`](./styles.css)  
**Companion briefs:** [`prd.md`](./prd.md) · [`prd-visuals.md`](./prd-visuals.md)

## 1. Brand feel

The website should feel warm, editorial, candid, and quietly celebratory: polished enough to inspire trust, but personal enough to feel like family. Use a soft cream canvas, deep readable text, restrained coral actions, plum contrast sections, and small touches of golden yellow and sage.

The experience is mobile-first and social-aware, but it should not resemble a social platform interface. Let the event photography and video carry the emotion; typography and color should support clear pricing, package comparisons, and booking actions.

## 2. Core palette

These are the current named CSS tokens. Use the token values consistently before introducing new colors.

| Token | Hex | Intended use |
|---|---|---|
| `--paper` | `#F8F5EF` | Main page background and light canvas |
| `--paper-deep` | `#F0EBE2` | Secondary warm surface |
| `--ink` | `#24231F` | Main text, headings, dark buttons |
| `--muted` | `#757169` | Supporting text on light backgrounds |
| `--line` | `#DDD7CD` | Dividers, borders, input outlines |
| `--coral` | `#EF795D` | Brand accent, decorative details, active states |
| `--coral-deep` | `#D95F45` | Strong accent for links, emphasis, and small marks |
| `--plum` | `#57384A` | Social/feature panels and dark color blocks |
| `--plum-dark` | `#342330` | Footer, booking section, high-contrast background |
| `--yellow` | `#F4D879` | Small celebratory accent, badges, illustrations |
| `--sage` | `#B9C5A6` | Calm supporting accent and illustration detail |

### Palette use

- Keep `--paper` and `--paper-deep` as the primary surfaces; avoid making every section a different saturated color.
- Use `--ink` for body copy, price values, and headings wherever the background is light.
- Use `--muted` for secondary copy only where contrast remains comfortable. Do not use low-contrast gray for required information, price details, or form labels.
- Reserve coral for small high-value moments: primary actions, links, highlights, and decorative marks. Prefer `--coral-deep` for text on a light surface.
- Use white/cream text on `--plum` and `--plum-dark` surfaces; keep the font size and weight strong enough for comfortable reading.
- Use yellow and sage as accents, not as body-text colors or large text on light backgrounds.
- Keep photography's skin tones natural. Do not apply a coral or yellow cast to faces to force images into the brand palette.
- Gradients and extra colors in the current CSS placeholder illustrations are illustrative only; do not treat every placeholder shade as a new brand token.

### Accessible color use

- Check every final foreground/background pair against WCAG 2.2 AA when adding new components; aim for at least 4.5:1 for normal text and 3:1 for large text and meaningful UI graphics.
- Do not rely on color alone for status, selected options, errors, or package labels. Pair color with text, shape, icon, or another visible cue.
- Keep keyboard focus clearly visible. The current coral-deep focus outline should remain distinguishable against both light and dark surfaces; adjust locally if needed.
- Test generated or owner-supplied photographs behind overlaid copy at desktop and mobile crops. Add a readable overlay or solid text surface when necessary.

## 3. Typography

### Website font families

| Role | Preferred family | Fallback stack | Use |
|---|---|---|---|
| Display / editorial | Playfair Display | Georgia, `"Times New Roman"`, serif | Hero, section headlines, package names, expressive short phrases |
| Interface / body | DM Sans | `"Helvetica Neue"`, Arial, sans-serif | Paragraphs, navigation, labels, buttons, prices, form content |

The current CSS imports DM Sans and Playfair Display from Google Fonts. Keep the stated system fallbacks so text remains readable if the remote font request is blocked or unavailable. Avoid adding more font families or weights without a clear design need.

### Hierarchy and behavior

- **Hero headline:** Playfair Display, regular/medium with occasional italic emphasis; short, expressive, and readable on narrow screens.
- **Section headings:** Playfair Display, medium; use sentence case and line breaks for rhythm, not to force awkward wrapping.
- **Card/package headings:** Playfair Display, medium, compact.
- **Body copy:** DM Sans, regular; comfortable line-height, short paragraphs, plain language.
- **Navigation and buttons:** DM Sans, medium/semibold; concise labels with clear actions.
- **Eyebrows and metadata:** DM Sans, semibold/bold, uppercase and letter-spaced sparingly. Use for small labels only, not long sentences.
- **Prices:** keep prices visually prominent and easy to scan; use a clean font treatment that keeps the rupee symbol and amount together.
- **Form labels and helper text:** DM Sans with clear contrast and sufficient size. Never rely on placeholder text as the only label.

### Editorial rules

- Use italic serif emphasis for one short phrase within a headline at most; do not italicize long passages.
- Avoid all-caps for body copy. Reserve it for short category labels, asset metadata, and eyebrow text.
- Prioritize readability over decorative tracking. Letter spacing should not make small text difficult to read.
- Keep line length moderate, especially for descriptions and terms.
- Use Indian English conventions and Indian rupee formatting (for example, `₹7,499`).

## 4. Social and visual content

- Use a consistent content palette around the photography, not a filter that makes real people look unnatural.
- Keep platform format labels plain and adaptable: **Vertical short**, **Story sequence**, **Photo carousel**, **Highlight film**.
- Do not use platform logos, copied app controls, fake view counts, or temporary trend graphics as part of the brand system.
- Use large readable captions on mobile video previews and design for sound-off comprehension.
- Use cream/ink or plum/cream text combinations for captions and metadata. Add a solid or darkened caption surface when a photo background is busy.
- The intended placeholder/export formats are wide hero, portrait 4:5, vertical 9:16, and widescreen 16:9. Confirm each asset's final crop in the actual page before release.
- Apply the privacy and permission guidance in the visual brief before using identifiable client work, especially images of minors.

## 5. Components and states

- **Primary button:** ink background with white text; use concise action text and a visible hover/focus treatment.
- **Secondary button:** transparent or paper background with ink text and a clear border.
- **Links:** distinguish from body copy with color, underline, or another non-color cue; keep hover behavior subtle.
- **Cards:** use paper/cream surfaces, fine warm-gray borders, and restrained shadows. Save coral borders/fills for featured or selected items.
- **Most Popular marker:** pair its color with readable text; do not rely on a colored badge alone.
- **Form controls:** paper/near-white fill, ink text, readable labels, clear border and focus state, and explicit validation feedback.
- **Disabled controls:** remain readable and visibly disabled; explain why the action is unavailable where appropriate.

## 6. CSS token reference

Current values from `beta/styles.css`:

```css
:root {
  --paper: #f8f5ef;
  --paper-deep: #f0ebe2;
  --ink: #24231f;
  --muted: #757169;
  --line: #ddd7cd;
  --coral: #ef795d;
  --coral-deep: #d95f45;
  --plum: #57384a;
  --plum-dark: #342330;
  --yellow: #f4d879;
  --sage: #b9c5a6;
  --serif: "Playfair Display", Georgia, "Times New Roman", serif;
  --sans: "DM Sans", "Helvetica Neue", Arial, sans-serif;
}
```

When changing a token, update the website CSS and this guide together. Do not silently substitute palette values in isolated components.

## 7. Final review checklist

- Colors are from the palette or have a documented component-specific reason.
- Text/background pairs have been contrast-checked; color is not the only status cue.
- Display and interface type use the named font roles and readable fallback fonts.
- Prices, form labels, support details, and package inclusions are easy to read on a phone.
- Social captions remain readable over every crop and work when muted.
- Images preserve natural skin tones and the intended warm, candid mood.
- The design feels consistent without imitating a social app or a reference brand.
