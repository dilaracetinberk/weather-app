import React, { useState, useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import axios from 'axios';

const CITY = 'https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json';

function Location() {
  
  const { setCity } = useWeather();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('İstanbul');

  
  useEffect(() => {

    axios.get(CITY)
      .then(response => {
        const cities = response.data; 
        setCities(cities);  
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  
  const handleSelect = (e) => {
    setSelectedCity(e.target.value); 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCity);
    setCity(selectedCity); 
    setSelectedCity();
  };

  const renderOptions = cities.map(city => (
    <option key={city.id} value={city.name}>
      {city.name}
    </option>
  ))

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <select value={selectedCity} onChange={handleSelect}>
          <option >Select a city</option>
          {renderOptions}
        </select>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Location;