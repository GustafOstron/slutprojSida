function setupRegister() {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let termsChecked = document.getElementById("terms").checked;

        // Get error elements
        let usernameError = document.getElementById("usernameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");
        let confirmPasswordError = document.getElementById("confirmPasswordError");
        let termsError = document.getElementById("termsError");
        let successMessage = document.getElementById("successMessage");

        // Reset error messages
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        termsError.textContent = "";
        successMessage.textContent = "";

        // Validate username
        if (username.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters long";
            return;
        }

        // Validate email
        if (!email.includes("@") || !email.includes(".")) {
            emailError.textContent = "Please enter a valid email address";
            return;
        }

        // Validate password
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long";
            return;
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match";
            return;
        }

        // Validate terms
        if (!termsChecked) {
            termsError.textContent = "You must accept the terms";
            return;
        }

        // Get existing users or create empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username or email already exists
        if (users.some(user => user.username === username)) {
            usernameError.textContent = "Username already exists";
            return;
        }
        if (users.some(user => user.email === email)) {
            emailError.textContent = "Email already registered";
            return;
        }

        // Add new user
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        // Show success message
        successMessage.textContent = "Registration successful! Redirecting...";

        // Redirect after 2 seconds
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    })
}

function setupLogin() {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let identifier = document.getElementById("identifier").value;
        let password = document.getElementById("password").value;

        let identifierError = document.getElementById("identifierError");
        let passwordError = document.getElementById("passwordError");
        let loginError = document.getElementById("loginError");
        let successMessage = document.getElementById("successMessage");

        // Reset error messages
        identifierError.textContent = "";
        passwordError.textContent = "";
        loginError.textContent = "";
        successMessage.textContent = "";

        // Validate password
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long";
            return;
        }

        // Get users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user by username or email
        let user = users.find(user => 
            (user.username === identifier || user.email === identifier) && 
            user.password === password
        );

        if (!user) {
            loginError.textContent = "Invalid credentials";
            return;
        }

        // Store logged in user info
        localStorage.setItem("loggedInUser", JSON.stringify({
            username: user.username,
            email: user.email
        }));

        // Show success message
        successMessage.textContent = "Login successful! Redirecting...";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    })
}

function logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('library');
    localStorage.removeItem('cart');
    showDefualt()
}
