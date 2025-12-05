/*
    Student Name: David Nichols
    File Name: script.js
    Date: 12/4/25
*/

// Function to show and hide the mobile menu
function hamburger() {
    var menu = document.getElementById("menu-links");

    // Toggle between showing and hiding the menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
