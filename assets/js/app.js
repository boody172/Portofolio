/* =========================================================
   Portfolio app: routing, rendering, interactions.
   Content lives in assets/content/*.js, not here
   ========================================================= */
(() => {
  "use strict";

  /* ---------------- Content → data ----------------
     Reads assets/content/*.js and turns each project into the shape
     the renderer uses. File names are resolved against the section's
     media folder, so content files only need "photo.jpg".            */
  const VIDEO_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
  const isVideoRef = (f) => VIDEO_RE.test(f) || /youtu\.?be|vimeo\.com|drive\.google\.com/i.test(f);
  function buildData() {
    const sources = { marketing: window.MARKETING, architecture: window.ARCHITECTURE };
    const worlds = {}, projects = [], seen = new Set();
    for (const [key, W] of Object.entries(sources)) {
      if (!W) continue;
      const dir = `assets/media/${key}/`;
      const R = (f) => (!f ? "" : /^(https?:|\/|assets\/|data:)/.test(f) ? f : dir + f);
      const cats = W.categories || {};
      worlds[key] = { ...W, cover: R(W.cover), coverVideo: R(W.coverVideo), showreel: R(W.showreel), catOrder: Object.keys(cats) };
      (W.projects || []).forEach((p, i) => {
        if (!p || p.hidden) return;
        let id = String(p.id || `${key}-${i + 1}`).trim().replace(/\s+/g, "-");
        if (seen.has(id)) { console.warn(`[portfolio] duplicate id "${id}" in ${key}; renamed`); id = `${id}-${i + 1}`; }
        seen.add(id);
        const items = (p.media || [])
          .map((m) => (typeof m === "string" ? { file: m } : m))
          .filter((m) => m && (m.file || m.src || m.video))
          .map((m) => {
            const f = m.file || m.src || m.video;
            if (m.video || isVideoRef(f)) {
              const local = !/^https?:/.test(f) && VIDEO_RE.test(f);
              return { video: R(f), poster: R(m.poster) || (local ? R(f).replace(VIDEO_RE, ".jpg") : ""), ratio: m.ratio, caption: m.caption };
            }
            return { src: R(f), caption: m.caption };
          });
        if (!items.length) { console.warn(`[portfolio] "${id}" has no media; skipped`); return; }
        if (p.category && !cats[p.category]) console.info(`[portfolio] "${id}": category "${p.category}" isn't in ${key}.categories; shown as typed`);
        const first = items[0];
        projects.push({
          ...p, id, world: key, catKey: p.category || "", category: cats[p.category] || p.category || "",
          type: first.video ? "video" : "image",
          video: first.video, poster: first.poster, ratio: p.ratio || first.ratio, firstCaption: first.caption,
          cover: R(p.cover) || (first.video ? first.poster : first.src),
          gallery: first.video ? items.slice(1) : items,
        });
      });
    }
    return { profile: window.PROFILE || {}, worlds, projects };
  }
  const DATA = buildData();
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------------- i18n ---------------- */
  const DICT = {
    ar: {
      "nav.home": "الرئيسية", "nav.marketing": "التسويق", "nav.architecture": "العمارة",
      "nav.about": "عني", "nav.contact": "تواصل",
      "home.choose": "اختار القسم اللي عايز تشوفه",
      "home.explore": "استكشف الأعمال",
      "home.featuredEyebrow": "مختارات", "home.featured": "أعمال مختارة",
      "about.eyebrow": "مين أنا", "about.title": "نبذة عني", "about.experience": "الخبرة", "about.tools": "الأدوات والبرامج",
      "world.back": "الرئيسية", "world.showreel": "شاهد الشوريل",
      "world.empty": "مفيش أعمال في التصنيف ده لسه.",
      "world.switchTo": "انتقل إلى",
      "tabs.all": "الكل", "tabs.video": "فيديوهات", "tabs.image": "صور",
      "chip.all": "كل التصنيفات",
      "count.video": "فيديو", "count.image": "مشروع صور",
      "card.video": "فيديو", "card.image": "صور",
      "info.client": "العميل", "info.year": "السنة", "info.type": "النوع", "info.tools": "الأدوات",
      "info.prev": "السابق", "info.next": "التالي", "info.link": "شاهد على المنصة",
      "contact.eyebrow": "تواصل", "contact.title": "عندك مشروع أو فرصة شغل؟ كلّمني.",
      "cta.cv": "حمّل السيرة الذاتية", "cta.whatsapp": "كلّمني واتساب", "cta.work": "شوف الأعمال",
      "contact.top": "لأعلى",
      "cursor.play": "تشغيل", "cursor.view": "عرض", "cursor.enter": "ادخل", "cursor.drag": "اسحب", "cursor.mail": "راسلني",
    },
    en: {
      "nav.home": "Home", "nav.marketing": "Marketing", "nav.architecture": "Architecture",
      "nav.about": "About", "nav.contact": "Contact",
      "home.choose": "Pick a section to explore",
      "home.explore": "Explore work",
      "home.featuredEyebrow": "Selected", "home.featured": "Featured Work",
      "about.eyebrow": "Who I am", "about.title": "About me", "about.experience": "Experience", "about.tools": "Tools & software",
      "world.back": "Home", "world.showreel": "Watch showreel",
      "world.empty": "No work in this category yet.",
      "world.switchTo": "Switch to",
      "tabs.all": "All", "tabs.video": "Videos", "tabs.image": "Photos",
      "chip.all": "All categories",
      "count.video": "Videos", "count.image": "Photo projects", "count.video1": "Video", "count.image1": "Photo project",
      "card.video": "Video", "card.image": "Photos",
      "info.client": "Client", "info.year": "Year", "info.type": "Type", "info.tools": "Tools",
      "info.prev": "Previous", "info.next": "Next", "info.link": "View on platform",
      "contact.eyebrow": "Contact", "contact.title": "Got a project or a role? Get in touch.",
      "cta.cv": "Download CV", "cta.whatsapp": "WhatsApp me", "cta.work": "See the work",
      "contact.top": "Top",
      "cursor.play": "Play", "cursor.view": "View", "cursor.enter": "Enter", "cursor.drag": "Drag", "cursor.mail": "Email",
    },
  };
  let lang = "ar";
  try { lang = localStorage.getItem("lang") || "ar"; } catch (_) {}
  if (!DICT[lang]) lang = "ar";
  const t = (k) => DICT[lang][k] ?? k;
  const tn = (n, k) => (n === 1 && DICT[lang][k + "1"]) || t(k);
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.ar ?? v.en ?? "" : v ?? "");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- Media helpers ---------------- */
  function parseVideo(src) {
    if (!src) return null;
    if (typeof src === "object") return src;
    let m;
    if ((m = src.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/)))
      return { provider: "youtube", id: m[1] };
    if ((m = src.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/)))
      return { provider: "vimeo", id: m[1], hash: m[2] };
    if ((m = src.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/)))
      return { provider: "drive", id: m[1] };
    if (/behance\.net|adobe\.io|embed/.test(src) && !/\.(mp4|webm|mov)(\?|$)/i.test(src))
      return { provider: "iframe", src };
    return { provider: "file", src };
  }
  function embedUrl(v) {
    switch (v.provider) {
      case "youtube": return `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      case "vimeo": return `https://player.vimeo.com/video/${v.id}?autoplay=1&title=0&byline=0&portrait=0${v.hash ? "&h=" + v.hash : ""}`;
      case "drive": return `https://drive.google.com/file/d/${v.id}/preview`;
      case "iframe": return v.src;
    }
    return null;
  }
  function coverOf(p) {
    if (p.cover) return p.cover;
    if (p.poster) return p.poster;
    if (p.gallery && p.gallery.length) return mediaSrc(p.gallery[0]);
    const v = parseVideo(p.video);
    if (v && v.provider === "youtube") return `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
    if (v && v.provider === "drive") return `https://drive.google.com/thumbnail?id=${v.id}&sz=w1600`;
    return "";
  }
  // gallery items can be "url" or { src, video, caption }
  const mediaSrc = (g) => (typeof g === "string" ? g : g.src || g.poster || "");
  // a project counts under a tab if it holds that kind of media (a photo project can also carry a video)
  const isVideoItem = (g) => typeof g === "object" && !!g.video;
  function hasKind(p, kind) {
    const g = p.gallery || [];
    if (kind === "video") return p.type === "video" || g.some(isVideoItem);
    return p.type === "image" ? g.length === 0 || g.some((x) => !isVideoItem(x)) : g.some((x) => !isVideoItem(x));
  }
  function previewOf(p) {
    if (p.preview) return p.preview;
    const v = parseVideo(p.video);
    return v && v.provider === "file" ? v.src : "";
  }
  // if a cover image is missing: show the video's first frame when there is one, else the title
  window.__coverFail = (img) => {
    const v = img.parentNode && img.parentNode.querySelector("video[data-src]");
    if (v) { v.preload = "metadata"; v.src = v.dataset.src + "#t=0.5"; v.classList.add("is-cover"); img.remove(); return; }
    img.replaceWith(Object.assign(document.createElement("div"), { className: "card__fallback", textContent: img.alt }));
  };
  function imgTag(src, alt, cls = "") {
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" class="${cls}" onerror="__coverFail(this)">`;
  }

  /* ---------------- Static text ---------------- */
  function applyText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-profile]").forEach((el) => (el.textContent = L(DATA.profile[el.dataset.profile])));
    $$("[data-profile-photo]").forEach((el) => {
      if (DATA.profile.photo) { el.src = DATA.profile.photo; el.alt = L(DATA.profile.name); } else el.hidden = true;
    });
    $$("[data-world-title]").forEach((el) => (el.textContent = L(DATA.worlds[el.dataset.worldTitle].title)));
    $$("[data-world-intro]").forEach((el) => (el.textContent = L(DATA.worlds[el.dataset.worldIntro].intro)));
    $$("[data-world-meta]").forEach((el) => {
      const w = el.dataset.worldMeta;
      const list = DATA.projects.filter((p) => p.world === w);
      const v = list.filter((p) => hasKind(p, "video")).length;
      const im = list.filter((p) => hasKind(p, "image")).length;
      el.textContent = `${v} ${tn(v, "count.video")} · ${im} ${tn(im, "count.image")}`;
    });
    document.title = `${L(DATA.profile.name)} | ${L(DATA.profile.role)}`;
  }

  function buildStatic() {
    // world covers on home split
    $$("[data-world-cover]").forEach((el) => {
      const w = DATA.worlds[el.dataset.worldCover];
      el.innerHTML = (w.cover ? imgTag(w.cover, "") : "") +
        (w.coverVideo && !reduceMotion ? `<video muted loop playsinline preload="none" src="${esc(w.coverVideo)}"></video>` : "");
      const panel = el.closest(".panel");
      const vid = $("video", el);
      if (vid) {
        panel.addEventListener("mouseenter", () => vid.play().catch(() => {}));
        panel.addEventListener("mouseleave", () => vid.pause());
      }
    });

    // hero buttons + availability strip
    const PR = DATA.profile;
    const cv = (PR.downloads || [])[0];
    const dl = (d) => `<a class="btn btn--ghost" href="${esc(d.file)}" download target="_blank" rel="noopener"><span class="btn__ico" aria-hidden="true">↓</span>${esc(L(d.label))}</a>`;
    $("#heroCtas").innerHTML =
      (cv ? `<a class="btn btn--light" href="${esc(cv.file)}" download target="_blank" rel="noopener"><span class="btn__ico" aria-hidden="true">↓</span>${t("cta.cv")}</a>` : "") +
      (PR.whatsapp ? `<a class="btn btn--ghost" href="https://wa.me/${esc(PR.whatsapp)}" target="_blank" rel="noopener">${t("cta.whatsapp")}</a>` : "");
    $("#hire").innerHTML = `<span class="hire__dot" aria-hidden="true"></span><span>${esc(L(PR.availability))}</span><span class="hire__sep">·</span><span>${esc(L(PR.location))}</span>`;
    $("#downloads").innerHTML = (PR.downloads || []).map(dl).join("");

    // stats
    $("#stats").innerHTML = (DATA.profile.stats || [])
      .map((s) => ({ ...s, value: s.value === "projects" ? DATA.projects.length : s.value }))
      .map((s) => `<div class="stat"><div class="stat__value" data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">${s.value}${esc(s.suffix || "")}</div><div class="stat__label">${esc(L(s.label))}</div></div>`)
      .join("");

    // credentials, experience, tools
    const P0 = DATA.profile;
    $("#creds").innerHTML = (P0.credentials || []).map((c) => `<span class="cred">${esc(L(c))}</span>`).join("");
    $("#timeline").innerHTML = (P0.experience || [])
      .map((x) => `<li><span class="timeline__period">${esc(L(x.period))}</span>
        <strong>${esc(L(x.role))}</strong>${L(x.company) ? `<span class="timeline__co">${esc(L(x.company))}</span>` : ""}
        ${L(x.details) ? `<p>${esc(L(x.details))}</p>` : ""}</li>`)
      .join("");
    $("#tools").innerHTML = (P0.tools || []).map((x) => `<li>${esc(x)}</li>`).join("");
    $(".about__more").hidden = !(P0.experience || []).length && !(P0.tools || []).length;

    // services
    $("#services").innerHTML = ["marketing", "architecture"]
      .map((w) => `<a href="#/${w}" data-link class="service reveal" data-cursor="enter">
        <div class="service__head"><span class="service__dot" style="background:var(--${w})"></span><h3>${esc(L(DATA.worlds[w].title))}</h3></div>
        <ul>${(L(DATA.profile.services?.[w]) || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul></a>`)
      .join("");

    // contact
    const P = DATA.profile;
    const mail = $("#contactMail");
    mail.textContent = P.email;
    $("#contactPhone").textContent = P.phone || "";
    $("#contactPhone").href = P.phone ? `tel:${P.phone.replace(/\s+/g, "")}` : "#";
    $("#contactPhone").hidden = !P.phone;
    mail.href = `mailto:${P.email}`;
    const icons = {
      whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.3Z"/>',
      instagram: '<path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM21.1 8a5.4 5.4 0 0 0-1.5-3.8A5.4 5.4 0 0 0 15.8 2.7C14.3 2.6 9.7 2.6 8.2 2.7A5.4 5.4 0 0 0 4.4 4.2 5.4 5.4 0 0 0 2.9 8c-.1 1.5-.1 6.1 0 7.6a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 6.1.1 7.6 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.5.1-6.1 0-7.6Z"/>',
      behance: '<path d="M8.2 11.3a2.4 2.4 0 0 0 1.6-2.3c0-2.2-1.6-2.8-3.5-2.8H1v11.6h5.4c2 0 3.9-1 3.9-3.3a2.9 2.9 0 0 0-2.1-3.2ZM3.4 8.2h2.3c.9 0 1.7.2 1.7 1.3s-.6 1.3-1.5 1.3H3.4Zm2.5 7.6H3.4v-3.1h2.6c1 0 1.7.4 1.7 1.6s-.8 1.5-1.8 1.5Zm10.3-6.7c-2.6 0-4.4 2-4.4 4.6s1.7 4.5 4.4 4.5a3.9 3.9 0 0 0 4-2.9h-2a1.9 1.9 0 0 1-1.9 1.1 2 2 0 0 1-2.1-2.2h6.1c.2-2.7-1.3-5.1-4.1-5.1Zm-2 3.7a1.9 1.9 0 0 1 2-1.9 1.7 1.7 0 0 1 1.8 1.9ZM14.4 6.8h4.7v1.2h-4.7Z"/>',
      linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3Zm7 0h3.8v1.6h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.7 4.8 6.1V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4Z"/>',
      youtube: '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.8 3Z"/>',
      tiktok: '<path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.7a2.9 2.9 0 1 1-2-2.7V9.5a6.3 6.3 0 1 0 5.4 6.2V8.8a8.2 8.2 0 0 0 3.8 1.2Z"/>',
      email: '<path d="M2 5h20v14H2Zm2 2v.5l8 5 8-5V7Zm16 2.8-8 5-8-5V17h16Z"/>',
    };
    const links = [];
    if (P.whatsapp) links.push(["whatsapp", "WhatsApp", `https://wa.me/${P.whatsapp}`]);
    const NAMES = { linkedin: "LinkedIn", youtube: "YouTube", tiktok: "TikTok" };
    Object.entries(P.social || {}).forEach(([k, v]) => v && links.push([k, NAMES[k] || k[0].toUpperCase() + k.slice(1), v]));
    links.push(["email", "Email", `mailto:${P.email}`]);
    $("#socials").innerHTML = links
      .map(([k, label, href]) => `<a class="social" href="${esc(href)}"${/^(mailto|tel):/.test(href) ? "" : ' target="_blank" rel="noopener"'}><svg viewBox="0 0 24 24" fill="currentColor">${icons[k] || ""}</svg>${label}</a>`)
      .join("");
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------------- Cards ---------------- */
  function cardHTML(p, i = 0) {
    const cover = coverOf(p);
    const preview = previewOf(p);
    const isVid = p.type === "video";
    const n = slidesOf(p).length;
    const count = !isVid || n > 1 ? ` · ${n}` : "";
    const size = p.size === "wide" ? " card--wide" : p.size === "tall" ? " card--tall" : "";
    return `<article class="card${size}" tabindex="0" role="button" data-id="${esc(p.id)}" data-world="${p.world}"
        data-cursor="${isVid ? "play" : "view"}" style="--fallback:var(--${p.world});transition-delay:${Math.min(i, 8) * 60}ms"
        aria-label="${esc(L(p.title))}">
      <div class="card__media">
        ${cover ? imgTag(cover, L(p.title)) : `<div class="card__fallback">${esc(L(p.title))}</div>`}
        ${preview ? `<video muted loop playsinline preload="none" data-src="${esc(preview)}"></video>` : ""}
      </div>
      <span class="card__badge"><span class="dot"></span>${t(isVid ? "card.video" : "card.image")}${count}</span>
      ${isVid ? '<span class="card__play"></span>' : ""}
      <div class="card__body">
        <span class="card__cat">${esc(L(p.category))}</span>
        <h3 class="card__title">${esc(L(p.title))}</h3>
        ${p.year ? `<span class="card__year">${esc(p.year)}</span>` : ""}
      </div>
    </article>`;
  }

  function bindCards(root, list) {
    $$(".card", root).forEach((card) => {
      const open = () => openModal(list.findIndex((p) => p.id === card.dataset.id), list);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      const vid = $("video", card);
      if (vid && finePointer && !reduceMotion) {
        card.addEventListener("mouseenter", () => {
          if (!vid.getAttribute("src")) vid.src = vid.dataset.src;
          vid.play().then(() => card.classList.add("is-previewing")).catch(() => {});
        });
        card.addEventListener("mouseleave", () => { card.classList.remove("is-previewing"); vid.pause(); });
      }
    });
  }

  /* ---------------- Home ---------------- */
  function renderHome() {
    let feat = DATA.projects.filter((p) => p.featured);
    if (feat.length < 4) feat = feat.concat(DATA.projects.filter((p) => !p.featured).slice(0, 6 - feat.length));
    const el = $("#featured");
    el.innerHTML = feat.map((p, i) => cardHTML({ ...p, size: "" }, i)).join("");
    $$(".card", el).forEach((c) => c.classList.add("is-in"));
    bindCards(el, feat);
  }

  /* ---------------- World ---------------- */
  const state = { world: null, tab: "all", cat: "all" };

  function worldList() {
    return DATA.projects.filter((p) => p.world === state.world);
  }
  function filtered() {
    return worldList().filter((p) => (state.tab === "all" || hasKind(p, state.tab)) && (state.cat === "all" || p.catKey === state.cat));
  }

  function renderWorld(world) {
    const changed = state.world !== world;
    state.world = world;
    if (changed) { state.tab = "all"; state.cat = "all"; }
    const W = DATA.worlds[world];
    const other = world === "marketing" ? "architecture" : "marketing";

    if (changed) {
      const bg = $("#worldBg");
      bg.innerHTML = (W.cover ? imgTag(W.cover, "") : "") +
        (W.coverVideo && !reduceMotion ? `<video muted loop playsinline autoplay preload="metadata" src="${esc(W.coverVideo)}"></video>` : "");
    }
    $("#worldEyebrow").textContent = `${world === "marketing" ? "01" : "02"} · ${L(W.short)}`;
    const words = L(W.title).split(" ");
    $("#worldTitle").innerHTML = words.length > 1
      ? `${esc(words.slice(0, -1).join(" "))} <span class="accent">${esc(words.at(-1))}</span>`
      : `<span class="accent">${esc(words[0])}</span>`;
    $("#worldIntro").textContent = L(W.intro);
    const all = worldList();
    const nv = all.filter((p) => hasKind(p, "video")).length;
    const ni = all.filter((p) => hasKind(p, "image")).length;
    $("#worldCounts").innerHTML = `<div class="count"><b data-count="${nv}">0</b><span>${tn(nv, "count.video")}</span></div>
      <div class="count"><b data-count="${ni}">0</b><span>${tn(ni, "count.image")}</span></div>`;
    $$("#worldCounts [data-count]").forEach(countUp);
    const sw = $("#worldSwitch");
    sw.href = `#/${other}`;
    sw.innerHTML = `<span>${t("world.switchTo")}</span><strong>${esc(L(DATA.worlds[other].title))} <i class="arrow"></i></strong>`;
    $("#showreelBtn").hidden = !W.showreel;

    // tabs counts
    $$("#tabs button").forEach((b) => {
      const n = b.dataset.tab === "all" ? all.length : all.filter((p) => hasKind(p, b.dataset.tab)).length;
      b.innerHTML = `${t("tabs." + b.dataset.tab)}<sup>${n}</sup>`;
      b.hidden = n === 0 && b.dataset.tab !== "all";
      b.classList.toggle("is-active", b.dataset.tab === state.tab);
      b.setAttribute("aria-selected", b.dataset.tab === state.tab);
    });
    requestAnimationFrame(moveInk);
    renderChips();
    renderGrid();
  }

  function renderChips() {
    const W = DATA.worlds[state.world];
    const present = new Set(worldList().filter((p) => state.tab === "all" || hasKind(p, state.tab)).map((p) => p.catKey).filter(Boolean));
    const keys = [...W.catOrder.filter((k) => present.has(k)), ...[...present].filter((k) => !W.catOrder.includes(k))];
    if (state.cat !== "all" && !keys.includes(state.cat)) state.cat = "all";
    $("#chips").hidden = keys.length < 2;
    $("#chips").innerHTML = [["all", t("chip.all")], ...keys.map((k) => [k, L((W.categories || {})[k] || k)])]
      .map(([v, label]) => `<button class="chip${state.cat === v ? " is-active" : ""}" data-cat="${esc(v)}">${esc(label)}</button>`)
      .join("");
  }

  let gridObserver;
  function renderGrid() {
    const list = filtered();
    const grid = $("#grid");
    grid.innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    bindCards(grid, list);
    gridObserver?.disconnect();
    gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); gridObserver.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -5% 0px" });
    $$(".card", grid).forEach((c) => gridObserver.observe(c));
  }

  function moveInk() {
    const active = $("#tabs .is-active");
    const ink = $("#tabsInk");
    if (!active) return;
    ink.style.width = active.offsetWidth + "px";
    ink.style.transform = `translateX(${active.offsetLeft}px)`;
  }

  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (!b || b.dataset.tab === state.tab) return;
    state.tab = b.dataset.tab;
    $$("#tabs button").forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
    moveInk();
    renderChips();
    renderGrid();
  });
  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    state.cat = b.dataset.cat;
    $$("#chips .chip").forEach((x) => x.classList.toggle("is-active", x === b));
    renderGrid();
  });
  $("#showreelBtn").addEventListener("click", () => {
    const W = DATA.worlds[state.world];
    const src = DATA.projects.find((p) => p.video === W.showreel);
    openModal(0, [{ id: "showreel", world: state.world, type: "video", title: src ? src.title : { ar: "الشوريل", en: "Showreel" }, category: W.short, video: W.showreel, ratio: src?.ratio, poster: src?.poster, cover: src?.cover || W.cover, description: src?.description, client: src?.client }], { noHash: true });
  });
  addEventListener("resize", moveInk);

  /* ---------------- Modal ---------------- */
  const modal = $("#modal");
  const M = { list: [], index: 0, slide: 0, opts: {}, lastFocus: null, pushed: false };

  function slidesOf(p) {
    if (p.type === "video") {
      const extra = (p.gallery || []).map((g) => (typeof g === "string" ? { src: g } : g));
      return [{ video: p.video, poster: p.poster || coverOf(p), ratio: p.ratio, caption: p.firstCaption }, ...extra];
    }
    return (p.gallery && p.gallery.length ? p.gallery : [coverOf(p)]).map((g) => (typeof g === "string" ? { src: g } : g));
  }

  function openModal(index, list, opts = {}) {
    if (index < 0) return;
    M.list = list; M.index = index; M.slide = 0; M.opts = opts;
    // opened from the Videos tab → start on the project's first video
    if (state.world && state.tab !== "all") {
      const i = slidesOf(list[index]).findIndex((x) => (state.tab === "video" ? !!x.video : !x.video));
      if (i > 0) M.slide = i;
    }
    M.lastFocus = document.activeElement;
    // add a history entry so the phone's Back button closes the viewer instead of leaving the page
    if (!opts.fromRoute && !M.pushed) { history.pushState({ modal: 1 }, "", location.href); M.pushed = true; }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    renderModal();
    $(".modal__close", modal).focus({ preventScroll: true });
  }
  function closeModal(fromHistory = false) {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { if (!modal.classList.contains("is-open")) { $("#stageMedia").innerHTML = ""; $("#thumbs").innerHTML = ""; } }, 500);
    if (M.pushed) { M.pushed = false; if (!fromHistory) history.back(); }
    else if (!fromHistory && state.world && route().id) history.replaceState(null, "", `#/${state.world}`);
    M.lastFocus?.focus?.({ preventScroll: true });
  }
  // Back pressed while the viewer is open. If the new address points at a project, the router opens it.
  addEventListener("popstate", () => {
    if (!modal.classList.contains("is-open")) return;
    const r = route();
    if (r.world && r.id) return;
    closeModal(true);
  });

  function renderModal() {
    const p = M.list[M.index];
    if (!p) return;
    if (!M.opts.noHash && route().world === p.world) history.replaceState(null, "", `#/${p.world}/${p.id}`);
    modal.style.setProperty("--accent", `var(--${p.world})`);
    renderSlide();

    const slides = slidesOf(p);
    $("#thumbs").innerHTML = slides.length > 1
      ? slides.map((s, i) => `<button type="button" data-slide="${i}" aria-label="${i + 1}">${s.video ? `<img src="${esc(s.poster || "")}" alt="">` : `<img src="${esc(mediaSrc(s))}" alt="" loading="lazy">`}</button>`).join("")
      : "";

    const prev = M.list[M.index - 1], next = M.list[M.index + 1];
    const meta = [
      p.client && [t("info.client"), esc(L(p.client))],
      p.year && [t("info.year"), esc(p.year)],
      [t("info.type"), t(p.type === "video" ? "card.video" : "card.image")],
    ].filter(Boolean);
    $("#modalInfo").innerHTML = `
      <span class="info__cat">${esc(L(p.category))}</span>
      <h2 class="info__title">${esc(L(p.title))}</h2>
      ${p.description ? `<p class="info__desc">${esc(L(p.description))}</p>` : ""}
      <dl class="info__meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      ${p.tools?.length ? `<div class="info__tools">${p.tools.map((x) => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
      ${p.link ? `<p><a class="btn" style="margin-top:1.4rem" href="${esc(p.link)}" target="_blank" rel="noopener">${t("info.link")} ↗</a></p>` : ""}
      ${M.list.length > 1 ? `<div class="info__pager">
        <button type="button" data-go="-1" ${prev ? "" : "disabled"}><small>${t("info.prev")}</small><span>${esc(prev ? L(prev.title) : "")}</span></button>
        <button type="button" data-go="1" ${next ? "" : "disabled"}><small>${t("info.next")}</small><span>${esc(next ? L(next.title) : "")}</span></button>
      </div>` : ""}`;
    $("#modalInfo").scrollTop = 0;
  }

  function renderSlide() {
    const p = M.list[M.index];
    const slides = slidesOf(p);
    const s = slides[M.slide];
    const stage = $("#stage");
    const media = $("#stageMedia");
    let portrait = false;

    if (s.video) {
      const v = parseVideo(s.video);
      const known = s.ratio || p.ratio || "";
      const ratio = known || "16/9";
      const [rw, rh] = ratio.split("/").map(Number);
      portrait = rh > rw;
      const url = embedUrl(v);
      media.innerHTML = `<div class="player${portrait ? " player--portrait" : ""}${!known && !url ? " is-sizing" : ""}" style="--ratio:${ratio}">${
        url
          ? `<iframe src="${esc(url)}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen title="${esc(L(p.title))}"></iframe>`
          : `<video src="${esc(v.src)}" ${s.poster ? `poster="${esc(s.poster)}"` : ""} controls autoplay playsinline preload="auto"></video>`
      }</div>`;
      const vid = $("video", media);
      if (vid) {
        vid.play().catch(() => { vid.muted = true; vid.play().catch(() => {}); });
        // no ratio given: read it from the file itself
        const pl = vid.parentNode;
        const size = () => {
          pl.classList.remove("is-sizing");
          if (!vid.videoWidth) return;
          const por = vid.videoHeight > vid.videoWidth;
          pl.style.setProperty("--ratio", `${vid.videoWidth}/${vid.videoHeight}`);
          pl.classList.toggle("player--portrait", por);
          stage.classList.toggle("is-portrait", por);
        };
        if (!known) { vid.addEventListener("loadedmetadata", size, { once: true }); setTimeout(() => pl.classList.remove("is-sizing"), 1500); }
      }
    } else {
      const src = mediaSrc(s);
      media.innerHTML = `<img src="${esc(src)}" alt="${esc(L(p.title))}${s.caption ? ", " + esc(L(s.caption)) : ""}">`;
      const img = $("img", media);
      img.addEventListener("click", (e) => {
        img.classList.toggle("is-zoomed");
        if (img.classList.contains("is-zoomed")) {
          const r = img.getBoundingClientRect();
          img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
        }
      });
    }
    stage.classList.toggle("is-portrait", portrait);
    $("#stagePrev").hidden = $("#stageNext").hidden = slides.length < 2 && M.list.length < 2;
    const cap = s.caption ? L(s.caption) : "";
    $("#stageCounter").textContent = [slides.length > 1 ? `${M.slide + 1} / ${slides.length}` : "", cap].filter(Boolean).join("  ·  ");
    $("#stageCounter").hidden = slides.length < 2 && !cap;
    $$("#thumbs button").forEach((b, i) => {
      b.classList.toggle("is-active", i === M.slide);
      if (i === M.slide) b.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
    });
    // preload neighbours
    [slides[M.slide + 1], slides[M.slide - 1]].forEach((n) => { if (n && !n.video) new Image().src = mediaSrc(n); });
  }

  // step through slides first, then projects
  function step(dir) {
    const slides = slidesOf(M.list[M.index]);
    const ns = M.slide + dir;
    if (ns >= 0 && ns < slides.length) { M.slide = ns; renderSlide(); return; }
    goProject(dir);
  }
  function goProject(dir) {
    const ni = M.index + dir;
    if (ni < 0 || ni >= M.list.length) return;
    M.index = ni;
    M.slide = 0;
    renderModal();
  }
  const visualDir = (d) => (document.documentElement.dir === "rtl" ? -d : d);

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeModal();
    const th = e.target.closest("[data-slide]");
    if (th) { M.slide = +th.dataset.slide; renderSlide(); return; }
    const go = e.target.closest("[data-go]");
    if (go) { M.slide = 0; goProject(+go.dataset.go); }
  });
  $("#stagePrev").addEventListener("click", () => step(-1));
  $("#stageNext").addEventListener("click", () => step(1));
  addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowRight") step(visualDir(1));
    else if (e.key === "ArrowLeft") step(visualDir(-1));
    else if (e.key === "Tab") {
      const f = $$("button, [href], iframe, video, [tabindex]:not([tabindex='-1'])", modal).filter((x) => !x.hidden && x.offsetParent);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
      else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
    }
  });
  // swipe
  (() => {
    let x0 = null, y0 = null;
    const st = $("#stage");
    st.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    st.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(visualDir(dx < 0 ? 1 : -1));
      x0 = null;
    });
  })();

  /* ---------------- Router ---------------- */
  function route() {
    const [, world, id] = (location.hash || "#/").replace(/^#\/?/, "#/").split("/");
    return { world: DATA.worlds[world] ? world : null, id };
  }
  let currentView = null;
  function router() {
    const { world, id } = route();
    const view = world || "home";
    document.body.dataset.world = view;
    $$("#navLinks [data-route]").forEach((a) => a.classList.toggle("is-active", a.dataset.route === view));
    closeMenu();

    if (view !== currentView) {
      $("#viewHome").hidden = view !== "home";
      $("#viewWorld").hidden = view === "home";
      if (view === "home") { state.world = null; renderHome(); }
      else renderWorld(world);
      if (!id) scrollTo({ top: 0, behavior: "instant" });
      currentView = view;
      observeReveals();
    }
    if (world && id) {
      const list = filtered().some((p) => p.id === id) ? filtered() : worldList();
      const idx = list.findIndex((p) => p.id === id);
      if (idx >= 0) openModal(idx, list, { fromRoute: true });
    } else closeModal(true);
  }
  addEventListener("hashchange", router);

  // in-page anchors (about / contact)
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-scroll]");
    if (!a) return;
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(a.dataset.scroll);
    if (target && !target.closest("[hidden]")) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    else { location.hash = "#/"; setTimeout(() => document.getElementById(a.dataset.scroll)?.scrollIntoView({ behavior: "smooth" }), 80); }
  });

  /* ---------------- Nav / menu ---------------- */
  const burger = $("#burger");
  function closeMenu() { $("#navLinks").classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", () => {
    const open = !$("#navLinks").classList.contains("is-open");
    $("#navLinks").classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
  });
  let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY;
    $("#nav").classList.toggle("is-scrolled", y > 20);
    $("#nav").classList.toggle("is-hidden", y > lastY && y > 400 && !$("#navLinks").classList.contains("is-open"));
    lastY = y;
  }, { passive: true });
  $("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (_) {}
    applyText();
    buildStatic();
    const v = currentView; currentView = null;
    if (v === "home") { renderHome(); currentView = "home"; observeReveals(); }
    else { renderWorld(state.world); currentView = v; }
    if (modal.classList.contains("is-open")) renderModal();
  });

  /* ---------------- Reveal + counters ---------------- */
  function countUp(el) {
    const end = +el.dataset.count, suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = end + suffix; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  let revealObserver;
  function observeReveals() {
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        $$("[data-count]", e.target).forEach(countUp);
        revealObserver.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    $$(".reveal:not(.is-in)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------------- Featured carousel drag ---------------- */
  (() => {
    const c = $("#featured");
    let down = false, startX = 0, startScroll = 0, moved = false;
    c.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = e.clientX; startScroll = c.scrollLeft;
    });
    addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) { moved = true; c.classList.add("is-dragging"); }
      c.scrollLeft = startScroll - dx;
    });
    addEventListener("pointerup", () => {
      if (!down) return;
      down = false;
      setTimeout(() => c.classList.remove("is-dragging"), 0);
    });
    c.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    const by = (d) => {
      const card = $(".card", c);
      const w = card ? card.offsetWidth + 24 : 400;
      const dir = document.documentElement.dir === "rtl" ? -1 : 1;
      c.scrollBy({ left: d * w * dir, behavior: "smooth" });
    };
    $("#featPrev").addEventListener("click", () => by(-1));
    $("#featNext").addEventListener("click", () => by(1));
  })();

  /* ---------------- Custom cursor ---------------- */
  if (finePointer && !reduceMotion) {
    const cur = $("#cursor"), label = $("#cursorLabel");
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY;
      cur.classList.add("is-visible");
      const target = e.target.closest?.("[data-cursor]");
      const inModal = e.target.closest?.(".modal");
      if (target && !inModal) { cur.classList.add("is-big"); label.textContent = t("cursor." + target.dataset.cursor); }
      else cur.classList.remove("is-big");
    });
    document.addEventListener("mouseleave", () => cur.classList.remove("is-visible"));
    const loop = () => {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ---------------- Loader ---------------- */
  function runLoader(done) {
    const loader = $("#loader");
    if (reduceMotion) { loader.classList.add("is-done"); return done(); }
    let fired = false;
    const finish = () => { if (fired) return; fired = true; loader.classList.add("is-done"); done(); };
    if (document.readyState === "complete") setTimeout(finish, 350);
    else { addEventListener("load", () => setTimeout(finish, 150), { once: true }); setTimeout(finish, 1200); }
  }

  /* ---------------- Init ---------------- */
  applyText();
  buildStatic();
  router();
  runLoader(observeReveals);
})();
