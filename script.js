// ==========================================
// AFAQ KNOWLEDGE
// Main Website JavaScript
// ==========================================

const body = document.body;

const languageSwitch = document.getElementById("languageSwitch");

const menuToggle = document.getElementById("menuToggle");

const nav = document.getElementById("nav");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

const year = document.getElementById("year");


// ==========================================
// YEAR
// ==========================================

year.textContent = new Date().getFullYear();


// ==========================================
// LANGUAGE
// ==========================================

let currentLanguage = localStorage.getItem("afaq-language") || "ar";

function setLanguage(language) {

  currentLanguage = language;

  if (language === "en") {

    body.classList.add("en");

    body.setAttribute("dir", "ltr");

    body.setAttribute("lang", "en");

    languageSwitch.innerHTML = "AR";

  } else {

    body.classList.remove("en");

    body.setAttribute("dir", "rtl");

    body.setAttribute("lang", "ar");

    languageSwitch.innerHTML = "EN";

  }

  localStorage.setItem("afaq-language", language);

}

setLanguage(currentLanguage);


languageSwitch.addEventListener("click", () => {

  const newLanguage = currentLanguage === "ar"
    ? "en"
    : "ar";

  setLanguage(newLanguage);

});


// ==========================================
// MOBILE MENU
// ==========================================

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("active");

});


document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


// ==========================================
// CONTACT FORM
// ==========================================

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = contactForm.querySelector('[name="name"]').value.trim();

  const email = contactForm.querySelector('[name="email"]').value.trim();

  const message = contactForm.querySelector('[name="message"]').value.trim();


  if (!name || !email || !message) {

    if (currentLanguage === "ar") {

      formMessage.textContent =
        "فضلاً أكمل البيانات المطلوبة.";

    } else {

      formMessage.textContent =
        "Please complete the required fields.";

    }

    return;

  }


  if (currentLanguage === "ar") {

    formMessage.textContent =
      "تم استلام طلبك مبدئيًا. سيتم التواصل معك بعد ربط النموذج بالبريد الإلكتروني.";

  } else {

    formMessage.textContent =
      "Your request has been received. Connect the form to your email service to enable delivery.";

  }


  formMessage.style.color = "#0b6257";

  contactForm.reset();

});


// ==========================================
// HEADER ON SCROLL
// ==========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    header.style.boxShadow =
      "0 8px 30px rgba(0,0,0,.07)";

  } else {

    header.style.boxShadow = "none";

  }

});


// ==========================================
// REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
  ".service-card, .about-card, .sector, .question-card, .insight-card, .timeline-item"
);

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.08
  }

);


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform = "translateY(20px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
