document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '09a71427c59d38d6a34f89b47d75975c';
    const city = 'Hanoi';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list;
            const weatherForecastContainer = document.getElementById('weather-forecast');

            forecast.forEach(item => {
                const weatherCard = document.createElement('div');
                weatherCard.className = 'weather-card';

                const date = new Date(item.dt_txt).toLocaleString();
                const temp = `${item.main.temp}°C`;
                const description = item.weather[0].description;
                const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

                weatherCard.innerHTML = `
                    <p>${date}</p>
                    <p>${temp}</p>
                    <p>${description}</p>
                    <img src="${iconUrl}" alt="weather icon">
                `;

                weatherForecastContainer.appendChild(weatherCard);
            });
        })
        .catch(error => console.error('Error fetching the weather data', error));
});