const passwordsInput = document.querySelectorAll('#auth-password-input');
const showPasswordBtn = document.querySelector('.show-password');
const closeEyes = document.querySelectorAll('.icon-close-eye');



showPasswordBtn.addEventListener('click', e => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";


    } else {
        passwordInput.type = "password";

    }


});


