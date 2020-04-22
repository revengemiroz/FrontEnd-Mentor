const formEl = document.getElementById('form')

formEl.addEventListener('submit', e => {
    e.preventDefault()

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addError('firstname', 'First name cannot be empty')
    }
    else {
        removeError('firstname')
    }

    if (lastName === '') {
        addError('lastname', 'Last name cannot be empty')
    }
    else {
        removeError('lastname')
    }

    if (email === '') {
        addError('email', 'Email cannot be empty')
    }
    else if (!isValid(email)) {
        addError('email', 'Email is not valid')
    }
    else {
        removeError('email')
    }

    if (password === '') {
        addError('password', 'Password cannot be empty')
    }
    else {
        removeError('password')
    }

})


function addError(field, messgae) {
    const form = formEl[field].parentElement
    form.classList.add('error')

    const small = form.querySelector('small')
    small.innerText = messgae
}

function removeError(field) {
    const form = formEl[field].parentNode
    form.classList.remove('error')
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}