# Paris Book — Character & Style Sheet

Reference for generating new illustrations that match the existing book.  
Based on full review of all assets in `public/assets/desktop/`.

---

## Global art style (canonical prompt)

Use this block for new generations:

```
Minimalist cartoon line art; children's workbook / coloring book style; thin, smooth, clean outlines; consistent line weight; black and white only; no shading; no gradients; no cross-hatching; no textures; no gray tones; no fill areas; plain white background; simple, readable shapes; slightly rounded proportions; friendly and approachable design; clear silhouette; high clarity for printing.

Keep line thickness uniform throughout the entire drawing. Avoid sketch lines or rough strokes. Use smooth vector-like lines. Keep proportions slightly chibi but grounded (not exaggerated). Faces should be simple with dot eyes and minimal nose detail.

All characters must match the same art style: minimalist line art, consistent proportions, same face structure, same eye style, same line thickness. No realism. No shading. No extra detail. Keep expressions simple and readable. Maintain identical character design across all images.
```

| Rule               | Detail                                                         |
| ------------------ | -------------------------------------------------------------- |
| **Medium**         | Minimalist black line art on plain white                       |
| **Shading**        | None — no gray, gradients, hatching, textures, or fills        |
| **Line weight**    | Thin, smooth, uniform, vector-like (not sketchy)               |
| **Look**           | Children's workbook / coloring book                            |
| **Proportions**    | Slightly chibi but grounded — rounded, readable silhouettes    |
| **Faces**          | Simple: dot eyes, minimal nose, simple brows/mouth             |
| **Palette**        | Strictly black + white                                         |
| **Frame**          | Ornate decorative border with hearts — **cover only**          |
| **Interior pages** | No border frame                                                |
| **Wardrobe**       | **Same travel outfits in every scene**                         |
| **Backgrounds**    | Paris landmarks simplified to same line language as characters |

### Image dimensions (required)

Keep the same canvas size as the existing artwork so every page scales consistently in the viewer.

| Asset type                 | Size (px)       | Aspect ratio      | Files                                         |
| -------------------------- | --------------- | ----------------- | --------------------------------------------- |
| **Cover**                  | **1024 × 1024** | 1∶1 square        | `cover.png`                                   |
| **Story / interior pages** | **1024 × 723**  | ~1.42∶1 landscape | All other `*.png` in `public/assets/desktop/` |

**Rules for new images**

- Export at **exactly** these pixel dimensions — do not rely on the viewer to crop or letterbox.
- **Width is always 1024 px** (matches every current file).
- Story pages: **height 723 px**. (`01-le-hibou-2.png` is 1024×735 — treat as a one-off; normalize new art to **723**.)
- Cover: **1024×1024** including the decorative border inside the canvas.
- Format: **PNG**, line art on white (or transparent white background flattened to white).

**Prompt snippet**

```
Canvas 1024x723 pixels, landscape orientation, line art fills the frame edge to edge with no letterboxing.  [or 1024x1024 for cover]
```

### Negative prompt (always avoid)

`color, shading, grayscale, gradient, photorealistic, 3D render, anime, chibi, watercolor, sketchy messy lines, different outfits, different hairstyles, different glasses shapes`

---

## The trio — roles

| Character        | Story role                                            | Visual anchor                                      |
| ---------------- | ----------------------------------------------------- | -------------------------------------------------- |
| **The Narrator** | First-person voice; photographer; observant, warm     | Braid + rectangular glasses + satchel + mouth mole |
| **Procopio**     | Historian; enthusiastic guide; gestures while talking | Bald + beard + rectangular glasses + denim jacket  |
| **Hugo**         | Calm, quiet observer; dry, gentle presence            | Spiky hair + **d20 T-shirt** (no glasses)          |

Standing order **varies by scene** — identity matters, not fixed left/center/right slots.

---

## The Narrator

**Who she is in the story:** The person telling the book; takes photos; notices small details; careful with framing.

### Head & face

- Young adult woman
- **Hair:** Long, center part, **one thick braid** hanging over her **left shoulder**
- **Glasses:** **Thick black rectangular frames**, slightly rounded corners; wider than tall; sits high on the bridge
- **Beauty mark (required):** Small mole at the **left corner of the mouth** — just **below the lower lip**, at the mouth corner, **above the chin** (not on the cheek)
- **Expression:** Soft, gentle smile; focused/neutral when eating or photographing

### Outfit (fixed)

- Plain **short-sleeve crew-neck T-shirt**, tucked in
- **High-wisted belted trousers** with a visible **side cargo pocket** on the leg
- **Crossbody satchel:** rectangular flap, buckle, strap from **right shoulder** to **left hip**
- **Chunky lace-up hiking boots**

### Body & pose

- Slightly **shorter** than both men (about shoulder/ear level on them)
- Often holds a **smartphone** horizontally when taking a photo (see Le Procope)
- Calm standing posture; may touch bag strap while walking

### Glasses — image audit

| File                            | Glasses shape                                              | Mole visible?           |
| ------------------------------- | ---------------------------------------------------------- | ----------------------- |
| `cover.png`                     | Rectangular, thick, rounded corners                        | Subtle                  |
| `01-le-hibou-1.png`             | Rectangular, thick                                         | Yes — left mouth corner |
| `01-le-hibou-2.png`             | Rectangular, thick (similar to Procopio)                   | Yes — left mouth corner |
| `02-le-procope.png`             | Round, thick (profile view; **existing art — keep as-is**) | N/A in profile          |
| `03-fontaine-saint-sulpice.png` | Rectangular, thick                                         | Yes — left mouth corner |
| `01-le-hibou.png` (unused alt)  | Rounded-rectangular                                        | Yes — left mouth corner |

**For all new illustrations:** use **rectangular thick frames** + **mouth-corner mole** unless you are deliberately matching the existing Le Procope profile shot.

---

## Procopio

**Who he is in the story:** The group’s historian; lit up by monuments; talks with a professorial, passionate tone.

### Head & face

- Adult / middle-aged man
- **Bald on top**, short hair on sides and back
- **Full beard and mustache**, neatly trimmed
- **Glasses:** **Thick black rectangular frames** — similar family to the Narrator’s but often **slightly larger and squarer**
- **Expression:** Wide open smile, eyes sometimes squinted shut when very happy; talks with hands

### Outfit (fixed)

- Plain T-shirt under an **open denim jacket** (visible stitching, **two buttoned chest pockets**)
- Straight trousers / jeans, **cuffs rolled once**
- **Sturdy lace-up boots**

### Accessories

- **Backpack** on the ground or hanging on chair — simple design with a **diamond-shaped lash tab / patch**

### Body & pose

- Similar height to Hugo, taller than the Narrator
- Hands in jacket or trouser pockets when standing still
- **Gesturing** (pointing up, open hand) when explaining history

---

## Hugo

**Who he is in the story:** The calm one; short lines; steady presence in the group.

### Head & face

- Young adult man
- **Short textured hair** — soft short layers on top, neat and slightly tousled
  - **Not** tall anime spikes / mohawk (older pages vary; use this softer cut going forward)
- **Light, subtle short beard**
- **No glasses**
- Friendly expression; simple eyes and brows

### Outfit (fixed — signature)

- **T-shirt with a D20 dice symbol centered on the chest** (number **20** visible)
- Casual pants (cuffs optional)
- **Sneakers**

### Body & pose

- Similar height to Procopio
- Relaxed: **one hand in pocket**, or arms crossed
- Warm half-smile; listens more than he gestures

---

## Group lineup reference (existing art)

| Scene             | Left              | Center   | Right                    |
| ----------------- | ----------------- | -------- | ------------------------ |
| Cover             | Procopio          | Narrator | Hugo                     |
| Le Hibou (street) | Hugo              | Procopio | Narrator                 |
| Le Hibou (table)  | Procopio          | Narrator | Hugo                     |
| Le Procope        | Procopio (posing) | —        | Narrator (photographing) |
| Saint-Sulpice     | Procopio          | Hugo     | Narrator                 |

---

## Paris environment cues

- Haussmann-style buildings: mansard roofs, dormers, wrought-iron balconies
- Cobblestone streets and paved squares
- Classic lampposts, café awnings, outdoor bistro seating
- Landmark accuracy when the story names a place (Eiffel Tower, Le Procope façade, Saint-Sulpice fountain with four bishop statues under a dome, etc.)
- Background figures drawn lighter/simpler than the trio

---

## Master prompt block (copy-paste)

```
Black and white line art illustration, coloring-book style, clean uniform black outlines on pure white background, no shading, no gray, no color, friendly travel-journal cartoon proportions, simple dot eyes and expressive mouths, detailed Paris background with simplified background people. Canvas exactly 1024x723 pixels landscape (1024x1024 square for cover only).

Three recurring characters, same outfits every time:

1) NARRATOR — young woman, long center-part hair in one thick braid over left shoulder, thick black rectangular glasses with slightly rounded corners, small beauty mark below left corner of mouth above chin (NOT on cheek), plain tucked crew-neck tee, belted high-waisted cargo trousers with side pocket, crossbody satchel with rectangular flap and buckle (right shoulder to left hip), chunky lace-up hiking boots, gentle smile, slightly shorter than the men.

2) PROCOPIO — middle-aged man, bald on top with side hair, full trimmed beard, thick black rectangular glasses (slightly larger than narrator's), open denim jacket with two buttoned chest pockets over plain tee, cuffed trousers, lace-up boots, optional backpack with diamond patch, expressive historian gestures and wide smile.

3) HUGO — young man, short textured soft hair (not extreme spikes), light subtle beard, no glasses, t-shirt with D20 dice graphic showing number 20, casual pants, sneakers, calm pose one hand in pocket.

[SCENE DESCRIPTION HERE]
```

---

## Per-character quick prompts

**Narrator only:**

```
Young woman, thick braid over left shoulder, thick rectangular black glasses, small mole below left mouth corner above chin, crossbody satchel, cargo pants, hiking boots, black and white line art, no shading
```

**Procopio only:**

```
Bald man with full beard, thick rectangular glasses, open denim jacket two chest pockets, cuffed jeans, lace-up boots, gesturing happily, black and white line art, no shading
```

**Hugo only:**

```
Young man spiky hair short beard, d20 twenty-sided die t-shirt number 20 visible, cuffed pants lace-up boots, relaxed pose, black and white line art, no shading
```

---

## Scene checklist before approving new art

- [ ] **Dimensions:** cover **1024×1024**, story pages **1024×723** (width always 1024)
- [ ] Pure B&W line art, no accidental shading or color
- [ ] All three (if present) match wardrobe anchors — especially Hugo’s **d20 shirt**
- [ ] Narrator: braid left shoulder, **rectangular glasses**, **mouth mole** (not cheek)
- [ ] Procopio: bald, beard, denim jacket, rectangular glasses
- [ ] Hugo: no glasses, d20 visible
- [ ] Same boots/jackets/pants as reference sheets — no outfit drift
- [ ] Interior page → no decorative cover border
- [ ] Line weight and face simplification match existing pages

---

## Source files reviewed

| File                            | Used in app | Size (px)   | Notes                                                  |
| ------------------------------- | ----------- | ----------- | ------------------------------------------------------ |
| `cover.png`                     | Yes         | 1024 × 1024 | Decorative border; Eiffel Tower backdrop               |
| `01-le-hibou-1.png`             | Yes         | 1024 × 723  | LE HIBOU awning, festoon lights                        |
| `01-le-hibou-2.png`             | Yes         | 1024 × 735  | Square crepes — height 735 (slightly off spec)         |
| `02-le-procope.png`             | Yes         | 1024 × 723  | Cobblestones, Le Procope signage; narrator in profile  |
| `03-fontaine-saint-sulpice.png` | Yes         | 1024 × 723  | Fountain with four robed statues                       |
| `01-le-hibou.png`               | No (spare)  | 1024 × 723  | Alternate café table scene — useful as extra reference |
