import { IconProps } from ".";

const CarouselArrow: React.FC<IconProps> = ({
	width = 14,
	height = 24,
	...props
}) => {
	console.log("carousel-arrow");

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 14 24"
			{...props}
		>
			<path
				fill="#1D253C"
				fillRule="evenodd"
				d="M11.143 23.523L.49 13.153a1.6 1.6 0 010-2.305L11.143.478a1.706 1.706 0 012.367 0 1.6 1.6 0 010 2.304L4.04 12l9.469 9.218a1.6 1.6 0 010 2.305 1.706 1.706 0 01-2.367 0z"
				clipRule="evenodd"
				opacity="0.16"
			></path>
		</svg>
	);
};

export { CarouselArrow };
