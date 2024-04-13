import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { ModalRegister } from "../../components/modal/ModalRegister";
import { features } from "./content";
import { Button } from "../../components/button/Button";

const LandingPage = (props) => {
	const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
	const { name } = useUser();

	console.log("*** LANDIG PAGE useUser -> ", name);

	const handleOpenModalRegister = () => {
		console.log("handleOpenModalRegister");
		setIsModalRegisterOpen(true);
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
			{/* Title section */}
			<div className="mx-auto mt-48 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
						Bookings easy way
					</p>
					<div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
						<Button text="Get Started" onClick={handleOpenModalRegister} />
						<ModalRegister
							isOpen={isModalRegisterOpen}
							onClose={handleCloseModalRegister}
							onSubmit={handleFormSubmit}
						/>
					</div>
				</div>
			</div>

			{/* Feature section */}
			<div id="features" className="mx-auto mt-48 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
						Features
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600 ">
						Don't work harder.
						<br /> Work smarter.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900 ">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-blue-400 bg-blue-100/50 dark:bg-boxdark rounded-lg">
										<div className="text-2xl">{feature.icon}</div>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600 ">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			{/* Another section */}
			<div className="mx-auto mt-48 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl "></p>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
