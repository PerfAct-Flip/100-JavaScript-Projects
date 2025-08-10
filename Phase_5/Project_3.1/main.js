"use strict"
// Weather App (API Fetch): Take city name as input, use a weather API to display current weather.
import { WEATHERSTACK_API_KEY } from './config.js';


// DOM Elements
const locationName = document.querySelector('#location');
const localTime = document.querySelector('#time');
const temperature = document.querySelector('#temperature');
const weatherDescription = document.querySelector('#description');
const weatherIcon = document.querySelector('#weatherIcon');
const cityInput = document.querySelector('#cityInput');
const searchButton = document.querySelector('#searchButton');

// Astro data DOM elements
const astroSunrise = document.querySelector('#sunrise');
const astroSunset = document.querySelector('#sunset');
const astroMoonrise = document.querySelector('#moonrise');
const astroMoonset = document.querySelector('#moonset');
const astroMoonPhase = document.querySelector('#moon-phase');
const moonIllumination = document.querySelector('#moon-illumination');

async function fetchWeatherData(query) {
	const url = `https://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${query}`;
	const options = {
		method: 'GET'
	};
	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(`API returned an error: ${response.status}`);
		}

		const result = await response.json();

		if (result.error) {
			throw new Error(result.error.info);
		}

		return result;
	} catch (error) {
		console.error("Error fetching weather data:", error);
		return null;
	}
}

async function initWeatherApp(city) {
	if (locationName) locationName.textContent = "Loading...";

	const data = await fetchWeatherData(city);

	if (data) {
		locationName.textContent = data.location.name;
		localTime.textContent = data.location.localtime;
		temperature.textContent = `${data.current.temperature}°`;
		weatherDescription.textContent = data.current.weather_descriptions[0];


		astroSunrise.textContent = data.current.astro.sunrise;
		astroSunset.textContent = data.current.astro.sunset;
		astroMoonrise.textContent = data.current.astro.moonrise;
		astroMoonset.textContent = data.current.astro.moonset;
		astroMoonPhase.textContent = data.current.astro.moon_phase;
		moonIllumination.textContent = data.current.astro.moon_illumination;


		const aqi = data.current.air_quality['us-epa-index'];
		let airQualityStatus = "";

		if (aqi <= 50) {
			airQualityStatus = "Good";
		} else if (aqi <= 100) {
			airQualityStatus = "Moderate";
		} else if (aqi <= 150) {
			airQualityStatus = "Unhealthy for Sensitive Groups";
		} else if (aqi <= 200) {
			airQualityStatus = "Unhealthy";
		} else {
			airQualityStatus = "Very Unhealthy or Hazardous";
		}

		const airQualityBox = document.querySelector('#airQualityBox');
		if (airQualityBox) {
			airQualityBox.innerHTML = `<p>Air Quality: ${airQualityStatus} (AQI: ${aqi})</p>`;
		}
	} else {
		if (locationName) locationName.textContent = "Failed to load weather.";
	}
}

// Add event listener for the search button
searchButton.addEventListener('click', () => {
	const city = cityInput.value;
	if (city) {
		initWeatherApp(city);
	}
});

// Initialize the app with a default city on page load
initWeatherApp('New Delhi');
