import React from 'react';

const TodaysWeather = props => {
  const {location, unixConverter, kelvinToFahrenheit, weather } = props;

  return <div>
        <h1>{location}</h1>
        <h2>Currently {kelvinToFahrenheit(weather.current.temp) + '°'}</h2>
        {unixConverter(weather.daily[0].dt, false)}
    </div>
}

export default TodaysWeather;
