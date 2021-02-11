import { Card } from ".";

export const WeatherCard = ({ symbol, temperature, ...props }) => {
  const h = new Date().getTime();
  const night = h > 18 || h < 7;

  return (
    <Card
      className="flex flex-col justify-center"
      style={{
        background: `linear-gradient(80deg, ${
          night ? "#283e51" : "#5fa5e3"
        } 0%, ${night ? "#0a2342" : "#5673d9"} 57%)`,
      }}
      {...props}
    >
      <img
        className="h-14 w-14 mx-auto"
        src={`https://assets.alles.cx/weather-icons/${symbol}.svg`}
        alt=""
      />
      <h1 className="text-center text-white text-sm space-x-1">
        <span className="text-xl font-bold">{temperature}</span>
        <span>°C</span>
      </h1>
    </Card>
  );
};
