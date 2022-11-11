import { useState, useEffect } from 'react';

import FutureForcast from './FutureForcast';
import TodaysWeather from './TodaysWeather';
import Button from '../../src/UI/Button'

const locations = [
    {
        location: 'San Diego',
        long: '-117.1611',
        lat: '32.7157'

    },
    {
        location: 'Sacramento',
        long: '-121.4944',
        lat: '38.5816'
    },
    {

        location: 'New York City',
        long: '-74.0060',
        lat: '40.7128'
    }
];

export default function WeatherApi () {
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(locations[0].lat);
    const [long, setLong] = useState(locations[0].long);
    const [location, setLocation] = useState(locations[0].location);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.REACT_APP_WEATHER_API}`)
        .then(res => res.json())
        .then(data => setWeather(data))
    },[lat, long])

    const locationToggleHandler = (lat, long, location) => {
        setLat(lat);
        setLong(long);
        setLocation(location)
    }

    const unixConverter = (num, shortDate) => {
        let a = new Date(num * 1000);
        console.log(a)
        if (shortDate)
            return a.toString().slice(0,3);
        else
            return a.toString().slice(0,16);
    }

    const kelvinToFahrenheit = (num) => {
        let fahrenheit = ((num - 273.15) * 9) / 5 + 32;
        return Math.ceil(fahrenheit);
    }

    return(
        <div>
            {locations.map((val, i) => {
            return <Button className={`${val.location === location ? 'button-active' : 'button'}`} key={val.location} type='button' onClick={() => locationToggleHandler(val.lat, val.long, val.location)}>{val.location}</Button>
        })}
            {weather.length !== 0 &&
                <TodaysWeather
                    location={location}
                    weather={weather}
                    unixConverter={unixConverter}
                    kelvinToFahrenheit={kelvinToFahrenheit}
                />
            }
            <FutureForcast
                weather={weather}
                unixConverter={unixConverter}
                kelvinToFahrenheit={kelvinToFahrenheit}
            />
        </div>
    )
}
