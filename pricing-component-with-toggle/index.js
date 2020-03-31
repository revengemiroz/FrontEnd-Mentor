const toggleEl = document.querySelector('#toggle')
const pricingEl = document.querySelector('.pricing')

const prfEl = document.getElementById('prof')
const basicEl = document.getElementById('basic')
const masterEl = document.getElementById('master')

toggleEl.addEventListener('change', (e) => {

    if (toggleEl.checked == true) {
        basicEl.innerText = `19.99`
        prfEl.innerText = `24.99`
        masterEl.innerText = `39.99`
    }
    else {
        basicEl.innerText = `199.99`
        prfEl.innerText = `249.99`
        masterEl.innerText = `399.99`
    }


})


