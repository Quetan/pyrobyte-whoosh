import { IconProps } from ".";

const PinYellow: React.FC<IconProps> = ({ size = 24, ...props }) => {
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
				fill="#FFD600"
				d="M18 10c0 3.314-6 10-6 10s-6-6.686-6-10a6 6 0 1112 0z"
			></path>
		</svg>
	);
};

export { PinYellow };
