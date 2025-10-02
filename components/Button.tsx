import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
	return (
		<button
			className={`bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-black-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
