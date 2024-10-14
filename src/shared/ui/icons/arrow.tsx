import { IconProps } from ".";

const Arrow: React.FC<IconProps> = ({
	width = 5,
	height = 8,
	size,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size ? size : width}
			height={size ? size : height}
			fill="none"
			viewBox="0 0 5 8"
			{...props}
		>
			<path
				fill="#2B6BF3"
				d="M4.724 3.305L1.61.269a.96.96 0 00-1.334 0 .904.904 0 000 1.301L2.768 4 .276 6.43a.904.904 0 000 1.3.96.96 0 001.335 0l3.113-3.035a.905.905 0 00.275-.697.905.905 0 00-.275-.693z"
			></path>
		</svg>
	);
};

export { Arrow };
