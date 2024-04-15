import React from "react";
import { useUser } from "../../hooks/useUser";

const AdminDashboardPage = (props) => {
	const { name } = useUser();
	console.log("*** DASHBOAR RESTAURANT PAGE useUser -> ", { name });

	return <h1>AdminDashboardPage</h1>;
};

export default AdminDashboardPage;
