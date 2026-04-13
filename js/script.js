let form = document.querySelector('form')
let req_inputs = document.querySelectorAll('.required')

form.onsubmit = (e) => {
    req_inputs.forEach(el => {
        if (el.value.length == 0) {
            e.preventDefault();
            el.style.borderColor = 'red'
        } else {
            el.style.borderColor = '#a9a9a9'
        }
    })
}

req_inputs.forEach(el => {
    el.onkeyup = () => {
        if (el.value.length > 0) {
            el.style.borderColor = '#a9a9a9'

        }
    }
})