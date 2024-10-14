import { IconProps } from ".";

const SearchDefault: React.FC<IconProps> = ({ size = 16, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fill="#CCC"
				fillRule="evenodd"
				d="M13.09 6.545a6.516 6.516 0 01-1.246 3.844L16 14.546 14.546 16l-4.157-4.156a6.545 6.545 0 112.701-5.298zM6.5 11C9 11 11 9.09 11 6.545S9 2 6.545 2C4.091 2 2 4 2 6.545 2 9.091 4 11 6.5 11z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export { SearchDefault };
