import { Card } from ".";
import { useState, useEffect } from "react";
import { Circle, CheckCircle } from "react-feather";
import moment from "moment";
import axios from "axios";

export const ToDoCard = ({ api, token, items, ...props }) => {
  const [tasks, setTasks] = useState(items);
  useEffect(() => setTasks(items), [items]);

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
      ].map(({ id, content, completed, date }) => (
        <Row
          key={id}
          icon={completed ? CheckCircle : Circle}
          lightIcon={!completed}
          onClick={() => {
            if (completed) return;
            const t = JSON.parse(JSON.stringify(tasks));
            t[tasks.map((t) => t.id).indexOf(id)].completed = new Date();
            setTasks(t);

            axios
              .post(
                `${api}/tasks/${id}`,
                {},
                { headers: { Authorization: token } }
              )
              .catch(() => {});
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
