import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
  const [userData, setUserData, updateTaskStatus] = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full w-[280px] sm:w-[300px] p-5 bg-green-400 rounded-xl shadow-lg hover:scale-[1.02] transition ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => updateTaskStatus(data, "completed")}
          className="bg-blue-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Mark as completed
        </button>
        <button
          onClick={() => updateTaskStatus(data, "failed")}
          className="bg-red-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-red-700 transition"
        >
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
