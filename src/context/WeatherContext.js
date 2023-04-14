import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul") 
  const [weatherInfo, setWeatherInfo] = useState()

  const values = {
    city,
    setCity,
    weatherInfo,
    setWeatherInfo,
  }

  useEffect(() => {
    const api = "eed6422fd7873af75d6fef608138e2a9" 
    const baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${api}&cnt=40` //base url

    if (city) { 
      axios(baseURL)
        .then(res => {
          const dailyWeatherData = res.data.list.filter((data, index) => index % 8 === 0);
          setWeatherInfo(dailyWeatherData);
        })
        .catch((e) => alert("Please Enter valid City Name"))

    }
  }, [city])

 
 


  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);