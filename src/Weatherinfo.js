import React from "react";
import Temperature from "./Temperature.js"


export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="LocationDate">
        <h2>{props.data.city}</h2>
        <h2>{props.data.date}</h2>
      </div>

      <div className="WeatherIcon">
        <ul>
          <li className="text-capitalize">{props.data.desc}</li>
          <li><img className="icon" src={props.data.weatherIcon.replace("http://", "https://")}></img>
          </li>
        </ul>
      </div>
      <Temperature data={props.data.temp} />
      <div className="AirqualityHumidity row text-center">
        <div className="col-6">
          <h5>Humidity: {props.data.humid}%</h5></div>
        <div className="col-6">
          <h5>Wind: {props.data.wind}m/s</h5></div>
      </div>
    </div>);


}