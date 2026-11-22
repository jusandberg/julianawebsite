# Improvement plan

Based on a review of the repo as of the Nov 13, 2026 commit (gradient accents merge).
Tick items off as they're done.

## 1. Fix what's broken or unfinished
- [x] **Rebuild `course-emotional-intelligence.html`.** It's 390 KB, its page title is literally "Bundled Page",
      and it has no `lang` attribute, so it was exported from another tool. Rebuild it in the same frame as
      `course-radical-candor.html` and `course-eq-leaders.html`, with interactive activities in place of the
      videos, as an intro to the EQ wheel. Give it a real title and meta description.
- [x] **Clean up course sample backgrounds.** `course-radical-candor.html` and `course-eq-leaders.html` still carry
      a dark "night" theme and an off-white `#F7F8FA` layer underneath the final white override. Confirm they
      always open on plain white, then remove the leftover dark and grey background rules.
- [x] **Decide on the orphan pages.** `course-eq-leaders.html`, `course-sam.html` and `course-assessments.html`
      aren't linked from `index.html`. Either add them to the work samples or remove them (ask Juliana first).
      Decided: EQ for New Managers is removed from the site. SAM and Assessments get rebuilt first (below).
- [x] **Rebuild `course-sam.html`.** Rebuild it in the shared course frame (like the EI course) with a real title
      and meta description, then add it to the work samples.
- [x] **Rebuild `course-assessments.html`.** Same as SAM: shared course frame, real title and meta description,
      then add it to the work samples.
- [x] **Check the tools links.** `page-nav.js` sends tool pages back to `index.html#resources`, but there is no
      `#resources` section; `index.html` quietly remaps it to `#coaching`. Point it at the real section, and
      confirm the tools are still reachable from the site now that Coaching points to theumethod.ca.
      If the tools now live on theumethod.ca, decide whether they stay here at all.
      Decided: the tools live on theumethod.ca. The `tool-*.html` pages here now forward there, `page-nav.js`
      and the unused tool code in `index.html` are removed.

## 2. Consistency
- [ ] Make every page's `<title>` follow one pattern, e.g. `Page name · Juliana Dos Santos`
      (tool pages currently end in "· Coaching", one uses a comma).
- [ ] Add a `<meta name="description">` and Open Graph tags (title, description, image) to every course and tool page.
      Only `index.html` and two course pages have them today.
- [ ] Confirm all pages use the navy/teal palette and Inter. Some tools still fall back to system fonts.
- [ ] Make sure the resume PDF, logo and favicon match the navy/teal palette.

## 3. Speed
- [ ] `index.html` is 177 KB of inline CSS/JS. Fine for now, but check it on a slow phone connection.
- [ ] The two course samples embed images as base64. Move them to `.webp` files next to the page if they're large.
- [ ] Add `width`/`height` to the logo image to stop layout shift.

## 4. Accessibility
- [ ] Run a Lighthouse accessibility pass on `index.html` and each course page; fix contrast, focus states and labels.
- [ ] Every interactive activity in the course samples should work with keyboard only.
- [ ] Respect `prefers-reduced-motion` for animations.

## 5. Visibility
- [ ] Add `sitemap.xml` and `robots.txt`.
- [ ] Add Cloudflare Web Analytics (privacy-friendly, one script tag, no cookie banner needed).
- [ ] Add a custom `404.html` in the site's style that links home.

## 6. Content (Juliana's call)
- [ ] Review the hero and About copy for plain, natural wording.
- [ ] Make sure job title wording matches what she uses in applications.
- [ ] Each work sample card: one line on the problem, one on what she built, one on the result.
