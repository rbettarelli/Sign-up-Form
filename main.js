const password = document.getElementById("password")
const confirmPass = document.getElementById("confirmPass")


confirmPass.addEventListener('focusout', () => {

    if (confirmPass.value !== password.value) {
        password.classList.add('invalidInput')
        confirmPass.classList.add('invalidInput')
    } else {
        password.classList.add('correctInput')
        confirmPass.classList.add('correctInput')
    }

})


