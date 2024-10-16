import { IconProps } from ".";

const Close: React.FC<IconProps> = ({ size = 16, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 8 8"
			{...props}
		>
			<path
				fill="#C4C4C4"
				d="M.276.27a.904.904 0 000 1.3L2.768 4 .276 6.43a.904.904 0 000 1.3.96.96 0 001.335 0L4 5.4l2.39 2.33a.96.96 0 001.334 0 .904.904 0 000-1.3L5.232 4l2.492-2.43a.904.904 0 000-1.3.96.96 0 00-1.334 0L4 2.6 1.61.27a.96.96 0 00-1.334 0z"
			></path>
		</svg>
	);
};

export { Close };
