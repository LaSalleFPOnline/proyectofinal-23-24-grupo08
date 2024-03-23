import React from "react";
import { Button } from "../button/Button";
import { title, navigation } from "./content";
import { Outlet, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">{title}</div>
        <ul className="flex items-center">
          {navigation.map((item) => (
            <li key={item.name} className="mr-6">
              <div className="text-blue-500 hover:text-blue-800">
                <Link to={item.href}>{item.name}</Link>
              </div>
            </li>
          ))}
          <li className="mr-6">
            <Link to={"/login"}>
              <Button text="Sign Up" />
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
};
