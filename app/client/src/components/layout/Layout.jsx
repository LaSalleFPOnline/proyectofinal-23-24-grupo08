import React from "react";
import { Navigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
