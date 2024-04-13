import React, { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./modal.css";

export const Modal = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
	const [isModalOpen, setModalOpen] = useState(isOpen);
	const modalRef = useRef(null);

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
		setModalOpen(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			handleCloseModal();
		}
	};

	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		const modalElement = modalRef.current;

		if (modalElement) {
			if (isModalOpen) {
				modalElement.showModal();
			} else {
				modalElement.close();
			}
		}
	}, [isModalOpen]);

	return (
		<dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
			{hasCloseBtn && (
				<IoIosCloseCircle
					className="modal-close-btn"
					onClick={handleCloseModal}
				/>
			)}
			{children}
		</dialog>
	);
};
