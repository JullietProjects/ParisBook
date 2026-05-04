import "./style.css";
import { pages } from "./pages.js";

const PAGE_INDEX_KEY = "ParisBook:pageIndex";

const app = document.getElementById("app");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Paragraphs separated by blank lines; inline **bold** and *italic* */
function formatStoryHtml(text) {
  return text
    .trim()
    .split(/\n\n+/)
    .map((para) => {
      const escaped = escapeHtml(para);
      const withBold = escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      const withEm = withBold.replace(/\*(.+?)\*/g, "<em>$1</em>");
      return `<p>${withEm}</p>`;
    })
    .join("");
}

if (!pages.length) {
  app.innerHTML = `
    <div class="page page--story">
      <div class="page__caption page__caption--empty"><p>No pages yet. Add some in <code>src/pages.js</code>.</p></div>
    </div>
  `;
} else {
  app.innerHTML = `
    <article class="page" aria-live="polite">
      <header class="page__header">
        <h1 class="page__header-text"></h1>
      </header>
      <div class="page__media">
        <img class="page__image" alt="" />
      </div>
      <div class="page__soft-break" aria-hidden="true"></div>
      <div class="page__caption"></div>
    </article>
    <nav class="nav" aria-label="Navegação">
      <button class="nav__button" data-action="prev" type="button">Anterior</button>
      <span class="nav__counter" aria-live="polite"></span>
      <button class="nav__button" data-action="next" type="button">Próximo</button>
    </nav>
  `;

  const pageEl = app.querySelector(".page");
  const headerEl = app.querySelector(".page__header");
  const headerTextEl = app.querySelector(".page__header-text");
  const softBreakEl = app.querySelector(".page__soft-break");
  const imgEl = app.querySelector(".page__image");
  const captionEl = app.querySelector(".page__caption");
  const counterEl = app.querySelector(".nav__counter");
  const prevBtn = app.querySelector('[data-action="prev"]');
  const nextBtn = app.querySelector('[data-action="next"]');

  function readSavedPageIndex() {
    try {
      const raw = localStorage.getItem(PAGE_INDEX_KEY);
      if (raw === null) return 0;
      const n = Number.parseInt(raw, 10);
      if (!Number.isFinite(n)) return 0;
      return Math.min(Math.max(n, 0), pages.length - 1);
    } catch {
      return 0;
    }
  }

  function persistPageIndex() {
    try {
      localStorage.setItem(PAGE_INDEX_KEY, String(index));
    } catch {
      /* ignore quota / private mode */
    }
  }

  let index = readSavedPageIndex();

  /** Walk backward to the latest explicit `chapterTitle` on story pages (same scenario). */
  function resolveChapterTitle(storyIndex) {
    for (let i = storyIndex; i >= 0; i--) {
      const p = pages[i];
      if (p.cover) break;
      const t = p.chapterTitle?.trim();
      if (t) return t;
    }
    return "";
  }

  const render = () => {
    const page = pages[index];
    const isCover = !!page.cover;

    pageEl.classList.toggle("page--cover", isCover);
    pageEl.classList.toggle("page--story", !isCover);

    imgEl.classList.add("is-loading");
    imgEl.onload = () => imgEl.classList.remove("is-loading");
    imgEl.src = page.image;
    imgEl.alt = page.alt ?? "";

    if (isCover) {
      headerEl.hidden = true;

      softBreakEl.hidden = true;
      captionEl.innerHTML = "";
      captionEl.hidden = true;
      captionEl.removeAttribute("aria-label");
    } else {
      headerEl.hidden = false;

      headerTextEl.textContent = resolveChapterTitle(index);

      softBreakEl.hidden = false;
      captionEl.hidden = false;
      captionEl.innerHTML = formatStoryHtml(page.text ?? "");
      captionEl.setAttribute("aria-label", "Texto da página");
    }

    counterEl.textContent = `${index + 1} / ${pages.length}`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;

    persistPageIndex();
  };

  const go = (delta) => {
    const next = Math.min(Math.max(index + delta, 0), pages.length - 1);
    if (next === index) return;
    index = next;
    render();
  };

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") go(-1);
    else if (event.key === "ArrowRight") go(1);
  });

  render();
}
