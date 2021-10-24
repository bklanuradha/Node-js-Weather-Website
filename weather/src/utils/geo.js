const axios = require('axios');
const getWeather = require('./weather');

const getGeo = (location)=>{
    return new Promise((resolve,reject)=>{
        
            const url = 'https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=87144952fb2b39afb70b0a5e4a6de410';

            axios.get(url)
            .then(function (response) {
                // handle success
                resolve({
                    name:response.data[0].name,
                    lat:response.data[0].lat,
                    lon:response.data[0].lon
                });
                //console.log(response.data[0].name+ " is in "+response.data[0].lat+""+response.data[0].lon);
            })
            .catch(function (error) {
                // handle error
                reject({error: 'Unable to find location'})
                //console.log("Unable to find location");
            });

     });
}

module.exports = getGeo

