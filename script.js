// ===== CURRENT YEAR =====
const year = new Date().getFullYear();

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = year;
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== PROJECT BUTTON MESSAGE =====
const projectLinks = document.querySelectorAll(".project-card a");

projectLinks.forEach(link => {

    link.addEventListener("click", function () {

        console.log("Project link clicked");
    });

});


// ===== PAGE LOAD MESSAGE =====
window.addEventListener("load", function () {
    console.log("Portfolio Website Loaded Successfully!");
});