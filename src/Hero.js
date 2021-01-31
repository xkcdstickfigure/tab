import { Search } from "./Search";
import url from "url";

export const Hero = ({ image, userId }) => (
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
            className="absolute top-0 -right-14 w-10 h-10 rounded-full overflow-hidden shadow-lg"
          >
            <img src={`https://avatar.alles.cx/${userId}?size=40`} alt="" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-6">
        {[
          {
            name: "Twitter",
            url: "https://twitter.com",
          },
          {
            name: "YouTube",
            url: "https://youtube.com",
          },
          {
            name: "Reddit",
            url: "https://reddit.com",
          },
          {
            name: "Spotify",
            url: "https://spotify.com",
          },
          {
            name: "Netflix",
            url: "https://netflix.com",
          },
          {
            name: "GitHub",
            url: "https://github.com",
          },
        ].map((site, i) => (
          <a href={site.url} className="space-y-1 cursor-default" key={i}>
            <div className="mx-auto bg-white w-12 h-12 shadow-lg rounded-md shadow-lg flex flex-col justify-center cursor-pointer">
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
    </div>
  </div>
);
