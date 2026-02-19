import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css"

export default function Forecast(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {

    setLoaded(false);

  }, [props.data]);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

  }


  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }



  if (loaded) {
    return (
      <div className="forecast-row">
        {forecast.map(function (day, index) {
          if (index < 6) {
            return (
              <div className="forecast-card" key={index}>
                <h3>{Math.round(day.temperature.maximum)}°C</h3>
                <img
                  src={day.condition.icon_url}
                  alt=""
                  width="40"
                />
                <p>{formatDay(day.time)}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const key = "bc8d89bca04963f6034ob7f2f43ta0c9";
    let lon = props.data.longitude;
    let lat = props.data.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}