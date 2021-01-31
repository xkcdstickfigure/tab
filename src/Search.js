import { ArrowRight } from "react-feather";

export const Search = () => {
  return (
    <form
      className="flex shadow-lg overflow-hidden rounded-md"
      action="https://search.alles.cx"
      method="GET"
    >
      <input
        className="bg-white py-2 px-5 flex-grow min-w-0"
        name="q"
        placeholder="Search the web..."
        autoComplete="off"
        autoFocus="on"
      />
      <button
        className="flex-shrink-0 bg-white text-gray-600 p-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
        type="submit"
      >
        <ArrowRight size={24} strokeWidth={3} />
      </button>
    </form>
  );
};
