# blog

The public blog of Anatoli Stepenko, built with Astro's blog template.

GitHub Pages publishes it at https://stepenkoanatoli.github.io/blog/. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and deploys it with `actions/deploy-pages`. In the repository settings, Pages must have "GitHub Actions" as its source.

Drafts arrive from the `pull-request-relations` repository. Its draft workflow writes a post under `src/content/blog/` on a `draft/<slug>` branch and opens a pull request here. Read the draft, rewrite what does not sound like you, check every number, then merge. The merge is what publishes.

Posts are Markdown files in `src/content/blog/` with `title`, `description` and `pubDate` in the front matter. A file named `2026-10-20-my-post.md` is served at `/blog/blog/2026-10-20-my-post/`.

## Local work

```
npm install
npm run dev
npm run build
```
