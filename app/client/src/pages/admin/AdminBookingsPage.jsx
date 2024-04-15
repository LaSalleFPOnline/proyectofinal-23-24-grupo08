import React from "react";
import { useUser } from "../../hooks/useUser";

const AdminBookingsPage = (props) => {
	const { name } = useUser();
	console.log("*** AdminBookingsPage ", { name });

	return <h1>AdminBookingsPage</h1>;
};

export default AdminBookingsPage;
