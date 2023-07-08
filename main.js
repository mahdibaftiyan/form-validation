const form = document.querySelector('#form')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInput()
})

const checkInput = () => {
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (userNameValue === '') {
        setError(userName, 'نام کاربری را وارد کنید')
    }
    else {
        setSuccess(userName)
    }

    if (emailValue === '') {
        setError(email, 'ایمیل  خود را وارد کنید')
    }
    else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        setError(password, 'رمز عبور خود را وارد کنید')
    }
    else {
        setSuccess(password)
    }

    if (password2Value === '') {
        setError(password2, 'تکرار رمز عبور خود را وارد کنید')
    }
    else if (password2Value !== passwordValue) {
        setError(password2, 'رمز عبور اشتباه وارد شده است')
    }
    else {
        setSuccess(password2)
    }

}

const setSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'formControl success'

}

const setError = (input, message) => {
    const formControl = input.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    formControl.className = 'formControl error'
}