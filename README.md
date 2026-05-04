# Paris Book

An online viewer for an illustration book. Each page shows an artwork on top
that fades into a black band where the caption text is displayed.

## Develop

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Adding pages

1. Drop the page artwork into `public/pages/` (PNG or JPG, portrait-oriented).
2. Add an entry to `src/pages.js`:

   ```js
   { image: "/pages/01.png", text: "She started to ask the boy all kinds of questions." }
   ```

The order of the array is the page order. Use Previous / Next or the
left/right arrow keys to navigate.
