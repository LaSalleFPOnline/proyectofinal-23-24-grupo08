import React from "react";
import { useUser } from "../../hooks/useUser";

const ConfigurationPage = (props) => {
	const { idRestaurant } = props;
	const { name } = useUser();
	console.log("*** ConfigurationPage -> ", { name, idRestaurant });

	return <h1>ConfigurationPage</h1>;
};

export default ConfigurationPage;
