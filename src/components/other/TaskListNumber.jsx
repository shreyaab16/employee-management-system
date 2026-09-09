import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="rounded-xl py-6 px-9 bg-red-400 shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-4xl font-bold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 bg-blue-400 shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-4xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 bg-green-400 shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-4xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-lg font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 bg-yellow-400 shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-4xl font-bold">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
