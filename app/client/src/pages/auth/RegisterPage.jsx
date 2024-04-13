import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const RegisterPage = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { register } = useUser();
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");

    if ("" === name) {
      setNameError("Please enter your name");
      return;
    }

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

    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    register({ name, email, password });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Registration</h1>
        <div className="w-64">
          <input
            value={name}
            placeholder="Enter your name here"
            onChange={(ev) => setName(ev.target.value)}
            className="block w-full px-4 py-2 mb-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <label className="text-red-600 text-sm mt-2">{nameError}</label>
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
          {nameError || emailError || passwordError ? (
            <div className="text-red-600 text-sm mt-2">
              Invalid registration information
            </div>
          ) : null}
          <button
            className="flex justify-center w-full py-2 mt-4 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            onClick={onButtonClick}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
