var typed = new Typed(".multiple-text", {
    strings: ["Full Stack Web Developer", "Web Designer", "Photo / Video Editor"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
})

// loader

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});