import { cn } from "@/shared/lib/utils";
import { IconProps } from ".";

const Info: React.FC<IconProps> = ({ size = 24, className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			className={cn("tooltip", className)}
			{...props}
		>
			<circle cx="12" cy="12" r="12" fill="#DDE7FD"></circle>
			<path
				fill="#fff"
				d="M11 11a1 1 0 112 0v6a1 1 0 11-2 0v-6zM11 7a1 1 0 112 0 1 1 0 01-2 0z"
			></path>
		</svg>
	);
};

export { Info };
