const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const activeClasses = ["text-brand-600", "font-semibold"];

function updateActiveLink() {
    let currentSection = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentSection = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentSection}`;
        link.classList.toggle(activeClasses[0], isActive);
        link.classList.toggle(activeClasses[1], isActive);
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();
