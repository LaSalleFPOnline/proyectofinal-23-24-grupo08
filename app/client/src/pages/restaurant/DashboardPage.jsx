import React from "react";
import { useUser } from "../../hooks/useUser";

const DashboardPage = (props) => {
	const { idRestaurant } = props;
	const { name } = useUser();
	console.log("*** DASHBOAR RESTAURANT PAGE useUser -> ", {
		name,
		idRestaurant,
	});

	return <h1>Dashboard Restaurant</h1>;
};

export default DashboardPage;
