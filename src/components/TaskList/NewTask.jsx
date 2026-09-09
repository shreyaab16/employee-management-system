import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data }) => {
  const [userData, setUserData, updateTaskStatus] = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full  w-[280px] sm:w-[300px] p-5 bg-red-400 shadow-lg rounded-xl hover:scale-[1.02] transition">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button
          onClick={() => {
            console.log("clicked taks:", data);
            updateTaskStatus(data, "active");
          }}
          className="bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
