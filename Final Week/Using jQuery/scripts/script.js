/*
    Student Name: David Nichols
    File Name: script.js
    Date: 12/4/25
*/

$(document).ready(function () {

    // Hide all paragraph elements inside <article>
    $("#hideBtn").click(function () {
        $("#main p").hide();
    });

    // Show all paragraph elements inside <article>
    $("#showBtn").click(function () {
        $("#main p").show();
    });

});