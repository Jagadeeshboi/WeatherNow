WeatherNow
A sleek weather application built with React that displays real-time weather information for any city, including temperature, humidity, wind speed, and hourly forecasts.

Features
Real-Time Weather: Shows the current temperature, humidity, wind speed, and atmospheric pressure.
Hourly Forecast: Displays hourly predictions for the next 24 hours.
City Search: Enter a city name to get the weather information for that location.

Technologies Used
React: For building the UI components.
Weather API: Integrates a weather API to fetch real-time weather data.
TailwindCSS: For styling the application.
Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/Jagadeeshboi/WeatherNow  ![Screenshot (186)](https://github.com/user-attachments/assets/17c394d0-ffdc-4562-963b-06d8d0da1cc4)

cd weather-app
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
npm start
API Key Setup:

Obtain an API key from a weather service provider (e.g., OpenWeather).
Create a .env file in the root directory and add:
makefile
Copy code
REACT_APP_WEATHER_API_KEY=your_api_key_here
Usage
Enter the name of the city in the search bar.
Press "Search" to view the weather data and hourly forecast for the specified location.
License
This project is licensed under the MIT License.

