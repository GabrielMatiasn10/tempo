// variaveis e seleção de elementos
const apiKey ="cc4bb6aa08a77b2112ef17060c15dc67" 
const apiCountryURL = "https://www.countryflagicons.com/FLAT/64/DE.png"

const cityInput = document.getElementById ("cityInput")
const searchBtn = document.getElementById("search")

const cityElement = document.querySelector("#city")
const temElement = document.querySelector("#temperature")
const desElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weatherIconElement")
const countryElement = document.querySelector("#countryElement")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

// funções
const getWeatherData = async(city) => {
    const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiweatherURL);
    const data = await res.json()
    
    return data
}

const showWeatherData = async (city) => {
   const data = await getWeatherData(city)

   cityElement.innerText = data.name;
   temElement.innerText = parseInt(data.main.temp)
   desElement.innerText = data.weather[0].description;
   weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

   countryElement.setAttribute("src", apiCountryURL + data.sys.country);
   umidityElement.imnnerText = `${data.main.umidity}%`;
   windElement.innerText = `${data.wind.seed}km/h`

}

// eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city)
});
