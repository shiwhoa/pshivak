// function applyTheme(theme) {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
// }

function themeToggle() {
    // Get the current theme, default to 'dark' if no theme is set
    let currentTheme = localStorage.getItem("theme") || "dark";

    // Toggle the theme
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);

    // Store the new theme in localStorage
    localStorage.setItem("theme", newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
});

// Immediately set the theme on page load based on localStorage or default to dark


// // Initialize theme when DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     applyTheme(savedTheme);

//     // Add the event listener for the theme toggle button
//     document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
// });
