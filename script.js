const root = document.documentElement;

const langBtn = document.getElementById("langBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");


/*
  اللغة الافتراضية
  يتم حفظ اختيار المستخدم
*/

let lang = localStorage.getItem("siteLang") || "ar";


/*
  تغيير اللغة
*/

function applyLanguage(next) {

  lang = next;

  root.lang = lang;

  root.dir = lang === "ar"
    ? "rtl"
    : "ltr";


  /*
    تغيير النصوص
  */

  document
    .querySelectorAll("[data-ar][data-en]")
    .forEach(el => {

      el.textContent =
        el.dataset[lang];

    });


  /*
    تغيير Placeholder
  */

  document
    .querySelectorAll(
      "[data-ar-placeholder][data-en-placeholder]"
    )
    .forEach(el => {

      el.placeholder =
        lang === "ar"
          ? el.dataset.arPlaceholder
          : el.dataset.enPlaceholder;

    });


  /*
    نص زر اللغة
  */

  langBtn.textContent =
    lang === "ar"
      ? "English"
      : "العربية";


  /*
    عنوان الصفحة
  */

  document.title =
    lang === "ar"
      ? "حلول الأبحاث | Research Solutions"
      : "Research Solutions | حلول الأبحاث";


  /*
    حفظ اللغة
  */

  localStorage.setItem(
    "siteLang",
    lang
  );

}


/*
  زر تبديل اللغة
*/

langBtn.addEventListener(
  "click",
  () => {

    applyLanguage(
      lang === "ar"
        ? "en"
        : "ar"
    );

  }
);


/*
  فتح القائمة في الجوال
*/

menuBtn.addEventListener(
  "click",
  () => {

    mobileNav.classList.toggle("open");

  }
);


/*
  إغلاق القائمة بعد الضغط على رابط
*/

document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileNav.classList.remove("open");

      }
    );

  });


/*
  نموذج التواصل
  حاليًا تجريبي.
  
  لاحقًا يمكن ربطه بـ:
  Email
  CRM
  WhatsApp
  Formspree
  أو Backend خاص بك.
*/

form.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();


    formStatus.textContent =
      lang === "ar"

        ? "تم استلام الطلب تجريبيًا. اربط النموذج ببريدك أو نظام CRM قبل الإطلاق."

        : "Demo submission received. Connect the form to your email or CRM before launch.";


    form.reset();

  }
);


/*
  تشغيل اللغة المحفوظة
*/

applyLanguage(lang);
