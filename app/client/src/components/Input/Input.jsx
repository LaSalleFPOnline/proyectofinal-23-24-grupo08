import cn from "classnames";
import { findInputError, isFormInvalid } from "./helpers";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

export const Input = ({
	name,
	label,
	type,
	id,
	placeholder,
	validation,
	multiline,
	className,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputErrors = findInputError(errors, name);
	const isInvalid = isFormInvalid(inputErrors);

	const input_tailwind =
		"p-5 rounded-md  border border-slate-300 placeholder:opacity-60";

	return (
		<div className={cn("flex flex-col w-full gap-2", className)}>
			<div className="flex justify-between">
				<label htmlFor={id} className="text-base font-semibold capitalize">
					{label}
				</label>
				<AnimatePresence mode="wait" initial={false}>
					{isInvalid && (
						<InputError
							message={inputErrors.error.message}
							key={inputErrors.error.message}
						/>
					)}
				</AnimatePresence>
			</div>
			{multiline ? (
				<textarea
					id={id}
					type={type}
					className={cn(input_tailwind, "min-h-[10rem] max-h-[20rem] resize-y")}
					placeholder={placeholder}
					{...register(name, validation)}
				></textarea>
			) : (
				<input
					id={id}
					type={type}
					className={
						"mb-4 w-full h-10 pl-3 pr-8 text-sm placeholder-gray-600 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					}
					placeholder={placeholder}
					{...register(name, validation)}
				/>
			)}
		</div>
	);
};

const InputError = ({ message }) => {
	return (
		<motion.p
			className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
			{...framer_error}
		>
			<MdError />
			{message}
		</motion.p>
	);
};

const framer_error = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 10 },
	transition: { duration: 0.2 },
};
