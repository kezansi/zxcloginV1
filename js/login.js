document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the entered username and password match the predefined values
    if (username === "your_username" && password === "your_password") {
        // If the username and password match, redirect to index.html
        window.location.href = "index.html";
    } else {
        // If the username and password don't match, display an error message
        alert("Invalid username or password. Please try again.");
    }
});