import React, { useEffect } from "react";
import { useData } from "../../hooks/useData";

const ExampleApiUsagePost = (props) => {
	const { data, isLoading, hasError, postData } = useData();

	useEffect(() => {
		console.log(
			"ENVIEM UNA CRIDA POST A L'API AL MUNTAR EL COMPONENT AMB postData",
		);
		// Params --> End point API || params a enviar

		const params = {
			date: "2024-05-20",
			guests: 5,
			name: "Paco",
		};
		postData("/v2/pokemon/ditto", params);
	}, []);

	useEffect(() => {
		console.log(
			"PODEM UTILITZAR UN USEFFECT PER CONTROLAR QUAN ENS VINGUI LA RESPOSTA DE L'API DEL RESULTAT DEL POST",
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
				<h1>Reserva realitzada</h1>
			</>
		);
	}
};

export default ExampleApiUsagePost;
