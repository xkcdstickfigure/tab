import { Search } from "./Search";
import url from "url";
import { useState } from "react";

export const Hero = ({ image, userId, sites }) => (
  <div
    className="w-full shadow-xl bg-cover bg-center pt-32 pb-16 px-5"
    style={{ backgroundImage: `url("${image}")` }}
  >
    <div className="mx-auto max-w-lg space-y-5">
      <div className="relative">
        <Search />
        {userId && (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://account.alles.cx"
            className="absolute top-0 -right-14 w-10 h-10 rounded-full overflow-hidden shadow-lg hidden sm:block"
          >
            <img src={`https://avatar.alles.cx/${userId}?size=40`} alt="" />
          </a>
        )}
      </div>

      <TopSites sites={sites} />
    </div>
  </div>
);

const TopSites = ({ sites }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="grid grid-cols-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {sites.map((site, i) => (
        <a
          href={site.url}
          className={`space-y-1 duration-100 ${
            hover ? `opacity-75` : `opacity-100`
          } hover:opacity-100`}
          key={i}
        >
          <div className="mx-auto bg-white w-12 h-12 rounded-md shadow-lg flex flex-col justify-center">
            <img
              className="w-10 h-10 mx-auto"
              src={`https://site-icons.alles.cx/${
                url.parse(site.url).hostname
              }`}
              alt=""
            />
          </div>
          <p className="text-white text-xs text-center">{site.name}</p>
        </a>
      ))}
    </div>
  );
};
