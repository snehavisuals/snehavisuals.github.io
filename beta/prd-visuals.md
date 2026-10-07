# Snehavisuals Visual Asset Production Brief

**Status:** Ready for creative production  
**Website:** `https://snehavisuals.com/beta/`  
**Companion product brief:** [`prd.md`](./prd.md)  
**Visual generation tool:** Google Nano Banana for still images and illustration concepts  
**Audience and style target:** Contemporary, social-first Indian family celebrations (2026)

## 1. Purpose

This brief inventories the visual assets needed to replace the designed placeholders in `beta/index.html`. It gives each asset a stable ID, a recommended output format, a proposed use/reuse map, and a prompt draft that can be adapted in Google Nano Banana.

The current website uses CSS-drawn placeholder compositions rather than real photography. Generated images are new conceptual campaign artwork, **not Snehavisuals client photographs, portfolio proof, testimonials, or evidence of completed work**. Keep any generated preview clearly identified as concept/demo material until it is replaced by real work or the business explicitly approves its use as illustrative marketing artwork.

Google Nano Banana is requested for still-image and illustration creation. This brief does not assume it produces final video. Produce actual reels, Story sequences with motion, and highlight films with a suitable video-production tool and workflow; stills in this document are posters/key art only.

## 2. Creative direction

- **Feeling:** warm, candid, intimate, joyful, polished but not overproduced. Show people enjoying one another rather than performing for the camera.
- **Subjects:** Indian families and guests across generations; contemporary, natural styling. Avoid caricature, stereotypes, tokenized cultural props, or assumptions about religion, region, clothing, and family structure.
- **Photography style:** documentary event photography, natural window light or warm practical lights, genuine expressions, subtle editorial color, realistic skin tones, tasteful composition, and believable event details.
- **Palette:** warm cream, muted coral, dusty rose, leafy sage, plum accents, and celebratory gold. Keep the image's color natural; brand colors belong in the website layout, not artificial color casts on skin.
- **Social sensibility:** create useful vertical and portrait crops with a clear focal point, readable negative space, and thumbnail-safe composition. The page should feel current without relying on a short-lived trend, imitation app chrome, fake engagement counts, or platform logos.
- **Consistency:** when a set should depict the same family or celebration, generate one approved reference/key image first and use it as a visual reference for related stills if the tool supports image references. Otherwise, describe subjects, wardrobe, venue, lighting, and palette consistently and select the closest matching outputs.
- **Authenticity:** do not ask the image model to imitate a living photographer, named studio, copyrighted campaign, or supplied competitor. Do not present generated people as real clients.

## 3. Global prompt and delivery rules

Apply these instructions to every generation:

1. Generate original visual artwork; do not recreate or imitate EventGraphia, Bangalore Photographers, another studio, a named artist, a recognizable campaign, or a real client's photograph.
2. Ask for **no readable text, no lettering, no logos, no watermarks, no interface text, and no fake social-media UI** in the image. Add headlines, captions, labels, and graphic UI in HTML/CSS or a design tool afterward.
3. Avoid malformed hands/fingers, duplicated people, distorted faces, unnatural skin, impossible camera equipment, visible brand marks, fake badges, and nonsensical signs.
4. Keep the intended subject and key action inside the crop-safe area; do not place faces, hands, or important props at the edge.
5. For identifiable-looking people, treat all generated people as fictional. Do not use their likeness as a named customer, photographer, or testimonial provider.
6. Review every output for visual artifacts, accessibility/crop behavior, cultural fit, and misleading implications before publishing.
7. Preserve an unmodified high-quality master. Make responsive/compressed web derivatives from the approved master; do not upscale a small derivative as the master.

### Delivery conventions

- Proposed asset root: `beta/assets/visuals/`.
- Proposed filenames follow the asset IDs below, for example `sv-01-hero-birthday.webp`.
- Keep approved masters separately during creation; export web-ready AVIF or WebP derivatives as supported, with a JPEG fallback only if required.
- Use sRGB color, no baked-in text, and no transparency for photographic assets. Transparent PNG/WebP is appropriate for a separately approved illustration if needed.
- Use the aspect ratio listed per asset. Make an additional crop only when a destination layout needs it; do not stretch.
- Add useful, truthful `alt` text in HTML at implementation time. For purely decorative images, use empty alt text and hide from assistive technology.
- Proposed web export size: approximately 1600 px on the longest edge for hero/large photos; approximately 1000 px on the longest edge for cards and posters. Keep quality visually high and file size appropriate for mobile.
- Confirm that the actual GitHub Pages artifact contains only approved export assets needed by the website; do not publish working prompts, private source files, or unrelated masters by accident.

## 4. Asset inventory and page mapping

| ID | Website use | Count | Format / ratio | Generation approach |
|---|---|---:|---|---|
| SV-01 | Home hero, `.hero-art__photo` | 1 | Portrait 4:5 | One hero photograph |
| SV-02 | Booking experience, `.experience-art--booking` | 1 | Square 1:1 illustration | Illustration, or keep current CSS phone artwork |
| SV-03 | Printed-photo keepsake, `.experience-art--delivery` | 1 | Landscape 4:3 | Still-life photograph |
| SV-04–08 | Occasion tiles: birthday, baby shower/naming, housewarming, family, community | 5 | Portrait 4:5 | One unique image per occasion |
| SV-09 | Vertical short preview/poster, `.format-card--reel` | 1 | Vertical 9:16 | Poster/key still; create motion separately |
| SV-10–12 | Three-frame Story sequence, `.format-card--story` | 3 | Vertical 9:16 each | A visually consistent set from one fictional event |
| SV-13 | YouTube highlight preview/poster, `.format-card--film` | 1 | Landscape 16:9 | Poster/key still; create motion separately |
| SV-14–16 | Social photo carousel, `.format-card--post` | 3 | Portrait 4:5 each | A visually consistent set from one fictional event |
| SV-17 | Birthday photo story, `.gallery-tile--portrait` | 1 | Portrait 4:5 | A distinct image; do not reuse SV-01 in the same page view |
| SV-18 | Family gathering photo story, `.gallery-tile--square` | 1 | Portrait 4:5 source, crop-safe | One standalone image |
| SV-19 | Vertical short gallery preview, `.gallery-tile--vertical` | 1 | Vertical 9:16 | Poster/key still; create motion separately |
| SV-20 | Highlight-film gallery preview, `.gallery-tile--wide` | 1 | Landscape 16:9 | Poster/key still; create motion separately |
| SV-21 | Quality-check/promise image, `.promise__visual` | 1 | Landscape 4:3 | A finished-photo/print mockup; no fake QA seal |

**Still-image generation estimate:** 20 photographic stills/posters plus 1 illustration if replacing the CSS booking artwork. SV-02 can remain CSS artwork, so it is optional. Story and carousel images are grouped sets; create alternate outputs only if the initial set fails crop or continuity review.

The experience section, package-card illustrations, and step icons are currently CSS/simple glyph artwork. They do not need Nano Banana assets for the first pass. If the design later replaces them with illustrations, add individually scoped assets rather than creating an all-purpose decorative sheet.

## 5. Prompt drafts

These are starting prompts, not locked scripts. Run each in the requested aspect ratio, inspect several candidates, and retain only the approved result.

### SV-01 — Homepage hero: first birthday

**Use:** The main visual on the landing page. Preserve open space where site copy sits; compose for a portrait crop.

**Prompt:**

> Create an original, photorealistic editorial event photograph for a family photography studio website: an Indian family celebrating a toddler's first birthday at home, captured during a genuine candid moment as the child reaches toward a small birthday cake and relatives smile together. A professional event photographer may be subtly visible working in the background, not posing the family. Warm natural window light mixed with soft festive practical lights, tasteful contemporary home decor, intimate and joyful, documentary photography, realistic skin tones, subtle editorial color. Portrait 4:5 composition; keep the family and cake in the central 70 percent, with a softly detailed low-clutter area near the lower edge for a website caption overlay. No text, no numbers, no readable signs, no logos, no watermark, no exaggerated cake smash, no artificial studio lighting, no distorted hands or faces.

### SV-02 — Booking confirmation illustration (optional)

**Use:** Replace the CSS mobile-phone booking illustration only if desired.

**Prompt:**

> Create a simple, warm editorial vector-style illustration for an event photography brand: a generic smartphone with a clean calendar card, one highlighted event date, and a single confirmation check symbol. Cream, muted coral, dusty rose, sage, and plum palette; soft paper texture; friendly rounded geometry; generous negative space; centered square 1:1 composition; crisp edges suitable for responsive web display. Do not include words, letters, numerals, logos, brand names, realistic app UI, interface copy, shadows that reduce legibility, or a phone status bar.

### SV-03 — Printed photographs / keepsake delivery

**Use:** Printed-memory vignette in the experience section.

**Prompt:**

> Original photorealistic editorial still life for a warm family photography studio: a neat, beautiful keepsake box partly open on a sunlit table, a few blank-backed printed family photographs tucked inside, soft cotton ribbon, one small dried flower nearby. Evoke careful delivery and treasured memories without showing a real brand or readable packaging. Natural warm daylight, tactile paper and linen, cream, muted coral and sage accents, understated premium styling. Landscape 4:3 composition, clear central subject with safe margins. No text, lettering, logos, watermarks, fake certification seals, or visible faces on prints.

### SV-04 — Occasion tile: children's / first birthday

> Original photorealistic candid family-event photograph: a toddler at a cheerful first-birthday gathering at home, parents and relatives sharing a spontaneous laugh nearby, colorful but tasteful decorations, natural warm light, documentary event photography, realistic Indian family, natural skin tones, polished but believable. Portrait 4:5, crop-safe central action, a little quiet area near the top for a website label. No text, readable age/numbers, logos, watermark, distorted faces or hands.

### SV-05 — Occasion tile: baby shower / naming ceremony

> Original photorealistic candid photograph of a contemporary Indian family celebrating a baby shower or naming day in a warm home setting. Show several generations sharing a gentle joyful moment around tasteful flowers and simple decor; no religious ritual is implied. Documentary event photography, warm daylight, natural expressions and realistic skin tones, refined muted color. Portrait 4:5 composition, subjects central and crop-safe. No text, readable signs, logos, watermark, stereotyped costumes, or distorted hands/faces.

### SV-06 — Occasion tile: housewarming / Griha Pravesh

> Original photorealistic editorial event photograph of a family enjoying a new-home celebration: relatives smiling together in a bright, welcoming Indian home, a few tasteful flowers and personal belongings suggesting a new beginning. Keep the scene culturally neutral and do not depict a specific religious rite. Candid documentary photography, natural window light, warm cream, sage and soft coral tones, realistic people. Portrait 4:5 with clear central subjects. No text, readable house numbers, logos, watermark, or staged real-estate advertising look.

### SV-07 — Occasion tile: anniversary / family gathering

> Original photorealistic candid photograph at a relaxed family anniversary gathering: an older couple smiling together while adult family members lean in around them, a warm lived-in home, natural joyful interaction. Contemporary Indian family with believable age diversity; documentary event photography, flattering natural light and skin tones, subtle editorial finish. Portrait 4:5, faces comfortably inside the central crop. No text, logos, watermark, exaggerated posing, or distorted anatomy.

### SV-08 — Occasion tile: apartment / community celebration

> Original photorealistic candid photograph of a friendly apartment-community celebration in India: neighbors and families, including children accompanied by adults, sharing a festive evening in a tasteful clubhouse courtyard. Warm string lights, simple decor, natural candid interaction, no visible building or organization names. Documentary event photography, realistic skin tones, polished but unposed. Portrait 4:5 with a readable central group and crop-safe edges. No text, signage, logos, watermark, or distorted people.

### SV-09 — Vertical short/reel cover

**Use:** Static preview poster only. The moving reel is produced separately.

> Original cinematic but natural event-photo key frame for a vertical short about a child's birthday celebration: one joyful candid moment with a parent and toddler smiling together while family celebration details softly appear behind them. Warm practical lights, gentle motion-ready feeling without motion blur, natural skin tones, documentary photography, no text. Vertical 9:16, keep faces in the middle 60 percent and leave a small low-detail area at top and bottom for interface-independent web overlays. No app UI, play icon, platform logo, captions, watermark, or fake engagement indicators.

### SV-10–12 — Three Story sequence stills

Generate these as a matching set from one fictional family/event. Use the same family, clothes, venue and color treatment for all three; use an approved reference image if available. These are individual stills, not an automatically generated animated sequence.

**SV-10 / opening frame**

> First still in a consistent three-frame vertical Story sequence for a fictional Indian family's intimate home birthday. Wide-feeling vertical composition of guests arriving and greeting one another, joyful candid energy, warm natural light, documentary event photography, same visual world intended for the next frames. Vertical 9:16; keep faces away from top and bottom overlay-safe zones. No text, logos, interface or watermark.

**SV-11 / shared moment**

> Middle still in the same fictional family birthday Story sequence as the reference frame: same people, clothes, home, decor and lighting. A genuine close candid moment of family members gathered around the toddler and cake, no one looking directly at camera. Natural expressions, realistic skin tones, editorial documentary style. Vertical 9:16, crop-safe central action. No text, logos, interface or watermark.

**SV-12 / warm ending**

> Final still in the same fictional family birthday Story sequence as the reference frames: same family and home, a quieter affectionate moment after the celebration, relatives smiling together as the toddler is held close. Warm, intimate documentary photograph, natural skin tones, understated hopeful finish. Vertical 9:16; reserve calm negative space in the lower third for an HTML caption. No text, logos, interface or watermark.

### SV-13 — YouTube highlight poster

**Use:** Thumbnail/poster for a real highlight video to be produced separately.

> Original photorealistic widescreen key frame for a family-event highlight film: a joyful multigenerational Indian family in a candid embrace at a tasteful home celebration, with natural decor and warm late-afternoon light. Cinematic composition but believable documentary photography, subtle filmic color, realistic skin tones. Landscape 16:9; keep faces and central action within the middle 80 percent and leave safe space for a play control added by the website. No text, title, logos, platform UI, play button, watermark or fake YouTube thumbnail graphics.

### SV-14–16 — Social photo carousel

Create a coordinated three-image set for one fictional family/event, with the same subjects, outfit palette, location and color treatment in all three images. These are image assets, not a composited carousel graphic.

**SV-14 / establishing frame**

> First photograph in a coordinated three-image social carousel about a fictional Indian family birthday: a candid environmental portrait showing the warm home celebration and close family group. Documentary event photography, natural window light, subtle coral and sage decor, realistic skin tones. Portrait 4:5; leave crop-safe margins. No text, logos, watermark or interface.

**SV-15 / detail frame**

> Second photograph in the same fictional family birthday carousel as the reference image: a close, tactile detail of the small celebration table, simple cake, flowers and hands arranging plates, with family softly out of focus behind. Natural warm light and realistic materials, editorial documentary style. Portrait 4:5. No readable cake writing, text, logos, watermark or interface.

**SV-16 / connection frame**

> Third photograph in the same fictional family birthday carousel as the reference images: an affectionate candid interaction between family members and the toddler after the cake moment, natural laughter, realistic hands and faces, soft documentary color. Portrait 4:5, central action crop-safe. No text, logos, watermark or interface.

### SV-17 — Gallery photo story: the first candle

> Original photorealistic candid image for a fictional first-birthday photo story: a family gathered close as a toddler looks at a small lit birthday candle, expressions and connection are the focus, candle safely placed on a cake, tasteful home celebration in the background. Warm realistic light, documentary event photography, polished natural color. Portrait 4:5, visually distinct from the homepage hero; central faces and candle crop-safe. No text, readable age/numbers, logos or watermark.

### SV-18 — Gallery photo story: all in one room

> Original photorealistic candid image for a fictional family-gathering story: cousins and relatives across generations sharing an unposed joyful moment around a dining table in a welcoming home. Show genuine interaction, diverse ages and natural skin tones, soft window light, documentary editorial style. Portrait 4:5 source with important subjects centered so it can also crop to square. No text, logos, watermark or exaggerated staging.

### SV-19 — Gallery vertical short poster

**Use:** Poster still only; do not represent as an actual playable reel until a video file and player are supplied.

> Original vertical key frame for a fictional family-celebration short film: candid joyous movement as family members greet one another at a warm home gathering, one clear focal person in the center, soft practical light and natural expressions. Photorealistic documentary event style, gentle sense of motion without blur. Vertical 9:16 with safe top/bottom margins. No text, app UI, logo, watermark, play icon or engagement indicators.

### SV-20 — Gallery highlight-film poster

**Use:** Poster still only; actual video production is separate.

> Original widescreen key frame for a fictional family-event highlight film: a tender candid moment at a housewarming, family sharing a smile together in a sunlit new home with a few tasteful flowers. Photorealistic documentary event photography, warm but natural grade, landscape 16:9, crop-safe central subjects. No text, titles, logos, platform UI, play icon or watermark.

### SV-21 — Quality-check / finished memory image

> Original photorealistic editorial photograph representing a carefully finished family-event photograph: a tasteful printed photograph resting on a cream work surface beside a neutral editing proof/contact sheet with no legible interface, a hand checking the print under soft daylight. Do not show fake quality badges or imply an actual software screenshot. Warm restrained palette, crisp but tactile paper, landscape 4:3, safe subject margins. No readable text, logo, watermark, certificate, seal or identifiable client image.

## 6. Asset implementation map

| Asset IDs | Replace these current placeholders |
|---|---|
| SV-01 | `.hero-art__photo` background artwork |
| SV-02 (optional) | `.experience-art--booking` if replacing CSS booking-phone illustration |
| SV-03 | `.experience-art--delivery` background artwork |
| SV-04 | `.visual-placeholder--birthday` |
| SV-05 | `.visual-placeholder--baby` |
| SV-06 | `.visual-placeholder--home` |
| SV-07 | `.visual-placeholder--family` |
| SV-08 | `.visual-placeholder--community` |
| SV-09 | `.format-card__screen--vertical` |
| SV-10–12 | `.format-card__screen--story`; use one selected frame in the static card or implement an accessible user-controlled sequence |
| SV-13 | `.format-card__screen--wide` |
| SV-14–16 | `.format-card__screen--post`; display a selected cover or three-image stack |
| SV-17 | `.gallery-tile--portrait` |
| SV-18 | `.gallery-tile--square` |
| SV-19 | `.gallery-tile--vertical` |
| SV-20 | `.gallery-tile--wide` |
| SV-21 | `.promise__visual` |

**Reel/highlight distinction:** SV-09, SV-13, SV-19, and SV-20 are image posters only. They must not play or imply a video exists until real video files and an accessible playback implementation are added.

**Story/carousel distinction:** SV-10–12 and SV-14–16 are deliverable examples only if production, editing, rights, pricing, and package inclusion are confirmed. The site should not claim a multi-frame Story sequence or carousel is included by default.

## 7. Review checklist

For each final export, verify:

- Correct asset ID, filename, subject, orientation, and aspect ratio.
- No generated text, fake branding, watermarks, malformed anatomy, or unwanted artifacts.
- Faces, hands, cake/important event detail, and focal action remain visible in desktop and mobile crops.
- Any family/event set intended to be consistent has acceptable continuity between images.
- Generated people and scenes are not presented as real clients or actual Snehavisuals work.
- Any real portfolio image added later has permission for marketing use, with specific care and required guardian permission for identifiable minors.
- The site still labels the assets as generated concept visuals unless replaced with real, cleared portfolio work.
- File dimensions, responsive crop, alt text, compression, and page performance are acceptable.
- The live beta artifact excludes this brief and all non-website prompt/source files.

## 8. Not generated by this brief

- Actual event photography from Snehavisuals bookings.
- Final moving video, reels, Stories with motion, or YouTube highlight films.
- Customer testimonials, ratings, trust badges, photographer credentials, or real interface/payment screenshots.
- Brand logo/wordmark. The current website wordmark is HTML/CSS and should be replaced only with an owner-approved brand asset.
- Any generated image that could be mistaken for a documented real event or verified portfolio result.
