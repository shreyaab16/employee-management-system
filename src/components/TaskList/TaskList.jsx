import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <p className="text-gray-400 text-lg">No tasks available 🎉</p>
        </div>
      ) : (
        data.tasks.map((elem) => {
          if (elem.active) {
            return <AcceptTask key={elem.id} data={elem} />;
          }

          if (elem.newTask) {
            return <NewTask key={elem.id} data={elem} />;
          }

          if (elem.completed) {
            return <CompleteTask key={elem.id} data={elem} />;
          }

          if (elem.failed) {
            return <FailedTask key={elem.id} data={elem} />;
          }

          return null;
        })
      )}
    </div>
  );
};

export default TaskList;
