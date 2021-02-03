import { Card } from ".";
import { useState } from "react";

export const NewsCard = ({ items, ...props }) => {
  const [i, setI] = useState(0);
  const item = items[i];

  return (
    <Card className="p-8 space-y-5 overflow-hidden" {...props}>
      <div className="space-y-2">
        <h2 className="uppercase text-sm text-gray-600 font-semibold">
          {item.topic}
        </h2>
        <h1 className="text-3xl font-bold">{item.title}</h1>
      </div>
      <div className="flex space-x-2">
        {item.sites.map((site) => (
          <a href={site.url} title={site.name}>
            <img
              src={site.icon}
              alt={site.name}
              className="w-8 h-8 rounded-sm"
            />
          </a>
        ))}
      </div>
    </Card>
  );
};
