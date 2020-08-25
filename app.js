const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e9852d82c9bfdb2b2d8368d4db87b014&query=37,-122';

request({url: url, json: true}, (error, response) => {
    console.log('It\'s ' + response.body.current.temperature + 'C outside');
})
