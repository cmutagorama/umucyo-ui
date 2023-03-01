import classNames from "classnames";
import React from "react";
import { Typography } from "./Typography";

export interface TextInputProps {
	type: "text" | "email";
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	leadingText?: string;
	placeholder: string;
	error?: string;
	helperText?: string;
	LeadingIcon?: React.ReactElement;
	TrailingIcon?: React.ReactElement;
	disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
	type,
	value,
	handleChange,
	label,
	leadingText,
	placeholder,
	error,
	helperText,
	LeadingIcon,
	TrailingIcon,
	disabled
}) => {
	return (
		<>
			{/* Label */}
			{ label ? (
				<Typography
					variant="sm"
					customWeight="medium"
					customColor="text-gray-700 dark:text-white"
					className="mb-1.5"
				>
					{label}
				</Typography>
			) : null}
			{/* Label */}
			
			<div
				className={classNames("relative", {
					"flex items-center": leadingText
				})}
			>
				{/* Leading & Trailing icons */}
				<div className="h-11 shadow-sm rounded-lg w-full absolute flex items-center justify-between px-3.5 pointer-events-none">
					{ LeadingIcon ? (
						<LeadingIcon.type className="text-gray-500" />
					) : (<div />)}
					{ TrailingIcon ? (
						<TrailingIcon.type
							className={classNames({
								"text-gray-400": !error,
								"text-error-500": error
							})}
						/>
					) : null }
				</div>
				{/* Leading & Trailing icons */}

				{/* Leading text */}
				{ leadingText ? (
					<div
						className={classNames(
							"flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg",
							{
								"bg-gray-50 dark:bg-gray-700": disabled,
								"dark:bg-gray-800": !disabled,
								"border-gray-300 dark:border-gray-500": !error,
								"border-error-300 dark:border-error-300": error
							}
						)}
					>
						{leadingText}
					</div>
				) : null}
				{/* Leading text */}

				{/* Input field */}
				<input
					type={type}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					className={classNames(
						"w-full select-none text-gray-900 dark:text-white text-md border h-11",
						{
							"pl-9": LeadingIcon,
							"pr-9": TrailingIcon,
							"rounded-l-0 rounded-r-lg pl-2": leadingText,
							"rounded-lg": !leadingText,
							"border-gray-300 dark:border-gray-500 focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20": !error,
							"border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100": error,
							"bg-white dark:bg-gray-800": !disabled,
							"bg-gray-50 dark:bg-gray-700": disabled
						}
					)}
					disabled={disabled}
				/>
				{/* Input field */}
			</div>

			{/* Error message */}
			{ error ? (
				<div className="mt-1.5 text-error-500 text-sm">{error}</div>
			) : null}
			{/* Error message */}

			{/* Helper text */}
			{	helperText ? (
				<div className="mt-1.5 text-gray-500 text-sm">{helperText}</div>
			) : null }
			{/* Helper text */}
		</>
	)
}