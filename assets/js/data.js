/* =========================================================================
   ملف المحتوى — عدّل هنا فقط لإضافة أعمالك
   Content file — edit this file only to add / change your work.

   كل نص ممكن يتكتب بطريقتين:
     title: "عنوان واحد"                       ← يظهر في اللغتين
     title: { ar: "عنوان عربي", en: "English" } ← نص لكل لغة

   world:  "marketing"     ← قسم التسويق
           "architecture"  ← قسم العمارة والتصميم
   type:   "video"  ← يظهر في تبويب الفيديوهات
           "image"  ← يظهر في تبويب الصور

   video:  أي رابط من دول ويتعرف عليه تلقائياً:
           - YouTube   https://youtu.be/ID  أو  https://www.youtube.com/watch?v=ID  أو  /shorts/ID
           - Vimeo     https://vimeo.com/ID
           - Google Drive  https://drive.google.com/file/d/ID/view
           - ملف مباشر  assets/media/marketing/ad.mp4  أو رابط mp4 من Cloudinary
   preview: (اختياري) فيديو mp4 قصير صامت يشتغل لما الماوس يقف على الكارت
   gallery: قائمة صور المشروع (للأعمال من نوع image)
   size:   "normal" | "wide" (عرض مضاعف) | "tall" (طولي — مناسب للريلز 9:16)
   ratio:  "16/9" | "9/16" | "1/1" | "4/5" — نسبة عرض الفيديو داخل المشغّل
   featured: true ← يظهر في "أعمال مختارة" بالصفحة الرئيسية

   ⚠️ المحتوى الحالي أمثلة توضيحية — استبدله بأعمالك.
   ========================================================================= */

const U = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const GV = (name) =>
  `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${name}.mp4`;

window.PORTFOLIO = {
  profile: {
    name: { ar: "اسمك هنا", en: "Your Name" }, // ← غيّره لاسمك
    role: {
      ar: "مسوّق ومعماري ومصمم بصري",
      en: "Marketer · Architect · Visual Designer",
    },
    tagline: {
      ar: "أصمم مساحات تُعاش، وحملات تُرى وتُحس.",
      en: "I design spaces people live in, and campaigns people feel.",
    },
    about: {
      ar: "أجمع بين التفكير المعماري ودقة التصميم وبين عقلية التسويق وصناعة المحتوى. من فكرة على ورق إلى مشروع منفّذ، ومن براند ناشئ إلى حملة بتوصل لآلاف الناس — كل شغل هنا اتعمل بنفس الشغف.",
      en: "I blend architectural thinking and design precision with a marketer's mindset and content craft. From a sketch to a built project, from a new brand to campaigns that reach thousands — every piece here was made with the same passion.",
    },
    location: { ar: "القاهرة، مصر", en: "Cairo, Egypt" },
    email: "boody172@gmail.com",
    whatsapp: "", // مثال: "201001234567" (بدون + أو مسافات)
    social: {
      instagram: "", // https://instagram.com/username
      behance: "",
      linkedin: "",
      youtube: "",
      tiktok: "",
    },
    stats: [
      { value: 8, suffix: "+", label: { ar: "سنين خبرة", en: "Years of experience" } },
      { value: 120, suffix: "+", label: { ar: "مشروع منفّذ", en: "Projects delivered" } },
      { value: 45, suffix: "", label: { ar: "عميل وبراند", en: "Clients & brands" } },
    ],
  },

  worlds: {
    marketing: {
      title: { ar: "التسويق وصناعة المحتوى", en: "Marketing & Content" },
      short: { ar: "تسويق", en: "Marketing" },
      intro: {
        ar: "إعلانات، ريلز، حملات سوشيال ميديا، وهويات بصرية — محتوى معمول عشان يبيع ويفضل في الذاكرة.",
        en: "Ads, reels, social campaigns and brand identities — content built to sell and to stay in memory.",
      },
      cover: U("photo-1611162617474-5b21e879e113"),
      coverVideo: GV("ForBiggerJoyrides"),
      showreel: GV("ForBiggerBlazes"),
    },
    architecture: {
      title: { ar: "العمارة والتصميم", en: "Architecture & Design" },
      short: { ar: "عمارة", en: "Architecture" },
      intro: {
        ar: "تصميم معماري، تصميم داخلي، رندرات وجولات افتراضية — مساحات مدروسة من الفكرة للتنفيذ.",
        en: "Architecture, interiors, renders and walkthroughs — considered spaces from concept to execution.",
      },
      cover: U("photo-1600585154340-be6161a56a0c"),
      coverVideo: GV("ForBiggerEscapes"),
      showreel: GV("TearsOfSteel"),
    },
  },

  projects: [
    /* ======================= التسويق — فيديو ======================= */
    {
      id: "brand-launch-campaign",
      world: "marketing",
      type: "video",
      featured: true,
      size: "wide",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "حملة إطلاق براند", en: "Brand Launch Campaign" },
      description: {
        ar: "حملة متكاملة لإطلاق منتج جديد: فكرة إبداعية، سكريبت، تصوير ومونتاج، وتوزيع على المنصات.",
        en: "A full launch campaign: creative concept, script, production, edit and multi-platform rollout.",
      },
      client: "Client Name",
      year: 2026,
      tools: ["Premiere Pro", "After Effects", "Meta Ads"],
      cover: U("photo-1533750349088-cd871a92f312"),
      preview: GV("ForBiggerFun"),
      video: GV("ForBiggerFun"),
      ratio: "16/9",
    },
    {
      id: "product-reel",
      world: "marketing",
      type: "video",
      size: "tall",
      category: { ar: "ريلز", en: "Reels" },
      title: { ar: "ريل منتج", en: "Product Reel" },
      description: {
        ar: "ريل عمودي سريع الإيقاع لعرض منتج، مصمم لإنستجرام وتيك توك.",
        en: "A fast-paced vertical reel showcasing a product, built for Instagram and TikTok.",
      },
      client: "Client Name",
      year: 2026,
      tools: ["CapCut", "Premiere Pro"],
      cover: U("photo-1523275335684-37898b6baf30", 900),
      preview: GV("ForBiggerMeltdowns"),
      video: GV("ForBiggerMeltdowns"),
      ratio: "9/16",
    },
    {
      id: "youtube-commercial",
      world: "marketing",
      type: "video",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "إعلان على يوتيوب", en: "YouTube Commercial" },
      description: {
        ar: "مثال لفيديو مرفوع على يوتيوب — حط رابط الفيديو بتاعك وهيشتغل كامل جوه الموقع.",
        en: "Example of a YouTube-hosted video — paste your own link and it plays in full on the site.",
      },
      client: "Client Name",
      year: 2025,
      tools: ["DaVinci Resolve"],
      video: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      ratio: "16/9",
    },
    {
      id: "motion-ad",
      world: "marketing",
      type: "video",
      category: { ar: "موشن جرافيك", en: "Motion Graphics" },
      title: { ar: "إعلان موشن جرافيك", en: "Motion Graphics Ad" },
      description: {
        ar: "إعلان موشن جرافيك يشرح خدمة بشكل بسيط وجذاب.",
        en: "A motion graphics ad explaining a service in a simple, engaging way.",
      },
      client: "Client Name",
      year: 2025,
      tools: ["After Effects", "Illustrator"],
      cover: U("photo-1460925895917-afdab827c52f"),
      preview: GV("ForBiggerJoyrides"),
      video: GV("ElephantsDream"),
      ratio: "16/9",
    },

    /* ======================= التسويق — صور ======================= */
    {
      id: "social-media-kit",
      world: "marketing",
      type: "image",
      featured: true,
      category: { ar: "سوشيال ميديا", en: "Social Media" },
      title: { ar: "تصاميم سوشيال ميديا", en: "Social Media Designs" },
      description: {
        ar: "مجموعة بوستات وستوريز لشهر كامل بهوية بصرية موحدة.",
        en: "A full month of posts and stories under one consistent visual identity.",
      },
      client: "Client Name",
      year: 2026,
      tools: ["Photoshop", "Illustrator", "Canva"],
      gallery: [
        U("photo-1611162617474-5b21e879e113"),
        U("photo-1611162616305-c69b3fa7fbe0"),
        U("photo-1557838923-2985c318be48"),
      ],
    },
    {
      id: "brand-identity",
      world: "marketing",
      type: "image",
      size: "tall",
      category: { ar: "هوية بصرية", en: "Branding" },
      title: { ar: "هوية بصرية متكاملة", en: "Complete Brand Identity" },
      description: {
        ar: "لوجو، ألوان، خطوط، ومطبوعات — هوية كاملة لبراند جديد.",
        en: "Logo, colours, typography and print collateral — a complete identity for a new brand.",
      },
      client: "Client Name",
      year: 2025,
      tools: ["Illustrator", "InDesign"],
      gallery: [
        U("photo-1561070791-2526d30994b5", 1200),
        U("photo-1626785774573-4b799315345d", 1200),
        U("photo-1634942537034-2531766767d1", 1200),
      ],
    },
    {
      id: "ad-campaign-visuals",
      world: "marketing",
      type: "image",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "تصاميم إعلانات ممولة", en: "Paid Ads Creatives" },
      description: {
        ar: "تصاميم إعلانات ممولة مع A/B testing لرفع معدل التحويل.",
        en: "Paid ad creatives with A/B testing to lift conversion rate.",
      },
      client: "Client Name",
      year: 2025,
      tools: ["Photoshop", "Meta Ads Manager"],
      gallery: [U("photo-1557804506-669a67965ba0"), U("photo-1542744173-8e7e53415bb0")],
    },

    /* ======================= العمارة — فيديو ======================= */
    {
      id: "villa-walkthrough",
      world: "architecture",
      type: "video",
      featured: true,
      size: "wide",
      category: { ar: "جولات افتراضية", en: "Walkthroughs" },
      title: { ar: "جولة افتراضية — فيلا حديثة", en: "Modern Villa Walkthrough" },
      description: {
        ar: "جولة كاملة داخل وخارج فيلا سكنية، من الواجهات للتصميم الداخلي.",
        en: "A full walkthrough inside and out of a residential villa, from facades to interiors.",
      },
      client: "Private Client",
      year: 2026,
      tools: ["Revit", "Lumion", "Twinmotion"],
      cover: U("photo-1600585154340-be6161a56a0c"),
      preview: GV("ForBiggerEscapes"),
      video: GV("ForBiggerEscapes"),
      ratio: "16/9",
    },
    {
      id: "interior-animation",
      world: "architecture",
      type: "video",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
      title: { ar: "أنيميشن تصميم داخلي", en: "Interior Animation" },
      description: {
        ar: "أنيميشن لمساحة معيشة مفتوحة يوضح الخامات والإضاءة.",
        en: "An animation of an open living space showcasing materials and lighting.",
      },
      client: "Private Client",
      year: 2025,
      tools: ["3ds Max", "Corona", "D5 Render"],
      cover: U("photo-1600607687939-ce8a6c25118c"),
      preview: GV("ForBiggerBlazes"),
      video: "https://vimeo.com/76979871",
      ratio: "16/9",
    },
    {
      id: "construction-progress",
      world: "architecture",
      type: "video",
      size: "tall",
      category: { ar: "متابعة تنفيذ", en: "Construction" },
      title: { ar: "مراحل تنفيذ مشروع", en: "Construction Progress" },
      description: {
        ar: "فيديو يوثق مراحل التنفيذ من الخرسانات حتى التشطيب النهائي.",
        en: "A video documenting construction from concrete works to final finishes.",
      },
      client: "Developer",
      year: 2025,
      tools: ["Drone", "Premiere Pro"],
      cover: U("photo-1503387762-592deb58ef4e", 900),
      preview: GV("SubaruOutbackOnStreetAndDirt"),
      video: GV("SubaruOutbackOnStreetAndDirt"),
      ratio: "9/16",
    },

    /* ======================= العمارة — صور ======================= */
    {
      id: "residential-complex",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "تصميم معماري", en: "Architecture" },
      title: { ar: "مجمع سكني", en: "Residential Complex" },
      description: {
        ar: "تصميم مجمع سكني متوسط الارتفاع مع مساحات خضراء مشتركة وواجهات معاصرة.",
        en: "A mid-rise residential complex with shared green spaces and contemporary facades.",
      },
      client: "Developer",
      year: 2026,
      tools: ["Revit", "AutoCAD", "Enscape"],
      gallery: [
        U("photo-1545324418-cc1a3fa10c00"),
        U("photo-1487958449943-2429e8be8625"),
        U("photo-1486406146926-c627a92ad1ab"),
      ],
    },
    {
      id: "modern-interior",
      world: "architecture",
      type: "image",
      size: "tall",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
      title: { ar: "تصميم داخلي لشقة", en: "Apartment Interior" },
      description: {
        ar: "تصميم داخلي دافئ وبسيط لشقة سكنية، مع لوحة خامات طبيعية.",
        en: "A warm, minimal apartment interior with a natural material palette.",
      },
      client: "Private Client",
      year: 2025,
      tools: ["3ds Max", "Corona Renderer"],
      gallery: [
        U("photo-1618221195710-dd6b41faaea6", 1200),
        U("photo-1600566753190-17f0baa2a6c3", 1200),
        U("photo-1600607687939-ce8a6c25118c", 1200),
      ],
    },
    {
      id: "office-design",
      world: "architecture",
      type: "image",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
      title: { ar: "تصميم مكاتب إدارية", en: "Office Design" },
      description: {
        ar: "مساحة عمل مرنة تجمع بين المكاتب المفتوحة وغرف الاجتماعات.",
        en: "A flexible workspace combining open-plan desks and meeting rooms.",
      },
      client: "Company",
      year: 2024,
      tools: ["SketchUp", "V-Ray"],
      gallery: [U("photo-1497366216548-37526070297c"), U("photo-1497366811353-6870744d04b2")],
    },
    {
      id: "concept-sketches",
      world: "architecture",
      type: "image",
      category: { ar: "اسكتشات", en: "Sketches" },
      title: { ar: "اسكتشات ومفاهيم", en: "Concept Sketches" },
      description: {
        ar: "اسكتشات يدوية ودراسات كتلة في مرحلة الفكرة.",
        en: "Hand sketches and massing studies from the concept phase.",
      },
      year: 2024,
      tools: ["Hand Sketch", "Procreate"],
      gallery: [U("photo-1503387762-592deb58ef4e"), U("photo-1511818966892-d7d671e672a2")],
    },
  ],
};
