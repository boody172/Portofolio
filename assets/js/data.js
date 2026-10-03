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
      client: "Serah Candela",
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

    {
      id: "scented-candles-campaign",
      world: "marketing",
      type: "video",
      featured: true,
      size: "tall",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "حملة الشموع المعطّرة", en: "Scented Candles Campaign" },
      description: {
        ar: "سلسلة إعلانات بطابع دافئ لشموع معطّرة بالفواكه: لحظة الإشعال، تفاصيل الشمع، وتجربة الريحة. الحملة فيها فيديوهين: الفراولة والتوت.",
        en: "A warm-toned ad series for fruit-scented candles — the lighting moment, wax details and the scent experience. Two films: strawberry and berry.",
      },
      client: "Serah Candela",
      year: 2026,
      cover: MK("strawberry-candle-ad.jpg"),
      video: MK("strawberry-candle-ad.mp4"),
      ratio: "1080/1700",
      // فيديوهات إضافية في نفس المشروع (بتظهر بالترتيب)
      gallery: [
        { video: MK("berry-candle-ad.mp4"), poster: MK("berry-candle-ad.jpg"), ratio: "1080/1700" },
      ],
    },
    {
      id: "sweet-sour-food-reel",
      world: "marketing",
      type: "video",
      size: "wide",
      category: { ar: "تصوير أكل", en: "Food Content" },
      title: { ar: "ريل أكل — سويت آند ساور", en: "Sweet & Sour Food Reel" },
      description: {
        ar: "فيديو أكل بإضاءة سينمائية داكنة يبرز أطباق النودلز والسويت آند ساور بشكل يفتح النفس.",
        en: "Moody, cinematic food content that makes the noodles and sweet & sour dishes irresistible.",
      },
      year: 2026,
      cover: MK("sweet-sour-food-reel.jpg"),
      video: MK("sweet-sour-food-reel.mp4"),
      ratio: "1284/628",
    },
    {
      id: "dunkin-branch-openings",
      world: "marketing",
      type: "image",
      featured: true,
      size: "tall",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "دانكن — إعلانات افتتاح الفروع", en: "Dunkin' — Branch Opening Ads" },
      description: {
        ar: "تصاميم إعلانات افتتاح فروع دانكن: فرع كورنيش الدمام مع عرض دونات مجانية لأول ١٠٠ عميل، وفرع مستشفى د. سليمان الحبيب مع قهوة ودونات مجانية لمدة ساعتين من الافتتاح.",
        en: "Branch-opening ads for Dunkin': Dammam Corniche with free donuts for the first 100 customers, and Dr. Sulaiman Al Habib Hospital with free coffee and donuts for two hours after opening.",
      },
      client: "Dunkin'",
      year: 2026,
      gallery: [MK("dunkin-dammam-corniche.jpg"), MK("dunkin-sulaiman-alhabib.jpg")],
    },
    {
      id: "kofa-broasted-combo",
      world: "marketing",
      type: "image",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "كوفة — بروستد مع كومبو", en: "Kofa — Broasted Combo" },
      description: {
        ar: "تصميم إعلان لمطعم كوفة بشعار «طعم الأصالة» لعرض وجبة البروستد الكومبو.",
        en: "An ad for Kofa restaurant under the line “the taste of authenticity”, promoting the broasted combo meal.",
      },
      client: { ar: "كوفة", en: "Kofa" },
      year: 2026,
      gallery: [MK("kofa-broasted-combo.jpg")],
    },
    {
      id: "half-million-padel-drink",
      world: "marketing",
      type: "image",
      category: { ar: "تصوير منتجات", en: "Product Shoot" },
      title: { ar: "½M — مشروب على ملعب البادل", en: "½M — Courtside Drink" },
      description: {
        ar: "صورة منتج لمشروب ½M في قلب ملعب بادل وسط الكور، فكرة بتربط البراند بالرياضة والطاقة.",
        en: "A product visual placing the ½M drink at the centre of a padel court among the balls — tying the brand to sport and energy.",
      },
      client: "½M",
      year: 2026,
      gallery: [MK("half-million-padel-drink.jpg")],
    },
    {
      id: "subway-cookies",
      world: "marketing",
      type: "image",
      category: { ar: "سوشيال ميديا", en: "Social Media" },
      title: { ar: "صب واي — كوكيز طازة", en: "Subway — Fresh-Baked Cookies" },
      description: {
        ar: "محتوى سوشيال ميديا لصب واي العربية يعرض الكوكيز وهي خارجة من الفرن.",
        en: "Social content for Subway Arabia showing cookies fresh out of the oven.",
      },
      client: "Subway Arabia",
      year: 2026,
      gallery: [MK("subway-cookies.jpg")],
    },
    {
      id: "coffee-cup-branding",
      world: "marketing",
      type: "image",
      category: { ar: "هوية بصرية", en: "Branding" },
      title: { ar: "هوية كوفي شوب — تصميم الكوب", en: "Coffee Shop Identity — Cup Design" },
      description: {
        ar: "تطبيق لوجو الكوفي شوب على كوب القهوة والكم الكرافت داخل أجواء المحل.",
        en: "The coffee shop logo applied to the cup and kraft sleeve, shown in the café setting.",
      },
      year: 2026,
      gallery: [MK("coffee-cup-branding.jpg")],
    },
    {
      id: "specialty-coffee-post",
      world: "marketing",
      type: "image",
      category: { ar: "سوشيال ميديا", en: "Social Media" },
      title: { ar: "بوست قهوة مختصة", en: "Specialty Coffee Post" },
      description: {
        ar: "بوست سوشيال ميديا بأسلوب الألوان المائية لقهوة مختصة: «Crafted with passion for every sip».",
        en: "A watercolour-style social post for a specialty coffee brand: “Crafted with passion for every sip”.",
      },
      year: 2026,
      gallery: [MK("specialty-coffee-post.jpg")],
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
