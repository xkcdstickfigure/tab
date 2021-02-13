import { useState, useEffect } from "react";
import axios from "axios";
import { get as getCookie } from "es-cookie";
import { MessageSquare } from "react-feather";
import "./App.css";

import { Hero } from "./Hero";
import { Card } from "./Card";
import { WeatherCard } from "./Card/Weather";
import { NewsCard } from "./Card/News";
import { ProfileCard } from "./Card/Profile";

export const App = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const api = getCookie("protium-api") || "https://protium.alles.cx/c";
      const token = getCookie("protium-token");
      setData({
        api,
        token,
        ...(
          await axios.get(`${api}/hp?v=1`, {
            headers: { Authorization: token },
          })
        ).data,
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
          {data.news ? (
            <NewsCard width={3} height={2} items={data.news} />
          ) : (
            <Card
              width={3}
              height={2}
              className="flex flex-col justify-center text-center space-y-4"
            >
              <MessageSquare
                className="mx-auto"
                size={48}
                stroke="#4b5563"
                fill="#d1d5db"
              />
              <div className="space-y-1">
                <p className="text-lg text-gray-600">
                  Want to chat with the Alles community?
                </p>
                <p className="text-primary uppercase font-semibold text-sm">
                  <a href="https://discord.gg/x5jMXZsffG">
                    Join our discord server
                  </a>
                </p>
              </div>
            </Card>
          )}
          <ProfileCard
            width={2}
            nickname={data.user.nickname}
            email={data.user.email}
          />
          <Card width={2} height={2}></Card>
          <Card width={2}></Card>
          <WeatherCard
            symbol={data.weather.symbol}
            temperature={data.weather.temperature}
            location={data.location}
          />
        </div>
      </div>
    )
  );
};
