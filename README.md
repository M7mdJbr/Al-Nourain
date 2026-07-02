<div align="center">
  <img src="https://raw.githubusercontent.com/M7mdJbr/Al-Nourain/main/public/favicon.png" alt="Al-Nourain Logo" width="100"/>
  <h1>النورين &mdash; Al-Nourain</h1>
  <p><strong>القرآن والسنة &bull; The Quran and Sunnah</strong></p>
  <p>تطبيق إسلامي ويب ثنائي اللغة (عربي/إنجليزي) لقراءة القرآن والاستماع إليه، وتصفح السنة النبوية، والراديو الإسلامي.</p>
  <p>A bilingual (Arabic/English) Islamic web application for reading and listening to the Quran, browsing hadith, and streaming Islamic radio.</p>
  <p>
    <a href="https://al-nourain.vercel.app/#/"><strong>التطبيق المباشر &raquo;</strong></a>
  </p>
  <br/>
</div>

---

## ✨ الميزات | Features

| العربية | English |
|---|---|
| استمع للقرآن بأصوات 100+ قارئ | Quran audio recitations from 100+ reciters |
| اقرأ القرآن آيةً آيةً بخط عثماني جميل | Verse-by-verse Quran reader with authentic Uthmani script |
| تصفح كتب السنة النبوية مع الترجمة | Browse major hadith books with Arabic & English |
| استمع للراديو الإسلامي المباشر | Live Islamic radio streaming |
| الوضع الليلي | Dark mode toggle (persisted to localStorage) |
| تصميم متجاوب بالكامل | Fully responsive with mobile-first layout |
| واجهة عربية مع دعم RTL | Arabic-first UI with proper RTL support |

## 🎨 الخطوط | Fonts

| الخط | الاستخدام |
|---|---|
| [Cairo](https://fonts.google.com/specimen/Cairo) | الخط الرئيسي للواجهة — حديث ونظيف للعربية |
| [Amiri](https://fonts.google.com/specimen/Amiri) | خط نص القرآن والحديث — كلاسيكي أنيق |
| [Inter](https://fonts.google.com/specimen/Inter) | النصوص الإنجليزية — خط لاتيني واضح |
| Hafs Smart (محمّل محلياً) | عرض النص القرآني بدقة عالية |

جميع الخطوط مستضافة ذاتياً عبر حزم `@fontsource` — لا اعتماد على CDN، وتعمل بدون إنترنت.

## 🛠 التقنيات | Built With

| التقنية | الغرض |
|---|---|
| [React 19](https://react.dev/) | إطار الواجهة |
| [Vite 8](https://vitejs.dev/) | أداة البناء |
| [Tailwind CSS 4](https://tailwindcss.com/) | التنسيق باستخدام utility classes |
| [React Router v7](https://reactrouter.com/) | التوجيه (HashRouter) |
| [react-h5-audio-player](https://github.com/lhz516/react-h5-audio-player) | مشغل الصوت |
| [Font Awesome 6](https://fontawesome.com/) | الأيقونات |
| [@fontsource/cairo](https://github.com/fontsource/fontsource) | خط Cairo مستضاف ذاتياً |
| [@fontsource/amiri](https://github.com/fontsource/fontsource) | خط Amiri مستضاف ذاتياً |
| [@fontsource/inter](https://github.com/fontsource/fontsource) | خط Inter مستضاف ذاتياً |

## 🚀 البداية | Getting Started

### المتطلبات | Prerequisites

- Node.js 18+
- npm

### التنصيب | Installation

```bash
git clone https://github.com/M7mdJbr/Al-Nourain.git
cd Al-Nourain
npm install
```

### التشغيل | Development

```bash
npm run dev
```

افتح [http://localhost:5173](http://localhost:5173) في المتصفح.

## 📜 الأوامر | Available Scripts

| الأمر | الشرح |
|---|---|
| `npm run dev` | تشغيل خادم التطوير |
| `npm run build` | بناء الإصدار النهائي إلى `dist/` |
| `npm run preview` | معاينة الإصدار النهائي محلياً |
| `npm run lint` | تشغيل مدقق الكود |
| `npm run deploy` | بناء ونشر إلى GitHub Pages |

## 📁 هيكل المشروع | Project Structure

```
Al-Nourain/
  index.html                  # مدخل HTML
  vite.config.js              # إعدادات Vite
  public/
    favicon.png               # أيقونة الموقع
    _redirects                # قواعد إعادة التوجيه لـ Netlify
    fonts/
      HafsSmart.woff          # خط القرآن المحلي
  src/
    main.jsx                  # مدخل التطبيق مع HashRouter
    App.jsx                   # تعريف المسارات
    index.css                 # الأنماط العامة و Tailwind والخطوط
    context/
      ThemeContext.jsx         # مزود الثيم (ليلي/نهاري)
    components/
      Navbar.jsx              # شريط التنقل العلوي
      Footer.jsx              # التذييل
      ThemeToggle.jsx         # زر تبديل الثيم
      SurahDetails.jsx        # عرض السورة آيةً آيةً
    pages/
      Home.jsx                # الصفحة الرئيسية مع الراديو
      Quran.jsx               # اختيار القارئ والسورة
      AudioPlayerPage.jsx     # مشغل الصوت الكامل
      QuranText.jsx           # قائمة السور للقراءة
      Sunnah.jsx              # تصفح كتب الحديث
      Radio.jsx               ## محطات الراديو الإسلامية
```

## 🌐 واجهات API | APIs

| الواجهة | الاستخدام |
|---|---|
| [mp3quran.net](https://mp3quran.net/) | قائمة القراء وملفات الصوت |
| [alquran.cloud](https://alquran.cloud/) | قائمة السور والنص القرآني |
| [hadithapi.com](https://hadithapi.com/) | كتب الحديث والأحاديث (يتطلب مفتاح API) |

## 📦 النشر | Deployment

### GitHub Pages

المشروع مهيأ مسبقاً للنشر على GitHub Pages:

```bash
npm run deploy
```

تأكد من ضبط حقل `homepage` في `package.json` على رابط GitHub Pages الخاص بك.

### Netlify

ملف `public/_redirects` يتولى توجيه المسارات لتطبيق SPA على Netlify. قم بربط المستودع مع Netlify مع الإعدادات التالية:

- أمر البناء: `npm run build`
- مجلد النشر: `dist`

---

<div align="center">
  Made with ❤️ for the Muslim community
</div>
