const themeToggleBtn = document.getElementById("theme-toggle-btn");
const colorPicker = document.getElementById("color-picker");
const bgPicker = document.getElementById("bg-picker");
/* themeToggleBtn.classList.add("ejemplo");
*/

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle ("dark");
    if (document.body.classList.contains  ("dark")) {
        themeToggleBtn.innerText = "Light Mode";
    } else {
        themeToggleBtn.innerText = "Dark Mode";   
    }
    });

colorPicker.addEventListener("change", function () {
    document.body.style.color = colorPicker.value;
});
bgPicker.addEventListener("change", function () {
    document.body.style.backgroundColor = bgPicker.value;
});