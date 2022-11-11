import { useState, useEffect } from "react"

export default function FutureForcast(props) {
    const [fourDayForcast, setFourDayForcast] = useState(null);

    const { kelvinToFahrenheit, unixConverter } = props;

    useEffect(() => {
        if(props.weather.daily)
            setFourDayForcast(() => props.weather.daily.filter((day, index) => index < 5))
    }, [props.weather.daily])

    return(
        <div className='cards-div'>
            {fourDayForcast &&
                fourDayForcast.map((day, index) => {
                    return(
                        <div key={index} className='cards'>
                            <h4>{unixConverter(day.dt, true)}</h4>
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
