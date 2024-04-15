import React from "react";
import { useUser } from "../../hooks/useUser";

const AdminBillingPage = (props) => {
	const { name } = useUser();
	console.log("*** AdminBillingPage -> ", { name });

	return <h1>AdminBillingPage</h1>;
};

export default AdminBillingPage;
