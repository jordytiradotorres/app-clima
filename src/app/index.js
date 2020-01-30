
import './styles.css'
import { Weather } from './Weather';
import { UI } from './UI';
import { Store } from './Store';

if (module.hot) {
    module.hot.accept('./Weather.js', function () {
        console.log('He recargado en caliente')
    })
}

const store = new Store()
const { city, countryCode } = store.getLocationData()
const weather = new Weather(city, countryCode)
const ui = new UI()

async function fetchWeather () {
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}

const btnChange = document.getElementById('w-change-btn')
btnChange.addEventListener('click', e => {
    e.preventDefault()

    const city = document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value

    weather.changeLocation(city, countryCode)
    store.setLocationData(city, countryCode)
    fetchWeather()
})

document.addEventListener('DOMContentLoaded', fetchWeather)