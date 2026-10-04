/* ============================================================
   بياناتك الشخصية
   ------------------------------------------------------------
   أي نص ممكن يتكتب بلغة واحدة:   "نص"
   أو بلغتين:                     { ar: "عربي", en: "English" }
   ============================================================ */

window.PROFILE = {
  name: { ar: "عبدالرحمن سامي", en: "Abdelrahman Samy" },
  photo: "assets/media/profile.jpg",

  role: { ar: "معماري وصانع محتوى بصري", en: "Architect & visual content creator" },

  // الجملة الكبيرة في أول الصفحة
  headline: {
    ar: "معماري في الدمام. بصمّم الفراغات وبتابع تنفيذها، وبعمل محتوى بصري للبراندات.",
    en: "Architect based in Dammam. I design spaces, see them built, and make visual content for brands.",
  },

  about: {
    ar: "معماري حاصل على شهادة PMP ومسجّل في الهيئة السعودية للمهندسين. اشتغلت في تنفيذ والإشراف على مشاريع في المنطقة الشرقية والرياض: تصميم معماري، إشراف موقع، رسومات تنفيذية (\u2068Shop Drawings\u2069)، وأعمال تشطيبات وفيت-آوت. حالياً شغال في المكتب الفني المعماري لمشروع جيدا بالأحساء، مسؤول عن تعميد المواد واعتماد مخططات الشوب دروينج.\n\nوبجانب العمارة بعمل محتوى تسويقي بصري. بصوّر وبنتج فيديوهات قصيرة للمنتجات اليدوية والمطاعم، وبعمل عروض 3D للمشاريع العمرانية والتجارية. الخلفية الهندسية هي اللي مخلّية شغل الـ 3D عندي دقيق.",
    en: "PMP-certified architect, registered with the Saudi Council of Engineers. I've worked on the execution and supervision of projects in the Eastern Province and Riyadh: architectural design, site supervision, shop drawings, and fit-out and finishing works. I currently work in the architectural technical office of the Jida project in Al-Ahsa, handling material submittals and shop drawing approvals.\n\nAlongside architecture I make visual marketing content. I shoot and produce short videos for handmade products and restaurants, and build 3D presentations for urban and commercial projects. The engineering background is what keeps the 3D work accurate.",
  },

  location: { ar: "الدمام، السعودية", en: "Dammam, Saudi Arabia" },
  availability: { ar: "متاح لفرص العمل والتعاون", en: "Open to new roles and collaborations" },

  email: "boody172@gmail.com",
  phone: "+966 55 144 7472",
  whatsapp: "966551447472", // الرقم بدون + وبدون مسافات

  social: {
    linkedin: "https://www.linkedin.com/in/abdelrahman-samy-b948a5206",
    behance: "https://www.behance.net/abdelrahmansamy25",
    instagram: "",
    youtube: "",
    tiktok: "",
  },

  // ملفات للتحميل (موجودة في assets/docs). امسح السطر لو مش عايزه يظهر
  downloads: [
    { label: { ar: "السيرة الذاتية", en: "CV" }, file: "assets/docs/Abdelrahman-Samy-CV.pdf" },
    { label: { ar: "البورتفوليو التسويقي", en: "Marketing portfolio" }, file: "assets/docs/Abdelrahman-Samy-Marketing-Portfolio.pdf" },
  ],

  // value: "projects" يعني الرقم بيتحسب لوحده من عدد المشاريع في الموقع
  stats: [
    { value: 3, suffix: "+", label: { ar: "سنين خبرة", en: "Years of experience" } },
    { value: "projects", label: { ar: "مشروع في الموقع", en: "Projects on this site" } },
    { value: 2, label: { ar: "السعودية ومصر", en: "Countries: KSA & Egypt" } },
  ],

  credentials: [
    { ar: "شهادة PMP", en: "PMP certified" },
    { ar: "الهيئة السعودية للمهندسين", en: "Saudi Council of Engineers" },
    { ar: "بكالوريوس هندسة معمارية", en: "B.Sc. Architecture" },
  ],

  // الأحدث فوق. عشان تضيف وظيفة جديدة: انسخ بلوك { ... } وحطه أول واحد
  experience: [
    {
      period: { ar: "حالياً", en: "Current" },
      role: { ar: "معماري، مكتب فني", en: "Architect, technical office" },
      company: { ar: "مشروع جيدا، الأحساء", en: "Jida project, Al-Ahsa" },
      details: {
        ar: "مسؤول عن تعميد المواد واعتماد مخططات الشوب دروينج المعمارية، عشان الشغل في الموقع يمشي من غير تعارض بين البنود.",
        en: "Responsible for material submittals and approving architectural shop drawings, so site works keep moving without clashes between trades.",
      },
    },
    {
      period: { ar: "من أبريل 2025", en: "From Apr 2025" },
      role: { ar: "معماري ومشرف موقع", en: "Architect & site supervisor" },
      company: { ar: "شركة فنار العالمية العربية، المنطقة الشرقية", en: "Fanar International Arabian Co., Eastern Province" },
      details: {
        ar: "منتزه فاطمة الراشد بالأحساء (منفّذ)، مدرسة الجبر لمتلازمة داون بالأحساء (منفّذ)، وتلال قمرة صفوة والمسجد بالدمام: رسومات تنفيذية لـ 6 نماذج فلل.",
        en: "Fatmah Al-Rashed Park, Al-Ahsa (completed); Al-Jabr School for Down Syndrome, Al-Ahsa (completed); Tilal Qamra Safwa & Mosque, Dammam: shop drawings for 6 villa types.",
      },
    },
    {
      period: { ar: "سبتمبر 2023 إلى نوفمبر 2024", en: "Sep 2023 to Nov 2024" },
      role: { ar: "معماري ومهندس تشطيبات", en: "Architect & finishing engineer" },
      company: { ar: "شركة سويلم للمقاولات، مصر", en: "Swilam Construction, Egypt" },
      details: {
        ar: "أول شغل ليا: فيت-آوت وتشطيبات لمشاريع سكنية وتجارية، وموديلات 3D لاعتماد التصميم مع العملاء.",
        en: "My first role: fit-out and finishing works for residential and commercial projects, plus 3D models for client approvals.",
      },
    },
  ],

  tools: ["AutoCAD", "3ds Max", "V-Ray", "Photoshop", "Premiere Pro", "After Effects", "Blender", "CapCut", "Higgsfield", "Kling", "Magnific"],

  // الخدمات اللي بتظهر في الصفحة الرئيسية تحت كل قسم
  services: {
    marketing: {
      ar: ["تصوير وإنتاج فيديو", "تصوير منتجات", "موشن جرافيك", "مونتاج", "تعليق صوتي وستوري تيلنج", "تصاميم إعلانية"],
      en: ["Video production", "Product photography", "Motion graphics", "Video editing", "Voiceover & storytelling", "Ad design"],
    },
    architecture: {
      ar: ["تصميم معماري", "تصميم داخلي", "إشراف موقع", "رسومات تنفيذية", "فيت-آوت وتشطيبات", "رندر وتصوّر 3D"],
      en: ["Architectural design", "Interior design", "Site supervision", "Shop drawings", "Fit-out & finishing", "3D visualization"],
    },
  },
};
