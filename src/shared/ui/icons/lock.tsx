import { IconProps } from ".";

const Lock: React.FC<IconProps> = ({ size = 16, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M8 2C6.028 2 4 3.679 4 5.75V7h-.286C3.32 7 3 7.336 3 7.75v5.5c0 .414.32.75.714.75h8.572c.394 0 .714-.336.714-.75v-5.5c0-.414-.32-.75-.714-.75H12V5.75C12 3.679 9.972 2 8 2zm0 2C6.817 4 6 5 6 5.75V7h4V5.75C10 5 9.183 4 8 4z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export { Lock };
