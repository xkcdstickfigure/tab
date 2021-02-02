import { ArrowRight } from "react-feather";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (value)
      window.location.href = `https://search.alles.cx/${encodeURIComponent(
        value
      )}`;
  };

  return (
    <form
      className="flex shadow-lg overflow-hidden rounded-md"
      onSubmit={submit}
    >
      <input
        className="bg-white py-2 px-5 flex-grow min-w-0 outline-none"
        name="q"
        placeholder="Search the web..."
        autoComplete="off"
        autoFocus="on"
        onChange={(e) => setValue(e.target.value.trim())}
      />
      <button
        className={`flex-shrink-0 bg-white ${
          value ? `text-primary` : `text-gray-600`
        } p-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
        type="submit"
      >
        <ArrowRight size={24} strokeWidth={2.5} />
      </button>
    </form>
  );
};
