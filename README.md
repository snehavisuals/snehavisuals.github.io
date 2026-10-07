# Snehavisuals

This repository hosts the static website for Snehavisuals, a visual design studio focused on branding, photography, and video production.

Live website:
- https://snehavisuals.com/
- GitHub Pages fallback: https://snehavisuals.github.io/

## Project structure
- `index.html` — homepage content and structure
- `styles.css` — styling and layout
- `beta/` — in-progress website preview, served at `/beta/` while the root page remains "Coming soon"
- `CNAME` — custom domain configuration for GitHub Pages

## Local preview
Open the production placeholder `index.html` directly in a browser. To preview the beta site at the same path structure it uses on GitHub Pages, run a lightweight server from the repository root:

```bash
python -m http.server 8000
```

Then visit:
- Root placeholder: http://localhost:8000/
- Beta website: http://localhost:8000/beta/

The beta preview is not the production homepage. Until final release, `https://snehavisuals.com/` remains the "Coming soon" page and the preview is available at `https://snehavisuals.com/beta/`.

## Deployment
This site uses the custom domain `snehavisuals.com`. The GitHub Actions workflow at `.github/workflows/pages.yml` publishes the root “Coming soon” page and the beta preview at `/beta/`, while excluding repository documentation and `beta/prd.md` from the published artifact. The root `CNAME` file is included in the artifact.

If GitHub Pages needs to be re-enabled:
1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to Settings > Pages.
4. Set the build and deployment source to "GitHub Actions".
5. Save the configuration and run the "Deploy GitHub Pages" workflow, or push a commit to `main`.
6. Confirm the custom domain is `snehavisuals.com` in Pages settings. The workflow preserves the repository's `CNAME` file in its artifact.

## Tag lines
- Creating Visuals. Crafting Celebrations.
- Your Stories. Our Vision.
- We Bring Your Stories to Life.
- From Visuals to Celebrations.
- Creating Memories. Designing Moments.
- Where Stories Become Experiences.
- We Design. We Capture. We Celebrate.
- Visuals, Events & Moments That Matter.
- Turning Moments Into Memories.
- Your Moments. Beautifully Created.
