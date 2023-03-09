import "./styles.css"

const weatherInput = document.querySelector(".weather-form input")

const weatherForm = document.querySelector(".weather-form")

weatherForm.addEventListener("submit", e => {
    e.preventDefault()
})

weatherInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const cityName = weatherForm.querySelector("input").value

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51508559a54a70928ab3aed23d3a0b63`, {
            mode: "cors",
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                const errorMsg = weatherForm.querySelector(".error-msg")

                if (json.cod === "404") {
                    errorMsg.textContent = `${cityName} not found`
                    errorMsg.classList.add("active")
                } 
                else {
                    errorMsg.classList.remove("active")
                    const latitude = json.coord.lat
                    const longitude = json.coord.lon

                    getWeatherInfo(latitude, longitude)
                }
            })
    }
})

function getWeatherInfo(latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=51508559a54a70928ab3aed23d3a0b63&units=imperial`,
        {
            mode: "cors",
        }
    )
        .then(response => response.json())
        .then(json => {
            console.log(json)

            createWeatherCards(json)
        })
}

function createWeatherCards(json) {
    const daily = json.daily
    const weatherCards = document.querySelector(".weather-cards")
    weatherCards.replaceChildren()

    daily.forEach(dayInfo => {
        const dayName = new Date(dayInfo.dt * 1000).toLocaleDateString("us-en", {
            "weekday": "short"
        })

        const imgCode = dayInfo.weather[0].icon
        const imgSrc = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

        weatherCards.innerHTML += `
            <article class="weather-card">
                <div class="main-weather">
                    <h2>${dayName}</h2>
                    <div>
                        <p>${dayInfo.temp.day}</p>
                        <p>${dayInfo.temp.night}</p>
                    </div>
                </div>
                <img src=${imgSrc}>
            </article>
        `
    })
}
