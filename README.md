# Kazi Naeem Hossain: Portfolio

A static, no-build portfolio (HTML, CSS, vanilla JS).

## Folder structure
```
portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Preview locally
Double-click `index.html`. (Optional: in the folder run `python3 -m http.server` and open http://localhost:8000.)

## Upload to GitHub
1. Sign in at github.com, click **New repository**, name it (e.g. `portfolio`), keep it Public, click **Create**.
2. Click **uploading an existing file**, drag in the 4 files (not the folder itself), then **Commit changes**.

## Deploy on Netlify
1. Sign up at netlify.com with GitHub.
2. **Add new site → Import an existing project → GitHub**, pick your repository.
3. Leave **Build command** empty and set **Publish directory** to `/` (or leave blank). Click **Deploy**.

## Update the site
Edit a file on GitHub (pencil icon) or upload a new version, then **Commit**. Netlify redeploys automatically in about a minute.

## Add your LinkedIn and GitHub
Open `script.js`, find the `LINKS` block at the top, and replace `YOUR-LINKEDIN-USERNAME` and `YOUR-GITHUB-USERNAME` with your real URLs. Until you do, those two buttons stay greyed out.

## Customize
- **Colors:** edit the variables under `:root` at the top of `style.css` (`--cyan`, `--violet`, `--bg`).
- **Text:** edit the wording in `index.html`.
- **Skills:** copy one `<div class="card reveal">…</div>` inside the skills grid and change the icon, title, and sentence.
- **Projects:** when you finish a practice project, change its badge text from "Practice Concept" and add a real link in the "Completed work" box. Never add links or results that aren't real.

## Contact form
No form is included. A form needs a backend or a service such as Netlify Forms; the email and phone buttons work without one.
