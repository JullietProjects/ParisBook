# Paris Book — Writing Guide

How to write new pages for this project.  
**Format:** illustration book (picture + short caption), not a text-heavy travel memoir.

Related docs: [`character-sheet.md`](character-sheet.md) (visual consistency), [`post-book-todos.md`](post-book-todos.md) (polish after the book is done).

---

## Core principle

> **If you want more story, add more pages with more images — not longer paragraphs.**

Each page = **one moment** (one place, one beat, one image). The illustration carries emotion and place; the text adds voice and context.

The cover tagline sets the tone: *Momentos que não cabem em uma página.*

---

## What one page should do

| Do | Don’t |
|----|--------|
| One scene, one idea | Summarize a whole day in one page |
| 2 short paragraphs (see budget below) | Long blocks that need scrolling on mobile |
| Let the image show who / where | Repeat what the drawing already shows |
| One character beat (Procopio fact, Hugo line, photo joke) | Everyone talking at once |
| Bold the **place name** that matches the chapter title | Bold every proper noun |

**Quick test:** Could someone get the gist from the image alone? If not, fix the image or add a page — don’t double the text.

---

## Length budget (mobile)

Story pages are read on phones with a **fixed image + title + small text band**. Aim for **no scroll** on a typical phone.

| Target | Guideline |
|--------|-----------|
| **Paragraphs** | **2** per page (3 only if very short lines) |
| **Characters** | ~**250–350** per page (plain text, no markdown) |
| **Lines** | ~**6–10** total on narrow phones |

Separate paragraphs with a **blank line** in `pages.js` (renders as `<p>` tags).

If a scene needs more words → split into **2 pages** with **2 images** (e.g. exterior + interior, arrival + meal).

---

## Voice & language

- **Narrator:** first person (*eu*), warm, observant, sometimes wry.
- **Language:** Portuguese (pt-BR) for story text.
- **Tone:** travel memory, not guidebook. Sensory details in one phrase, not lists.
- **Dialogue:** short, with em dashes. One exchange per page is enough.

```text
— Café mais antigo de Paris — explicou, sem respirar. — Voltaire, Franklin…
```

---

## The three characters (text roles)

Use [`character-sheet.md`](character-sheet.md) for how they look; use this for **what they do in prose**:

| Character | Text role | Typical beat |
|-----------|-----------|----------------|
| **Narrator** | Voice of the book; notices details; takes photos | Framing a shot, a quiet observation |
| **Procopio** | Historian; enthusiastic facts | One concrete detail (name, date, who was here) |
| **Hugo** | Calm counterpoint | One short line, often about pace or mood |

**Not every character needs a line every page.** One strong beat is enough.

---

## Chapter titles (`chapterTitle`)

- Set `chapterTitle` on the **first page** of a new place or beat.
- Later pages in the same place **omit** `chapterTitle` — the header keeps showing until the next title.
- Title should match what readers see: **Le Hibou**, **Fontaine Saint-Sulpice**, **Eglise de Saint Germain des Pres**, etc.

**Bold in text:** use `**Place Name**` the first time that page’s main location is named in the body (matches the chapter title pattern).

**Italics:** use `*Place Name*` when referring to a **previous** chapter’s location in passing (e.g. *Le Hibou*, *Le Procope*).

---

## Page types in the book

### Cover
- `cover: true`, no story `text`.
- `coverTitle` + `coverTagline` only.

### Map / transition (e.g. Amsterdã → Paris)
- Sets geography or time in motion.
- Still **2 paragraphs**, same length budget.
- Image can be a simplified map, not the trio.

### Story page (standard)
- `image`, `alt`, `text`.
- Optional `chapterTitle` when starting a new named scene.

### Multi-page same chapter (e.g. Le Hibou × 2)
- **Page 1:** arrival / context (`chapterTitle` + **bold** place name).
- **Page 2:** what happened there (no new `chapterTitle`).
- Each page has its **own image** and its **own 2 paragraphs**.

### New day
- Open with a clear time shift in paragraph 1, e.g. *No dia seguinte…*
- Don’t rely on the reader remembering the calendar — one line is enough.

---

## Paragraph recipes

### Two-paragraph template (most pages)

1. **Paragraph 1 — Where / what:** arrive, context, or sensory setup. Bold the place if it’s the chapter subject.
2. **Paragraph 2 — Beat:** dialogue, Procopio fact, photo moment, Hugo line, or emotional landing.

### Examples from current pages

**Amsterdã → Paris** (map, 2 ¶):
- ¶1: Europe / Amsterdam
- ¶2: travel + reunion in Paris

**Le Procope** (character trio, 2 ¶):
- ¶1: walk from *Le Hibou* → **Le Procope**
- ¶2: Procopio’s facts + photo joke + click

**Fontaine Saint-Sulpice** (pause, 2 ¶):
- ¶1: arrive + Procopio (Quatro Oradores)
- ¶2: Hugo’s line + hotel without urgency

**Eglise…** (new day, 2 ¶):
- ¶1: *No dia seguinte…*
- ¶2: church + photos + Procopio + “first chapter of the new day”

---

## Transitions between pages

- **Same walk / same day:** light bridge (“Seguimos sem mapa…”, “Saímos do *Le Procope*…”).
- **New day:** explicit (“No dia seguinte…”).
- **Don’t** re-explain the whole previous page — one phrase max.

If the transition feels abrupt, add a **new illustration page**, not a longer caption.

---

## Formatting in `src/pages.js`

```js
{
  chapterTitle: "Le Procope",
  image: "/assets/02-le-procope.png",
  alt: "Ilustração em traço: …",
  text: `First paragraph here.

Second paragraph here.`,
}
```

| Syntax | Use |
|--------|-----|
| `**text**` | Bold — main place name for this page’s title |
| `*text*` | Italic — earlier places, emphasis |
| Blank line | New paragraph |

**Spelling:** compound words stay connected (e.g. **boas-vindas**, not `boas- vindas`).

---

## `alt` text

One sentence in Portuguese: style + who + where.  
Helps accessibility and future you remember what the file is.

Example: `Ilustração em traço: três amigos em frente ao Restaurante Le Hibou, com mesas ao ar livre e letreiro no toldo`

---

## Checklist before adding a page

- [ ] One moment, one image, **2 paragraphs** (~250–350 characters)
- [ ] Place name in **bold** if it matches `chapterTitle`
- [ ] At least one of: sensory detail, Procopio fact, narrator photo beat, Hugo line (if it fits)
- [ ] Image at **1024×723** (story) or **1024×1024** (cover) — see `character-sheet.md`
- [ ] Characters match art sheet; new art uses same line style
- [ ] Read on phone: no scroll if possible
- [ ] `alt` filled in
- [ ] Entry appended to `pages` array in **reading order**

---

## When in doubt

| Question | Answer |
|----------|--------|
| Too much to say? | Add a page + illustration |
| Too dry? | One sensory phrase or one dialogue line |
| Too long? | Cut adjectives, merge sentences, move facts to Procopio in one clause |
| Same place, two moments? | Two pages (like Le Hibou street + table) |
| History lesson growing? | One fact + “…” or em dash list — or split to a second page inside the church |

---

## File workflow

1. Write draft text (this guide).
2. Create or generate image → `public/assets/`.
3. Add entry to [`src/pages.js`](../src/pages.js).
4. Check on mobile (`npm run dev`, same Wi‑Fi URL).
5. Trim until it fits without scroll.
