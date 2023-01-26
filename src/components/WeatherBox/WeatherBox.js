import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';


const WeatherBox = props => {
  const [weatherData, setWeatherData] = useState(null);
  const [pending, setPending] = useState(false)
  const handleCityChange = useCallback(city => {
    setPending(true);
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19e6c4cc18b8bf97df00d626957ca779&units=metric`)
    .then(res => {
      if(res.status === 200) {
        return res.json()
          .then(data => {

      const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main
        };
        setWeatherData(weatherData);
        setPending(false)
    });
  } else {
    alert('ERROR!')
      }
    })
  }); 


  return (
    <section>
      <PickCity action={handleCityChange} />
      { weatherData && (<WeatherSummary city={weatherData.city} temp={weatherData.temp} icon={weatherData.icon} description={weatherData.description} />) }
    { pending && <Loader />}
    </section>
  )
};

export default WeatherBox;