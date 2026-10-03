# بورتفوليو — تسويق + عمارة وتصميم

موقع بورتفوليو تفاعلي بقسمين منفصلين، **التسويق** و**العمارة والتصميم**. كل قسم فيه تبويب للفيديوهات وتبويب للصور، وفلاتر حسب التصنيف. الفيديوهات بتشتغل كاملة جوه الموقع.

- موقع ثابت (HTML / CSS / JS) من غير build، فالنشر على Vercel فوري.
- عربي (RTL) وإنجليزي بزرار واحد.
- مشغّل فيديو بيدعم YouTube وVimeo وGoogle Drive وملفات mp4 مباشرة.
- معرض صور بأسهم وصور مصغّرة وسحب على الموبايل وزوم وأسهم الكيبورد.
- معاينة الفيديو بتشتغل لما الماوس يقف على الكارت، ومعاها مؤشر ماوس مخصص.
- لكل عمل رابط خاص بيتشارك، زي: `/#/architecture/villa-walkthrough`

## الملفات

```
index.html            الصفحة
assets/css/style.css  التصميم
assets/js/app.js      التفاعل (مش محتاج تعدّل فيه)
assets/js/data.js     ← المحتوى: بياناتك وكل أعمالك
assets/media/         لو هترفع صور أو فيديوهات صغيرة على الريبو نفسه
vercel.json           إعدادات Vercel
```

## إضافة عمل جديد

افتح `assets/js/data.js` وضيف عنصر جديد في `projects`:

```js
{
  id: "my-new-project",            // اسم فريد بالإنجليزي من غير مسافات
  world: "marketing",              // أو "architecture"
  type: "video",                   // أو "image"
  category: { ar: "إعلانات", en: "Ads" },
  title: { ar: "اسم المشروع", en: "Project name" },
  description: { ar: "وصف قصير", en: "Short description" },
  client: "اسم العميل",
  year: 2026,
  tools: ["Premiere Pro"],
  cover: "assets/media/marketing/cover.jpg",   // صورة الغلاف
  video: "https://youtu.be/XXXXXXXXXXX",       // للفيديو
  ratio: "9/16",                               // للريلز العمودي
  size: "tall",                                // normal | wide | tall
  featured: true,                              // يظهر في الصفحة الرئيسية
}
```

لمشروع صور، استبدل `video` بـ `gallery`، والصور هتظهر بنفس الترتيب اللي تكتبه:

```js
gallery: ["assets/media/architecture/p1-01.jpg", "assets/media/architecture/p1-02.jpg"]
```

ممكن تضيف `link: "https://behance.net/gallery/..."` لزرار "شاهد على المنصة".

## فين ترفع الفيديوهات؟

GitHub بيرفض أي ملف أكبر من 100MB، والفيديوهات التقيلة بتبطّأ الموقع. الأفضل:

| الطريقة | إمتى تستخدمها |
|---|---|
| **YouTube** (Unlisted) | الأسهل ومجاني. حط الرابط بس |
| **Vimeo** | جودة أعلى ومن غير إعلانات |
| **Google Drive** | خلّي الملف "Anyone with the link" وحط الرابط |
| **Cloudinary / Bunny** | لو عايز رابط mp4 مباشر بأعلى أداء |
| `assets/media/` | للمقاطع القصيرة بس (أقل من ~20MB)، زي معاينات الهوفر |

## النشر

1. اعمل ريبو جديد على GitHub وارفع الملفات دي عليه (أو استخدم الريبو ده).
2. ادخل [vercel.com](https://vercel.com)، واعمل **Add New → Project** واختار الريبو.
3. سيب **Framework Preset = Other** واضغط **Deploy**. مفيش build command.
4. أي تعديل تعمله push بعد كده Vercel بينشره تلقائياً.

## تجربة محلية

```bash
python3 -m http.server 8000
# افتح http://localhost:8000
```
