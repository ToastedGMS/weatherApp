let wrapper = document.querySelector('.wrapper');

async function displayForecast(val) {
    
    let weatherDisplayContainer = document.createElement('div');
    weatherDisplayContainer.classList.add('weatherDisplayContainer');
    weatherDisplayContainer.setAttribute('id', 'weatherDisplayContainer');

    let weatherDisplay = document.createElement('div');
    weatherDisplay.classList.add('weatherDisplay');
    weatherDisplay.setAttribute('id', 'weatherDisplay');

    weatherDisplay.innerText = await val;

    wrapper.appendChild(weatherDisplayContainer);
    weatherDisplayContainer.appendChild(weatherDisplay)
}

export { displayForecast }