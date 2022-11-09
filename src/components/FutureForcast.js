import { useState, useEffect } from "react"

export default function FutureForcast(props) {
    const [fourDayForcast, setFourDayForcast] = useState(null);

    useEffect(() => {
        if(props.weather.daily)
            setFourDayForcast(() => props.weather.daily.filter((day, index) => index < 5))
    }, [props.weather.daily])

    const unixConverter = (num) => {
        let a = new Date(num * 1000);
        return a.toString().slice(0,3);
    }

    const kelvinToFahrenheit = (num) => {
        let fahrenheit = ((num - 273.15) * 9) / 5 + 32;
        return Math.ceil(fahrenheit);
    }

    return(
        <div className='cards-div'>
            {fourDayForcast &&
                fourDayForcast.map((day, index) => {
                    return(
                        <div key={index} className='cards'>
                            <h4>{unixConverter(day.dt)}</h4>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='weather icon' />
                            <div className='temp-div'>
                                <p>{kelvinToFahrenheit(day.temp.max) + '°'}</p>
                                <p>{kelvinToFahrenheit(day.temp.min) + '°'}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
