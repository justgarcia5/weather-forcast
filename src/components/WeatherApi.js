import { useState, useEffect } from 'react';

import FutureForcast from './FutureForcast';

export default function WeatherApi () {
    const [weather, setWeather] = useState([]);
    let long = '-118.39';
    let lat = '34.02';

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.REACT_APP_WEATHER_API}`)
        .then(res => res.json())
        .then(data => setWeather(data))

    },[lat, long])

    return(
        <div>
            <FutureForcast
                weather={weather}
            />
        </div>
    )
}