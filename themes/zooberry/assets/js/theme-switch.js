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
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('theme-switcher');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeSwitcher.checked = true;
  }

  // Detect OS preference if no saved preference
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add('dark');
    themeSwitcher.checked = true;
  }

  // Handle toggle switch
  themeSwitcher.addEventListener('change', function() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });
});
</script>