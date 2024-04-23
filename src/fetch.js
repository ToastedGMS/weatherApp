// selectors
const locationInput = document.querySelector('#location');

function addLocationToLink(val){
    // modifies the fetch link to include location inserted by the user
    let url = `http://api.weatherapi.com/v1/current.json?key=78894db7b6c64f4ba5d125656240404&q=${val}&aqi=no`;
    return url;
};

function getWeather(val){
    return new Promise ((resolve, reject) => {
        const response = fetch(`${val}`, {
            mode: 'cors' // fetch location data from weather API
        }).then(response => response.json()) //converts returned JSON data
            .then((data) => 
            `Forecast: ${data.current.condition.text}, 
            Temperature: ${data.current.temp_c}°C,
            Updated on: ${data.current.last_updated}`
        ); // targets only the short forecast returned
        resolve(response)
    })
}

async function getWeatherReport(){
    try {
        let response = await getWeather(addLocationToLink(locationInput.value)); //waits for the returned response from the getWeather promise with the modified link passed to it
        console.log(response) //logs final result
        return response; //returns response
    } catch(error){console.error(error)}; //logs any errors
};

export { getWeatherReport }