import "./styles.css"

const weatherInput = document.querySelector(".weather-form input")

const weatherForm = document.querySelector(".weather-form")

weatherForm.addEventListener("submit", e => {
    e.preventDefault()
})

weatherInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const errorMsg = weatherForm.querySelector(".error-msg")

        errorMsg.classList.remove("active")
        const cityName = weatherForm.querySelector("input").value

        createSkeletonHourlyCards()
        createSkeletonWeatherCards()

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51508559a54a70928ab3aed23d3a0b63`, {
            mode: "cors",
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)

                if (json.cod === "404") {
                    errorMsg.textContent = `${cityName} not found`
                    errorMsg.classList.add("active")

                    // Remove skeleton loading
                    const weatherCards = document.querySelector('.weather-cards')
                    weatherCards.replaceChildren()

                    const hourlyCards = document.querySelector(".hourly-weather")
                    hourlyCards.replaceChildren()
                    hourlyCards.classList.add("hidden")
                } else {
                    errorMsg.classList.remove("active")
                    const latitude = json.coord.lat
                    const longitude = json.coord.lon

                    getWeatherInfo(latitude, longitude)
                }
            })
        e.preventDefault()
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

            createHourlyCards(json)
            createWeatherStats(json)
            createWeatherCards(json)
        })
}

function createHourlyCards(json) {
    const hourlyDisplay = document.querySelector(".hourly-weather")
    hourlyDisplay.replaceChildren()

    for (let i = 0; i < 24; ++i) {
        const hourlyInfo = json.hourly[i]

        let hourString = new Date(hourlyInfo.dt * 1000).toLocaleTimeString("us-EN")
        let amOrPM = hourString.split(" ")[1]
        let hourTime = hourString.split(":")[0]
        hourString = `${hourTime} ${amOrPM}`

        const imgCode = hourlyInfo.weather[0].icon
        const imgSrc = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

        let descriptionString = hourlyInfo.weather[0].description
        descriptionString = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1)

        hourlyDisplay.innerHTML += `
        <article class="hourly-card">
            <h3>${hourString}</h3>
            <img src=${imgSrc}>

            <p class="pop">${hourlyInfo.pop * 100}%</p>
            <p class="temp">${Math.round(hourlyInfo.feels_like)}&deg;</p>
            <p>${descriptionString}</p>
        </article>
        `
    }
}

function createSkeletonHourlyCards() {
    const hourlyCards = document.querySelector(".hourly-weather")
    hourlyCards.replaceChildren()
    hourlyCards.classList.remove("hidden")

    for (let i = 0; i < 10; ++i) {
        hourlyCards.innerHTML += `
        <article class="hourly-card">
            <h3 class="skeleton skeleton-text"></h3>
            <img class="skeleton" style="height: 100px; width: 100px; margin-bottom: 20px;">

            <p class="skeleton skeleton-text"></p>
            <p class="skeleton skeleton-text"></p>
        </article>
        `
    }
}

function createWeatherStats(json) {
    const stats = document.querySelector(".stats-grid")
    
    // Clear old stats
    for (const childDiv of stats.children) {
        const statInfo = childDiv.querySelector("p.stat")
        statInfo.textContent = ""
    }

    const sunriseStat = stats.querySelector(".sunrise p.stat")

    const timeString = new Date(json.current.sunrise * 1000).toLocaleTimeString("en-US")
    sunriseStat.textContent = timeString

    const sunsetStat = stats.querySelector(".sunset p.stat")
    sunsetStat.textContent = new Date(json.current.sunset * 1000).toLocaleTimeString("en-US")

    const rainStat = stats.querySelector(".rain-chance p.stat")
    rainStat.textContent = `${json.daily[0].pop * 100}%`

    const humidityStat = stats.querySelector(".humidity p.stat")
    humidityStat.textContent = `${json.current.humidity}%`

    const windStat = stats.querySelector(".wind p.stat")
    windStat.textContent = `${json.current.wind_speed} m/s`

    const feelsLike = stats.querySelector(".feels-like p.stat")
    feelsLike.textContent = `${Math.round(json.current.feels_like)}°`

    const precipitationStat = stats.querySelector(".precipitation p.stat")

    if (json.current.rain) {
        precipitationStat.textContent = `${json.current.rain["1h"]} mm/h`
    }
    else if (json.current.snow) {
        precipitationStat.textContent = `${json.current.snow["1h"]} mm/h`
    }
    else {
        precipitationStat.textContent = "0 mm/h"
    }

    const pressureStat = stats.querySelector(".pressure p.stat")
    pressureStat.textContent = `${json.current.pressure} hPa`

    const visibilityStat = stats.querySelector(".visibility p.stat")
    const kmVisibility = json.current.visibility / 1000
    visibilityStat.textContent = `${kmVisibility} km`

    const uvStat = stats.querySelector(".uv-index p.stat")
    uvStat.textContent = `${json.current.uvi}`
}

function createSkeletonWeatherCards() { 
    const weatherCards = document.querySelector(".weather-cards")
    weatherCards.replaceChildren()
    const template = document.querySelector("template")

    for (let i = 0; i < 8; ++i) {
        const skeletonContent = template.content.cloneNode(true)
        weatherCards.appendChild(skeletonContent)
    }
}

function createWeatherCards(json) {
    const daily = json.daily
    const weatherCards = document.querySelector(".weather-cards")
    weatherCards.replaceChildren()

    daily.forEach((dayInfo, index) => {
        const dayName = new Date(dayInfo.dt * 1000).toLocaleDateString("us-en", {
            weekday: "long"
        })

        const descriptions = []

        dayInfo.weather.forEach(weatherInfo => {
            descriptions.push(weatherInfo.description)
        })

        const imgCode = dayInfo.weather[0].icon
        const imgSrc = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

        let descriptionString = descriptions.join("; ")
        descriptionString = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1)

        weatherCards.innerHTML += `
            <article class="weather-card">
                <div class="main-weather">
                    <h2>${dayName}</h2>
                    <div>
                        <p class="temp">H: ${Math.round(dayInfo.temp.max)}&deg;</p>
                        <p class="temp">L: ${Math.round(dayInfo.temp.min)}&deg;</p>
                    </div>
                    <p>Chance of precipitation: <span class="pop">${dayInfo.pop * 100}%</span></p>
                    <p>${descriptionString}</p>
                </div>
                <img src=${imgSrc}>
            </article>
        `
    })
}