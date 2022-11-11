import React from 'react';

const TodaysWeather = props => {
  const {location, kelvinToFahrenheit, weather } = props;

  const unixConverter = (num) => {
      let a = new Date(num * 1000);
      return a.toString().slice(0,16);
  }

  return <div>
        <h1>{location}</h1>
        <h2>Currently {kelvinToFahrenheit(weather.current.temp) + '°'}</h2>
        {unixConverter(weather.daily[0].dt)}
    </div>
}

export default TodaysWeather;
