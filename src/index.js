import { getWeatherReport } from "./fetch";

const logBtn = document.querySelector('#logBtn');

logBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getWeatherReport() // calls function on button click
})