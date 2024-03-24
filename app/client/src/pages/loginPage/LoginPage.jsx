import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();

    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    // Authentication calls will be made here...
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <div className="w-64">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="block w-full px-4 py-2 mb-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <label className="text-red-600 text-sm mt-2">{emailError}</label>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            className="block w-full px-4 py-2 mb-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <label className="text-red-600 text-sm mt-2">{passwordError}</label>
          {emailError || passwordError ? (
            <div className="text-red-600 text-sm mt-2">Invalid email or password</div>
          ) : null}
          <button
            className="flex justify-center w-full py-2 mt-4 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            onClick={onButtonClick}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};
