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
      cover: AR("pharaonic-station-01-entrance-facade.jpg"),
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
      id: "meat-moot-ribs",
      world: "marketing",
      type: "image",
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
      world: "marketing",
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
      cover: MK("egyptian-station-hall.jpg"),
      video: MK("egyptian-station-hall.mp4"),
      ratio: "16/9",
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
      id: "pharaonic-train-station",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
      title: { ar: "محطة قطار بطابع مصري قديم", en: "Pharaonic-Style Train Station" },
      description: {
        ar: "تصميم معماري وداخلي لمحطة قطار مستوحاة من العمارة المصرية القديمة: مدخل بأعمدة لوتس ومسلة في المنتصف وتماثيل أنوبيس، وصالة انتظار بسقف زجاجي للإضاءة الطبيعية، وحوائط بنقوش هيروغليفية وجداريات ملوّنة. التصميم بيدمج الطابع التاريخي مع خدمات المحطة الحديثة: شبابيك التذاكر، والبوابات الإلكترونية، والـ ATM، والكوفي شوب، وكشك الصحافة. المشروع فيه كمان منظور علوي للمحطة وجولة فيديو داخلها.",
        en: "Architecture and interior design for a train station inspired by ancient Egyptian architecture: a lotus-column entrance with a central obelisk and Anubis statues, a glass-roofed concourse for daylight, and walls carrying hieroglyphic reliefs and painted murals. The design blends the historic character with modern station services — ticket counters, e-gates, ATMs, a coffee shop and a press kiosk. Includes a top view and a video walkthrough.",
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
      id: "modern-interior-design",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
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
      id: "door-color-scheme",
      world: "architecture",
      type: "image",
      category: { ar: "ألوان وتشطيبات", en: "Colour & Finishes" },
      title: { ar: "لوحة ألوان الأبواب — توزيع حسب الفراغ", en: "Door Colour Scheme — Coded by Space" },
      description: {
        ar: "لوحة اختيار ألوان الأبواب لمبنى تعليمي/علاجي: كل نوع فراغ له لون RAL مميز يسهّل التعرّف عليه — غرفة الأنشطة (RAL 1034 أصفر باستيل)، الفصل (RAL 5024 أزرق باستيل)، غرفة الراحة (RAL 1001 بيج)، غرفة العلاج (RAL 6019 أخضر باستيل)، الحمامات (RAL 7032)، وغرف الـ IT والكهرباء (RAL 9023)، مع أبواب ألومنيوم RAL 9011 جرافيت. اللوحة بتربط كل لون بصورة الفراغ الفعلية في الموقع والممرات.",
        en: "A door colour board for an educational/therapy building where each space type gets its own RAL colour for easy wayfinding — activity room (RAL 1034 pastel yellow), classroom (RAL 5024 pastel blue), rest room (RAL 1001 beige), therapy room (RAL 6019 pastel green), bathrooms (RAL 7032) and IT & electrical rooms (RAL 9023), with RAL 9011 graphite aluminium doors. Each colour is tied to on-site photos of the actual rooms and corridors.",
      },
      year: 2026,
      gallery: [AR("door-color-scheme-board.jpg")],
    },
    {
      id: "modern-bedroom-design",
      world: "architecture",
      type: "image",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
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
      id: "parametric-building",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "تصميم معماري", en: "Architecture" },
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
      id: "organic-pavilion",
      world: "architecture",
      type: "image",
      size: "wide",
      category: { ar: "تصميم معماري", en: "Architecture" },
      title: { ar: "مبنى عضوي بقشرة مثقّبة", en: "Organic Perforated Shell Building" },
      description: {
        ar: "تصميم معماري لمبنى بتشكيل عضوي: قشرة متموّجة واحدة بتغطي الكتلة كلها بتكسية فسيفساء فاتحة، وفتحات سداسية بأحجام متدرّجة بتدخّل الإضاءة الطبيعية، وواجهة زجاجية منحنية في الدور الأرضي بتفتح على الشارع.",
        en: "An organic architectural form: a single undulating shell covering the whole volume in light mosaic cladding, hexagonal openings in graded sizes bringing in daylight, and a curved glazed ground-floor façade opening onto the street.",
      },
      year: 2026,
      gallery: [{ src: AR("organic-pavilion-street-view.jpg"), caption: { ar: "منظور من الشارع", en: "Street view" } }],
    },
    {
      id: "residential-building",
      world: "architecture",
      type: "image",
      category: { ar: "تصميم معماري", en: "Architecture" },
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
      id: "master-bedroom-design",
      world: "architecture",
      type: "image",
      featured: true,
      category: { ar: "تصميم داخلي", en: "Interior Design" },
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
      id: "modern-villa",
      world: "architecture",
      type: "image",
      featured: true,
      size: "wide",
      category: { ar: "تصميم داخلي", en: "Interior Design" },
      title: { ar: "فيلا مودرن — واجهة وتصميم داخلي", en: "Modern Villa — Exterior & Interiors" },
      description: {
        ar: "مشروع فيلا مودرن من الخارج للداخل: منظور ليلي للواجهة الخلفية بحمام سباحة وتراس مغطّى بواجهات زجاج، وليفنج بإطلالة على البحر بحوائط حجر طبيعي وإطارات خشب، وغرفة نوم بدولاب بأبواب شبك مقوّسة وخلفية خشب، وغرفة أطفال بسريرين وحائط شرائح بإضاءة مخفية وركن مذاكرة.",
        en: "A modern villa from outside in: a night view of the rear façade with pool and glazed covered terrace, a sea-view living room with natural stone walls and timber frames, a bedroom with an arched cane-mesh wardrobe and wood backdrop, and a twin kids' room with a backlit slatted wall and a study corner.",
      },
      year: 2026,
      cover: AR("villa-01-exterior-pool-night.jpg"),
      gallery: [
        { src: AR("villa-01-exterior-pool-night.jpg"), caption: { ar: "الواجهة والبيسين — منظور ليلي", en: "Exterior & pool at night" } },
        { src: AR("villa-02-living-sea-view.jpg"), caption: { ar: "الليفنج بإطلالة على البحر", en: "Sea-view living room" } },
        { src: AR("villa-03-bedroom-cane-wardrobe.jpg"), caption: { ar: "غرفة النوم", en: "Bedroom" } },
        { src: AR("villa-04-kids-room-twin-beds.jpg"), caption: { ar: "غرفة الأطفال", en: "Kids' room" } },
        { src: AR("villa-05-kids-room-desk.jpg"), caption: { ar: "غرفة الأطفال — منظور الشباك", en: "Kids' room — window view" } },
        { src: AR("villa-06-kids-room-study.jpg"), caption: { ar: "غرفة الأطفال — ركن المذاكرة", en: "Kids' room — study corner" } },
        { src: AR("villa-07-kids-room-wardrobe.jpg"), caption: { ar: "غرفة الأطفال — حائط الدولاب", en: "Kids' room — wardrobe wall" } },
      ],
    },
  ],
};
