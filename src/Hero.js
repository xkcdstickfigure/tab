import { Search } from "./Search";

export const Hero = ({ image }) => (
  <div
    className="w-full h-80 shadow-xl bg-cover bg-center pt-32"
    style={{ backgroundImage: `url("${image}")` }}
  >
    <div className="mx-auto max-w-xl">
      <Search />
    </div>
  </div>
);
