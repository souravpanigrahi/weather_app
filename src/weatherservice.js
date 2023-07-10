import API_KEY from "./config";
//const API_KEY = "5e0d705f365a4bf1a1fe0ff37effc175";
const makeIconURL = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  console.log(data);
  const { description, icon } = weather[0];

  return {
    description,
    IconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export default getFormattedWeatherData;
