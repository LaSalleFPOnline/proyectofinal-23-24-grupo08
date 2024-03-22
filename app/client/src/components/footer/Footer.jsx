import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center py-3 my-4 border-t">
        <div className="w-full md:w-1/2 md:flex items-center">
          <span className="text-muted text-white">© 2021 Company, Inc</span>
        </div>
        <div className="w-full md:w-1/2 md:flex items-center justify-end">
          <a href="#" className="text-blue-500 hover:text-blue-800 mr-4">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
