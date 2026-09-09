import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-[#1c1c1c] p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-lg ">
      <h1 className="text-2xl font-medium ">
        Hello
        <br />
        <span className="text-3xl font-semibold">
          {props.data ? props.data.firstName : "Admin"}
        </span>
        👋
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600/10 border border-red-500/40 text-red-400 text-sm font-medium px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition w-fit"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
