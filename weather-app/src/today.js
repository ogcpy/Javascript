export function loadToday(weatherData) {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const todayDiv = document.createElement('div');
    todayDiv.id = 'today-holder';

    const location = document.createElement('h2');
    location.innerText = weatherData.resolvedAddress; 

    const currentWeather = document.createElement('div');
    currentWeather.id = 'current';
    currentWeather.innerHTML = `
        <p>Current Temperature: ${weatherData.currentConditions.temp}°C</p>
        <p>Conditions: ${weatherData.currentConditions.conditions}</p>
    `;

    const todayWeather = document.createElement('div');
    todayWeather.id = 'today';
    todayWeather.innerHTML = `
        <p>High: ${weatherData.days[0].tempmax}°C</p>
        <p>Low: ${weatherData.days[0].tempmin}°C</p>
    `;

    content.appendChild(todayDiv);
    todayDiv.appendChild(location);
    todayDiv.appendChild(currentWeather);
    todayDiv.appendChild(todayWeather);
}