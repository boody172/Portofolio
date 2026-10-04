/* ============================================================
   قسم العمارة والتصميم
   ------------------------------------------------------------
   ▸ حط ملفات الصور والفيديو في:  assets/media/architecture/
   ▸ وفي "media" اكتب اسم الملف بس، بنفس ترتيب ما عايزه يظهر.

   مشروع جديد = انسخ أي بلوك { ... } تحت وعدّل فيه.
   حذف مشروع  = امسح البلوك بتاعه.
   إخفاء مؤقت = ضيف  hidden: true,
   ترتيب الظهور = ترتيب البلوكات في الملف.

   category = نوع الفراغ، واحد من المفاتيح دي:
     public      مشاريع عامة
     exterior    واجهات خارجية
     majlis      مجالس
     master      غرف ماستر
     kids        غرف أطفال
     kitchen     مطابخ مودرن
     bathroom    حمامات
     finishes    ألوان وتشطيبات
   عايز فراغ جديد (مثلاً مكاتب)؟ ضيفه في "categories" تحت:
     offices: { ar: "مكاتب", en: "Offices" },
   وبعدين اكتب  category: "offices"  في المشروع.

   باقي الحقول نفس قسم التسويق (شوف أول ملف marketing.js).
   ============================================================ */

window.ARCHITECTURE = {
  title: { ar: "العمارة والتصميم", en: "Architecture & design" },
  short: { ar: "عمارة", en: "Architecture" },
  intro: {
    ar: "واجهات، تصميم داخلي، رندرات، ومشاريع اشتغلت عليها في الموقع. مقسّمة حسب نوع الفراغ.",
    en: "Facades, interiors, renders and projects I worked on site, grouped by type of space.",
  },
  cover: "pharaonic-station-01-entrance-facade.jpg",

  categories: {
    public: { ar: "مشاريع عامة", en: "Public projects" },
    exterior: { ar: "واجهات خارجية", en: "Exterior facades" },
    majlis: { ar: "مجالس", en: "Majlis & reception" },
    master: { ar: "غرف ماستر", en: "Master bedrooms" },
    kids: { ar: "غرف أطفال", en: "Kids' rooms" },
    kitchen: { ar: "مطابخ مودرن", en: "Modern kitchens" },
    bathroom: { ar: "حمامات", en: "Bathrooms" },
    finishes: { ar: "ألوان وتشطيبات", en: "Colours & finishes" },
  },

  projects: [
    {
      id: "pharaonic-train-station",
      category: "public",
      featured: true,
      size: "wide",
      title: { ar: "محطة مترو بطابع مصري قديم", en: "Ancient Egyptian themed metro station" },
      description: {
        ar: "تصميم معماري وداخلي لمحطة مترو مستوحاة من العمارة المصرية القديمة. المدخل بأعمدة لوتس ومسلّة وتماثيل أنوبيس، والصالة بسقف زجاج بيدخّل نور النهار، والحوائط عليها نقوش وجداريات ملوّنة. ومعاها كل خدمات المحطة: شبابيك التذاكر، البوابات، الـ ATM، الكافيه، وكشك الجرايد. المشروع فيه كمان منظور علوي وجولة فيديو.",
        en: "Architecture and interiors for a metro station drawing on ancient Egyptian architecture. Lotus columns, an obelisk and Anubis statues at the entrance; a glass-roofed concourse that lets daylight in; walls carrying reliefs and painted murals. All the station services are there: ticket counters, gates, ATMs, a café and a press kiosk. Includes a top view and a video walkthrough.",
      },
      media: [
        { file: "pharaonic-station-01-entrance-facade.jpg", caption: { ar: "المدخل الرئيسي", en: "Main entrance" } },
        { file: "pharaonic-station-02-concourse-press.jpg", caption: { ar: "صالة الانتظار وكشك الجرايد", en: "Concourse and press kiosk" } },
        { file: "pharaonic-station-03-concourse-coffee-shop.jpg", caption: { ar: "الصالة والكافيه والبوابات", en: "Concourse, café and gates" } },
        { file: "pharaonic-station-04-ticket-hall-atm.jpg", caption: { ar: "شبابيك التذاكر والـ ATM", en: "Ticket hall and ATMs" } },
        { file: "pharaonic-station-05-gates-colonnade.jpg", caption: { ar: "الأعمدة والبوابات الإلكترونية", en: "Colonnade and e-gates" } },
        { file: "pharaonic-station-06-coffee-shop.jpg", caption: { ar: "الكافيه", en: "Café" } },
        { file: "pharaonic-station-07-top-view.jpg", caption: { ar: "منظور علوي", en: "Top view" } },
        { file: "pharaonic-station-walkthrough.mp4", caption: { ar: "جولة فيديو جوه المحطة", en: "Video walkthrough" } },
      ],
    },
    {
      id: "parametric-building",
      category: "exterior",
      featured: true,
      size: "wide",
      title: { ar: "مبنى بقشرة انسيابية", en: "Building with a flowing shell" },
      description: {
        ar: "قشرة منحنية واحدة طالعة من الأرض وبتلف على الكتلة، واجهة زجاج كبيرة، ودور أرضي مفتوح على الشارع. منظورين: بالنهار ووقت الغروب.",
        en: "One curved shell rising from the ground and wrapping the volume, a large glazed wall, and a ground floor open to the street. Two views: daytime and dusk.",
      },
      media: [
        { file: "parametric-building-01-street-view.jpg", caption: { ar: "من الشارع", en: "Street view" } },
        { file: "parametric-building-02-dusk-view.jpg", caption: { ar: "وقت الغروب", en: "At dusk" } },
      ],
    },
    {
      id: "residential-building",
      category: "exterior",
      title: { ar: "عمارة سكنية على ناصية", en: "Corner residential building" },
      description: {
        ar: "واجهات عمارة سكنية أربع أدوار. كتلة المدخل في النص بتكسية حجر فاتح، جناح بشبابيك بكرانيش، وجناح ببلكونات غاطسة ودرابزين معدن، وسور واطي على الرصيف.",
        en: "Facades for a four-storey residential building. A stone-clad entrance block in the middle, one wing with corniced windows, one with recessed balconies and metal railings, and a low boundary wall.",
      },
      media: [
        { file: "residential-building-01-front-elevation.jpg", caption: { ar: "الواجهة الأمامية", en: "Front elevation" } },
        { file: "residential-building-02-perspective.jpg", caption: { ar: "منظور جانبي", en: "Perspective" } },
        { file: "residential-building-03-aerial-view.jpg", caption: { ar: "منظور علوي", en: "Aerial view" } },
      ],
    },
    {
      id: "villa-exterior-pool",
      category: "exterior",
      featured: true,
      size: "wide",
      title: { ar: "فيلا مودرن: الواجهة والبيسين", en: "Modern villa: facade and pool" },
      description: {
        ar: "منظور ليلي للواجهة الخلفية. كتلة علوية طالعة فوق تراس مقفول بزجاج من الأرض للسقف، بيسين، وتنسيق حديقة بإضاءة ليلية.",
        en: "Night view of the rear facade: an upper volume projecting over a terrace glazed floor to ceiling, a pool, and a lit garden.",
      },
      media: ["villa-01-exterior-pool-night.jpg"],
    },
    {
      id: "organic-pavilion",
      category: "exterior",
      title: { ar: "مبنى بقشرة مثقّبة", en: "Perforated shell building" },
      description: {
        ar: "قشرة متموّجة بتغطي المبنى كله بتكسية فسيفساء فاتحة، وفتحات سداسية بأحجام متدرّجة للإضاءة، وواجهة زجاج منحنية في الدور الأرضي.",
        en: "An undulating shell covering the whole building in light mosaic, hexagonal openings in graded sizes for daylight, and a curved glass facade at street level.",
      },
      media: ["organic-pavilion-street-view.jpg"],
    },
    {
      id: "modern-interior-design",
      category: "majlis",
      featured: true,
      size: "wide",
      cover: "modern-interior-05-dining-feature-lighting.jpg",
      title: { ar: "ريسبشن وسفرة", en: "Reception and dining" },
      description: {
        ar: "ألوان محايدة مع تباين بين رخام أسود وخشب وحوائط بيضا ببانوهات كلاسيك. منطقة جلوس، سفرة بنجفة معلّقة، وحائط ديكور بنقشة بارزة ومراية دائرية، وسقف بتراك سبوتات وشرائح خشب بإضاءة مخفية.",
        en: "Neutral palette with black marble, warm wood and white classic panelling. A seating area, a dining table under a sculptural pendant, a feature wall with a relief pattern and round mirror, track spots and backlit timber slats.",
      },
      media: [
        { file: "modern-interior-01-seating-area.jpg", caption: { ar: "منطقة الجلوس", en: "Seating area" } },
        { file: "modern-interior-02-dining-view.jpg", caption: { ar: "منظور السفرة", en: "Dining view" } },
        { file: "modern-interior-03-dining-room.jpg", caption: { ar: "السفرة", en: "Dining room" } },
        { file: "modern-interior-04-reception-feature-wall.jpg", caption: { ar: "الريسبشن وحائط الديكور", en: "Reception and feature wall" } },
        { file: "modern-interior-05-dining-feature-lighting.jpg", caption: { ar: "السفرة وحائط الخشب", en: "Dining and timber wall" } },
      ],
    },
    {
      id: "majlis-sea-view",
      category: "majlis",
      size: "wide",
      title: { ar: "مجلس على البحر", en: "Sea-view majlis" },
      description: {
        ar: "مجلس مفتوح على البحر: زجاج بإطارات خشب، حائط حجر طبيعي، وكنبة L بألوان ترابية، وإضاءة مخفية في السقف.",
        en: "A majlis facing the sea: timber-framed glazing, a natural stone wall, an L-shaped sofa in earthy tones and hidden ceiling light.",
      },
      media: ["villa-02-living-sea-view.jpg"],
    },
    {
      id: "master-bedroom-design",
      category: "master",
      featured: true,
      size: "wide",
      title: { ar: "ماستر بيدروم بحائط حجر", en: "Master bedroom with a stone wall" },
      description: {
        ar: "خلفية السرير حجر طبيعي أبيض بين حوائط خشب غامق، شرائح خشب منحنية في الأركان، نجفة حلقات، دريسنج بزجاج فاميه، وركن تسريحة على حائط وردي هادي. الأرضية باركيه.",
        en: "A white natural-stone headboard wall between dark timber, curved slats in the corners, a ring chandelier, a smoked-glass dressing area and a vanity on a soft blush wall. Parquet floor.",
      },
      media: [
        { file: "master-bedroom-01-bed-wall.jpg", caption: { ar: "حائط السرير", en: "Bed wall" } },
        { file: "master-bedroom-02-bed-wardrobe.jpg", caption: { ar: "السرير والدريسنج", en: "Bed and dressing area" } },
        { file: "master-bedroom-03-vanity-wall.jpg", caption: { ar: "ركن التسريحة", en: "Vanity wall" } },
        { file: "master-bedroom-04-window-corner.jpg", caption: { ar: "ركن الشباك", en: "Window corner" } },
      ],
    },
    {
      id: "modern-bedroom-design",
      category: "master",
      title: { ar: "غرفة نوم بدولاب زجاج", en: "Bedroom with a glass wardrobe" },
      description: {
        ar: "درجات رمادي هادية، دولاب بزجاج فاميه وإضاءة جوّاه، وحدة تلفزيون على خلفية خشب، تسريحة بمراية دائرية منوّرة، وسقف بإضاءة مخفية على الأطراف.",
        en: "Calm greys, a smoked-glass wardrobe lit inside, a TV unit on a timber backdrop, a vanity with a backlit round mirror and a ceiling with hidden perimeter light.",
      },
      media: [
        { file: "bedroom-01-room-overview.jpg", caption: { ar: "منظور عام", en: "Overview" } },
        { file: "bedroom-02-wardrobe-tv-wall.jpg", caption: { ar: "الدولاب ووحدة التلفزيون", en: "Wardrobe and TV wall" } },
        { file: "bedroom-03-desk-bed.jpg", caption: { ar: "التسريحة والسرير", en: "Vanity and bed" } },
      ],
    },
    {
      id: "master-cane-wardrobe",
      category: "master",
      title: { ar: "غرفة ماستر بدولاب شبك", en: "Master bedroom, cane wardrobe" },
      description: {
        ar: "دولاب بأبواب شبك مقوّسة، حوائط خشب غامق وخلفية سرير ببانوهات فاتحة، نجفة حلقات، وبنش لونه مستردة عند السرير.",
        en: "An arched cane-mesh wardrobe, dark timber walls with a light panelled headboard, a ring chandelier and a mustard bench at the foot of the bed.",
      },
      media: ["villa-03-bedroom-cane-wardrobe.jpg"],
    },
    {
      id: "kids-twin-room",
      category: "kids",
      featured: true,
      size: "wide",
      title: { ar: "أوضة أطفال بسريرين", en: "Twin kids' room" },
      description: {
        ar: "حائط شرائح خشب بإضاءة مخفية ورا السراير، دولاب بزجاج غامق ورفوف مفتوحة، وركن مذاكرة بمكتبين وتسريحة بمراية بيضاوي.",
        en: "A backlit timber-slat wall behind the beds, a dark-glass wardrobe with open shelves, and a study corner with two desks and an oval mirror.",
      },
      media: [
        { file: "villa-04-kids-room-twin-beds.jpg", caption: { ar: "السريرين", en: "Twin beds" } },
        { file: "villa-05-kids-room-desk.jpg", caption: { ar: "ناحية الشباك", en: "Window side" } },
        { file: "villa-06-kids-room-study.jpg", caption: { ar: "ركن المذاكرة", en: "Study corner" } },
        { file: "villa-07-kids-room-wardrobe.jpg", caption: { ar: "حائط الدولاب", en: "Wardrobe wall" } },
      ],
    },
    {
      id: "boys-bedroom",
      category: "kids",
      title: { ar: "أوضة ولد بمكتب ومكتبة", en: "Boy's room with a built-in desk" },
      description: {
        ar: "مكتب ومكتبة مدمجين بإضاءة مخفية، دولاب حائط بأبواب ملسا، وسرير بإضاءة من تحت. رمادي وأزرق هادي.",
        en: "Built-in desk and shelving with hidden light, a flush wall wardrobe and a bed lit from below, in soft grey and blue.",
      },
      media: ["apartment-01-boys-bedroom.jpg"],
    },
    {
      id: "marble-kitchen",
      category: "kitchen",
      title: { ar: "مطبخ رخام", en: "Marble kitchen" },
      description: {
        ar: "خلفية رخام أبيض بعروق دهبي وحوائط رخام رمادي، دواليب أبيض وبيج، شفاط جزيرة أسطواني، فرن بيلت إن، وإضاءة تحت الدواليب.",
        en: "Gold-veined white marble splashback and grey marble walls, white and beige units, a cylindrical hood, built-in ovens and under-cabinet light.",
      },
      media: ["apartment-02-marble-kitchen.jpg"],
    },
    {
      id: "kitchen-breakfast-bar",
      category: "kitchen",
      title: { ar: "مطبخ مفتوح ببار", en: "Open kitchen with a breakfast bar" },
      description: {
        ar: "مطبخ U مفتوح على الصالة، ببار فطار خشب فاتح وسطح رخام غامق وكراسي بار.",
        en: "A U-shaped kitchen open to the living area, with a light-timber breakfast bar, dark marble top and bar stools.",
      },
      media: ["apartment-05-kitchen-breakfast-bar.jpg"],
    },
    {
      id: "bathroom-design",
      category: "bathroom",
      size: "wide",
      title: { ar: "حمام رخام أخضر", en: "Green marble bathroom" },
      description: {
        ar: "حوض على وحدة معلّقة ومراية دائرية منوّرة، تواليت معلّق على رخام أخضر غامق بعروق دهبي، وشاور بنيش رفوف وخلاطات دهبي.",
        en: "A vessel basin on a floating vanity with a backlit round mirror, a wall-hung WC on gold-veined dark green marble, and a shower with a niche and brushed-gold fittings.",
      },
      media: [
        { file: "apartment-03-bathroom-vanity.jpg", caption: { ar: "الحوض", en: "Vanity" } },
        { file: "apartment-04-bathroom-shower.jpg", caption: { ar: "الشاور", en: "Shower" } },
      ],
    },
    {
      id: "door-color-scheme",
      category: "finishes",
      client: { ar: "مدرسة الجبر لمتلازمة داون، الأحساء", en: "Al-Jabr School for Down Syndrome, Al-Ahsa" },
      title: { ar: "مدرسة الجبر: ألوان الأبواب", en: "Al-Jabr School: door colours" },
      description: {
        ar: "مشروع منفّذ. تعديلات في التصميم المعماري وتصميم أبواب خاص، وكل نوع فراغ ليه لون RAL ثابت عشان الطلاب يعرفوا الأماكن بسهولة: الأنشطة RAL 1034، الفصول RAL 5024، الراحة RAL 1001، العلاج RAL 6019، الحمامات RAL 7032، غرف الكهرباء والـ IT RAL 9023، وأبواب الألومنيوم RAL 9011.",
        en: "Completed project. Design changes and custom doors, with one RAL colour per type of space so students can find their way: activity RAL 1034, classrooms RAL 5024, rest RAL 1001, therapy RAL 6019, bathrooms RAL 7032, IT and electrical RAL 9023, aluminium doors RAL 9011.",
      },
      media: ["door-color-scheme-board.jpg"],
    },
  ],
};
