import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white p-7">
      <Header changeUser={props.changeUser} />
      <div className="mt-8 mb-5">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <p className="text-gray-400 mt-1">
          Create tasks and monitor your team's progress
        </p>
      </div>
      <CreateTask />

      <div className="mt-8 mb-4 ">
        <h2 className="text-xl font-medium text-gray-400 ">Team Overview</h2>
        <p className="text-sm text-gray-400">
          Track task progress for each employee.
        </p>
      </div>
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
