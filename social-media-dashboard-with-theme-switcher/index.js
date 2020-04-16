const toggle = document.querySelector('#toggle')
const ball = document.querySelector('.ball')
const body = document.getElementsByTagName('BODY')[0]
const dark = document.querySelectorAll('.text-darkblue')
const light = document.querySelectorAll('.text-lightblue')
const bigCardWhite = document.querySelectorAll('.bigCard.white')
const smallCardWhite = document.querySelectorAll('.smallCard.white')
const topEl = document.querySelector('.top.white')

window.onload = () => {
    darkTheme()
    initialize()

    if (localStorage.getItem('theme') == 'dark') {
        darkTheme()
        console.log('dark Theme')
    }
    else {
        lightTheme()
        toggle
        console.log('light Theme')
    }
}

function initialize() {

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark')
    }
    else {
        return
    }
}



toggle.addEventListener('click', () => {
    if (toggle.checked == true) {
        console.log('checked')
        localStorage.setItem('theme', 'light')
        lightTheme()
    }
    else if (toggle.checked == false) {
        console.log('unchecked')
        localStorage.setItem('theme', 'dark')
        darkTheme()
    }
})



function lightTheme() {
    body.style.backgroundColor = 'white'

    ball.style.transform = 'translateX(30px)'

    if (!topEl.classList.contains('white')) {
        topEl.classList.add('white')
    }

    if (!ball.classList.contains('white')) {
        ball.classList.add('white')
    }

    dark.forEach(el => {
        el.classList.add('text-darkblue')
    })

    bigCardWhite.forEach(el => {

        el.classList.add('white')
    })

    smallCardWhite.forEach(el => {

        el.classList.add('white')

    })
}

function darkTheme() {
    body.style.backgroundColor = '#1d2029'
    //console.log(document.querySelectorAll('.text-darkblue'))


    ball.style.transform = 'translateX(0px)'

    if (topEl.classList.contains('white')) {
        topEl.classList.remove('white')
    }

    if (ball.classList.contains('white')) {
        ball.classList.remove('white')
    }

    dark.forEach(el => {
        if (el.classList.contains('text-darkblue')) {
            el.classList.remove('text-darkblue')
        }

    })

    light.forEach(el => {
        if (el.classList.contains('text-lightblue')) {
            el.classList.remove('text-lightblue')
        }
    })

    bigCardWhite.forEach(el => {
        if (el.classList.contains('white')) {
            el.classList.remove('white')
        }
    })

    smallCardWhite.forEach(el => {
        if (el.classList.contains('white')) {
            el.classList.remove('white')
        }
    })
}