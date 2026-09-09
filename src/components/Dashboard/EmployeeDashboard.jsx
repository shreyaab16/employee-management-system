import React, { useContext } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = (props) => {
  const [userData] = useContext(AuthContext);

  if (!userData) {
    return <div>Loading</div>;
  }
  const employee = userData.find((elem) => elem.id === props.data.id);

  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen ">
        <Header changeUser={props.changeUser} data={employee} />
        <TaskListNumber data={employee} />
        <TaskList data={employee} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
