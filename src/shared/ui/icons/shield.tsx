import { IconProps } from ".";

const Shield: React.FC<IconProps> = ({ width = 10, height = 13, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 10 13"
			{...props}
		>
			<path
				fill="#85AAF8"
				d="M9.996 6.873V1.536C5.996 3 4.996 0 4.996 0H5h-.004s-1 3-4.993 1.536v5.337c-.014.273-.028 2.007 1.488 3.755.715.821 1.961 1.688 3.505 2.372 1.825-.806 3.176-1.855 3.878-2.813 1.165-1.596 1.136-3.071 1.122-3.314z"
			></path>
		</svg>
	);
};

export { Shield };
