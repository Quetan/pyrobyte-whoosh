import { IconProps } from ".";

const Menu: React.FC<IconProps> = ({ size = 24, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="#C2D2F4"
				d="M9 17a1 1 0 011-1h10a1 1 0 110 2H10a1 1 0 01-1-1z"
			></path>
			<path
				fill="#B7C6E7"
				d="M9 17a1 1 0 011-1h10a1 1 0 110 2H10a1 1 0 01-1-1z"
			></path>
			<path
				fill="#C2D2F4"
				d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
			></path>
			<path
				fill="#B7C6E7"
				d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
			></path>
			<path
				fill="#C2D2F4"
				d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
			></path>
			<path
				fill="#B7C6E7"
				d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
			></path>
		</svg>
	);
};

export { Menu };
