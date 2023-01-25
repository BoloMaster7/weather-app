import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';


const WeatherBox = props => {

  const handleCityChange = useCallback(city => {
    console.log(city)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19e6c4cc18b8bf97df00d626957ca779&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
   });
  }
  ); 

  // const weatherData = {
  //  city: data.name,
   // temp: data.main.temp,
    //icon: data.weather[0].icon,
   // description: data.weather[0].main
//};

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;