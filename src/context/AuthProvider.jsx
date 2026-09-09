import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const existingData = localStorage.getItem("employees");

    if (!existingData) {
      setLocalStorage();
    }

    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);

  const updateTaskStatus = (task, status) => {
    // console.log("task:", task);
    // console.log("status:", status);

    const updatedEmployees = userData.map((employee) => {
      // console.log("employee", employee);

      const taskIndex = employee.tasks.findIndex((t) => t.id === task.id);
      console.log("Clicked task ID:", task.id);
      console.log("Found task index:", taskIndex);
      console.log("Employee:", employee.firstName);
      // console.log("task index:", taskIndex);

      if (taskIndex === -1) {
        return employee;
      }

      const updatedTasks = [...employee.tasks];

      if (status === "active") {
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          newTask: false,
          active: true,
        };

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumbers: {
            ...employee.taskNumbers,
            newTask: employee.taskNumbers.newTask - 1,
            active: employee.taskNumbers.active + 1,
          },
        };
      }

      if (status === "completed") {
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        };
        // console.log("Updated task:", updatedTasks[taskIndex]);
        // console.log("completing", updatedTasks[taskIndex]);

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumbers: {
            ...employee.taskNumbers,
            active: employee.taskNumbers.active - 1,
            completed: employee.taskNumbers.completed + 1,
          },
        };
      }

      if (status === "failed") {
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        };
        return {
          ...employee,
          tasks: updatedTasks,
          taskNumbers: {
            ...employee.taskNumbers,
            active: employee.taskNumbers.active - 1,
            failed: employee.taskNumbers.failed + 1,
          },
        };
      }

      return employee;
    });
    setUserData(updatedEmployees);
  };

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData, updateTaskStatus]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
