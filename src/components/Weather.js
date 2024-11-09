// src/components/Weather.js
import React, { useState } from 'react';
import '../styles/Weather.css';

function Weather() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${location}&aqi=no`);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setError("Location not found. Please try again.");
        setWeather(null);
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please try again later.");
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  // Suggest travel based on the current weather conditions
  const getTravelSuggestion = () => {
    if (!weather) return '';

    const { temp_c, condition, humidity, wind_kph, uv } = weather.current;
    const { name, country } = weather.location;
    let recommendation = '';

    if (temp_c >= 30) {
      recommendation = "It's quite hot! A beach destination like Goa or Maldives would be refreshing.";
    } else if (temp_c <= 15) {
      recommendation = "It’s cool out! A cozy mountain getaway in the Himalayas or Switzerland would be perfect.";
    } else {
      recommendation = "The temperature is comfortable, perfect for exploring nearby locations.";
    }

    if (condition.text.includes("Rain") || condition.text.includes("Thunder")) {
      recommendation += " Since it's rainy, consider indoor attractions, like a city tour in Paris or New York.";
    } else if (condition.text.includes("Clear")) {
      recommendation += " The clear weather is great for outdoor adventures, like a safari in Kenya or hiking in the Rockies.";
    }

    if (country === "India" && condition.text.includes("Clear") && temp_c > 20) {
      recommendation += " Perfect weather to explore Indian heritage sites, like Jaipur, Udaipur, or the Taj Mahal.";
    }

    if (name === "Salem") {
      recommendation = "In Salem, explore Yercaud Hills, 1008 Lingam Temple, and Mettur Dam, or nearby heritage sites like Mahabalipuram and Mysore.";
    }

    return recommendation;
  };

  return (
    <div className="weather">
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter location"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-details">
          <h3>{weather.location.name}, {weather.location.region}, {weather.location.country}</h3>
          <p><strong>Local Time:</strong> {weather.location.localtime}</p>
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C ({weather.current.temp_f}°F)</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C ({weather.current.feelslike_f}°F)</p>
          <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          <p><strong>Wind:</strong> {weather.current.wind_kph} kph ({weather.current.wind_mph} mph), {weather.current.wind_dir}</p>
          <p><strong>Pressure:</strong> {weather.current.pressure_mb} mb</p>
          <p><strong>Visibility:</strong> {weather.current.vis_km} km</p>
          <p><strong>UV Index:</strong> {weather.current.uv}</p>

          {/* Travel suggestion based on weather */}
          <p className="travel-suggestion"><strong>Suggested Travel Destination:</strong> {getTravelSuggestion()}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;