import "./styles/main.scss"
import github from './assets/images/github-logo.png'
import search from './assets/images/search.png'
import { loadToday } from "./today"
import { loadWeek } from "./week"

document.addEventListener('DOMContentLoaded', () => {
    const githubLogo = document.getElementById('github')
    githubLogo.src = github

    const searchIcon = document.getElementById('search-icon')
    searchIcon.src = search

    async function getWeather(location) {
        try {
            const apiKey = 'AEM42KRKXV9DA6XFHY5VPTMTM'
            const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${apiKey}`
            
            const response = await fetch (apiUrl, {mode: 'cors'})
            const weatherData = await response.json()

            loadToday(weatherData);
            loadWeek(weatherData);

        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please check the location and try again.");
        }
    }

    document.getElementById('search-icon').addEventListener('click', () => {
        const location = document.getElementById('userInput').value.trim()

        if (location) {
            getWeather(location)
        } else {
            alert("Please enter a location")
        }
    })

    getWeather('london')
})