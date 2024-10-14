import { IconProps } from ".";

const Pin: React.FC<IconProps> = ({ size = 16, ...props }) => {
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
				stroke="#C2D2F4"
				strokeWidth="2"
				d="M13 6c0 .578-.279 1.439-.827 2.503-.53 1.031-1.25 2.133-1.985 3.156A48.968 48.968 0 018 14.466a50 50 0 01-2.188-2.807c-.736-1.023-1.454-2.125-1.985-3.156C3.279 7.439 3 6.578 3 6a5 5 0 0110 0z"
			></path>
			<path
				stroke="#B7C6E7"
				strokeWidth="2"
				d="M13 6c0 .578-.279 1.439-.827 2.503-.53 1.031-1.25 2.133-1.985 3.156A48.968 48.968 0 018 14.466a50 50 0 01-2.188-2.807c-.736-1.023-1.454-2.125-1.985-3.156C3.279 7.439 3 6.578 3 6a5 5 0 0110 0z"
			></path>
		</svg>
	);
};

export { Pin };
