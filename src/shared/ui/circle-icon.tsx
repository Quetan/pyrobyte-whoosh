import { cn } from "../lib/utils";

type CircleIconProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {};

const CircleIcon: React.FC<CircleIconProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg shadow-[#2B6BF329] p-4",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { CircleIcon };
