import { IconProps } from ".";

const Youtube: React.FC<IconProps> = ({
	size = 40,
	fill = "#2B6BF3",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 40 40"
			{...props}
		>
			<circle cx="20" cy="20" r="20" fill={fill}></circle>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M28.595 12.478c.947.263 1.692 1.037 1.945 2.02C31 16.282 31 20 31 20s0 3.719-.46 5.502c-.253.983-.998 1.758-1.945 2.02C26.88 28 20 28 20 28s-6.88 0-8.595-.477c-.947-.264-1.692-1.038-1.945-2.021C9 23.718 9 20 9 20s0-3.72.46-5.502c.253-.983.998-1.757 1.945-2.02C13.12 12 20 12 20 12s6.88 0 8.595.478zM18 17v7l5.5-3.5L18 17z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export { Youtube };
