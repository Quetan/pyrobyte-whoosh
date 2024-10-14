import { IconProps } from ".";

const Search: React.FC<IconProps> = ({ size = 16, ...props }) => {
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
				fill="#B7C6E7"
				fillRule="evenodd"
				d="M7 14A7 7 0 107 0a7 7 0 000 14zm0-1.333c3.222 0 5.667-2.445 5.667-5.667S10.222 1.333 7 1.333 1.333 3.778 1.333 7 3.778 12.667 7 12.667z"
				clipRule="evenodd"
			></path>
			<path
				fill="#B7C6E7"
				d="M7.333 10l3.334-1.333V5.333l-3.334 1.18V10zM6.667 10L3.333 8.667V5.333l3.334 1.18V10zM7 3.333L3.333 4.667 7 6l3.667-1.333L7 3.333zM11.952 11L16 15.048l-.952.952L11 11.952l.952-.952z"
			></path>
		</svg>
	);
};

export { Search };
