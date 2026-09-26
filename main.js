const yearEl = document.getElementById("year");

if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
}

const navLinks = Array.from(document.querySelectorAll(".topnav a[href^='#']"));

if (navLinks.length > 0 && "IntersectionObserver" in window) {
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter((el) => el !== null);

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) {
                    continue;
                }
                const id = "#" + entry.target.id;
                for (const link of navLinks) {
                    link.classList.toggle("active", link.getAttribute("href") === id);
                }
            }
        },
        { rootMargin: "-30% 0px -55% 0px" }
    );

    for (const section of sections) {
        observer.observe(section);
    }
}
