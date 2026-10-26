# Jake Baskin’s website

A small static Astro website at https://www.jakebaskin.com. Content uses standard Markdown, with CSS and system fonts. No database, CMS, remote fonts, or browser JavaScript is required.

## Write and publish

1. Create `src/content/writing/your-title.md` in Obsidian or any text editor.
2. Add the metadata below and write the body in standard Markdown.
3. Preview locally if desired, then set `draft: false`.
4. Commit and push to `master`, or open and merge a pull request. GitHub Actions builds and publishes the site automatically.

```markdown
---
title: "Your title"
description: "A short introduction."
date: 2026-10-26
draft: true
---

Your writing here.
```

The filename becomes `/writing/your-title/`. Keep it stable once published. Use ISO dates, a unique filename, and a title. Drafts are excluded from public pages and the RSS feed. Published writing appears automatically on the homepage, Writing page, and RSS feed at `/feed.xml`.

Use standard Markdown links instead of Obsidian wikilinks. Put images in `public/images/` and reference them as `![Description](/images/filename.jpg)`. Keep private notes and Obsidian settings outside this repository: the source repository is public, including draft files.

## Local preview

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the address printed by Astro. `npm run build` generates the static site in `dist/`.

## One-time GitHub Pages setup

In repository Settings → Pages, set the build source to **GitHub Actions** before merging the migration. Preserve the existing custom domain **www.jakebaskin.com** and HTTPS setting. The workflow checks pull requests without deploying them and publishes pushes to `master`. You can also run it manually from the Actions tab on `master`.

The original root `CNAME` is preserved, and `public/CNAME` places the same domain in the generated output. The public URL in `astro.config.mjs` controls absolute RSS links. This migration does not require changing DNS or transferring the domain.

If the previous version is needed, revert the migration commit and restore the previous Pages build source in Settings → Pages.

## Editing the site

- Homepage: `src/pages/index.astro`
- Bio and portrait: `src/pages/about.astro`
- Shared layout and typography: `src/layouts/Base.astro`
- Published articles: `src/content/writing/*.md`
- Article metadata validation: `src/content.config.ts`

The example post is an unpublished template. There are no fabricated essays or talks.

## Portrait source

The portrait on the About page comes from Jake’s public CSTA profile, https://csteachers.org/team/jake-baskin-3/. The original image is https://csteachers.org/wp-content/uploads/2023/03/jake-baskin.png and is stored locally in `public/images/jake-baskin.png`.
