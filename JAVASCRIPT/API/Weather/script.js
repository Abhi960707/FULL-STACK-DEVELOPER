// let searchBtn = document.querySelector('.fa-magnifying-glass')
// let apikey ='e055f25c761ce8573c2939cc27cd60d6'
// let city =document.querySelector('.weather__search')
// let weather__city=document.querySelector('.weather__city')
// let weather__humidity=document.querySelector('.weather__humidity span')
// let weather__wind=document.querySelector('.weather__wind span')
// let weather__pressure=document.querySelector('.weather__pressure span')
// let weather__realfeel=document.querySelector('.weather__realfeel span')
// ===============================================================================================

// // Select elements
// let searchBtn = document.querySelector('.fa-magnifying-glass')
// let apikey = 'e055f25c761ce8573c2939cc27cd60d6'
// let cityInput = document.querySelector('.weather__searchform')

// let weather__city = document.querySelector('.weather__city')
// let weather__humidity = document.querySelector('.weather__humidity span')
// let weather__wind = document.querySelector('.weather__wind span')
// let weather__pressure = document.querySelector('.weather__pressure span')
// let weather__realfeel = document.querySelector('.weather__realfeel span')
// let weather__temperature = document.querySelector('.weather__temperature')
// let weather__forecast = document.querySelector('.weather__forecast')
// let weather__icon = document.querySelector('.weather__icon')
// let weather__datetime = document.querySelector('.weather__datetime')
// let weather__minmax = document.querySelector('.weather__minmax')

// // Function to fetch weather
// async function getWeather(city) {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    
//     let response = await fetch(url)
//     if (!response.ok) {
//         alert("City not found!")
//         return
//     }
//     let data = await response.json()
//     showWeather(data)
// }

// // Function to show weather
// function showWeather(data) {
//     weather__city.textContent = `${data.name}, ${data.sys.country}`
//     weather__datetime.textContent = new Date().toLocaleString()

//     weather__forecast.textContent = data.weather[0].description
//     weather__icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="icon">`

//     weather__temperature.innerHTML = `${Math.round(data.main.temp)}&#176C`
//     weather__realfeel.textContent = Math.round(data.main.feels_like)
//     weather__humidity.textContent = data.main.humidity
//     weather__wind.textContent = data.wind.speed
//     weather__pressure.textContent = data.main.pressure

//     weather__minmax.innerHTML = `
//         <p>Min: ${Math.round(data.main.temp_min)}&#176C</p>
//         <p>Max: ${Math.round(data.main.temp_max)}&#176C</p>
//     `
// }

// // Search button click
// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     let city = cityInput.value.trim()
//     if (city !== '') {
//         getWeather(city)
//     }
// })

// // Default city on load
// getWeather("Mumbai")

// ======================================================================


// Select elements
let searchBtn = document.querySelector('.fa-magnifying-glass')
let apikey = 'e055f25c761ce8573c2939cc27cd60d6'
let cityInput = document.querySelector('.weather__searchform')

let weather__city = document.querySelector('.weather__city')
let weather__humidity = document.querySelector('.weather__humidity')
let weather__wind = document.querySelector('.weather__wind')
let weather__pressure = document.querySelector('.weather__pressure')
let weather__realfeel = document.querySelector('.weather__realfeel')
let weather__temperature = document.querySelector('.weather__temperature')
let weather__forecast = document.querySelector('.weather__forecast')
let weather__icon = document.querySelector('.weather__icon')
let weather__datetime = document.querySelector('.weather__datetime')
let weather__minmax = document.querySelector('.weather__minmax')

// Fetch weather data
function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found")
            }
            return response.json()
        })
        .then(data => showWeather(data))
        .catch(error => alert(error.message))
}

// Show weather data
function showWeather(data) {
    // City and datetime
    weather__city.textContent = `${data.name}, ${data.sys.country}`
    weather__datetime.textContent = new Date().toLocaleString()

    // Forecast
    weather__forecast.textContent = data.weather[0].description

    // Weather icon (appendChild with <img>)
    weather__icon.innerHTML = ""
    let img = document.createElement("img")
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    img.alt = "Weather Icon"
    weather__icon.appendChild(img)

    // Temperature with <span> and entity
    weather__temperature.innerHTML = ""
    let tempSpan = document.createElement("span")
    tempSpan.textContent = Math.round(data.main.temp)
    weather__temperature.appendChild(tempSpan)
    weather__temperature.insertAdjacentHTML("beforeend", "&#176;C")

    // Real feel
    weather__realfeel.innerHTML = ""
    let rfSpan = document.createElement("span")
    rfSpan.textContent = Math.round(data.main.feels_like)
    weather__realfeel.appendChild(rfSpan)
    weather__realfeel.insertAdjacentHTML("beforeend", "&#176;C")

    // Humidity
    weather__humidity.innerHTML = ""
    let hSpan = document.createElement("span")
    hSpan.textContent = data.main.humidity
    weather__humidity.appendChild(hSpan)
    weather__humidity.insertAdjacentHTML("beforeend", "%")

    // Wind
    weather__wind.innerHTML = ""
    let wSpan = document.createElement("span")
    wSpan.textContent = data.wind.speed
    weather__wind.appendChild(wSpan)
    weather__wind.insertAdjacentHTML("beforeend", " km/h")

    // Pressure
    weather__pressure.innerHTML = ""
    let pSpan = document.createElement("span")
    pSpan.textContent = data.main.pressure
    weather__pressure.appendChild(pSpan)
    weather__pressure.insertAdjacentHTML("beforeend", " hPa")

    // Min/Max with spans
    weather__minmax.innerHTML = ""
    let minP = document.createElement("p")
    let minSpan = document.createElement("span")
    minSpan.textContent = Math.round(data.main.temp_min)
    minP.textContent = "Min: "
    minP.appendChild(minSpan)
    minP.insertAdjacentHTML("beforeend", "&#176;C")

    let maxP = document.createElement("p")
    let maxSpan = document.createElement("span")
    maxSpan.textContent = Math.round(data.main.temp_max)
    maxP.textContent = "Max: "
    maxP.appendChild(maxSpan)
    maxP.insertAdjacentHTML("beforeend", "&#176;C")

    weather__minmax.appendChild(minP)
    weather__minmax.appendChild(maxP)
}

// Search button
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let city = cityInput.value.trim()
    if (city !== '') {
        getWeather(city)
    }
})

// Default city
getWeather("Mumbai")



