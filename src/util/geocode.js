// JavaScript source code
const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?limit=1&access_token=pk.eyJ1IjoiZGFuaWVsMTIzNDU2NyIsImEiOiJja2M4cjN4cncxZWd3MnlxbzJ3ZXYxNGxxIn0.GzkjDQkC8jNV3lo2dFI3Yg'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Cannot connect', undefined)
        } else if (response.body.features.length === 0) {
            callback('Cannot find this location', undefined)
        } else {
            callback(undefined, {
                Latitude: response.body.features[0].center[1],
                Longtitude: response.body.features[0].center[0],
                Location: response.body.features[0].place_name
            })
        }

    })

}

module.exports = geocode