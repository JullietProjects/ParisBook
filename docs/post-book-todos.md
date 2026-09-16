# Post-book TODOs

Things to do after the book content is finished (story + illustrations).

## Consistency / art polish

- [x] **Cover — heights:** Regenerated with Julia, Procopio, and Hugo at the **same height**. Applied to `public/assets/cover.png`.
- [x] **Procopio hair (canonical):** Updated character sheet. Short buzz covers the whole head (thinner at crown, denser sides/back); rounded head — never tall oval / empty upper half. See `docs/character-sheet.md` + `docs/references/procopio-character-sheet.png`.
- [x] **Montmartre sunset** — regenerated sharper at **1024×723** (`10-montmartre-sunset.png`); removed unused `-v2/-v3/-v4` drafts.
- [x] **Montmartre descent** — art regenerated in book cartoon style + text with Procopio fact + photo beat (`10-montmartre-descent.png`).

## Next pages / draft order

- [x] **Musée d'Orsay** — draft page 4 (`05-musee-dorsay.png`, mapa, Cordier)
- [x] **Jardin du Luxembourg** — draft page 5
- [x] **Paris Seine** — draft page 6
- [x] **Louvre** — draft page 7
- [x] **Restaurants / Bistro** — draft page 8 (`08-bistro-tartare.png`)
- [x] **Notre-Dame** — draft page 9
- [x] **Montmartre** — draft page 10 (`10-montmartre-funicular.png`)
- [x] **Montmartre view** — draft page 11 (`10-montmartre-sunset.png`)
- [x] **Montmartre descent / descida** — draft page 12 (`10-montmartre-descent.png`)
- [x] **Appreciation** — draft page 13 (`11-para-procopio.png`)

## Final review / polish

- [ ] **Review all text** — read every page in `src/pages.js` (voice, length budget, bold/italic, transitions, typos).
- [ ] **Review images** — scan all `public/assets/` story art for style/dimension drift; improve where needed, **especially Procopio’s hair** (match the character sheet + cartoon line weight from early pages).

## Notes

- Story pages through the closing dedication (`Para o Procopio`) are in `src/pages.js`.
- When regenerating art, use early pages (`01-le-hibou-*`, `03-fontaine-*`) for line weight / cartoon proportions, and character refs so designs don’t drift.
- Add new checklist items here as they come up while finishing the book.
