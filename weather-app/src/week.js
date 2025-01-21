export function loadWeek(weatherData) {
    const content = document.getElementById('content');

    const weekDiv = document.createElement('div');
    weekDiv.id = 'week-holder';

    const weekText = document.createElement('h2');
    weekText.innerText = 'Week Forecast';

    const weekWeather = document.createElement('div');
    weekWeather.id = 'week-weather';

    weatherData.days.slice(0, 7).forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';

        const date = new Date(day.datetime);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); 

        dayDiv.innerHTML = `
            <p>${dayOfWeek}</p>
            <p>High: ${day.tempmax}°C</p>
            <p>Low: ${day.tempmin}°C</p>
            <p>Conditions: ${day.conditions}</p>
        `;
        weekWeather.appendChild(dayDiv)
    });

    content.appendChild(weekDiv);
    weekDiv.appendChild(weekText);
    weekDiv.appendChild(weekWeather);
}
