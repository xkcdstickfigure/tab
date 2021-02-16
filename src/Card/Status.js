import { Card } from ".";

export const StatusCard = ({ api, token, status, ...props }) => {
  return (
    <Card {...props} className="flex flex-col justify-center px-5 space-y-1">
      <h1 className="text-xs uppercase text-gray-600 font-semibold px-2">
        Set your status
      </h1>
      <form>
        <input
          defaultValue={status}
          placeholder="Being awesome!"
          className="w-full p-2 outline-none duration-100 border-b-2 focus:border-primary"
        />
      </form>
    </Card>
  );
};
