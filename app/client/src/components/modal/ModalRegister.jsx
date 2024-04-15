import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { FormRegister } from "../form/FormRegister";

export const ModalRegister = ({ onSubmit, isOpen, onClose }) => {
	const focusInputRef = (useRef < HTMLInputElement) | (null > null);

	useEffect(() => {
		if (isOpen && focusInputRef.current) {
			setTimeout(() => {
				focusInputRef.current.focus();
			}, 0);
		}
	}, [isOpen]);

	return (
		<Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
			<FormRegister />
		</Modal>
	);
};
