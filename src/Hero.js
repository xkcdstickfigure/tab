import { Search } from "./Search";

export const Hero = ({ image, userId }) => (
  <div
    className="w-full shadow-xl bg-cover bg-center py-32 px-5"
    style={{ backgroundImage: `url("${image}")` }}
  >
    <div className="mx-auto max-w-lg">
      <div className="relative">
        <Search />
        {userId && (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://account.alles.cx"
            class="absolute top-0 -right-14 w-10 h-10 rounded-full overflow-hidden shadow-lg"
          >
            <img src={`https://avatar.alles.cx/${userId}?size=40`} alt="" />
          </a>
        )}
      </div>
    </div>
  </div>
);
