document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.querySelector('.location-input input').value;
    if (location) {
        getWeather(location);
    }
});

function getWeather(location) {
    const apiKey = '9f778ae09028ba31aa9c245fb9f20089';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.querySelector('.weather-info').classList.add('show');
                document.getElementById('locationName').textContent = data.name;
                document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
