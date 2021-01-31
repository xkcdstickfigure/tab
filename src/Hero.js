import { Search } from "./Search";

export const Hero = ({ image }) => (
  <div
    className="w-full shadow-xl bg-cover bg-center py-32 px-5"
    style={{ backgroundImage: `url("${image}")` }}
  >
    <div className="mx-auto max-w-xl">
      <Search />
    </div>
  </div>
);
