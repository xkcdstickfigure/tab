import { Card } from ".";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export const NewsCard = ({ items, ...props }) => {
  const [showArrows, setArrows] = useState(false);

  const [i, setI] = useState(0);
  const item = items[i];

  const next = () => setI(i >= items.length - 1 ? 0 : i + 1);
  const prev = () => setI(i <= 0 ? items.length - 1 : i - 1);
  const n = useCallback(next, [i, items.length]);

  useEffect(() => {
    if (i >= items.length) setI(0);
    const int = setInterval(n, 5000);
    return () => clearInterval(int);
  }, [n, i, items.length]);

  return (
    <Card
      className="flex relative"
      onMouseEnter={() => setArrows(true)}
      onMouseLeave={() => setArrows(false)}
      {...props}
    >
      <div
        className={`w-8 flex-shrink-0 flex flex-col justify-center duration-100 ${
          showArrows ? `opacity-100` : `opacity-0`
        }`}
        onClick={prev}
      >
        <ChevronLeft className="mx-auto text-gray-600" size={30} />
      </div>
      <div className="px-2 py-8 flex-grow space-y-5 overflow-hidden">
        {item && (
          <>
            <div className="space-y-2">
              <h2 className="uppercase text-sm text-gray-600 font-semibold">
                {item.topic}
              </h2>
              <h1 className="text-3xl font-bold">{item.title}</h1>
            </div>
            <div className="flex space-x-2">
              {item.sites.map((site, s) => (
                <a key={s} href={site.url} title={site.name}>
                  <img
                    src={site.icon}
                    alt={site.name}
                    className="w-8 h-8 rounded-sm"
                  />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      <div
        className={`w-8 flex-shrink-0 flex flex-col justify-center duration-100 ${
          showArrows ? `opacity-100` : `opacity-0`
        }`}
        onClick={next}
      >
        <ChevronRight className="mx-auto text-gray-600" size={30} />
      </div>
      <div className="absolute bottom-5 w-full flex justify-center">
        {items.map((_, j) => (
          <div
            key={j}
            onClick={() => setI(j)}
            className={`w-2 h-2 mx-1 rounded-full ${
              i === j ? `bg-gray-400` : `bg-gray-200`
            }`}
          ></div>
        ))}
      </div>
    </Card>
  );
};
