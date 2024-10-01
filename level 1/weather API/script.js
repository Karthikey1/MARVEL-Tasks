document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '304ad3a4bdf0e63b5a1d078ca1ac9638'; // Replace with your Open Weather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerHTML = 
                `Weather: ${weatherDescription}<br>Temperature: ${temperature} °C`;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = error.message;
        });
});
