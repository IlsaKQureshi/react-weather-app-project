import React from "react";
import "./Weather.css";

export default function Weather() {
  return <div className="Weather">

    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control" /></div>
        <div className="col-3">
          <input type="submit" value="search" className="btn" /></div></div>
    </form>

    <div className="LocationDate">
      <h2>Brussels</h2>
      <h2>Wednesday 15:00</h2>
    </div>

    <div className="WeatherIcon">
      Weather Icon
    </div>

    <div className="Temperature">10°C</div>

    <div className="AirqualityHumidity row text-center">
      <div className="col-6">
        <h5>Humidity: 45%</h5></div>
      <div className="col-6">
        <h5>Wind: 13km/h</h5></div>
    </div>
  </div >
}