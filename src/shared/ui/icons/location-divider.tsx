import { IconProps } from ".";

const LocationDivider: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="4"
			height="52"
			fill="none"
			viewBox="0 0 4 52"
			{...props}
		>
			<path
				fill="#2B6BF3"
				fillOpacity="0.08"
				d="M4 50a2 2 0 11-4 0 2 2 0 014 0zM4 10a2 2 0 11-4 0 2 2 0 014 0zM4 18a2 2 0 11-4 0 2 2 0 014 0zM4 26a2 2 0 11-4 0 2 2 0 014 0zM4 34a2 2 0 11-4 0 2 2 0 014 0zM4 42a2 2 0 11-4 0 2 2 0 014 0zM4 2a2 2 0 11-4 0 2 2 0 014 0z"
			></path>
		</svg>
	);
};

export { LocationDivider };
