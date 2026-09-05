document.documentElement.classList.add("js");

const languageButtons = document.querySelectorAll("[data-language-button]");
const languageContent = document.querySelectorAll("[data-lang]");

function setLanguage(language) {
    document.documentElement.lang = language;
    languageContent.forEach((element) => { element.hidden = element.dataset.lang !== language; });
    languageButtons.forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.languageButton === language)); });
}

languageButtons.forEach((button) => { button.addEventListener("click", () => setLanguage(button.dataset.languageButton)); });

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
