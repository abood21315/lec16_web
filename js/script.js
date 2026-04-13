let form = document.querySelector('form')
let req_inputs = document.querySelectorAll('input[required], textarea[required]')
let successMessage = document.getElementById('success-message')

form.onsubmit = (e) => {
    let isValid = true
    req_inputs.forEach(el => {
        if (el.value.length == 0) {
            e.preventDefault();
            el.style.borderColor = 'red'
            isValid = false
        } else {
            el.style.borderColor = '#a9a9a9'
        }
    })
    if (isValid) {
        e.preventDefault(); // Prevent actual form submission
        form.style.display = 'none'
        successMessage.style.display = 'flex'
    }
}

req_inputs.forEach(el => {
    el.onkeyup = () => {
        if (el.value.length > 0) {
            el.style.borderColor = '#a9a9a9'
        }
    }
})