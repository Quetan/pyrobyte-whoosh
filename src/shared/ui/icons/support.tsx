import { IconProps } from ".";

const Support: React.FC<IconProps> = ({
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
				d="M24 5C14.688 5 7.111 12.577 7.111 21.889H5v10.555h6.333V21.89c0-6.986 5.681-12.667 12.667-12.667s12.667 5.681 12.667 12.667v9.426L25.47 38.778H21.89V43h4.862l14.138-9.426v-1.13H43V21.89h-2.111C40.889 12.577 33.312 5 24 5z"
			></path>
			<path
				fill={fill}
				d="M35 24c0-6.065-4.935-11-11-11s-11 4.935-11 11 4.935 11 11 11 11-4.935 11-11z"
			></path>
		</svg>
	);
};

export { Support };
