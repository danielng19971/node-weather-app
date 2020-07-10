// JavaScript source code
const request = require('request')

const forcast = (geocode, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bc00b7e2d490bb52448b70651a9259ea&query=' + geocode.Latitude+',' + geocode.Longtitude
    request({ url: url, json: true }, (error,response) => {

        if (error) {
            callback('cannot connect', undefined)

        } else if (response.body.error) {
            callback('cannot find forcast for this location', undefined)

        } else {
            const data = response.body.current
            callback(undefined, {
                temperature: data.temperature,
                wind_speed: data.wind_speed

            })

        }

        


    })


}
module.exports = forcast


