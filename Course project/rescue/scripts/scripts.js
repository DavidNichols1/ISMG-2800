/*
    Author: David Nichols
    File Name: script.js
    Date: 12/4/25
*/


function hamburger() {
    const menu = document.getElementById("menu-links");

    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
