const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const email = document.getElementById('email')
const phone_number = document.getElementById('phone_number')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm_password')

const form = document.getElementById('sign-up-form')

const errorMessage = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (first_name.value === '' || first_name.value == null) {
        messages.push('Name is required')
    }

    if (password.value !== confirm_password.value) {
        messages.push('Passwords do not match!')
        password.style.border = "1px solid red";
        confirm_password.style.border = "1px solid red";
    } else if (password.value === '') {
        password.style.border = "1px solid red";
        confirm_password.style.border = "1px solid red";
        messages.push('Please enter a password!')
    } 

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(',')
    }
})