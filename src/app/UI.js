
export class UI {
	constructor() {
		this.location = document.getElementById('weather-location')
		this.subtitle = document.getElementById('weather-subtitle')
		this.desc = document.getElementById('weather-description')
		this.string = document.getElementById('weather-string')
		this.humidity = document.getElementById('weather-humidity')
		this.wind = document.getElementById('weather-wind')
		this.city = document.getElementById('city')
		this.countryCode = document.getElementById('countryCode')
	}

	render(weather) {
		this.location.textContent = `${weather.name}`
		this.subtitle.textContent = ` / ${weather.sys.country}`
		this.desc.textContent = weather.weather[0].description
		this.string.textContent = `${weather.main.temp}ºC`
		this.humidity.textContent = `Humidity: ${weather.main.humidity} %`
		this.wind.textContent = `Wind: ${weather.wind.speed} m/s`

		this.city.value = ''
		this.countryCode.value = ''
	}
}


var nombre = null

function actualizarNombre() {
	console.log('Actualizacion empezada')
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('actualizacion completada')
			resolve('jordy')
		},1000)
	})
}

async function saludar() {
	nombre = await actualizarNombre()
	console.log('Hola me llamo ' + nombre)
}

saludar()