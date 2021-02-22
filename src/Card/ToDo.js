import { Card } from ".";
import { useState } from "react";
import { Circle, CheckCircle } from "react-feather";
import moment from "moment";

export const ToDoCard = ({ items, ...props }) => {
  const [tasks, setTasks] = useState(items);

  return (
    <Card {...props} className="p-3 space-y-3">
      {[
        ...tasks
          .filter((t) => !t.completed)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ),
        ...tasks
          .filter((t) => !!t.completed)
          .sort(
            (a, b) =>
              new Date(b.completed).getTime() - new Date(a.completed).getTime()
          ),
      ].map(({ id, content, completed, date }, i) => (
        <Row
          key={id}
          icon={completed ? CheckCircle : Circle}
          lightIcon={!completed}
          onClick={() => {
            if (completed) return;
            const t = JSON.parse(JSON.stringify(tasks));
            t[tasks.map((t) => t.id).indexOf(id)].completed = new Date();
            setTasks(t);
          }}
        >
          <p>{content}</p>
          <p className="text-gray-600 text-xs">
            {completed
              ? `Completed ${moment(completed).fromNow()}`
              : `Created ${moment(date).fromNow()}`}
          </p>
        </Row>
      ))}
    </Card>
  );
};

const Row = ({ icon: Icon, lightIcon, onClick, children }) => {
  const [iconFocus, setIconFocus] = useState(false);

  return (
    <div className="flex space-x-3">
      <div>
        <button
          className="h-5 w-5"
          onClick={onClick}
          onFocus={() => setIconFocus(true)}
          onBlur={() => setIconFocus(false)}
        >
          <Icon
            className={
              lightIcon && !iconFocus
                ? "text-gray-200 hover:text-gray-400"
                : "text-gray-400"
            }
          />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
