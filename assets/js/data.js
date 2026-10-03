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

   الصور والفيديوهات المحلية بتتحط في assets/media/marketing أو assets/media/architecture
   ========================================================================= */

// مسار ملفات الميديا المرفوعة على الريبو
const MK = (f) => `assets/media/marketing/${f}`;
const AR = (f) => `assets/media/architecture/${f}`;

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
      cover: MK("luxury-candles-ad.jpg"),
      coverVideo: MK("teddy-candles-studio.mp4"),
      showreel: MK("luxury-candles-ad.mp4"),
    },
    architecture: {
      title: { ar: "العمارة والتصميم", en: "Architecture & Design" },
      short: { ar: "عمارة", en: "Architecture" },
      intro: {
        ar: "تصميم معماري، تصميم داخلي، رندرات وجولات افتراضية — مساحات مدروسة من الفكرة للتنفيذ.",
        en: "Architecture, interiors, renders and walkthroughs — considered spaces from concept to execution.",
      },
      cover: AR("egyptian-station-hall.jpg"),
      coverVideo: AR("egyptian-station-hall.mp4"),
      showreel: AR("egyptian-station-hall.mp4"),
    },
  },

  projects: [
    /* ======================= التسويق ======================= */
    {
      id: "luxury-candles-ad",
      world: "marketing",
      type: "video",
      featured: true,
      size: "tall",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "إعلان شموع فاخرة", en: "Luxury Candles Ad" },
      description: {
        ar: "إعلان سينمائي لمجموعة شموع فاخرة مصنوعة يدوياً: من لحظة صب الشمع الذهبي لحد عرض المجموعة كاملة مع هوية البراند.",
        en: "A cinematic ad for a handmade luxury candle collection — from the golden wax pour to the full collection reveal with the brand identity.",
      },
      year: 2026,
      cover: MK("luxury-candles-ad.jpg"),
      video: MK("luxury-candles-ad.mp4"),
      ratio: "834/1112",
    },
    {
      id: "teddy-candles-studio",
      world: "marketing",
      type: "video",
      featured: true,
      size: "tall",
      category: { ar: "تصوير منتجات", en: "Product Shoot" },
      title: { ar: "شموع الدبدوب — تصوير استوديو", en: "Teddy Candles — Studio Shoot" },
      description: {
        ar: "فيديو منتج بإضاءة استوديو دافئة وحركة دوران ناعمة تبرز تفاصيل شموع الدبدوب.",
        en: "A product video with warm studio lighting and a smooth turntable move that highlights the teddy-bear candles' details.",
      },
      year: 2026,
      cover: MK("teddy-candles-studio.jpg"),
      video: MK("teddy-candles-studio.mp4"),
      ratio: "9/16",
    },
    {
      id: "bear-candle-reel",
      world: "marketing",
      type: "video",
      size: "tall",
      category: { ar: "ريلز", en: "Reels" },
      title: { ar: "ريل شمعة الدبدوب", en: "Bear Candle Reel" },
      description: {
        ar: "ريل لايف ستايل بإضاءة طبيعية يعرض الألوان المختلفة للشمعة ولحظة إشعالها.",
        en: "A natural-light lifestyle reel showing the candle's colourways and the moment it's lit.",
      },
      year: 2026,
      cover: MK("bear-candle-reel.jpg"),
      video: MK("bear-candle-reel.mp4"),
      ratio: "576/972",
    },
    {
      id: "scented-wax-sachets",
      world: "marketing",
      type: "video",
      size: "tall",
      category: { ar: "ريلز", en: "Reels" },
      title: { ar: "أكياس الشمع المعطّرة", en: "Scented Wax Sachets" },
      description: {
        ar: "ريل يعرض تشكيلة أكياس الشمع المعطّرة بالورد المجفف، بألوان وأشكال مختلفة.",
        en: "A reel presenting a range of scented wax sachets with dried flowers in different colours and shapes.",
      },
      year: 2026,
      cover: MK("scented-wax-sachets.jpg"),
      video: MK("scented-wax-sachets.mp4"),
      ratio: "1080/1812",
    },

    /* ======================= العمارة والتصميم ======================= */
    {
      id: "egyptian-station-hall",
      world: "architecture",
      type: "video",
      featured: true,
      size: "wide",
      category: { ar: "جولات افتراضية", en: "Walkthroughs" },
      title: { ar: "صالة محطة بطابع مصري قديم", en: "Pharaonic-Style Station Hall" },
      description: {
        ar: "جولة افتراضية لصالة انتظار محطة بتصميم داخلي مستوحى من العمارة المصرية القديمة: نقوش هيروغليفية، أعمدة، مسلة في المنتصف، وسقف زجاجي للإضاءة الطبيعية.",
        en: "A walkthrough of a station concourse with interiors inspired by ancient Egyptian architecture — hieroglyphic reliefs, columns, a central obelisk and a glazed roof for daylight.",
      },
      year: 2026,
      cover: AR("egyptian-station-hall.jpg"),
      video: AR("egyptian-station-hall.mp4"),
      ratio: "16/9",
    },
  ],
};
