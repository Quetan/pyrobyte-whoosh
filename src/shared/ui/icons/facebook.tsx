import { IconProps } from ".";

const Facebook: React.FC<IconProps> = ({
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
				d="M22 30V20h2l1-3h-3l.008-2.62c0-.898.082-1.38 1.328-1.38H25v-3h-2.682c-3.198 0-4.324 1.672-4.324 4.483L18 17h-2v3h2l-.006 10H22z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export { Facebook };
