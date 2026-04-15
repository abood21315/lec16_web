let form = document.querySelector('form')
let req_inputs = document.querySelectorAll('input, textarea')
let thankYouPage = document.getElementById('thank-you-page')

form.onsubmit = (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي دائماً
    let isValid = true;
    req_inputs.forEach(el => {
        if (el.value.length == 0) {
            el.style.borderColor = 'red'
            isValid = false;
        } else {
            el.style.borderColor = '#a9a9a9'
        }
    })

    if (isValid) {
        // إخفاء النموذج
        form.style.display = 'none';
        // إظهار صفحة الشكر
        thankYouPage.style.display = 'flex';
    }
}
req_inputs.forEach(el => {
    el.onkeyup = () => {
        if (el.value.length > 0) {
            el.style.borderColor = '#a9a9a9'
        } else {
            el.style.borderColor = 'red'
        }
    }
})