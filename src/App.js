import { useState, useEffect } from "react";
import axios from "axios";
import { get as getCookie } from "es-cookie";
import "./App.css";

import { Hero } from "./Hero";
import { Card } from "./Card";
import { WeatherCard } from "./Card/Weather";

export const App = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const api = getCookie("protium-api") || "https://protium.alles.cx/c";
      const token = getCookie("protium-token");
      setData({
        api,
        token,
        ...(await axios.get(`${api}/hp`, { headers: { Authorization: token } }))
          .data,
      });
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
    const i = setInterval(fetchData, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    data && (
      <div className="space-y-10">
        <Hero userId={data.user.id} image={data.background} />
        <div className="mx-auto max-w-3xl grid gap-3 grid-cols-5">
          <Card width={3} height={2}></Card>
          <Card width={2}></Card>
          <Card width={2} height={2}></Card>
          <Card width={2}></Card>
          <WeatherCard
            symbol={data.weather.symbol}
            temperature={data.weather.temperature}
          />
        </div>
      </div>
    )
  );
};
