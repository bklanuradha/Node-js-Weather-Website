const axios = require('axios');

const getWeather = (lat,lon)=>{
    return new Promise((resolve,reject)=>{
        const url= 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=87144952fb2b39afb70b0a5e4a6de410';

                    axios.get(url)
                    .then(function (response) {
                        // handle success
                        resolve({weather: 'currently '+ response.data.current.weather[0].description+ ' and temparature '+response.data.current.temp+'c'});
                        //console.log("currently "+ response.data.current.weather[0].description+ " and temparature "+response.data.current.temp+"c");
                    })
                    .catch(function (error) {
                        // handle error
                        reject({error: 'unable to find the location, please try anther location'})
                        //console.log('unable to find the location, please try anther location');
                        //console.log(error.response.data.message);
                    });


            });

}

module.exports = getWeather



