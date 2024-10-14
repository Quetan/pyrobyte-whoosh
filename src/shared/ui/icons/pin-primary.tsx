import { IconProps } from ".";

const PinPrimary: React.FC<IconProps> = ({ size = 24, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<circle cx="12" cy="12" r="12" fill="#2B6BF3" fillOpacity="0.08"></circle>
			<circle cx="12" cy="12" r="5" fill="#2B6BF3"></circle>
			<circle cx="12" cy="12" r="2" fill="#fff"></circle>
		</svg>
	);
};

export { PinPrimary };
