// const toggle = document.getElementById("toggle");
// const refresh = document.getElementById("refresh");
// const theme = window.localStorage.getItem("theme");

// /* checks if the theme stored in localStorage is dark
// if yes apply the dark theme to the body */
// if (theme === "light") document.body.classList.add("light");

// // event listener stops when the change theme button is clicked
// toggle.addEventListener("click", () => {
//    document.body.classList.toggle("light");
//    if (theme === "light") {
//      window.localStorage.setItem("theme", "light");
//      // if the theme is light, set the theme to dark
//     } 
//    else window.localStorage.setItem("theme", "light");
// });

// refresh.addEventListener("click", () => {
//    window.location.reload();
// });

<script>
document.getElementById('toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = (currentTheme === 'light') ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// On page load, set the theme based on user's preference
window.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>