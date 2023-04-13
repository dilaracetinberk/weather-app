import { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";


const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul")
    const [info, setInfo] = useState('')

    const values = {
        city,
        setCity,
        info,
        setInfo  
    }
    
    useEffect(() => {
        const API = "eed6422fd7873af75d6fef608138e2a9"
        const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}` 
        if (city) {
        axios(baseURL)
        .then(res => {
            const dailyWeatherData = res.data.list.filter((data, index) => index % 7 === 0);
            setInfo(dailyWeatherData);
          })
          .catch(() => alert("Looks like something wrong"))
        
    }
    },[city])
    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    
}

