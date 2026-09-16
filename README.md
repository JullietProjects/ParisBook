# Paris Book

An online viewer for an illustration book. Each page shows an artwork on top
that fades into a black band where the caption text is displayed.

Live: [jullietprojects.github.io/ParisBook](https://jullietprojects.github.io/ParisBook/)

## Develop

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Adding pages

1. Drop artwork into `public/assets/` (PNG or JPG, portrait-oriented).
2. Add an entry to `src/pages.js`:

   ```js
   { image: "/assets/01.png", text: "…" }
   ```

The order of the array is the page order. Use Previous / Next or the
left/right arrow keys to navigate.
