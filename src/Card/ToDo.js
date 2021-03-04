import { Card } from ".";
import { useState } from "react";
import { Circle, CheckCircle, PlusCircle } from "react-feather";
import moment from "moment";
import axios from "axios";

export const ToDoCard = ({ api, token, items, ...props }) => {
  const [tasks, setTasks] = useState(items);

  return (
    <Card {...props} className="p-5 space-y-3 flex flex-col">
      <div className="space-y-3 overflow-auto flex-grow">
        <form
          className="flex-shrink-0"
          onSubmit={(e) => {
            e.preventDefault();
            const content = e.target.task.value.trim();
            if (!content) return;

            axios
              .post(
                `${api}/tasks`,
                { content },
                { headers: { Authorization: token } }
              )
              .then(({ data: id }) => {
                const t = JSON.parse(JSON.stringify(tasks));
                t.push({
                  id,
                  content,
                  completed: null,
                  date: new Date(),
                });
                setTasks(t);
                e.target.reset();
              })
              .catch(() => {});
          }}
        >
          <Row icon={PlusCircle}>
            <input
              name="task"
              placeholder="Add a task..."
              maxLength={100}
              className="w-full outline-none"
            />
          </Row>
        </form>

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
                new Date(b.completed).getTime() -
                new Date(a.completed).getTime()
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
                : `Added ${moment(date).fromNow()}`}
            </p>
          </Row>
        ))}
      </div>
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
