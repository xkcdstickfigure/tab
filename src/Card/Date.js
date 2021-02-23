import { Card } from ".";
import moment from "moment";

export const DateCard = (props) => {
  return (
    <Card
      className="flex flex-col justify-center text-white text-center relative"
      style={{
        background: "linear-gradient(80deg, #eb5f30 0%, #df6608 100%)",
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
