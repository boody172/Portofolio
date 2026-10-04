/* =========================================================
   Portfolio app — routing, rendering, interactions
   ========================================================= */
(() => {
  "use strict";

  const DATA = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------------- i18n ---------------- */
  const DICT = {
    ar: {
      "nav.home": "الرئيسية", "nav.marketing": "التسويق", "nav.architecture": "العمارة",
      "nav.about": "عني", "nav.contact": "تواصل",
      "home.choose": "اختار العالم اللي عايز تستكشفه",
      "home.explore": "استكشف الأعمال",
      "home.featuredEyebrow": "مختارات", "home.featured": "أعمال مختارة",
      "about.eyebrow": "عني", "about.title": "بين المساحة والرسالة", "about.experience": "الخبرة", "about.tools": "الأدوات والبرامج",
      "world.back": "الرئيسية", "world.showreel": "شاهد الشوريل",
      "world.empty": "مفيش أعمال في التصنيف ده لسه.",
      "world.switchTo": "انتقل إلى",
      "tabs.all": "الكل", "tabs.video": "فيديوهات", "tabs.image": "صور",
      "chip.all": "كل التصنيفات",
      "count.video": "فيديو", "count.image": "مشروع صور",
      "card.video": "فيديو", "card.image": "صور",
      "info.client": "العميل", "info.year": "السنة", "info.type": "النوع", "info.tools": "الأدوات",
      "info.prev": "السابق", "info.next": "التالي", "info.link": "شاهد على المنصة",
      "contact.eyebrow": "تواصل", "contact.title": "عندك مشروع؟ يلا نبدأ.",
      "contact.top": "لأعلى",
      "cursor.play": "تشغيل", "cursor.view": "عرض", "cursor.enter": "ادخل", "cursor.drag": "اسحب", "cursor.mail": "راسلني",
      "services.marketing": ["استراتيجية تسويق", "إدارة سوشيال ميديا", "إعلانات ممولة", "صناعة محتوى", "مونتاج وموشن", "هوية بصرية"],
      "services.architecture": ["تصميم معماري", "تصميم داخلي", "رندر 3D", "جولات افتراضية", "رسومات تنفيذية", "متابعة تنفيذ"],
    },
    en: {
      "nav.home": "Home", "nav.marketing": "Marketing", "nav.architecture": "Architecture",
      "nav.about": "About", "nav.contact": "Contact",
      "home.choose": "Choose a world to explore",
      "home.explore": "Explore work",
      "home.featuredEyebrow": "Selected", "home.featured": "Featured Work",
      "about.eyebrow": "About", "about.title": "Between space and message", "about.experience": "Experience", "about.tools": "Tools & software",
      "world.back": "Home", "world.showreel": "Watch showreel",
      "world.empty": "No work in this category yet.",
      "world.switchTo": "Switch to",
      "tabs.all": "All", "tabs.video": "Videos", "tabs.image": "Photos",
      "chip.all": "All categories",
      "count.video": "Videos", "count.image": "Photo projects",
      "card.video": "Video", "card.image": "Photos",
      "info.client": "Client", "info.year": "Year", "info.type": "Type", "info.tools": "Tools",
      "info.prev": "Previous", "info.next": "Next", "info.link": "View on platform",
      "contact.eyebrow": "Contact", "contact.title": "Have a project? Let's talk.",
      "contact.top": "Top",
      "cursor.play": "Play", "cursor.view": "View", "cursor.enter": "Enter", "cursor.drag": "Drag", "cursor.mail": "Email",
      "services.marketing": ["Marketing strategy", "Social media", "Paid ads", "Content creation", "Editing & motion", "Brand identity"],
      "services.architecture": ["Architectural design", "Interior design", "3D rendering", "Walkthroughs", "Construction drawings", "Site supervision"],
    },
  };
  let lang = "ar";
  try { lang = localStorage.getItem("lang") || "ar"; } catch (_) {}
  if (!DICT[lang]) lang = "ar";
  const t = (k) => DICT[lang][k] ?? k;
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
  function imgTag(src, alt, cls = "") {
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" class="${cls}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card__fallback',textContent:this.alt}))">`;
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
      el.textContent = `${v} ${t("count.video")} · ${im} ${t("count.image")}`;
    });
    document.title = `${L(DATA.profile.name)} — ${L(DATA.profile.role)}`;
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

    // marquee
    const words = [...DICT[lang]["services.marketing"].slice(0, 4), ...DICT[lang]["services.architecture"].slice(0, 4)];
    const seq = words.map((w) => `<span>${esc(w)}</span>`).join("");
    $("#marquee").innerHTML = seq + seq;

    // stats
    $("#stats").innerHTML = (DATA.profile.stats || [])
      .map((s) => ({ ...s, value: s.value === "projects" ? DATA.projects.length : s.value }))
      .map((s) => `<div class="stat"><div class="stat__value" data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0</div><div class="stat__label">${esc(L(s.label))}</div></div>`)
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
        <ul>${DICT[lang]["services." + w].map((s) => `<li>${esc(s)}</li>`).join("")}</ul></a>`)
      .join("");

    // contact
    const P = DATA.profile;
    const mail = $("#contactMail");
    mail.textContent = P.email;
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
      .map(([k, label, href]) => `<a class="social" href="${esc(href)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor">${icons[k] || ""}</svg>${label}</a>`)
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
        ${preview && !reduceMotion ? `<video muted loop playsinline preload="none" data-src="${esc(preview)}"></video>` : ""}
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
      if (vid && finePointer) {
        card.addEventListener("mouseenter", () => {
          if (!vid.src) vid.src = vid.dataset.src;
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
    return worldList().filter((p) => (state.tab === "all" || hasKind(p, state.tab)) && (state.cat === "all" || L(p.category) === state.cat));
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
    $("#worldEyebrow").textContent = `${world === "marketing" ? "01" : "02"} — ${L(W.short)}`;
    const words = L(W.title).split(" ");
    $("#worldTitle").innerHTML = words.length > 1
      ? `${esc(words.slice(0, -1).join(" "))} <span class="accent">${esc(words.at(-1))}</span>`
      : `<span class="accent">${esc(words[0])}</span>`;
    $("#worldIntro").textContent = L(W.intro);
    const all = worldList();
    const nv = all.filter((p) => hasKind(p, "video")).length;
    const ni = all.filter((p) => hasKind(p, "image")).length;
    $("#worldCounts").innerHTML = `<div class="count"><b data-count="${nv}">0</b><span>${t("count.video")}</span></div>
      <div class="count"><b data-count="${ni}">0</b><span>${t("count.image")}</span></div>`;
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
    const cats = [...new Set(worldList().filter((p) => state.tab === "all" || hasKind(p, state.tab)).map((p) => L(p.category)).filter(Boolean))];
    if (state.cat !== "all" && !cats.includes(state.cat)) state.cat = "all";
    $("#chips").innerHTML = [["all", t("chip.all")], ...cats.map((c) => [c, c])]
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
    openModal(0, [{ id: "showreel", world: state.world, type: "video", title: { ar: "الشوريل", en: "Showreel" }, category: W.short, video: W.showreel, ratio: W.showreelRatio || src?.ratio || "16/9", cover: src?.cover || W.cover }], { noHash: true });
  });
  addEventListener("resize", moveInk);

  /* ---------------- Modal ---------------- */
  const modal = $("#modal");
  const M = { list: [], index: 0, slide: 0, opts: {}, lastFocus: null };

  function slidesOf(p) {
    if (p.type === "video") {
      const extra = (p.gallery || []).map((g) => (typeof g === "string" ? { src: g } : g));
      return [{ video: p.video, poster: coverOf(p), ratio: p.ratio }, ...extra];
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
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    renderModal();
    $(".modal__close", modal).focus({ preventScroll: true });
  }
  function closeModal() {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { if (!modal.classList.contains("is-open")) { $("#stageMedia").innerHTML = ""; $("#thumbs").innerHTML = ""; } }, 500);
    if (state.world && location.hash.split("/").length > 2) history.replaceState(null, "", `#/${state.world}`);
    M.lastFocus?.focus?.({ preventScroll: true });
  }

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
        <button type="button" data-go="-1" ${prev ? "" : "disabled"}><small>${t("info.prev")}</small><span>${esc(prev ? L(prev.title) : "—")}</span></button>
        <button type="button" data-go="1" ${next ? "" : "disabled"}><small>${t("info.next")}</small><span>${esc(next ? L(next.title) : "—")}</span></button>
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
      const ratio = s.ratio || p.ratio || "16/9";
      const [rw, rh] = ratio.split("/").map(Number);
      portrait = rh > rw;
      const url = embedUrl(v);
      media.innerHTML = `<div class="player${portrait ? " player--portrait" : ""}" style="--ratio:${ratio}">${
        url
          ? `<iframe src="${esc(url)}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen title="${esc(L(p.title))}"></iframe>`
          : `<video src="${esc(v.src)}" ${s.poster ? `poster="${esc(s.poster)}"` : ""} controls autoplay playsinline preload="auto"></video>`
      }</div>`;
      const vid = $("video", media);
      if (vid) vid.play().catch(() => { vid.muted = true; vid.play().catch(() => {}); });
    } else {
      const src = mediaSrc(s);
      media.innerHTML = `<img src="${esc(src)}" alt="${esc(L(p.title))}${s.caption ? " — " + esc(L(s.caption)) : ""}">`;
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
    $("#stageCounter").textContent = [slides.length > 1 ? `${M.slide + 1} / ${slides.length}` : "", cap].filter(Boolean).join(" — ");
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
      if (idx >= 0) openModal(idx, list);
    } else closeModal();
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
    let n = 0;
    const iv = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 12));
      $("#loaderCount").textContent = n;
      $("#loaderBar").style.width = n + "%";
      if (n >= 100) { clearInterval(iv); setTimeout(() => { loader.classList.add("is-done"); done(); }, 250); }
    }, 60);
  }

  /* ---------------- Init ---------------- */
  applyText();
  buildStatic();
  router();
  runLoader(observeReveals);
})();
