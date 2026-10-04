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
    name: { ar: "عبدالرحمن سامي", en: "Abdelrahman Samy" },
    photo: "assets/media/profile.jpg",
    role: {
      ar: "معماري وصانع محتوى بصري",
      en: "Architect · Visual Content Creator",
    },
    tagline: {
      ar: "أصمم مساحات تُعاش، وأصنع محتوى يُرى ويُحس.",
      en: "I design spaces people live in, and content people feel.",
    },
    about: {
      ar: "معماري حاصل على شهادة PMP® ومسجّل في الهيئة السعودية للمهندسين، عندي خبرة في تنفيذ والإشراف على مشاريع في السوق السعودي (المنطقة الشرقية والرياض): تصميم معماري، وإشراف موقع، ورسومات تنفيذية (Shop Drawings)، وأعمال تشطيبات وفيت-آوت بجودة عالية والتزام بالكود. وبجانب العمارة، بصنع محتوى تسويقي بصري بيجمع بين دقة الخلفية الهندسية وفهم إزاي الجمهور بيتفاعل مع المنتج: من تصوير وإنتاج فيديوهات قصيرة للمنتجات اليدوية والمطاعم، لحد عروض الـ 3D والتصوّر المعماري للمشاريع العمرانية والتجارية.",
      en: "A PMP®-certified architect registered with the Saudi Council of Engineers, with a track record of executing and supervising projects across the Saudi market (Eastern Province and Riyadh): architectural design, site supervision, detailed shop drawings, and high-quality fit-out and finishing works delivered to code. Alongside architecture, I create visual marketing content that pairs the precision of an engineering background with a commercial sense of how audiences engage with a product — from shooting and producing short videos for handmade products and restaurants to 3D visualization presentations for urban and commercial projects.",
    },
    location: { ar: "الدمام، السعودية", en: "Dammam, Saudi Arabia" },
    email: "boody172@gmail.com",
    whatsapp: "966551447472", // بدون + أو مسافات
    social: {
      linkedin: "https://www.linkedin.com/in/abdelrahman-samy-b948a5206",
      behance: "https://www.behance.net/abdelrahmansamy25",
      instagram: "",
      youtube: "",
      tiktok: "",
    },
    // value: "projects" ← بيتحسب تلقائياً من عدد المشاريع في الموقع
    stats: [
      { value: 3, suffix: "+", label: { ar: "سنين خبرة", en: "Years of experience" } },
      { value: "projects", suffix: "", label: { ar: "مشروع في البورتفوليو", en: "Portfolio projects" } },
      { value: 2, suffix: "", label: { ar: "دول اشتغلت فيها (السعودية ومصر)", en: "Countries (KSA & Egypt)" } },
    ],
    credentials: [
      { ar: "شهادة PMP®", en: "PMP® Certified" },
      { ar: "عضو الهيئة السعودية للمهندسين", en: "Saudi Council of Engineers" },
      { ar: "بكالوريوس هندسة معمارية", en: "B.Sc. Architecture Engineering" },
    ],
    experience: [
      {
        period: { ar: "أبريل 2025 — الآن", en: "Apr 2025 — Present" },
        role: { ar: "معماري ومشرف موقع", en: "Architect & Site Supervisor" },
        company: { ar: "شركة فنار العالمية العربية — المنطقة الشرقية", en: "Fanar International Arabian Co. — Eastern Province, KSA" },
        details: {
          ar: "منتزه فاطمة الراشد (الأحساء)، مدرسة الجبر لمتلازمة داون (الأحساء)، تلال قمرة صفوة والمسجد (الدمام).",
          en: "Fatmah Al-Rashed Park (Al-Ahsa), Al-Jabr School for Down Syndrome (Al-Ahsa), Tilal Qamra Safwa & Mosque (Dammam).",
        },
      },
      {
        period: { ar: "سبتمبر 2023 — نوفمبر 2024", en: "Sep 2023 — Nov 2024" },
        role: { ar: "معماري ومهندس تشطيبات", en: "Architect & Finishing Engineer" },
        company: { ar: "شركة سويلم للمقاولات — مصر", en: "Swilam Construction Co. — Egypt" },
        details: {
          ar: "إدارة أعمال الفيت-آوت والتشطيبات لمشاريع سكنية وتجارية، وعمل موديلات 3D وتصوّرات معمارية لاعتماد العملاء.",
          en: "Managed interior fit-outs and finishing works for residential and commercial projects; created 3D models and visualizations for client approvals.",
        },
      },
      {
        period: { ar: "2018 — 2023", en: "2018 — 2023" },
        role: { ar: "بكالوريوس الهندسة المعمارية", en: "Bachelor of Architecture Engineering" },
        company: { ar: "", en: "" },
        details: { ar: "", en: "" },
      },
    ],
    tools: ["AutoCAD", "3ds Max", "V-Ray", "Photoshop", "Premiere Pro", "After Effects", "Blender", "CapCut", "Higgsfield", "Kling", "Magnific"],
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
      cover: AR("pharaonic-station-01-entrance-facade.jpg"),
    },
  },

  projects: [
    /* ======================= التسويق ======================= */
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
      id: "serah-candela-brand-film",
      world: "marketing",
      type: "video",
      featured: true,
      size: "wide",
      category: { ar: "إعلانات", en: "Ads" },
      title: { ar: "Serah Candela — فيلم البراند", en: "Serah Candela — Brand Film" },
      description: {
        ar: "فيلم قصير لبراند Serah Candela بيعرض تشكيلة المنتجات: شموع البطة والدبدوب والقلادة المصنوعة يدوياً، وبيختم بهوية البراند.",
        en: "A short brand film for Serah Candela showcasing the range — duck and teddy candles and a handmade pendant — closing on the brand identity.",
      },
      client: "Serah Candela",
      year: 2026,
      cover: MK("serah-candela-brand-film.jpg"),
      video: MK("serah-candela-brand-film.mp4"),
      ratio: "16/9",
    },
    {
      id: "egyptian-station-hall",
      world: "marketing",
      type: "video",
      featured: true,
      size: "wide",
      category: { ar: "جولات افتراضية", en: "Walkthroughs" },
      title: { ar: "محطة مترو بطابع مصري قديم — فيديو 3D", en: "Ancient Egyptian-Themed Metro Station — 3D Video" },
      description: {
        ar: "جولة افتراضية لصالة انتظار محطة بتصميم داخلي مستوحى من العمارة المصرية القديمة: نقوش هيروغليفية، أعمدة، مسلة في المنتصف، وسقف زجاجي للإضاءة الطبيعية.",
        en: "A walkthrough of a station concourse with interiors inspired by ancient Egyptian architecture — hieroglyphic reliefs, columns, a central obelisk and a glazed roof for daylight.",
      },
      year: 2026,
      cover: MK("egyptian-station-hall.jpg"),
      video: MK("egyptian-station-hall.mp4"),
      ratio: "16/9",
    },
    {
      id: "scented-wax-sachets",
      world: "marketing",
      type: "video",
      size: "tall",
      category: { ar: "ريلز", en: "Reels" },
      title: { ar: "معلّقات الشمع الرخامي", en: "Marbled Wax Pendants" },
      description: {
        ar: "ريل يعرض خط معلّقات الشمع الرخامي المعطّرة بالورد المجفف، متاحة بألوان وأشكال مختلفة.",
        en: "A reel presenting a hanging line of scented marbled wax pendants with dried flowers, available in multiple colours and shapes.",
      },
      year: 2026,
      cover: MK("scented-wax-sachets.jpg"),
      video: MK("scented-wax-sachets.mp4"),
      ratio: "1080/1812",
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
      id: "villas-construction-progress",
      world: "marketing",
      type: "video",
      featured: true,
      size: "tall",
      category: { ar: "متابعة تنفيذ", en: "Construction" },
      title: { ar: "متابعة تنفيذ مشروع فيلات", en: "Villa Compound — Construction Progress" },
      description: {
        ar: "فيديو بيوثّق مراحل التنفيذ في موقع مشروع فيلات: استكمال المباني (البلوك)، أعمال اللياسة في فيلات 22 و52 و88، ونظافة الموقع العام.",
        en: "Documenting site progress on a villa compound: blockwork completion, plastering on villas 22, 52 and 88, and general site cleaning.",
      },
      year: 2026,
      cover: MK("villas-construction-progress.jpg"),
      video: MK("villas-construction-progress.mp4"),
      ratio: "9/16",
    },
    {
      id: "subway-arabia",
      world: "marketing",
      type: "image",
      category: { ar: "سوشيال ميديا", en: "Social Media" },
      title: { ar: "صب واي العربية — محتوى سوشيال ميديا", en: "Subway Arabia — Social Content" },
      description: {
        ar: "محتوى سوشيال ميديا لصب واي العربية: إطلاق ساندوتش سبايسي تشيكن ميلت، والكوكيز وهي طازة خارجة من الفرن.",
        en: "Social content for Subway Arabia: the Spicy Chicken Melt launch and cookies fresh out of the oven.",
      },
      client: "Subway Arabia",
      year: 2026,
      gallery: [MK("subway-spicy-chicken-melt.jpg"), MK("subway-cookies.jpg")],
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
      id: "meat-moot-ribs",
      world: "marketing",
      type: "image",
      size: "tall",
      category: { ar: "تصوير منتجات", en: "Product Shoot" },
      title: { ar: "ميت موت — ريبس مدخّنة", en: "Meat Moot — Smoked Ribs" },
      description: {
        ar: "تصميم بوست لمطعم ميت موت يعرض الريبس المدخّنة بإضاءة وتنسيق يبرز تفاصيل الأكل.",
        en: "A post for Meat Moot showcasing smoked ribs with lighting and styling that bring out every detail.",
      },
      client: "Meat Moot",
      year: 2026,
      gallery: [MK("meat-moot-ribs.jpg")],
    },
    {
      id: "specialty-coffee-post",
      world: "marketing",
      type: "image",
      size: "tall",
      category: { ar: "سوشيال ميديا", en: "Social Media" },
      title: { ar: "بوست قهوة مختصة", en: "Specialty Coffee Post" },
      description: {
        ar: "بوست سوشيال ميديا بأسلوب الألوان المائية لقهوة مختصة: «Crafted with passion for every sip».",
        en: "A watercolour-style social post for a specialty coffee brand: “Crafted with passion for every sip”.",
      },
      year: 2026,
      gallery: [MK("specialty-coffee-post.jpg")],
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


    /* ======================= العمارة والتصميم ======================= */
    {
      id: "pharaonic-train-station",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "مشاريع عامة", en: "Public Projects" },
      title: { ar: "محطة مترو بطابع مصري قديم", en: "Ancient Egyptian-Themed Metro Station" },
      description: {
        ar: "تصميم معماري وداخلي لمحطة مترو مستوحاة من العمارة المصرية القديمة: مدخل بأعمدة لوتس ومسلة في المنتصف وتماثيل أنوبيس، وصالة انتظار بسقف زجاجي للإضاءة الطبيعية، وحوائط بنقوش هيروغليفية وجداريات ملوّنة. التصميم بيدمج الطابع التاريخي مع خدمات المحطة الحديثة: شبابيك التذاكر، والبوابات الإلكترونية، والـ ATM، والكوفي شوب، وكشك الصحافة. المشروع فيه كمان منظور علوي للمحطة وجولة فيديو داخلها.",
        en: "Architecture and interior design for a metro station inspired by ancient Egyptian architecture: a lotus-column entrance with a central obelisk and Anubis statues, a glass-roofed concourse for daylight, and walls carrying hieroglyphic reliefs and painted murals. The design blends the historic character with modern station services — ticket counters, e-gates, ATMs, a coffee shop and a press kiosk. Includes a top view and a video walkthrough.",
      },
      year: 2026,
      gallery: [
        { src: AR("pharaonic-station-01-entrance-facade.jpg"), caption: { ar: "المدخل الرئيسي", en: "Main entrance" } },
        { src: AR("pharaonic-station-02-concourse-press.jpg"), caption: { ar: "صالة الانتظار وكشك الصحافة", en: "Concourse & press kiosk" } },
        { src: AR("pharaonic-station-03-concourse-coffee-shop.jpg"), caption: { ar: "الصالة والكوفي شوب والبوابات", en: "Concourse, coffee shop & gates" } },
        { src: AR("pharaonic-station-04-ticket-hall-atm.jpg"), caption: { ar: "شبابيك التذاكر والـ ATM", en: "Ticket hall & ATM center" } },
        { src: AR("pharaonic-station-05-gates-colonnade.jpg"), caption: { ar: "الأعمدة والبوابات الإلكترونية", en: "Colonnade & e-gates" } },
        { src: AR("pharaonic-station-06-coffee-shop.jpg"), caption: { ar: "الكوفي شوب", en: "Coffee shop" } },
        { src: AR("pharaonic-station-07-top-view.jpg"), caption: { ar: "منظور علوي للمحطة", en: "Top view" } },
        { video: AR("pharaonic-station-walkthrough.mp4"), poster: AR("pharaonic-station-walkthrough.jpg"), ratio: "1284/722", caption: { ar: "جولة فيديو داخل المحطة", en: "Video walkthrough" } },
      ],
    },
    {
      id: "parametric-building",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "واجهات خارجية", en: "Exterior Facades" },
      title: { ar: "مبنى بتصميم انسيابي (بارامتريك)", en: "Fluid Parametric Building" },
      description: {
        ar: "تصميم واجهة لمبنى بتشكيل انسيابي: غلاف منحني متصل بيرتفع من الأرض ويلف على المبنى، وواجهة زجاجية كبيرة بقطاعات رأسية، ودور أرضي شفاف مفتوح على الشارع. المنظورين بيعرضوا المبنى في سياقه العمراني بإضاءة النهار وإضاءة الغروب.",
        en: "A façade design for a building with a fluid form: a continuous curved shell rising from the ground and wrapping the volume, a large glazed curtain wall, and a transparent ground floor open to the street. The two views show it in its urban context in daylight and at dusk.",
      },
      year: 2026,
      gallery: [
        { src: AR("parametric-building-01-street-view.jpg"), caption: { ar: "منظور من الشارع", en: "Street view" } },
        { src: AR("parametric-building-02-dusk-view.jpg"), caption: { ar: "منظور وقت الغروب", en: "Dusk view" } },
      ],
    },
    {
      id: "residential-building",
      world: "architecture",
      type: "image",
      category: { ar: "واجهات خارجية", en: "Exterior Facades" },
      title: { ar: "عمارة سكنية — تصميم واجهات", en: "Residential Building — Façade Design" },
      description: {
        ar: "تصميم واجهات لعمارة سكنية أربع أدوار على ناصية: كتلة مدخل مركزية بتكسية حجر فاتح ومدخل بإطار بارز، وجناح بشبابيك بكرانيش، وجناح ببلكونات غاطسة بدرابزين معدني، مع سور منخفض وتنسيق للرصيف. المشروع معروض بواجهة أمامية ومنظور جانبي ومنظور علوي.",
        en: "Façade design for a four-storey corner residential building: a central entrance volume clad in light stone with a framed doorway, one wing with corniced windows and another with recessed balconies and metal railings, plus a low boundary wall and streetscape. Shown as a front elevation, a perspective and an aerial view.",
      },
      year: 2026,
      gallery: [
        { src: AR("residential-building-01-front-elevation.jpg"), caption: { ar: "الواجهة الأمامية", en: "Front elevation" } },
        { src: AR("residential-building-02-perspective.jpg"), caption: { ar: "منظور جانبي", en: "Perspective" } },
        { src: AR("residential-building-03-aerial-view.jpg"), caption: { ar: "منظور علوي", en: "Aerial view" } },
      ],
    },
    {
      id: "villa-exterior-pool",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "واجهات خارجية", en: "Exterior Facades" },
      title: { ar: "فيلا مودرن — الواجهة والبيسين", en: "Modern Villa — Façade & Pool" },
      description: {
        ar: "منظور ليلي للواجهة الخلفية لفيلا مودرن: كتلة علوية بارزة فوق تراس مغطّى بواجهات زجاج من الأرض للسقف، وحمام سباحة، وتنسيق حدائق بإضاءة ليلية.",
        en: "A night view of a modern villa's rear façade: a cantilevered upper volume over a covered terrace with floor-to-ceiling glazing, a pool, and landscaping with night lighting.",
      },
      year: 2026,
      gallery: [
        { src: AR("villa-01-exterior-pool-night.jpg"), caption: { ar: "الواجهة والبيسين — منظور ليلي", en: "Façade & pool at night" } },
      ],
    },
    {
      id: "organic-pavilion",
      world: "architecture",
      type: "image",
      category: { ar: "واجهات خارجية", en: "Exterior Facades" },
      title: { ar: "مبنى عضوي بقشرة مثقّبة", en: "Organic Perforated Shell Building" },
      description: {
        ar: "تصميم معماري لمبنى بتشكيل عضوي: قشرة متموّجة واحدة بتغطي الكتلة كلها بتكسية فسيفساء فاتحة، وفتحات سداسية بأحجام متدرّجة بتدخّل الإضاءة الطبيعية، وواجهة زجاجية منحنية في الدور الأرضي بتفتح على الشارع.",
        en: "An organic architectural form: a single undulating shell covering the whole volume in light mosaic cladding, hexagonal openings in graded sizes bringing in daylight, and a curved glazed ground-floor façade opening onto the street.",
      },
      year: 2026,
      gallery: [{ src: AR("organic-pavilion-street-view.jpg"), caption: { ar: "منظور من الشارع", en: "Street view" } }],
    },
    {
      id: "modern-interior-design",
      world: "architecture",
      type: "image",
      size: "wide",
      featured: true,
      category: { ar: "مجالس", en: "Majlis & Reception" },
      title: { ar: "تصميم داخلي مودرن — ريسبشن وسفرة", en: "Modern Interior — Reception & Dining" },
      description: {
        ar: "تصميم داخلي معاصر بألوان محايدة وتباين بين الرخام الأسود والخشب والحوائط البيضاء ببانوهات كلاسيك. التصميم بيجمع منطقة جلوس، وسفرة بإضاءة معلّقة مميزة، وحائط ديكوري بنقشة ثلاثية الأبعاد ومراية دائرية، مع سقف معلّق بسبوتات مغناطيسية وشرائح خشب بإضاءة مخفية.",
        en: "A contemporary interior in a neutral palette, contrasting black marble, warm wood and white classic wall panelling. It brings together a seating area, a dining space with sculptural pendant lighting, and a feature wall with a 3D pattern and round mirror, under a dropped ceiling with track spots and backlit wood slats.",
      },
      year: 2026,
      cover: AR("modern-interior-05-dining-feature-lighting.jpg"),
      gallery: [
        { src: AR("modern-interior-01-seating-area.jpg"), caption: { ar: "منطقة الجلوس", en: "Seating area" } },
        { src: AR("modern-interior-02-dining-view.jpg"), caption: { ar: "منظور السفرة", en: "Dining view" } },
        { src: AR("modern-interior-03-dining-room.jpg"), caption: { ar: "السفرة", en: "Dining room" } },
        { src: AR("modern-interior-04-reception-feature-wall.jpg"), caption: { ar: "الريسبشن والحائط الديكوري", en: "Reception & feature wall" } },
        { src: AR("modern-interior-05-dining-feature-lighting.jpg"), caption: { ar: "السفرة وحائط الخشب بالإضاءة", en: "Dining & backlit wood wall" } },
      ],
    },
    {
      id: "majlis-sea-view",
      world: "architecture",
      type: "image",
      size: "wide",
      category: { ar: "مجالس", en: "Majlis & Reception" },
      title: { ar: "مجلس بإطلالة على البحر", en: "Sea-View Majlis" },
      description: {
        ar: "مجلس بإطلالة مفتوحة على البحر: واجهات زجاج بإطارات خشب، وحائط حجر طبيعي، وجلسة كنب على شكل L بألوان ترابية هادئة، وإضاءة مخفية في السقف.",
        en: "A majlis opening onto the sea: timber-framed full-height glazing, a natural stone wall, an L-shaped sofa in calm earthy tones and concealed ceiling lighting.",
      },
      year: 2026,
      gallery: [
        { src: AR("villa-02-living-sea-view.jpg"), caption: { ar: "المجلس بإطلالة على البحر", en: "Sea-view majlis" } },
      ],
    },
    {
      id: "master-bedroom-design",
      world: "architecture",
      type: "image",
      size: "wide",
      featured: true,
      category: { ar: "غرف ماستر", en: "Master Bedrooms" },
      title: { ar: "تصميم داخلي — ماستر بيدروم", en: "Master Bedroom Interior" },
      description: {
        ar: "تصميم ماستر بيدروم فاخر: خلفية سرير بحجر طبيعي أبيض بين حوائط خشب داكن، وبانوهات خشب متموّجة في الأركان، ونجفة بحلقات معلّقة مضيئة، ودريسنج بأبواب زجاج فاميه وإضاءة داخلية، وركن تسريحة بحائط وردي هادئ ومراية دائرية، مع سقف معلّق بإضاءة مخفية وأرضية باركيه.",
        en: "A luxurious master bedroom: a white natural-stone headboard wall between dark wood panels, curved timber slats in the corners, a suspended ring chandelier, a dressing area behind smoked-glass doors with internal lighting, and a vanity corner on a soft blush wall with a round mirror — under a dropped ceiling with concealed lighting, on parquet flooring.",
      },
      year: 2026,
      gallery: [
        { src: AR("master-bedroom-01-bed-wall.jpg"), caption: { ar: "حائط السرير", en: "Bed wall" } },
        { src: AR("master-bedroom-02-bed-wardrobe.jpg"), caption: { ar: "السرير والدريسنج", en: "Bed & dressing area" } },
        { src: AR("master-bedroom-03-vanity-wall.jpg"), caption: { ar: "ركن التسريحة", en: "Vanity wall" } },
        { src: AR("master-bedroom-04-window-corner.jpg"), caption: { ar: "ركن الشباك", en: "Window corner" } },
      ],
    },
    {
      id: "modern-bedroom-design",
      world: "architecture",
      type: "image",
      category: { ar: "غرف ماستر", en: "Master Bedrooms" },
      title: { ar: "تصميم داخلي — غرفة نوم مودرن", en: "Modern Bedroom Interior" },
      description: {
        ar: "تصميم غرفة نوم مودرن بألوان رمادية هادئة: دولاب بأبواب زجاج فاميه وإضاءة داخلية، ووحدة تلفزيون بخلفية خشب، وتسريحة مكتب بمراية دائرية مضيئة، وسقف معلّق بإضاءة مخفية على الأطراف، وأرضية رخام فاتح.",
        en: "A modern bedroom in calm greys: a smoked-glass wardrobe with internal lighting, a TV unit on a wood-slat backdrop, a desk-vanity with a backlit round mirror, a dropped ceiling with concealed perimeter lighting, and light marble flooring.",
      },
      year: 2026,
      gallery: [
        { src: AR("bedroom-01-room-overview.jpg"), caption: { ar: "منظور عام للغرفة", en: "Room overview" } },
        { src: AR("bedroom-02-wardrobe-tv-wall.jpg"), caption: { ar: "الدولاب الزجاج ووحدة التلفزيون", en: "Glass wardrobe & TV wall" } },
        { src: AR("bedroom-03-desk-bed.jpg"), caption: { ar: "التسريحة والسرير", en: "Vanity desk & bed" } },
      ],
    },
    {
      id: "master-cane-wardrobe",
      world: "architecture",
      type: "image",
      category: { ar: "غرف ماستر", en: "Master Bedrooms" },
      title: { ar: "غرفة ماستر — دولاب شبك مقوّس", en: "Master Bedroom — Arched Cane Wardrobe" },
      description: {
        ar: "غرفة نوم ماستر بدولاب أبوابه شبك بتصميم مقوّس، وحوائط خشب داكن وخلفية سرير ببانوهات فاتحة، ونجفة حلقات معلّقة، وبنش عند السرير بلون مستردة.",
        en: "A master bedroom with an arched cane-mesh wardrobe, dark wood walls and a light panelled headboard wall, a suspended ring chandelier and a mustard bench at the foot of the bed.",
      },
      year: 2026,
      gallery: [
        { src: AR("villa-03-bedroom-cane-wardrobe.jpg"), caption: { ar: "غرفة الماستر", en: "Master bedroom" } },
      ],
    },
    {
      id: "kids-twin-room",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "غرف أطفال", en: "Kids' Rooms" },
      title: { ar: "غرفة أطفال بسريرين", en: "Twin Kids' Room" },
      description: {
        ar: "غرفة أطفال بسريرين: حائط شرائح خشب بإضاءة مخفية خلف السراير، ودولاب بأبواب زجاج داكن ورفوف مفتوحة، وركن مذاكرة بمكتبين وتسريحة بمراية بيضاوية.",
        en: "A twin kids' room: a backlit timber-slat wall behind the beds, a dark-glass wardrobe with open shelving, and a study corner with two desks and a vanity with an oval mirror.",
      },
      year: 2026,
      gallery: [
        { src: AR("villa-04-kids-room-twin-beds.jpg"), caption: { ar: "السريرين وحائط الشرائح", en: "Twin beds & slat wall" } },
        { src: AR("villa-05-kids-room-desk.jpg"), caption: { ar: "منظور الشباك", en: "Window view" } },
        { src: AR("villa-06-kids-room-study.jpg"), caption: { ar: "ركن المذاكرة", en: "Study corner" } },
        { src: AR("villa-07-kids-room-wardrobe.jpg"), caption: { ar: "حائط الدولاب", en: "Wardrobe wall" } },
      ],
    },
    {
      id: "boys-bedroom",
      world: "architecture",
      type: "image",
      category: { ar: "غرف أطفال", en: "Kids' Rooms" },
      title: { ar: "غرفة ولد بمكتب ومكتبة مدمجة", en: "Boy's Bedroom with Built-in Study" },
      description: {
        ar: "غرفة ولد بوحدة مكتب ومكتبة مدمجة بإضاءة مخفية، ودولاب حائط بأبواب ملساء، وسرير بإضاءة سفلية، بألوان رمادي وأزرق هادي.",
        en: "A boy's bedroom with a built-in desk and shelving with concealed lighting, a flush-door wall wardrobe and a bed with under-glow lighting, in soft grey and blue.",
      },
      year: 2026,
      gallery: [
        { src: AR("apartment-01-boys-bedroom.jpg"), caption: { ar: "غرفة الولد", en: "Boy's bedroom" } },
      ],
    },
    {
      id: "marble-kitchen",
      world: "architecture",
      type: "image",
      category: { ar: "مطابخ مودرن", en: "Modern Kitchens" },
      title: { ar: "مطبخ مودرن بالرخام", en: "Modern Marble Kitchen" },
      description: {
        ar: "مطبخ مودرن بخلفية رخام أبيض بعروق دهبي وحوائط رخام رمادي، ودواليب بيضاء وبيج، وشفاط جزيرة أسطواني، وفرن مدمج، وإضاءة مخفية أسفل الدواليب العلوية.",
        en: "A modern kitchen with a gold-veined white marble splashback and grey marble walls, white and beige cabinetry, a cylindrical island hood, built-in ovens and under-cabinet lighting.",
      },
      year: 2026,
      gallery: [
        { src: AR("apartment-02-marble-kitchen.jpg"), caption: { ar: "المطبخ", en: "Kitchen" } },
      ],
    },
    {
      id: "kitchen-breakfast-bar",
      world: "architecture",
      type: "image",
      category: { ar: "مطابخ مودرن", en: "Modern Kitchens" },
      title: { ar: "مطبخ مفتوح ببار إفطار", en: "Open Kitchen with Breakfast Bar" },
      description: {
        ar: "مطبخ مفتوح على شكل U ببار إفطار بخشب فاتح وسطح رخام داكن، وفتحة على الصالة، وكراسي بار.",
        en: "An open U-shaped kitchen with a light-wood breakfast bar and dark marble top, a pass-through to the living area, and bar stools.",
      },
      year: 2026,
      gallery: [
        { src: AR("apartment-05-kitchen-breakfast-bar.jpg"), caption: { ar: "المطبخ وبار الإفطار", en: "Kitchen & breakfast bar" } },
      ],
    },
    {
      id: "bathroom-design",
      world: "architecture",
      type: "image",
      size: "wide",
      category: { ar: "حمامات", en: "Bathrooms" },
      title: { ar: "حمام مودرن بالرخام", en: "Modern Marble Bathroom" },
      description: {
        ar: "حمام مودرن: حوض على وحدة معلّقة ومراية دائرية مضيئة، وتواليت معلّق على حائط رخام أخضر داكن بعروق دهبي، وشاور بنيش رفوف مدمج وخلاطات دهبي.",
        en: "A modern bathroom: a vessel basin on a floating vanity with a backlit round mirror, a wall-hung WC on gold-veined dark green marble, and a shower with a built-in niche and brushed-gold fittings.",
      },
      year: 2026,
      gallery: [
        { src: AR("apartment-03-bathroom-vanity.jpg"), caption: { ar: "الحوض والتواليت", en: "Vanity & WC" } },
        { src: AR("apartment-04-bathroom-shower.jpg"), caption: { ar: "الشاور", en: "Shower" } },
      ],
    },
    {
      id: "door-color-scheme",
      world: "architecture",
      type: "image",
      category: { ar: "ألوان وتشطيبات", en: "Colour & Finishes" },
      title: { ar: "مدرسة الجبر لمتلازمة داون — ألوان الأبواب", en: "Al-Jabr School for Down Syndrome — Door Colours" },
      description: {
        ar: "لوحة ألوان الأبواب لمدرسة الجبر لمتلازمة داون بالأحساء (مشروع منفّذ): تعديلات تصميم معماري مع تصميم أبواب مخصّص ومواصفات ألوان RAL صارمة مناسبة لاحتياجات المنشأة — كل نوع فراغ له لون RAL مميز يسهّل التعرّف عليه — غرفة الأنشطة (RAL 1034 أصفر باستيل)، الفصل (RAL 5024 أزرق باستيل)، غرفة الراحة (RAL 1001 بيج)، غرفة العلاج (RAL 6019 أخضر باستيل)، الحمامات (RAL 7032)، وغرف الـ IT والكهرباء (RAL 9023)، مع أبواب ألومنيوم RAL 9011 جرافيت. اللوحة بتربط كل لون بصورة الفراغ الفعلية في الموقع والممرات.",
        en: "The door colour board for Al-Jabr School for Down Syndrome in Al-Ahsa (completed project): architectural design modifications with custom door designs and strict RAL colour specifications tailored to the facility's needs — each space type gets its own RAL colour for easy wayfinding — activity room (RAL 1034 pastel yellow), classroom (RAL 5024 pastel blue), rest room (RAL 1001 beige), therapy room (RAL 6019 pastel green), bathrooms (RAL 7032) and IT & electrical rooms (RAL 9023), with RAL 9011 graphite aluminium doors. Each colour is tied to on-site photos of the actual rooms and corridors.",
      },
      client: { ar: "مدرسة الجبر لمتلازمة داون — الأحساء", en: "Al-Jabr School for Down Syndrome — Al-Ahsa" },
      year: 2026,
      gallery: [AR("door-color-scheme-board.jpg")],
    },
  ],
};
