const revealElements = [...document.querySelectorAll(".reveal")];
const sectionTabs = [...document.querySelectorAll(".window-tabs__item[data-target]")];
const rewindButton = document.querySelector("#rewindButton");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let revealObserver;
let sectionElements = [];
let manualTabSelection = false;

const setActiveTab = (targetId) => {
    sectionTabs.forEach((tab) => {
        const isActive = tab.dataset.target === targetId;
        tab.classList.toggle("window-tabs__item--active", isActive);

        if (isActive) {
            tab.setAttribute("aria-current", "page");
        } else {
            tab.removeAttribute("aria-current");
        }
    });
};

const getTargetFromHash = () => {
    const targetId = window.location.hash.replace("#", "");
    return sectionTabs.some((tab) => tab.dataset.target === targetId) ? targetId : "resume";
};

const updateActiveTabFromScroll = () => {
    if (sectionElements.length === 0) {
        setActiveTab(getTargetFromHash());
        return;
    }

    const activationLine = window.scrollY + Math.min(220, window.innerHeight * 0.28);
    const activeSection = sectionElements.reduce((current, section) => {
        return section.offsetTop <= activationLine ? section : current;
    }, sectionElements[0]);

    setActiveTab(activeSection.id);
};

const setupRevealObserver = () => {
    if (revealObserver) {
        revealObserver.disconnect();
    }

    if (reduceMotion.matches) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
};

const setupTabObserver = () => {
    sectionElements = sectionTabs
        .map((tab) => document.getElementById(tab.dataset.target))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);
    updateActiveTabFromScroll();
};

document.addEventListener("DOMContentLoaded", () => {
    setupRevealObserver();
    setupTabObserver();
    setActiveTab(getTargetFromHash());

    sectionTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            manualTabSelection = true;
            setActiveTab(tab.dataset.target);
        });
    });

    rewindButton?.addEventListener("click", () => {
        manualTabSelection = false;
        window.scrollTo({
            top: 0,
            behavior: reduceMotion.matches ? "auto" : "smooth"
        });
        setActiveTab("resume");
    });

    window.addEventListener("hashchange", () => {
        setActiveTab(getTargetFromHash());
    });
    window.addEventListener("scroll", () => {
        if (!manualTabSelection) {
            updateActiveTabFromScroll();
        }
    }, { passive: true });
    window.addEventListener("resize", updateActiveTabFromScroll);

    reduceMotion.addEventListener("change", setupRevealObserver);
});
