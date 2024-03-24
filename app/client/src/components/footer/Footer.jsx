import React from "react";
import { footerContent, footerTitle } from "./content";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center py-3 my-4 border-t">
        <div className="w-full md:w-1/2 md:flex items-center">
          <span className="text-muted text-white">{footerTitle}</span>
        </div>
        
        {footerContent.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-blue-500 hover:text-blue-800 mr-4"
          >
            {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
};
