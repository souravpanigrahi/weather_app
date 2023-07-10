import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css";

const descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "° C" : "° F";
  const windUnit = units === "metric" ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown></FaArrowDown>,
      title: "Min",
      data: weather.temp_min,
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp></FaArrowUp>,
      title: "Max",
      data: weather.temp_max,
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy></BiHappy>,
      title: "Feels like",
      data: weather.feels_like,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress></MdCompress>,
      title: "Pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop></MdOutlineWaterDrop>,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind></FaWind>,
      title: "Wind",
      data: weather.speed,
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description_card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};
export default descriptions;
