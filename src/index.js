import { displayForecast } from "./displayForecast";
import { getWeatherReport } from "./fetch";

const logBtn = document.querySelector('#logBtn');

logBtn.addEventListener('click', (e) => {
    e.preventDefault()
    displayForecast(getWeatherReport())// calls function on button click
})