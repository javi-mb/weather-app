import React from "react";
import { Link } from "react-router-dom";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
    <div className="container">
      <div className="title">
        <h1>{city.name}</h1>
      </div>
      <div className="container-info">
        <Link to={"/"} className="atras">
          Atras
        </Link>
        <div className="info">
          <div>
            <span>Temperatura:</span> {city.temp} ºC
          </div>
          <div>
            <span>Clima:</span> {city.weather}
          </div>
          <div>
            <span>Viento:</span> {city.wind} km/h
          </div>
          <div>
            <span>Cantidad de nubes:</span> {city.clouds}
          </div>
          <div>
            <span>Latitud:</span> {city.latitud}º
          </div>
          <div>
            <span>Longitud:</span> {city.longitud}º
          </div>
        </div>
        <img src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"} />
      </div>
    </div>
  );
}
