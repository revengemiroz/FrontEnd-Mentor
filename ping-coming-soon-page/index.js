const buttonEl = document.querySelector('.button')
const inputEl = document.querySelector('.email')
const smallEl = document.querySelector('.small')
const inputdiv = document.querySelector('.input')

buttonEl.addEventListener('click', () => {
    console.log('clcik')
    validation()
})

inputEl.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        validation()
    }
})

function validation() {
    if (!inputEl.value) {
        // say it's empty
        inputdiv.classList.add('error');
        smallEl.innerText = 'Email field cannot be blank!';
        smallEl.style.display = 'inline-block';
    }
    else if (!isValidEmail(inputEl.value)) {
        // say it's invalid
        inputdiv.classList.add('error');
        smallEl.innerText = 'Email is invalid!';
        smallEl.style.display = 'inline-block';
    } else {
        // submit it
        inputdiv.classList.remove('error');
        smallEl.innerText = '';
        smallEl.style.display = 'none';
    }
}

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    //returns true or false
}
