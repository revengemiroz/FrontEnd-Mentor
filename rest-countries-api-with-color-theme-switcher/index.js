
//set dark mode

if (localStorage.getItem('dark-mode')) {
    if (localStorage.getItem('dark-mode') == 'false') {
        localStorage.setItem('dark-mode', 'true')
    }
    else {
        localStorage.setItem('dark-mode', 'false')
    }
    performModeState()
}
else {
    localStorage.setItem('dark-mode', 'false')
}


let firstRender = true


async function displayCountries(url) {


    document.querySelector('main').innerHTML = `
    <div class='loader'>
    <span class="loading__anim"></span>
    </div>
    `

    try {


        const res = await fetch(url)
        const data = await res.json()

        //when the user fetches all the data stop the preloader
        document.querySelector('main').innerHTML = ``

        data.forEach(country => {

            if (firstRender == true) {
                const option = document.createElement('option')
                option.value = country.name
                document.querySelector('#searching').appendChild(option)
            }



            //html content for homepage cards
            const cardsOutput = `
        <h2>${country.name}</h2>
        <p><strong>Population :</strong> ${numberWithCommas(country.population)}
        <p><strong>Regoin : </strong>${country.region}</p>
        <p><strong>Capital : </strong>${country.capital}</p>`

            const card = document.createElement('div')
            const img = document.createElement('img')
            const div = document.createElement('div')
            const main = document.querySelector('main')

            card.classList.add('card')
            div.classList.add('infos')

            img.src = country.flag
            img.alt = country.name

            div.innerHTML = cardsOutput
            card.appendChild(img)
            card.appendChild(div)
            main.appendChild(card)
        });

        if (localStorage.getItem('dark-mode') == 'true') {
            for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
                document.querySelectorAll('.card')[i].classList.add('dark-mode')
            }
        }
        firstRender = false

        clickCountry(data)
    }
    catch (err) {
        document.querySelector("main").innerHTML = "<h1 style='color:hsl(0, 0%, 52%)'>No country by that Name..</h1>";
    }

}

displayCountries(`https://restcountries.eu/rest/v2/all`)

//filter by region
const region = document.querySelector('.region')
region.addEventListener('change', () => {
    if (region.value === '') {
        displayCountries("https://restcountries.eu/rest/v2/all");
    }
    else {
        displayCountries(`https://restcountries.eu/rest/v2/region/${region.value.toLowerCase()}`);
    }
})

//search for a specific country
const search = document.querySelector('.search')
search.addEventListener('change', () => {
    if (search.value === '' && region.value != '') {
        displayCountries(`https://restcountries.eu/rest/v2/region/${region.value.toLowerCase()}`);
    }
    else if (search.value === '' && region.value === '') {
        displayCountries("https://restcountries.eu/rest/v2/all");
    }
    else {
        displayCountries(`https://restcountries.eu/rest/v2/name/${search.value.toLowerCase()}`);
    }
})


//click a country
function clickCountry(data) {
    document.querySelector('main').addEventListener('click', e => {
        if (e.target.classList.contains('infos') || e.target.tagName == 'IMG') {
            const countryObject = JSON.stringify(data.find(country => country.name == e.target.alt))

            localStorage.setItem('countryObject', countryObject)
            window.location.pathname = `rest-countries-api-with-color-theme-switcher/details/details.html`
        }
    })
}




//dark mode toogle
document.getElementById('dark').addEventListener('click', () => {
    performModeState()
    console.log('ss')
})

function performModeState() {
    if (localStorage.getItem('dark-mode') == 'false') {
        document.body.classList.add('body-dark-mode')
        document.querySelector('nav').classList.add('dark-mode')

        for (let i = 0; i < document.querySelectorAll('input').length; i++) {
            document.querySelectorAll('input')[i].classList.add('dark-mode')
        }

        for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
            document.querySelectorAll('.card')[i].classList.add('dark-mode')
        }

        localStorage.setItem('dark-mode', 'true')
    }
    else {
        document.body.classList.remove('body-dark-mode')
        document.querySelector('nav').classList.remove('dark-mode')

        for (let i = 0; i < document.querySelectorAll('input').length; i++) {
            document.querySelectorAll('input')[i].classList.remove('dark-mode')
        }

        for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
            document.querySelectorAll('.card')[i].classList.remove('dark-mode')
        }

        localStorage.setItem('dark-mode', 'false')
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
