const languageBtn = document.getElementById("languageBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementById("header");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

let currentLanguage = localStorage.getItem("afaq-language") || "ar";


// LANGUAGE

function updateLanguage() {

    const isEnglish = currentLanguage === "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";

    document.body.classList.toggle("en", isEnglish);

    languageBtn.textContent = isEnglish ? "عربي" : "EN";

    document.querySelectorAll("[data-ar][data-en]").forEach(element => {
        element.textContent = isEnglish
            ? element.dataset.en
            : element.dataset.ar;
    });

    document.querySelectorAll("input[data-placeholder-ar]").forEach(input => {
        input.placeholder = isEnglish
            ? input.dataset.placeholderEn
            : input.dataset.placeholderAr;
    });

    localStorage.setItem("afaq-language", currentLanguage);
}


languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "ar"
        ? "en"
        : "ar";

    updateLanguage();

});


// MOBILE MENU

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active")
            ? "×"
            : "☰";
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// HEADER SHADOW

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// CONTACT FORM

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (currentLanguage === "ar") {

        formMessage.textContent =
            "تم استلام طلبك تجريبيًا. لربط النموذج بالبريد الإلكتروني أو قاعدة بيانات، نحتاج إلى إضافة خدمة إرسال فعلية.";

    } else {

        formMessage.textContent =
            "Your request has been received as a demo. A real email/database service can be connected to this form.";

    }

    contactForm.reset();

});


// YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// INITIAL LANGUAGE

updateLanguage();
