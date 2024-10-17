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
			className={cn("h1 mb-7 w-max mx-auto relativen text-center", className)}
			{...props}
		>
			{children}
		</h1>
	);
};

export { SectionTitle };
