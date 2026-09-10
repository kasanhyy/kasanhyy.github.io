# Yiyun He — Personal Academic Website

This is a lightweight, dependency-free academic homepage designed for GitHub Pages. It mirrors the information architecture of the previous Google Sites page while improving typography, navigation, responsive behavior, and maintainability.

## Edit the site

- Main content: `index.html`
- Visual design: `styles.css`
- Small interactions: `script.js`
- Profile photograph: `assets/yiyun-he.jpg`
- Social sharing image: `assets/og.png`

## Preview locally

Run a simple static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site whenever the `main` branch changes. In the GitHub repository settings, choose **GitHub Actions** as the Pages source if it is not selected automatically.

For a personal homepage at `https://YOUR-USERNAME.github.io`, name the repository `YOUR-USERNAME.github.io`.
