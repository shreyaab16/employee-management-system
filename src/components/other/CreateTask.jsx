import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import FailedTask from "../TaskList/FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  // const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert("Please fill all the fields");
      return;
    }

    const employee = userData.find(
      (elem) => elem.firstName.toLowerCase() === assignTo.toLowerCase(),
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    const newTask = {
      id: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    localStorage.setItem("employees", JSON.stringify(data));

    settaskDate("");
    setcategory("");
    setTaskTitle("");
    setassignTo("");
    settaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <h2 className="text-xl font-semibold mb-1">Create New Task</h2>

      <p className="text-sm text-gray-400 mb-6">
        Assign a task to an employee and set its details
      </p>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full lg:w-1/2 items-start justify-between "
      >
        <div className="w-full lg:w-2/5 flex-col items-start mt-5 lg:mt-0">
          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#111111] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              onClick={(e) => e.currentTarget.showPicker()}
              className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#111111] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4 cursor-pointer [&::-webkit-calendar-picker-indicator]:invert"
              type="date"
            />
          </div>
          <div className="text-sm text-gray-300 mb-4">
            <h3 className="mb-1">Assign to</h3>
            <select
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#111111] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4"
            >
              <option value="" className="bg-[#111111] text-white">
                Select Employee
              </option>
              {userData.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.firstName}
                  className="bg-[#111111] text-white"
                >
                  {employee.firstName}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#111111] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex-col items-start">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#111111] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-lg text-sm mt-4 w-full transition">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
