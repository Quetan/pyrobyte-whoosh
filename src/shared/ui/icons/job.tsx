import { IconProps } from ".";

const Job: React.FC<IconProps> = ({
	size = 48,
	fill = "currentColor",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 48 48"
			{...props}
		>
			<path
				fill={fill}
				d="M28 31h-8v-3L6 25v12.527C6 39.448 7.592 41 9.562 41h28.876C40.408 41 42 39.448 42 37.527V25l-14 3v3z"
			></path>
			<path
				fill={fill}
				d="M38.438 14H32v-1.98C32 8.974 29.918 7 27 7h-6c-2.918 0-5 1.973-5 5.02V14H9.572c-1.97 0-3.562 1.662-3.562 3.72L6 23l14 3v-3h8v3l14-3v-5.319C42 15.662 40.408 14 38.438 14zM19 12.5c0-1 .5-1.5 1.5-1.5h7c1 0 1.5.5 1.5 1.5V14H19v-1.5z"
			></path>
			<path fill={fill} d="M27 24h-6v6h6v-6z"></path>
		</svg>
	);
};

export { Job };
