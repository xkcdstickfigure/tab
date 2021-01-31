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
        autocomplete="off"
      />
      <button
        className="flex-shrink-0 bg-white text-gray-600 p-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
};
