import React, { useEffect } from "react";
import { useData } from "../../hooks/useData";

const ExampleApiUsageGet = (props) => {
	const { data, isLoading, hasError, getData } = useData();

	useEffect(() => {
		console.log("FEM UNA CRIDA GET A L'API AL MUNTAR EL COMPONENT AMB getData");
		// Param --> End point API
		getData("/v2/pokemon/ditto");
	}, []);

	useEffect(() => {
		console.log(
			"PODEM UTILITZAR UN USEFFECT PER CONTROLAR QUAN ENS VINGUI LA RESPOSTA DE L'API O FICAR-HO DIRECTAMENT AL RETURN",
		);
		console.log("data --> ", data);
	}, [data]);

	if (isLoading) {
		return <h1>Loading....</h1>;
	}
	if (hasError) {
		return <h1>Ups!! Error!</h1>;
	}

	if (data) {
		return (
			<>
				<h1>{data.name}</h1>
				<h2>Height: {data.height}</h2>
				<h2>Weight: {data.weight}</h2>
			</>
		);
	}
};

export default ExampleApiUsageGet;
