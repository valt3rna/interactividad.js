const themeToggleBtn = document.getElementById("theme-toggle-btn");
/* themeToggleBtn.classList.add("ejemplo");
*/
themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle ("dark");
});