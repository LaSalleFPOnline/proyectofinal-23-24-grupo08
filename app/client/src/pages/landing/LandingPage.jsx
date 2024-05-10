import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { ModalRegister } from "../../components/modal/ModalRegister";
import { features } from "./content";
import { Button } from "../../components/button/Button";
import styles from './landingPageStyles.module.css';
import PriceCards from "../../components/landing/PriceCards/PriceCards";
import AboutApp from "../../components/landing/AboutApp/AboutApp";

const LandingPage = (props) => {
	const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
	const [plan, setPlan] = useState(false);
	const { name } = useUser();

	console.log("*** LANDIG PAGE useUser -> ", name);

	const handleOpenModalRegister = (planSelection) => {
		console.log("handleOpenModalRegister");
		setIsModalRegisterOpen(true);
		setPlan(planSelection);
	};

	const handleCloseModalRegister = () => {
		console.log("handleCloseModalRegister");
		setIsModalRegisterOpen(false);
	};

	const handleFormSubmit = (data) => {
		setRegisterFormData(data);
		handleCloseModalRegister();
		console.log("handleRegister");
	};

	return (
		<>

			<section className={styles.landingMainSection}>
				<h1> OPTIMIZA TUS RESERVAS, <br></br> SIMPLIFICA TU RESTAURANTE</h1>
				<p>Descubre cómo dgusta simplifica tu día a día en la gestión de reservas, permitiéndote
					enfocarte en lo que más importa: tu restaurante y tus clientes.</p>
				<button className={styles.landingMainSectionButton} onClick={handleOpenModalRegister}>GET STARTED</button>
				<ModalRegister
					isOpen={isModalRegisterOpen}
					onClose={handleCloseModalRegister}
					onSubmit={handleFormSubmit}
					plan={plan}
				/>
			</section>
			
			<section className={styles.priceSection}>
				<div className={styles.firstSeparator}></div>
				<h2>ENCUENTRA TU PRECIO IDEAL</h2>
				<div className={styles.cards}>
					<PriceCards onClick={handleOpenModalRegister}></PriceCards>
				</div>
				<div className={styles.secondSeparator}></div>
			</section>
			
			<div className={styles.aboutAppSection}>
				<AboutApp></AboutApp>
			</div>
		</>
	);
};

export default LandingPage;
