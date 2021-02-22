import { Card } from ".";
import { Star } from "react-feather";

export const PeopleCard = ({ people, ...props }) => (
  <Card {...props} className="p-3">
    <div className="space-y-3 overflow-y-auto overflow-x-hidden h-full">
      {people.map((user) => (
        <div key={user.id} className="flex space-x-3">
          <div className="flex-shrink-0">
            <img
              src={`https://avatar.alles.cx/${user.id}?size=64`}
              alt=""
              className="h-8 w-8 shadow-md rounded-full"
            />
          </div>
          <div className="my-auto -space-y-1">
            <h1 className="text-lg">{user.name}</h1>
            {user.content && (
              <div className="flex space-x-1">
                {user.star && (
                  <Star
                    className="inline animate-pulse"
                    size={16}
                    fill="gold"
                    stroke="none"
                  />
                )}
                <p className="text-xs text-gray-600">{user.content}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </Card>
);
