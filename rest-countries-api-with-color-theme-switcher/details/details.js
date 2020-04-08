window.onload = () => {
    //set the mode (dark or not)..
    if (localStorage.getItem("dark-mode") == "false") {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
    performModeState();

    //catch the country that user wants to see
    const country = JSON.parse(localStorage.getItem("countryObject"));

    //listener for clicking "back" button
    document.querySelector(".back").addEventListener("click", () => {
        window.location.pathname = "rest-countries-api-with-color-theme-switcher/index.html";
    });

    //display the flag and infos about this country
    const main = document.querySelector("main");
    const img = document.createElement("img");
    const infos = document.createElement("div");

    img.src = country.flag;
    img.alt = country.name;
    img.classList.add("img-details");
    infos.classList.add("info-details");

    infos.innerHTML = `
        <h1>${country.name}</h1>
        <div class="info1-details">
            <p><strong>Native Name:</strong> ${country.nativeName}</p>
            <p><strong>Population:</strong> ${numberWithCommas(country.population)}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Sub Region:</strong> ${country.subregion}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
        <div class="info2-details">
            <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
            <p><strong>Currencies:</strong> ${displayArray(country.currencies)}</p>
            <p><strong>Languages:</strong> ${displayArray(country.languages)}</p>
        </div>
    `;
    //add a paragraph to infos with the borders of that country... 
    displayButtons(country.borders);
    //add contents to the DOM
    main.appendChild(img);
    main.appendChild(infos);


    //listener for clicking "Dark mode"
    document.getElementById("dark").addEventListener("click", () => {
        performModeState();
    });


    //function to perform dark mode or not..
    function performModeState() {
        if (localStorage.getItem("dark-mode") == "false") {
            document.body.classList.add("body-dark-mode");
            document.querySelector("nav").classList.add("dark-mode");
            document.querySelector(".back").classList.add("dark-mode");
            for (let i = 0; i < document.querySelectorAll(".borders button").length; i++) {
                document.querySelectorAll(".borders button")[i].classList.add("dark-mode");
                console.log("hi");
            };
            localStorage.setItem("dark-mode", "true");
        } else {
            document.body.classList.remove("body-dark-mode");
            document.querySelector("nav").classList.remove("dark-mode");
            document.querySelector(".back").classList.remove("dark-mode");
            for (let i = 0; i < document.querySelectorAll(".btn-details").length; i++) {
                document.querySelectorAll(".btn-details")[i].classList.remove("dark-mode");
            };
            localStorage.setItem("dark-mode", "false");
        };
    };


    //function to display on DOM the content of an array of objects (with a name key) as a string
    function displayArray(arr) {
        const str = arr.reduce((acc, item) => acc + item.name + ", ", "");
        return str.slice(0, str.length - 2);
    };

    //function to display on DOM the content of an array as a string of separate buttons
    async function displayButtons(arr) {
        if (arr.length > 0) {
            let borders = arr.reduce((acc, item) => acc + item + ";", "");
            borders = borders.slice(0, borders.length - 1);

            const res = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${borders}`);
            const data = await res.json();

            let buttons = "";
            data.forEach(country => buttons += `<button class="btn-details">${country.name}</button>`);
            infos.innerHTML += `<p class="borders">Border Countries: ${buttons}</p>`;

            //perform the state of card because on the reload it's not performing 
            if (localStorage.getItem("dark-mode") == "true") {
                for (let i = 0; i < document.querySelectorAll(".btn-details").length; i++) {
                    document.querySelectorAll(".btn-details")[i].classList.add("dark-mode");
                };
            };

            //listener for clicking a border
            clickBorder();
            return;
        } else {
            infos.innerHTML += `<p class="borders">Border Countries: None</p>`;
            return;
        }
    };

    //function to add listeners for clicking a border button
    function clickBorder() {
        document.querySelectorAll(".borders button").forEach(btn => {
            btn.addEventListener("click", (e) => {
                fetch(`https://restcountries.eu/rest/v2/name/${e.target.innerText}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("countryObject", JSON.stringify(data[0]));
                        location.reload();
                    });
            });
            return;
        });
    };


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

};