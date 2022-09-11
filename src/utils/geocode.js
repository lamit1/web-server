const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text='+ encodeURIComponent(address) + '&apiKey=459ba8a8266944d9b1940ce0d1623e4f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.',{
                latitude: undefined,
                longitude: undefined
            })
        } else {
            callback(undefined, {
                latitude: body.features[0].properties.lat,
                longitude: body.features[0].properties.lon
            })
        }
    })
}

module.exports = geocode