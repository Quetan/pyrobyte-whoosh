import { IconProps } from ".";

const Play: React.FC<IconProps> = ({ size = 16, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 38 48"
			{...props}
		>
			<path
				fill="#fff"
				d="M.875 4.118c0-3.224 3.617-5.123 6.27-3.293l28.83 19.882c2.306 1.59 2.306 4.996 0 6.586L7.145 47.175c-2.653 1.83-6.27-.07-6.27-3.293V4.118z"
			></path>
		</svg>
	);
};

export { Play };
