const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=ac9542fb58f34ce283244453223008&q=' + latitude + ',' + longitude+ '&days=7&aqi=no&alerts=no'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temp_c + ' degress out.')
        }
    })
}

module.exports = forecast