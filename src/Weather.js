import React, { use, useState } from "react";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setloaded] = useState(false);
  const [city, setCity] = useState("Brussels")

  function handleResponse(response) {

    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
      temp: Math.round(response.data.temperature.current),
      humid: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      weatherIcon: response.data.condition.icon_url,
      desc: response.data.condition.description
    })
    setloaded(true)
    console.log(response.data)
  }

  function search() {
    const apiKey = "bc8d89bca04963f6034ob7f2f43ta0c9";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value)

  }

  if (loaded) {
    return <div className="Weather">

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              onChange={handleCityChange} /></div>
          <div className="col-3">
            <input type="submit" value="search" className="btn" /></div></div>
      </form>

      <Weatherinfo data={weatherData} />
    </div>
  } else {
    search()
    return "Loading..."
  }

}