# Product Requirements Document: Snehavisuals Photography Booking Website

**Status:** Draft for implementation  
**Product:** Snehavisuals — event photography and videography booking  
**Primary domain:** [snehavisuals.com](https://snehavisuals.com/)  
**Document date:** 7 October 2026

## 1. Product summary

Build a polished, mobile-first, social-first website for 2026 that helps people discover Snehavisuals' event photography and video packages, understand exactly what each package includes, and submit a booking request with minimal effort. Treat short-form vertical video, YouTube-ready films, Stories, and social posts as important ways customers use and share event memories. The experience should communicate transparent pricing, dependable coordination, vetted creatives, and quality-checked delivery.

The primary conversion is a completed booking request. Secondary conversions are WhatsApp enquiries and direct support contact. The site should make the visitor feel confident enough to book while allowing the Snehavisuals team to confirm availability and coordinate event details. Do not imply that every social format or platform deliverable is included in every package; show the confirmed package inclusions clearly.

## 2. Background and current state

The current public website is a “Coming soon” page. The repository is a small static website deployed through GitHub Pages with `snehavisuals.com` as its custom domain. The repository README describes Snehavisuals more broadly as a visual design studio focused on branding, photography, and video production; this PRD treats the supplied event-photography booking requirements as the intended direction for this website.

### Beta website directory and release stages

- `beta/` is the working directory for the preview website. Put the preview site's `index.html`, styles, scripts, images, fonts, and other static assets in `beta/` or its subdirectories. This PRD is at `beta/prd.md`.
- [`prd-visuals.md`](./prd-visuals.md) is the companion asset-production brief. Use its asset IDs and prompts when creating the still-image/illustration assets for the website.
- During development, serve the preview at `https://snehavisuals.com/beta/` (and ensure `/beta` redirects or resolves to `/beta/`). Keep the existing repository-root `index.html` as the public “Coming soon” landing page at `https://snehavisuals.com/`.
- Mark the beta preview `noindex` while it is a staging experience. Remove that directive when the approved site is promoted to production and verify production indexing metadata.
- A GitHub Actions Pages workflow publishes the repository root so `beta/index.html` is served under `/beta/`, while excluding both planning documents and repository-only documentation from the artifact. GitHub Pages must use "GitHub Actions" as its build/deployment source. Keep the root `CNAME` and custom domain unchanged during beta.
- Use root-relative URL paths carefully: assets and internal links must resolve correctly when pages are served under `/beta/`. Prefer paths relative to the beta page or a consistent `/beta/` base.
- Do not publish the contents of `beta/` at the domain root during preview. The `beta/` directory is a staging preview, not the final production root.
- At final release, explicitly promote the approved site to `https://snehavisuals.com/` and replace or supersede the root “Coming soon” page through the selected deployment process. Verify production routes, assets, HTTPS, and custom-domain behavior at that time.
- Keep repository-level documentation and deployment configuration outside `beta/` when they are not part of the preview website. Keep `beta/prd.md` and `beta/prd-visuals.md` in the repository for planning, but exclude both from the public Pages artifact.

## 3. Goals and success measures

### Goals

- Explain the photography booking service and its reliability at a glance.
- Make package prices, coverage duration, team size, and deliverables easy to compare.
- Present social-ready deliverables clearly, including vertical short-form video and longer YouTube-friendly highlights where included.
- Guide visitors from event discovery to an actionable booking or support conversation.
- Collect the information needed to assess and coordinate a booking request.
- Provide a consistent, trustworthy experience on mobile and desktop.

### Success measures

- Visitors can find package prices and inclusions without contacting support.
- Visitors can reach the booking form from the home and pricing pages.
- Booking requests include contact details, event details, and package preference.
- WhatsApp is available as a persistent, direct support option.
- The website is usable with keyboard navigation and assistive technology, and works at common mobile widths.

Instrument page views, pricing-page visits, booking-form starts/submissions, and WhatsApp clicks if an analytics solution is selected. Analytics vendor and consent requirements are TBD.

## 4. Target users and needs

### Primary audience

Individuals and families organizing birthdays, baby showers, naming ceremonies, housewarmings, anniversaries, family gatherings, apartment/community events, and small corporate mixers in the service area.

### User needs

- Quickly confirm that Snehavisuals covers their occasion and location.
- Know the total starting price and what they receive before making contact.
- Trust that the photographer will be vetted, punctual, and coordinated.
- Submit event details without a lengthy or confusing process.
- Ask a quick question through WhatsApp when they are not ready to book.

## 5. Information architecture

### Global navigation

- Home
- Occasions
- Pricing & Packages
- How It Works
- Gallery
- Contact / Book

On small screens, navigation should collapse into an accessible menu. Keep a visually prominent “Book Your Event” action and a persistent WhatsApp action without obscuring page content.

### Pages

1. **Home / landing page** — service proposition, occasions, process, trust signals, testimonials, and conversion actions.
2. **Pricing & Packages** — package comparison, recommendations by event, add-ons, and booking/support actions.
3. **Contact & Booking** — direct support information and booking request form.
4. **Gallery** — event portfolio, grouped or filterable by occasion when sufficient imagery is available.
5. **FAQs** — concise answers to common questions, linked from the footer.
6. **Terms of Service** and **Privacy Policy** — linked from the footer; publish approved legal copy before collecting personal information.

The landing, pricing, and contact/booking experiences are launch-critical. Gallery, FAQs, and legal pages are also launch requirements for a complete public website; content may be staged, but no empty or misleading page should be linked as complete.
Phase 2 enhancements are listed in Section 7 and are not launch blockers.

## 6. Functional requirements and page content

### 6.1 Home / landing page

#### Header

- Display the Snehavisuals wordmark or logo.
- Provide navigation to Occasions, Pricing & Packages, How It Works, Gallery, and Contact.
- Provide a clear “Book Your Event” action.
- Make header navigation usable by keyboard and touch.

#### Hero

- Add a clearly labeled hero-photo placeholder for a warm first-birthday celebration, composed with safe space for headline and CTA overlays. Do not source or generate the final image as part of this work.
- Headline: **“Professional Photography. Transparent Pricing. Absolute Ease.”**
- Supporting copy: **“The most reliable way to book vetted photographers for birthdays, housewarmings, and family gatherings in [City/Location].”**
- Primary CTA: **“View Transparent Pricing”** → Pricing & Packages.
- Secondary CTA: **“Book Your Event”** → Contact & Booking.
- Keep headline, copy, and actions legible on top of the image at all responsive sizes.

#### The Snehavisuals experience

- Add paired placeholders for a booking-confirmation visual and a finished printed-photo delivery visual (split-screen illustration or equivalent). Do not create final artwork as part of this work.
- Explain upfront pricing, trusted professionals, prompt delivery, and managed logistics.
- Convey that the customer can be present at the celebration while Snehavisuals coordinates scheduling and quality control.

#### Occasions

Present the supported occasion types in a visual grid with clear labels and a consistent image-placeholder tile for each:

- Children’s and first birthdays
- Baby showers and naming ceremonies
- Housewarmings / Griha Pravesh
- Anniversaries and family gatherings
- Apartment and community events
- Small corporate mixers

Each card should lead to a relevant gallery category or booking entry point where practical.

#### Made for every way you share

- Include a compact social-first section that introduces photo galleries, vertical short videos, Story-friendly edits, social photo posts/carousels, and longer YouTube-friendly highlights.
- Use labeled placeholder tiles for each format; make the layout feel intentional and current without presenting placeholders as finished examples.
- Connect each format to the package(s) that include it. For formats not included, link to the relevant optional add-on or enquiry route.
- Keep trend references adaptable and avoid unsupported promises about views, reach, virality, or platform algorithms.

#### How it works

Show a four-step horizontal timeline on wide screens and a readable vertical sequence on narrow screens:

1. **Transparent Booking** — choose an event type and fixed-price package; show that pricing is upfront.
2. **We Assign a Vetted Pro** — match the event with a verified photographer from the curated network.
3. **Enjoy Your Event** — the support team coordinates arrival, requirements, and on-ground logistics.
4. **Quality-Checked Delivery** — the in-house editing and QA team color-corrects and formats the gallery before delivery.

Use labeled illustration placeholders for a calendar and price tag, camera and handshake, host greeting guests, and quality review/digital delivery. Final illustrations will be created by the owner later; illustrations must not replace explanatory text.

#### Trust and reliability

- Describe portfolio and background review for photographers.
- State that delivery timelines are guaranteed only when the applicable timeline and terms are confirmed; do not imply a guarantee that the business cannot operationally meet.
- Describe secure online booking/payment only once the selected payment workflow is implemented.
- Reserve a testimonial layout with clearly identified content placeholders until genuine, approved reviews are supplied. Do not fabricate testimonials, review counts, ratings, badges, or accreditation.
- Use a “Quality Assured” seal only if the business approves and substantiates the claim.

#### Testimonials

Reserve an explicit testimonial placeholder. Add reviews emphasizing ease of booking, punctuality, and final image quality only when genuine and approved for use. Do not present placeholder copy as a customer quote.

#### Final call to action

- Add a labeled housewarming-photo placeholder with a contrast overlay and safe text area.
- Headline: **“Ready to secure your date?”**
- CTA: **“Book in 3 Minutes”** → Contact & Booking.
- Do not promise a three-minute completion time until it has been validated through usability testing; otherwise change the CTA to “Start Your Booking.”

#### Footer

- Quick links: Pricing, FAQs, Terms of Service, Privacy Policy.
- Support phone/WhatsApp and email.
- Copyright notice using the current year and confirmed business name.

### 6.2 Pricing & Packages page

#### Hero

- Add a labeled family-celebration hero-photo placeholder with a photographer capturing a candid moment in the intended composition.
- Headline: **“Transparent Pricing. Professional Quality. Absolute Convenience.”**
- Supporting copy: **“Select the perfect coverage for your celebration. All packages include vetted professionals, guaranteed delivery times, and beautifully edited digital galleries.”**
- The delivery guarantee must be operationally confirmed and its timeframe made explicit before publication.

#### Package comparison

Display four responsive package cards or a comparison table. Make duration, team, deliverables, and intended fit easy to compare. On mobile, cards must not require horizontal scrolling to reveal essential information.

| Package | Price | Coverage | Team | Deliverables | Best for |
|---|---:|---:|---|---|---|
| The Mini | ₹4,999 | 1.5 hours | 1 professional photographer | 60+ edited digital photographs | Intimate home gatherings and apartment clubhouse birthdays |
| The Classic — Most Popular | ₹7,499 | 3 hours | 1 professional photographer | 120+ edited digital photographs; digital gallery within 7 days | First birthdays, Griha Pravesh, and family anniversaries |
| The Celebration | ₹11,999 | 4 hours | 1 photographer + 1 videographer | 150+ edited digital photographs and 1 high-energy vertical social-media reel | Community events and larger family milestones |
| The Premium | ₹17,999 | 5 hours | 1 photographer + 1 videographer | 250+ edited digital photographs, 60-second social reel, and 2–3 minute cinematic highlight video | Grand baby showers, lavish birthdays, and premium celebrations |

Additional package focus details:

- **Mini:** core event highlights and family portraits.
- **Classic:** candid moments, event details, and comprehensive group portraits.
- **Celebration:** multi-angle coverage, dynamic video highlights, and family portraits.
- **Premium:** extensive candid coverage, cinematic videography, and comprehensive event documentation.

Highlight Classic as “Most Popular” without making other options hard to compare. Clarify taxes, travel fees, booking deposits, cancellation/rescheduling terms, and payment schedule once those policies are confirmed.

Treat social deliverables as a key package-comparison dimension, not as a vague marketing promise:

- Call out that Celebration includes one vertical social-media reel and Premium includes a 60-second social reel plus a 2–3 minute cinematic highlight.
- Present short-form outputs as intended for vertical viewing (for example, Reels/Shorts/Stories) only after the actual export specifications and platform compatibility are confirmed.
- Present the longer highlight as suitable for sharing on YouTube or other supported channels only after the business confirms the delivery format, aspect ratio, resolution, soundtrack/music rights, and any platform-specific versioning.
- Do not imply that Mini or Classic includes reels, YouTube edits, Story sequences, social feed posts/carousels, captions, trend audio, or multiple aspect-ratio exports unless these are explicitly added to that package or quoted as add-ons.
- Keep platform logos, names, and interface examples current and secondary to package content; do not mimic platform UI or promise performance, virality, reach, or trend participation.

#### Package recommendations

- Quick first-birthday cake cutting at home → Mini.
- Morning Griha Pravesh or a 50-guest apartment clubhouse party → Classic.
- Evening naming ceremony with décor and dancing → Celebration.
- Grand anniversary or multi-event cultural program → Premium.

#### Add-on services

Present as optional services, not as inclusions in the listed package prices, unless the business confirms otherwise.

- **Media & coverage:** additional photography hour; additional photographer; dedicated videography; custom Instagram/YouTube reels; cinematic highlight videos; drone photography where permitted.
- **Social-ready formats:** optional Story sequences, short-form edits, platform-specific crops, photo carousel/post layouts, subtitles/captions, and alternate versions where offered and quoted. Label each as included, optional, or unavailable; do not imply they are included by default.
- **Print & keepsakes:** premium hardcover albums; printed photographs; custom framed wall art; same-day or next-day digital delivery.
- **Event logistics & styling:** photo booth; professional family portrait session before or after the event; event decoration and styling; custom cake sourcing; digital and printed invitations; dedicated on-ground event coordination.

For each add-on, show a price or clearly label it “Request a quote.” Drone use must be subject to venue permission and applicable local rules.

#### Pricing conversion banner

- Add a labeled placeholder for an inviting photo-album handoff visual.
- Primary CTA: **“Book Your Package Securely”** → Contact & Booking.
- Secondary CTA: **“Contact Support via WhatsApp”** → WhatsApp.
- Supporting line: bookings include secure online payment, instant confirmation, and coordination support from the [City/Location] headquarters only if those service capabilities are available and implemented. Otherwise, revise the claim before launch.

### 6.3 Contact & Booking page

#### Page introduction

- Use a warm illustration of a friendly support coordinator with a calendar/scheduling interface.
- Headline: **“Seamless Booking. Professional Memories.”**
- Supporting copy: **“Select your event, pick your package, and let our management team handle the coordination.”**

#### Direct support details

Show the following once verified:

- Customer support / WhatsApp: **+91 [Phone Placeholder]**
- Email: **hello@[domainplaceholder].com**
- Headquarters/service area: **[City/Location Placeholder]**
- Support hours: **Monday–Sunday, 9:00 AM–8:00 PM** (timezone to be confirmed)

Do not publish unresolved placeholder values. Use tap-to-call, `mailto:`, and WhatsApp links where configured.

#### Booking request form

Fields:

1. Full name — required, text.
2. Phone / WhatsApp number — required, text with suitable phone input hints and validation.
3. Email address — required, email validation.
4. Event type — required dropdown:
   - First Birthday
   - Children’s Birthday
   - Baby Shower
   - Naming Ceremony
   - Griha Pravesh
   - Anniversary
   - Family Gathering
   - Community Event
   - Corporate
   - Other
5. Event date and time — required date/time input; reject dates that are clearly in the past.
6. Venue name and location — required text.
7. Estimated guest count — dropdown: 10–50, 50–100, 100+.
8. Package — required dropdown mapped to the four current package names, plus **“Not sure — please recommend”** so visitors who need help can still submit a request.
9. Share your vision — optional multiline text for creative details and preferences.
10. Social-content preferences — optional multi-select: edited photo gallery, vertical short/reel, YouTube-length highlight, Story-friendly edits, and social post/carousel. Explain that preferences are requests, not package inclusions; confirm availability and price in the selected package or follow-up.
11. Privacy notice/consent — link to the Privacy Policy and obtain consent where required before submitting.

Submit action: **“Submit Booking Request”**.

Form behavior:

- Associate visible labels with every control; do not rely on placeholder text as a label.
- Provide short, helpful field guidance where useful (for example, “Let us know the best number to reach you!”).
- Validate required fields and formats inline, with accessible error text and focus management.
- Preserve valid entered values if submission fails.
- On success, clearly confirm that the request was received, state the expected response time if known, and offer a WhatsApp follow-up.
- On failure, explain that delivery failed and give an alternative contact route; never show a false success state.
- Clearly explain before submission that this is a booking request, not a confirmed reservation. State how the team will check availability and what action (if any) is required to secure the date, using the confirmed business process.
- Do not collect payment through this form unless a secure payment provider and payment flow are separately specified.
- Define the submission destination (booking platform, backend, or approved form service), notification recipients, spam prevention, retention, and access controls before implementation. A static front end alone cannot securely process and store submissions.

### 6.4 Gallery page

- Build the page now with deliberately designed, clearly labeled placeholders for photo galleries, vertical short-video previews, YouTube-length highlights, and Story/social-post examples. The owner will create or replace these assets later using Google Nano Banana and any suitable tools for video; do not generate or source final visuals in this work.
- Give each placeholder an asset name, intended subject/content, target format/aspect ratio, and crop/safe-area note so it can be replaced without redesigning the page.
- Organize the eventual portfolio by occasion and media format (photo, vertical short, longer video, social post) when there is enough approved content.
- Plan for concise event context and a link to a relevant package or booking action when real portfolio stories are added.
- Make it visually obvious that placeholders are illustrative and are not real Snehavisuals client work, testimonials, or finished deliverables.
- Design video cards for muted preview/poster and user-initiated playback; never autoplay sound.
- Provide meaningful alternative text for informative images and captions/transcripts or equivalent context for video; mark decorative visuals appropriately.
- Do not publish client/event imagery or identifiable social content without the required permissions, including appropriate parent/guardian permission for identifiable minors. Keep consent for event coverage separate from consent to use content in Snehavisuals marketing.

### 6.5 Social-first content presentation

- Make social outputs easy to understand and compare alongside edited photo galleries and cinematic video.
- Use stable, platform-neutral format labels such as **Vertical short video**, **YouTube highlight film**, **Story sequence**, and **Social photo post/carousel**. Mention Reels, Shorts, Stories, or YouTube as examples where relevant, without relying on current platform UI.
- Show duration, orientation/aspect ratio, resolution, caption/subtitle availability, and number of revisions only when the deliverable specification is confirmed.
- Keep event memory storytelling—not chasing a short-lived trend—as the enduring brand promise. The content model and layout should be easy to update as audience habits and platforms change.
- Do not embed external social feeds or require visitors to have a social account to see core package information. External embeds must be optional, consent-aware, accessible, and performance-tested.

### 6.6 FAQs

- Provide concise, approved answers to common booking questions.
- Link policy-specific details to the Terms of Service or Privacy Policy.
- Do not publish unconfirmed response-time, availability, payment, delivery, or cancellation promises.

### 6.7 Floating WhatsApp action

- Provide a persistent WhatsApp button linked to the verified central support number.
- Use a descriptive accessible name and visible focus state.
- Ensure it does not cover form controls, important CTAs, consent notices, or mobile browser UI.
- Open the appropriate WhatsApp chat URL, optionally with a prefilled neutral enquiry message.
- Hide or disable the action until the number is confirmed.

## 7. Reference review and Phase 2 roadmap

Reference reviewed: [EventGraphia](https://www.eventgraphia.com/) on 7 October 2026. Its public homepage presents an event-photography portfolio prominently and exposes separate Portfolio, Videos, FAQ, and Contact navigation, alongside occasion-led examples and location-oriented photography content. These are useful structural references for discoverability and trust; Snehavisuals should use its own visual identity, writing, photography, and interaction design. Do not copy EventGraphia's text, images, layout, or brand assets.

Reference reviewed: [Bangalore Photographers](https://bangalorephotographers.in/) on 7 October 2026. Its homepage emphasizes a clear city/service category, explains the range of photography occasions, and presents local expertise and customization as reasons to enquire. For Snehavisuals, the transferable ideas are clear service-area relevance and explaining how coverage can fit different event needs—not assuming Bangalore is Snehavisuals' location, repeating generic “best photographer” claims, or copying its copy and keyword-heavy phrasing.

Use the reference as inspiration for future discovery and proof-of-work features only. All of the following recommendations are **Phase 2 (post-launch)** and are excluded from the initial release unless explicitly moved forward:

- **Expanded portfolio stories:** add complete event stories and substantial collections beyond the Phase 1 format-preview placeholders; connect examples to relevant packages and include approved captions/context.
- **Dedicated video showcase:** create a separate destination for authentic reels and films, identify included package deliverables versus add-ons, and defer playback loads until requested.
- **About/team story:** explain the coordination and quality-control model with verified claims and approved team biographies/photos.
- **Expanded booking FAQ and policy content:** add detailed answers about availability, travel, overtime, delivery, deposits, cancellations, raw files, and image usage after the business approves its policies.
- **Booking expectation details:** clarify enquiry versus confirmed reservation, response-time targets, date-hold rules, and post-submission steps when the operating process is settled.
- **Detailed package policy disclosure:** add confirmed tax, travel, overtime, delivery-format, payment, cancellation/rescheduling, and revision terms.
- **Lead-source context:** carry selected package and event type into the form from package calls to action.
- **Conversion analytics:** measure package CTA clicks, booking starts/submissions, form errors, contact taps, and WhatsApp clicks after choosing an analytics provider and consent approach.
- **Location-specific discovery pages:** create pages only for confirmed service areas with distinct, useful local details and original content; avoid thin or templated SEO pages.
- **Local service-area relevance:** after the primary service city and travel coverage are confirmed, explain the areas served, travel/venue constraints, and locally relevant event coverage. Add city pages only when they offer original portfolio examples or useful local information; avoid keyword stuffing, unsupported “best” claims, and claims of local presence where there is none.
- **Service customization details:** explain which parts of coverage can be tailored (such as event schedule, family portraits, or add-ons), what remains fixed in each package, and how to request a custom quote. Do not imply unlimited customization or unpriced inclusions.
- **Editorial/resource content:** publish event-photo planning guides only if there is an owner and a sustainable update plan.
- **Additional enquiry options:** consider “I’m not sure yet,” preferred contact method, or alternate date/time fields only if they improve lead handling without making the form cumbersome.

Phase 2 should be prioritized using launch data and operational readiness. Do not add customer accounts, photographer logins, large-scale city directories, or editorial publishing tools without separate approval.

## 8. Design and content direction

- Overall tone: warm, polished, reassuring, family-centered, and direct, with a contemporary 2026 social-content sensibility.
- Design mobile-first and vertical-first for a 2026 audience discovering services through short video and social sharing, while retaining a clear, trustworthy pricing and booking experience.
- Balance visual priority across package prices, booking actions, photo stories, vertical short-video deliverables, and longer YouTube-friendly highlights; social styling must not obscure what each package actually includes.
- Use explicitly labeled asset placeholders for all photography, video, illustrations, testimonials, and social-post examples in the initial build. The owner will create/replace these assets later using Google Nano Banana and any suitable tools for video. Do not use stock imagery or generated visuals as if they are real Snehavisuals client work.
- Use placeholder frames that communicate intended orientation and crop (for example, wide hero, 4:5 social tile, 9:16 vertical short/Story, and 16:9 horizontal YouTube highlight), with safe areas that preserve faces, text, and controls when real assets are inserted. Treat these as content slots, not commitments to deliver each format in every package.
- Make the social presentation trend-aware but durable: prioritize strong opening frames, readable captions, sound-off comprehension, vertical-first previews, shareable photo sequences, and clear format labels. Revisit platform-specific labels and specifications before release; do not hard-code temporary UI trends or claim algorithmic results.
- Keep short-form video muted by default with visitor-initiated playback; provide captions/subtitles for spoken content where feasible and never autoplay audio.
- Ensure text remains readable over any future image through contrast overlays or solid surfaces.
- Keep platform references and visual treatments adaptable; avoid copying social platforms' interface chrome or using stale trend badges as core brand design.
- Use Indian rupee formatting consistently (₹4,999, etc.).
- Keep calls to action descriptive and consistent across pages.

## 9. Non-functional requirements

### Responsive behavior

- Support current mobile, tablet, and desktop browser sizes.
- Prioritize mobile because visitors may arrive from WhatsApp or social platforms.
- Avoid horizontal overflow, clipped content, and controls too small for touch.

### Accessibility

- Target WCAG 2.2 AA.
- Use semantic landmarks and a logical heading hierarchy.
- Support keyboard-only navigation, visible focus, accessible form errors, sufficient contrast, and screen-reader names for controls.
- Respect reduced-motion preferences; do not rely on animation to communicate essential information.

### Performance

- Optimize and responsively serve images; lazy-load below-the-fold media.
- Design for future image and video assets with responsive sources, poster frames, lazy loading, and click-to-play; defer embedded video players and third-party widgets until needed or activated by the visitor.
- Avoid unnecessary third-party scripts and large client-side dependencies.
- Set explicit image dimensions/aspect ratios to limit layout shift.
- Establish measurable Core Web Vitals targets during implementation and validate on representative mobile connections.

### SEO and sharing

- Provide a unique page title and meta description for each public page.
- Use descriptive headings and indexable page content.
- Add canonical URLs, social sharing metadata, and a sitemap/robots configuration appropriate to the static hosting setup.
- Add LocalBusiness/ProfessionalService structured data only after business name, contact details, service area, and other claims are verified.
- Do not publish a city, service area, pricing policy, or business contact as fact until confirmed.

### Privacy and security

- Collect only information needed to respond to booking requests.
- Obtain appropriate permission before publishing identifiable client/event content, with additional care for minors; marketing/portfolio permission must not be assumed from the booking itself.
- Confirm music licensing and platform usage rights before delivering or publishing edits with music.
- Use HTTPS for the site and any form/payment destination.
- Publish a reviewed Privacy Policy and state how enquiries are handled and retained.
- Do not put credentials, customer data, or payment details in static files or client-side code.
- Configure spam protections that do not create inaccessible barriers.

## 10. Scope

### In scope

- Responsive marketing pages and navigation.
- Package and add-on presentation.
- Occasion discovery and portfolio gallery.
- Booking request form and direct support links.
- Social-content preference capture and clear package-level social deliverable presentation.
- Clear booking-request versus confirmed-booking messaging throughout the enquiry flow.
- WhatsApp contact action.
- Basic search/social metadata and accessibility.
- Deployment of the preview website from `beta/` to the `/beta/` path.
- A beta preview in `/beta/` while the existing production root remains a “Coming soon” page.
- A portfolio gallery and concise FAQs, built with clearly labeled visual placeholders until the owner supplies approved creative assets and content.

### Out of scope unless separately approved

- Customer accounts, booking calendar availability, automated photographer assignment, and booking management dashboard.
- Real-time price calculation or custom package builder.
- Online payment processing and refunds.
- Backend CRM integration, transactional email/SMS, or WhatsApp automation.
- Guaranteeing event-date availability before the team confirms it.
- Photography production, editing, printing, and fulfilment systems themselves.
- Phase 2 roadmap features listed in Section 7.
- User accounts, photographer login areas, a blog/CMS, and a broad location-page directory unless separately approved.

## 11. Assumptions and decisions required before launch

The supplied requirements include placeholders and operational promises. Confirm all of the following before replacing placeholders or making claims public:

- Final service positioning: event photography booking only, or the broader branding/photography/video studio described in the current repository README.
- Business display name and approved logo/brand assets.
- Primary city, service area, travel policy, and headquarters address (if it should be public).
- Central WhatsApp/phone number, email address, support timezone, and operating hours.
- Whether all four package prices are current, tax-inclusive, and available in every service area.
- Exact delivery timelines for each package and what happens if timelines are missed.
- Whether photographer vetting, guaranteed dates/times, instant confirmation, secure payment, and in-house editing/QA processes are operationally accurate.
- Booking deposit, balance schedule, cancellation, rescheduling, overtime, travel, and refund policies.
- Add-on prices or quote process; restrictions for drone coverage.
- Form-processing destination, data recipients, retention period, spam controls, and privacy/legal copy.
- Which visual assets the owner will create later with Google Nano Banana and which suitable tool/workflow will be used for video; approved real portfolio images/testimonials, permissions, and use of trust marks if/when they are added.
- Confirmed delivery specifications, music/platform rights, pricing, and package inclusion for vertical shorts, YouTube-length films, Stories, and social feed posts/carousels.
- Whether the “Book in 3 Minutes” promise is tested and supportable.
- Final release process for promoting the approved beta site from `/beta/` to the domain root, while preserving the custom domain.
- Booking response-time target, booking confirmation/deposit process, and exact customer follow-up sequence.
- Whether an analytics provider and cookie/consent behavior are needed at launch; advanced conversion measurement is planned for Phase 2.

## 12. Acceptance criteria

- A first-time visitor can identify the service area, covered occasions, and primary booking action from the home page.
- Each of the four packages displays its price, coverage duration, team, and promised deliverables; Classic is visibly identified as Most Popular.
- The package recommendations and add-on categories are present and clearly distinguish inclusions from extras.
- A social-first content section shows labeled placeholders for the principal photo and video formats and maps formats only to packages/add-ons that actually offer them.
- Home, pricing, and contact/booking pages link to one another through consistent navigation and calls to action.
- The booking form includes all required fields, usable validation, accessible feedback, and a real, documented submission destination before launch.
- Visitors can submit a request without choosing a package by selecting “Not sure — please recommend.”
- The form and its success message clearly distinguish a received enquiry from a confirmed booking; date confirmation and any required securing action match the verified business process.
- A successful submission produces a truthful confirmation; a failed submission produces an actionable error and alternative contact route.
- WhatsApp links use the verified support number and work on supported mobile and desktop browsers.
- No unresolved business/contact/content placeholders, fabricated testimonials, unsupported trust claims, dead links, or empty linked pages remain. Clearly labeled visual placeholders are intentional until owner-created assets are supplied and must never masquerade as real client work.
- Key flows work by keyboard and on narrow mobile screens without content being obscured by floating controls.
- Page metadata and legal/privacy links are present before public release.
- During beta, preview assets and pages are sourced from `beta/` and the preview is reachable at `https://snehavisuals.com/beta/`.
- The beta preview is excluded from search indexing until final release; production indexing directives are reviewed when the site is promoted.
- During beta, `https://snehavisuals.com/` continues to show the existing “Coming soon” landing page.
- Beta assets, navigation, and deep links resolve correctly under `/beta/`, without accidentally pointing to the production root.
- The beta preview does not replace the root site or alter the custom-domain configuration.
- At final release, the approved website is promoted to the domain root, and production routes, assets, HTTPS, and custom-domain behavior are verified.
- Photo, video, illustration, testimonial, and social-post areas use coherent, clearly labeled placeholders until owner-created/approved assets are supplied; placeholders preserve the intended format and do not imply completed client work.
- Social-content preferences are optional, accessible, and clearly distinguished from package inclusions; supported deliverable formats are stated accurately.
- The FAQs contain approved launch-level answers, or the section is intentionally omitted until content is approved.

## 13. Launch checklist

- Confirm all decisions in Section 11.
- Resolve business/contact/content placeholders and approve all service, pricing, and delivery claims; keep visual placeholders in place until the owner supplies final creative assets.
- Verify that all visual placeholders are clearly labeled, correctly sized, and replaceable; the owner will create final visual assets later using Google Nano Banana and suitable tools for video.
- Approve package-level social video specifications, music/platform rights, FAQ answers, and privacy/marketing permissions before publishing corresponding claims or real client media.
- Implement and test booking submission, notification, error handling, and privacy safeguards.
- Review mobile layout, accessibility, broken links, form validation, and WhatsApp actions.
- Configure and test the `/beta/` preview while preserving the root “Coming soon” page and current custom-domain configuration.
- Before final release, promote the approved site to the domain root and verify HTTPS, routes, assets, and custom-domain behavior.
- Confirm that all legal pages are approved and published.