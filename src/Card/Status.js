import { Card } from ".";
import { useState } from "react";
import axios from "axios";

export const StatusCard = ({ api, token, status, ...props }) => {
  const [value, setValue] = useState(status || "");

  const submit = (e) => {
    e.preventDefault();
    e.target.status.blur();
    axios
      .post(
        `${api}/status`,
        { content: value },
        { headers: { Authorization: token } }
      )
      .catch(() => {});
  };

  return (
    <Card {...props} className="flex flex-col justify-center px-5 space-y-1">
      <h1 className="text-xs uppercase text-gray-600 font-semibold px-2">
        Set your status
      </h1>
      <form onSubmit={submit}>
        <input
          name="status"
          defaultValue={status}
          placeholder="Being awesome!"
          maxLength={100}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 outline-none duration-100 border-b-2 focus:border-primary"
        />
      </form>
    </Card>
  );
};
