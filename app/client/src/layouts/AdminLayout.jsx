import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

const AdminLayout = ({ children }) => {
	return (
		<>
			<Navigation />
			<p>Admin layout</p>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default AdminLayout;
