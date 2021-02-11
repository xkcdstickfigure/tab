import { Card } from ".";
import { useState } from "react";

export const WeatherCard = ({ symbol, temperature, location, ...props }) => {
  const [hover, setHover] = useState(false);
  const h = new Date().getTime();
  const night = h > 18 || h < 7;

  return (
    <Card
      className="flex flex-col justify-center text-center text-white text-sm"
      style={{
        background: `linear-gradient(80deg, ${
          night ? "#283e51" : "#5fa5e3"
        } 0%, ${night ? "#0a2342" : "#5673d9"} 57%)`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <img
        className={`w-14 mx-auto duration-200 ${
          hover ? "h-0 opacity-0" : "h-14 opacity-100"
        }`}
        src={`https://assets.alles.cx/weather-icons/${symbol}.svg`}
        alt=""
      />
      <h1 className={`space-x-1 duration-200 ${hover ? "text-lg" : ""}`}>
        <span
          className={`text-xl font-bold duration-200 ${
            hover ? "text-3xl" : ""
          }`}
        >
          {temperature}
        </span>
        <span>°C</span>
      </h1>
      <p
        className={`text-xs duration-200 ${
          hover ? "h-1 mt-2" : "opacity-0 h-0 mt-0"
        }`}
      >
        {location}
      </p>
    </Card>
  );
};
