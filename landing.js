document.documentElement.classList.add("js");

/* Replace the empty string with the final App Store URL when it is available. */
const APP_STORE_URL = "";

const languageButtons = document.querySelectorAll("[data-language-button]");
const languageContent = document.querySelectorAll("[data-lang]");
const appStoreLinks = document.querySelectorAll("[data-app-store-link]");
const appStoreStatus = document.querySelectorAll("[data-app-store-status]");

function setLanguage(language) {
    document.documentElement.lang = language;
    languageContent.forEach((element) => { element.hidden = element.dataset.lang !== language; });
    languageButtons.forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.languageButton === language)); });
}

languageButtons.forEach((button) => { button.addEventListener("click", () => setLanguage(button.dataset.languageButton)); });

appStoreLinks.forEach((link) => {
    if (APP_STORE_URL) {
        link.href = APP_STORE_URL;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    } else {
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => event.preventDefault());
    }
});

if (APP_STORE_URL) appStoreStatus.forEach((status) => status.remove());

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
