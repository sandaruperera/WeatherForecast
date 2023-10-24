import axios from "axios";
import { OPEN_WEATHER_URL, API_KEY } from "./apiConfig";

const api = axios.create({
    baseURL: OPEN_WEATHER_URL,
    params: {
        appid: API_KEY,
    }
})

const fetchCityWeather = async()=>{
    try {
        const res = await api.get('/weather',{
            params: {
               q :  "Colombo",
               units: 'metric',
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

const searchWeatherData = async(lat,long)=>{
    try {
        const res = await api.get('/weather',{
            params:{
                lat : lat,
                lon : long,
                units: 'metric',
            }
        });
        
        return res.data;

    } catch (error) {
        console.log(error)
    }
}

const fetchWeatherForecast = async (lat, long) =>{
    try {
        const res = await api.get('/forecast',{
            params:{
                lat: lat,
                lon: long,
                units: 'metric',
                
            }
        })
        
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {fetchCityWeather, searchWeatherData, fetchWeatherForecast};