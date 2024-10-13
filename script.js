// Add event listener for 'Get Weather' button click
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

// Your API key for OpenWeather
const apiKey = 'fbb71424c29abe57875a7e53ddc8e480'; // Replace this with your actual API key

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById('cityInput').value;  // Get city from input field
    console.log(city);
    // Check if city input is not empty
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    // OpenWeather API URL with the provided city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        // Fetch weather data from the API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        // Call function to display fetched weather data
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Function to update the DOM with fetched weather data
function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = Math.round(data.main.temp-273) + "°C";  // Temperature in Celsius
    document.getElementById('desc').textContent = data.weather[0].description;  // Weather description
}
