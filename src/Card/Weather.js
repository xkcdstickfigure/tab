import { Card } from ".";

export const WeatherCard = ({ symbol, temperature, ...props }) => (
  <Card
    className="flex flex-col justify-center"
    style={{
      background:
        "linear-gradient(80deg, rgba(95,165,227,1) 0%, rgba(86,115,217,1) 57%)",
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
