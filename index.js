// Select elements
const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    form_container = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupLink = document.querySelector(".login_signup a"),
    loginLink = document.querySelector(".signup_form .login_signup a"),
    loginForm = document.querySelector(".login_form"),
    signupForm = document.querySelector(".signup_form"),
    pwShowHide = document.querySelectorAll(".pw_hide");

// Event listener to show the form container
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Event listener to hide the form container
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Event listener to switch to the signup form
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

// Event listener to switch to the login form
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

// Event listeners for password show/hide toggle
pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let passwordField = icon.previousElementSibling;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            passwordField.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});
