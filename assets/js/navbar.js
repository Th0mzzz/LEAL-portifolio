const navLinks = document.getElementById('nav-links');
document.getElementById('menu-toggle').addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-links") && !e.target.classList.contains("menu-toggle")) {
        navLinks.classList.remove("active")
    }
})