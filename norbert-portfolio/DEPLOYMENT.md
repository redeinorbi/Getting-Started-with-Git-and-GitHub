# Deployment notes

The project is a React + Vite single-page application. With Node.js and npm installed:

```bash
cd norbert-portfolio
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

Upload the generated `dist/` folder to a static host such as Netlify or Vercel. If deploying to GitHub Pages under a repository subpath, configure the Vite `base` option accordingly.

The source archive linked in this conversation contains the CV PDF. This repo snapshot has the text/source files, while the binary PDF is available in that archive.
