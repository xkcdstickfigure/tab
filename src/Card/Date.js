import { Card } from ".";
import moment from "moment";

export const DateCard = (props) => {
  return (
    <Card
      className="flex flex-col justify-center text-white text-center relative"
      style={{
        background: "linear-gradient(80deg, #1be693 10%, #0ed154 81%)",
      }}
      {...props}
    >
      <div>
        <h1 className="text-2xl font-semibold">{moment().format("DD")}</h1>
        <p className="text-sm">{moment().format("MMMM")}</p>
      </div>
      <p className="text-xs absolute bottom-3 w-full">
        {moment().format("HH:mm")}
      </p>
    </Card>
  );
};
