// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


// =====================================================
// DARK / LIGHT MODE
// =====================================================

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    updateThemeIcon();

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-theme"
    );

    const isLight =
        document.body.classList.contains(
            "light-theme"
        );


    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );


    updateThemeIcon();

});


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");


    if (
        document.body.classList.contains(
            "light-theme"
        )
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}


// =====================================================
// CURRENT YEAR
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 9, 12, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 9, 12, 0.75)";

    }

});