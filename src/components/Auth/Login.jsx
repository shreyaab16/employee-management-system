import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("email is", email);
    // console.log("password is", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-4 px-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your mail"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full mt-3 py-4 px-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-5 w-full text-white  border-none outline-none  bg-emerald-600 text-xl rounded-full py-3 px-3 placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
