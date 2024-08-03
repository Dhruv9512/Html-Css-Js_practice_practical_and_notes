

function toggleTheme() {
    const body = document.body;
    const result = document.getElementById("it");

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change text based on theme
    if (body.classList.contains('dark-mode')) {
        result.innerText = "Dark Mode";
    } else {
        result.innerText = "Light Mode";
    }
}
