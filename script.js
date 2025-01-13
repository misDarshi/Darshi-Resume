document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".content-section");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetSection = document.getElementById(this.getAttribute("data-target"));

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Remove highlight from all sections
            sections.forEach(section => section.classList.remove("highlighted"));

            // Add highlight to the target section
            targetSection.classList.add("highlighted");
        });
    });
});
