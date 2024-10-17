import { cn } from "../lib/utils";

type SectionTitleProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLHeadingElement> & {};

const SectionTitle: React.FC<SectionTitleProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<h1
			className={cn(
				"h1 text-balance mb-2 lg:mb-7 w-full lg:w-max mx-auto z-10 relative text-center",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	);
};

export { SectionTitle };
