import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

const RestaurantLayout = ({ children }) => {
	return (
		<>
			<Navigation />
			<p>Restaurant layout</p>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default RestaurantLayout;
