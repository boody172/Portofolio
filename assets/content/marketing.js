/* ============================================================
   قسم التسويق
   ------------------------------------------------------------
   ▸ حط ملفات الصور والفيديو في:  assets/media/marketing/
   ▸ وفي "media" اكتب اسم الملف بس، بنفس ترتيب ما عايزه يظهر.

   مشروع جديد = انسخ أي بلوك { ... } تحت وعدّل فيه.
   حذف مشروع  = امسح البلوك بتاعه.
   إخفاء مؤقت = ضيف  hidden: true,
   ترتيب الظهور = ترتيب البلوكات في الملف.

   الحقول:
     id          اسم إنجليزي قصير بدون مسافات (لازم يكون مختلف لكل مشروع)
     category    واحد من مفاتيح "categories" تحت (أو اكتب اسم تصنيف جديد بالعربي)
     title       اسم المشروع
     description وصف (اختياري)
     client      العميل (اختياري)
     year        السنة (اختياري)
     media       الصور والفيديوهات بالترتيب:
                   "photo.jpg"
                   "video.mp4"                     ← صورة الغلاف بتتاخد من video.jpg لو موجودة
                   "https://youtu.be/xxxx"         ← YouTube / Vimeo / Google Drive شغالين
                   { file: "photo.jpg", caption: { ar: "…", en: "…" } }   ← بتعليق تحت الصورة
     cover       صورة الكارت (اختياري، الافتراضي أول صورة في media)
     size        "wide" كارت عريض | "tall" كارت طويل (للريلز) | سيبه فاضي = عادي
     featured    true = يظهر في "أعمال مختارة" بالصفحة الرئيسية

   أول عنصر في media بيحدد المشروع:
     فيديو → يظهر في تبويب الفيديوهات، صورة → يظهر في تبويب الصور
     (ولو المشروع فيه الاتنين بيظهر في التبويبين)
   ============================================================ */

window.MARKETING = {
  title: { ar: "التسويق وصناعة المحتوى", en: "Marketing & content" },
  short: { ar: "تسويق", en: "Marketing" },
  intro: {
    ar: "فيديوهات منتجات، محتوى مطاعم، تصاميم إعلانية، وتوثيق مشاريع عقارية. شغل اتعمل لبراندات حقيقية واتنشر.",
    en: "Product videos, restaurant content, ad designs and real-estate progress films. Work made for real brands, and published.",
  },
  cover: "luxury-candles-ad.jpg",
  coverVideo: "teddy-candles-studio.mp4", // فيديو بيشتغل في الخلفية لما الماوس يقف على القسم
  showreel: "luxury-candles-ad.mp4", // زرار "شاهد الشوريل"

  // التصنيفات (أزرار الفلتر) بالترتيب
  categories: {
    product: { ar: "إعلانات منتجات", en: "Product ads" },
    food: { ar: "مطاعم وأكل", en: "Food & restaurants" },
    designs: { ar: "تصاميم إعلانية", en: "Ad designs" },
    viz: { ar: "تصوّر معماري 3D", en: "3D visualization" },
    realestate: { ar: "توثيق مشاريع عقارية", en: "Real-estate progress" },
  },

  projects: [
    {
      id: "teddy-candles-studio",
      category: "product",
      featured: true,
      size: "tall",
      title: { ar: "شموع الدبدوب في الاستوديو", en: "Teddy bear candles, studio shoot" },
      description: {
        ar: "فيديو منتج بإضاءة استوديو دافية وحركة دوران هادية بتبيّن تفاصيل الشمع.",
        en: "Product video with warm studio light and a slow turntable move that shows the wax detail.",
      },
      media: ["teddy-candles-studio.mp4"],
    },
    {
      id: "luxury-candles-ad",
      category: "product",
      featured: true,
      size: "tall",
      client: "Serah Candela",
      title: { ar: "إعلان شموع Serah Candela", en: "Serah Candela candles ad" },
      description: {
        ar: "إعلان لمجموعة شموع يدوية: من لحظة صب الشمع لحد ظهور المجموعة كاملة مع لوجو البراند.",
        en: "Ad for a handmade candle collection, from the wax pour to the full range with the brand logo.",
      },
      media: ["luxury-candles-ad.mp4"],
    },
    {
      id: "scented-candles-campaign",
      category: "product",
      featured: true,
      size: "tall",
      client: "Serah Candela",
      title: { ar: "حملة الشموع المعطّرة: فراولة وتوت", en: "Scented candles campaign: strawberry & berry" },
      description: {
        ar: "فيديوهين من نفس الحملة، كل واحد بديكور وخامة مختلفة. التركيز على لحظة الإشعال تحت إضاءة دافية.",
        en: "Two films from the same campaign, each with its own set and material, built around the moment the candle is lit.",
      },
      media: [
        { file: "strawberry-candle-ad.mp4", caption: { ar: "الفراولة", en: "Strawberry" } },
        { file: "berry-candle-ad.mp4", caption: { ar: "التوت", en: "Berry" } },
      ],
    },
    {
      id: "serah-candela-brand-film",
      category: "product",
      featured: true,
      size: "wide",
      client: "Serah Candela",
      title: { ar: "فيلم براند Serah Candela", en: "Serah Candela brand film" },
      description: {
        ar: "فيلم قصير بيعرض منتجات البراند: شمعة البطة، الدباديب، والقلادة المصبوبة يدوي، وبيقفل على اللوجو.",
        en: "A short film walking through the range: the duck candle, the teddies and a hand-cast pendant, closing on the logo.",
      },
      media: ["serah-candela-brand-film.mp4"],
    },
    {
      id: "egyptian-station-hall",
      category: "viz",
      featured: true,
      size: "wide",
      title: { ar: "محطة مترو بطابع مصري قديم، فيديو 3D", en: "Ancient Egyptian themed metro station, 3D film" },
      description: {
        ar: "فيديو عرض معماري لتصميم داخلي لمحطة مترو: مسلّة في النص، أعمدة بتيجان لوتس، ونقوش هيروغليفية، مع كافيه وبوابات دخول. معمول 3D بالكامل عشان العميل يشوف المشروع قبل التنفيذ.",
        en: "Presentation film for a metro station interior: a central obelisk, lotus-capital columns and hieroglyphic reliefs, with a café and entry gates. Fully 3D, so the client sees the project before it's built.",
      },
      media: ["egyptian-station-hall.mp4"],
    },
    {
      id: "scented-wax-sachets",
      category: "product",
      size: "tall",
      title: { ar: "معلّقات الشمع الرخامي", en: "Marbled wax pendants" },
      description: {
        ar: "ريل لخط معلّقات شمع معطّرة بالورد المجفف، متاحة بألوان وأشكال مختلفة.",
        en: "Reel for a line of scented wax pendants with dried flowers, in several colours and shapes.",
      },
      media: ["scented-wax-sachets.mp4"],
    },
    {
      id: "sweet-sour-food-reel",
      category: "food",
      size: "wide",
      title: { ar: "فيديو مطعم: سويت آند ساور", en: "Restaurant film: sweet & sour" },
      description: {
        ar: "لقطات قريبة للأكل بحركة هادية وإضاءة دافية، مع كلمات قصيرة على الشاشة بتوصف الطعم.",
        en: "Close food shots with slow movement and warm light, with short on-screen words describing the taste.",
      },
      media: ["sweet-sour-food-reel.mp4"],
    },
    {
      id: "bear-candle-reel",
      category: "product",
      size: "tall",
      title: { ar: "ريل شمعة الدبدوب", en: "Bear candle reel" },
      description: {
        ar: "ريل بإضاءة نهار طبيعية بيعرض ألوان الشمعة ولحظة إشعالها، أقرب للاستخدام اليومي.",
        en: "Daylight reel showing the candle's colours and the moment it's lit, closer to everyday use.",
      },
      media: ["bear-candle-reel.mp4"],
    },
    {
      id: "villas-construction-progress",
      category: "realestate",
      featured: true,
      size: "tall",
      title: { ar: "متابعة تنفيذ مشروع فلل", en: "Villa compound, construction progress" },
      description: {
        ar: "فيديو تقرير دوري لموقع مشروع فلل: استكمال البلوك، اللياسة في فلل 22 و52 و88، ونظافة الموقع. بيستخدم عشان العميل والمستثمرين يتابعوا الشغل أول بأول.",
        en: "Periodic progress film for a villa compound: blockwork, plastering on villas 22, 52 and 88, and site cleaning. Used to keep clients and investors up to date.",
      },
      media: ["villas-construction-progress.mp4"],
    },
    {
      id: "subway-arabia",
      category: "designs",
      client: "Subway Arabia",
      title: { ar: "صب واي العربية", en: "Subway Arabia" },
      description: {
        ar: "تصاميم سوشيال ميديا: إطلاق ساندوتش سبايسي تشيكن ميلت، والكوكيز طالعة من الفرن.",
        en: "Social designs: the Spicy Chicken Melt launch, and cookies fresh out of the oven.",
      },
      media: ["subway-spicy-chicken-melt.jpg", "subway-cookies.jpg"],
    },
    {
      id: "half-million-padel-drink",
      category: "designs",
      client: "½M",
      title: { ar: "½M على ملعب البادل", en: "½M on the padel court" },
      description: {
        ar: "تصميم إعلان لمشروب ½M ضمن حملة مربوطة بأجواء البادل والبيكل بول.",
        en: "Ad design for ½M, part of a campaign set around padel and pickleball.",
      },
      media: ["half-million-padel-drink.jpg"],
    },
    {
      id: "kofa-broasted-combo",
      category: "designs",
      client: { ar: "كوفة", en: "Kofa" },
      title: { ar: "كوفة: طعم الأصالة", en: "Kofa: taste of authenticity" },
      description: {
        ar: "إعلان لوجبة البروستد الكومبو بستايل واقعي دافي بيبرز المنتج وهوية المطعم.",
        en: "Ad for the broasted combo in a warm, realistic style that puts the product and the restaurant's identity first.",
      },
      media: ["kofa-broasted-combo.jpg"],
    },
    {
      id: "dunkin-branch-openings",
      category: "designs",
      featured: true,
      size: "tall",
      client: "Dunkin'",
      title: { ar: "دانكن: افتتاح فروع جديدة", en: "Dunkin': new branch openings" },
      description: {
        ar: "بوسترات افتتاح بالعربي: فرع كورنيش الدمام (دونات مجانية لأول 100 عميل)، وفرع مستشفى د. سليمان الحبيب (قهوة ودونات مجانية أول ساعتين).",
        en: "Arabic opening posters: Dammam Corniche (free donuts for the first 100 customers) and Dr. Sulaiman Al Habib Hospital (free coffee and donuts for the first two hours).",
      },
      media: ["dunkin-dammam-corniche.jpg", "dunkin-sulaiman-alhabib.jpg"],
    },
    {
      id: "meat-moot-ribs",
      category: "designs",
      size: "tall",
      client: "Meat Moot",
      title: { ar: "ميت موت: ريبس مدخّنة", en: "Meat Moot: smoked ribs" },
      description: { ar: "بوست للريبس المدخّنة بإضاءة وتنسيق بيبيّن تفاصيل الأكل.", en: "Post for the smoked ribs, lit and styled to show the texture." },
      media: ["meat-moot-ribs.jpg"],
    },
    {
      id: "specialty-coffee-post",
      category: "designs",
      size: "tall",
      title: { ar: "بوست قهوة مختصة", en: "Specialty coffee post" },
      description: { ar: "بوست بستايل ألوان مائية لبراند قهوة مختصة.", en: "Watercolour-style post for a specialty coffee brand." },
      media: ["specialty-coffee-post.jpg"],
    },
    {
      id: "coffee-cup-branding",
      category: "designs",
      title: { ar: "هوية كافيه: تصميم الكوب", en: "Café identity: cup design" },
      description: { ar: "تصميم الكوب الورق كجزء من هوية كافيه، معروض في أجواء المحل.", en: "Paper cup design as part of a café identity, shown in the shop." },
      media: ["coffee-cup-branding.jpg"],
    },
  ],
};
