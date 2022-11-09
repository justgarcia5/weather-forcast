import React from 'react';

import Button from '../../src/UI/Button';

const TodaysWeather = props => {
  const { locations, location, unixConverter, kelvinToFahrenheit, weather, locationToggleHandler } = props;

  return <div>
    {locations.map((val, i) => {
                return <Button className={`${val.location === location ? 'button-active' : 'button'}`} key={val.location} type='button' onClick={() => locationToggleHandler(val.lat, val.long, val.location)}>{val.location}</Button>
            })}
            <h1>{location}</h1>
            {/* {weather && <h1>{kelvinToFahrenheit(weather.current.temp) + '°'}</h1>}
            {weather && unixConverter(weather.daily[0].dt)} */}
  </div>
}

export default TodaysWeather;
