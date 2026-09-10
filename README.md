# Yiyun He — Personal Academic Website

This is a simple, dependency-free academic homepage designed for GitHub Pages. Its content and structure follow the previous Google Sites page.

## Edit the site

- Main content: `index.html`
- Visual design: `styles.css`
- Profile photograph: `assets/yiyun-he.jpg`

## Preview locally

Run a simple static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site whenever the `main` branch changes. In the GitHub repository settings, choose **GitHub Actions** as the Pages source if it is not selected automatically.

The live personal homepage is available at <https://kasanhyy.github.io/>.
