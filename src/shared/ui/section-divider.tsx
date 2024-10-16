import { cn } from "../lib/utils";
import { Box } from "./icons";

type SectionDividerProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {};

const SectionDivider: React.FC<SectionDividerProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"h-8 w-full bg-transparent flex flex-row items-center gap-[34px]",
				className
			)}
			{...props}
		>
			<hr className="w-full h-0.5 bg-border" />
			{children ? (
				children
			) : (
				<div>
					<Box />
				</div>
			)}
			<hr className="w-full h-0.5 bg-border" />
		</div>
	);
};

export { SectionDivider };
