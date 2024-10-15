import { IconProps } from ".";

const Etc: React.FC<IconProps> = ({ width = 25, height = 15, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 25 15"
			{...props}
		>
			<rect width="25" height="15" fill="#CCDBFC" rx="4"></rect>
			<rect width="5" height="5" x="17" y="5" fill="#fff" rx="2.5"></rect>
			<rect width="5" height="5" x="10" y="5" fill="#fff" rx="2.5"></rect>
			<rect width="5" height="5" x="3" y="5" fill="#fff" rx="2.5"></rect>
		</svg>
	);
};

export { Etc };
