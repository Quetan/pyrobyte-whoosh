import { IconProps } from ".";

const Box: React.FC<IconProps> = ({ width = 32, height = 28, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 32 28"
			{...props}
		>
			<path
				fill="#C2D2F4"
				d="M16 0L0 4.5v19.192L16 28l16-4.5v-19L16 0zM2 22V7.5L15 11v14.5L2 22zM2 5.5L7.5 4l14 3.5L16 9 2 5.5zM30 22l-13 3.5V11l5-1.5V15l3-1V8.5L30 7v15zM25 6.5L11 3l5-1.5 13 4-4 1z"
			></path>
			<path
				fill="#B7C6E7"
				d="M16 0L0 4.5v19.192L16 28l16-4.5v-19L16 0zM2 22V7.5L15 11v14.5L2 22zM2 5.5L7.5 4l14 3.5L16 9 2 5.5zM30 22l-13 3.5V11l5-1.5V15l3-1V8.5L30 7v15zM25 6.5L11 3l5-1.5 13 4-4 1z"
			></path>
		</svg>
	);
};

export { Box };
