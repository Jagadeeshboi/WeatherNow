import { useEffect, useState, useCallback } from "react";

export const useWeatherApi = (city) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchWeather = useCallback(async () => {
        try {
            const req = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
            if (!req.ok) {
                throw new Error("Failed to fetch weather data");
            }
            const result = await req.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        }
    }, [city]);

    useEffect(() => {
        if (city) {
            fetchWeather();
        }
    }, [fetchWeather]);

    return { data, error };
};
