import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full  w-[280px] sm:w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg hover:scale-[1.02] transition">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-red-600 text-white py-2 px-4 rounded-md text-sm font-medium">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
