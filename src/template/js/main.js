const passwordsInput = document.querySelectorAll('#auth-password-input');
const showPasswordBtn = document.querySelector('.show-password');
const closeEyes = document.querySelectorAll('.icon-close-eye');



    showPasswordBtn.addEventListener('click', e => {
        for (let passwordInput of passwordsInput) {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";

                for (let closeEye of closeEyes) {
                    closeEye.src = "img/eye-open.svg"
                }

            } else {
                passwordInput.type = "password";
                for (let closeEye of closeEyes) {
                    closeEye.src = "img/close-eye.svg"
                }

            }
        }

    });


