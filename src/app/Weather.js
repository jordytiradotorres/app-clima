
export class Weather {

    constructor (city, countryCode) {
        this.apiKey = '99e6a1fa2b9f3142483e7286c0ba04c8'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`

        const response = await fetch(URI)
        const data = await response.json()
        return data
    }

    changeLocation (city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }
}