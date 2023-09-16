// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and message elements
    var button = document.getElementById("helloButton");
    var message = document.getElementById("message");

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        // Change the message text when the button is clicked
        message.textContent = "Hello, KaiOS!";
    });
});
