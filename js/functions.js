document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    if (toggle) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
