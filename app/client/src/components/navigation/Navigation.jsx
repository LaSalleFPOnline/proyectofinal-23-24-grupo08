import React from "react";
import { Button } from "../button/Button";
import { title, navigation } from "./content";

export const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">{title}</div>
        <ul className="flex items-center">
          {navigation.map((item) => (
            <li key={item.name} className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
          <li className="mr-6">
            <Button text="Sign Up" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
