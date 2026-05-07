/* app.js — EDM Gallery Logic */

(function () {
  "use strict";

  /* ── State ─────────────────────────────────────────── */
  let currentTag = "all";

  /* ── DOM refs ───────────────────────────────────────── */
  const grid        = document.getElementById("edm-grid");
  const filterTags  = document.getElementById("filter-tags");
  const countEl     = document.getElementById("edm-count");
  const emptyState  = document.getElementById("empty-state");
  const lightbox    = document.getElementById("lightbox");
  const lbBackdrop  = document.getElementById("lb-backdrop");
  const lbClose     = document.getElementById("lb-close");
  const lbTag       = document.getElementById("lb-tag");
  const lbTitle     = document.getElementById("lb-title");
  const lbDate      = document.getElementById("lb-date");
  const lbDesc      = document.getElementById("lb-desc");
  const lbIframe    = document.getElementById("lb-iframe");
  const lbOpen      = document.getElementById("lb-open");
  document.getElementById("yr").textContent = new Date().getFullYear();

  /* ── Helpers ─────────────────────────────────────────── */
  function formatDate(str) {
    const d = new Date(str);
    if (isNaN(d)) return str;
    return d.toLocaleDateString("zh-TW", { year: "numeric", month: "long", day: "numeric" });
  }

  function getAccent(edm) {
    return edm.color || "#c0392b";
  }

  function gradientFromColor(hex) {
    return `linear-gradient(135deg, ${hex}22 0%, ${hex}55 100%)`;
  }

  /* ── Build filter tags ───────────────────────────────── */
  function buildFilters() {
    const tags = [...new Set(EDM_LIST.map(e => e.tag).filter(Boolean))];
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.className = "tag";
      btn.dataset.tag = tag;
      btn.textContent = tag;
      filterTags.appendChild(btn);
    });

    filterTags.addEventListener("click", e => {
      const btn = e.target.closest(".tag");
      if (!btn) return;
      currentTag = btn.dataset.tag;
      document.querySelectorAll(".tag").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid();
    });
  }

  /* ── Render grid ─────────────────────────────────────── */
  function renderGrid() {
    const filtered = currentTag === "all"
      ? EDM_LIST
      : EDM_LIST.filter(e => e.tag === currentTag);

    countEl.textContent = EDM_LIST.length;
    grid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.style.display = "flex";
      return;
    }
    emptyState.style.display = "none";

    filtered.forEach((edm, i) => {
      const card = document.createElement("article");
      card.className = "edm-card";
      card.style.setProperty("--accent", getAccent(edm));
      card.style.animationDelay = `${i * 60}ms`;

      const coverHTML = edm.cover
        ? `<img class="card-cover-img" src="${edm.cover}" alt="${edm.title}" loading="lazy" />`
        : `<div class="card-cover-gradient" style="background:${gradientFromColor(getAccent(edm))}">
             <span class="card-cover-icon">✉</span>
           </div>`;

      card.innerHTML = `
        <div class="card-cover">${coverHTML}</div>
        <div class="card-body">
          <span class="card-tag">${edm.tag || ""}</span>
          <h3 class="card-title">${edm.title}</h3>
          <p class="card-date">${formatDate(edm.date)}</p>
          <p class="card-desc">${edm.desc || ""}</p>
        </div>
        <div class="card-footer">
          <button class="card-btn" data-id="${edm.id}">預覽 →</button>
        </div>
      `;

      card.querySelector(".card-btn").addEventListener("click", () => openLightbox(edm));
      card.addEventListener("click", e => {
        if (e.target.closest(".card-btn")) return;
        openLightbox(edm);
      });

      grid.appendChild(card);
    });
  }

  /* ── Lightbox ─────────────────────────────────────────── */
  function openLightbox(edm) {
    lbTag.textContent   = edm.tag || "";
    lbTag.style.background = getAccent(edm);
    lbTitle.textContent = edm.title;
    lbDate.textContent  = formatDate(edm.date);
    lbDesc.textContent  = edm.desc || "";
    lbIframe.src        = edm.file || "";
    lbOpen.href         = edm.file || "#";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { lbIframe.src = ""; }, 300);
  }

  lbClose.addEventListener("click", closeLightbox);
  lbBackdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ── Init ─────────────────────────────────────────────── */
  buildFilters();
  renderGrid();
})();
