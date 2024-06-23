import { useEffect, useState } from 'react';
import './App.css';

export default function App(){
  const [weatherData, setWeatherData]=useState(null);
  const [error, setError] = useState(null);
  const [city, setCity]=useState("");

  const apiKey="7bffa3af4f2c2a8fb2536f622860f32c";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data); 
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message); // Update error state
      setWeatherData(null); // Clear weather data on error
    }
  };

  useEffect(() => {
    fetchWeatherData(); // Invoke the fetch function
  }, [city]); // Include city in the dependency array to fetch weather data when city changes

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Trigger weather data fetching when form is submitted
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <LocationInput city={city} setCity={setCity} onFormSubmit={handleFormSubmit} />
      <ErrorMessage error={error} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

function LocationInput({ city, setCity, onFormSubmit }) {
  const handleChange = (e) => {
    setCity(e.target.value); // Update city state as user types in the input field
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type='text'
        placeholder='Enter city...'
        value={city}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return null; // Return null if weather data is not available yet
  }

  return (
    <div>
      {/* Display weather information */}
      <h2>Weather Information</h2>
      {/* Display weather details */}
      <p>Temperature: {weatherData.main.temp}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      {/* Add more weather details as needed */}
    </div>
  );
}

function ErrorMessage({ error }) {
  if (!error) {
    return null; // Return null if there is no error
  }

  return <p>Error: {error}</p>;
}
