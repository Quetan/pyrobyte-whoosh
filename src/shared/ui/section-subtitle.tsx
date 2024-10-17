import { cn } from "../lib/utils";

type SectionSubtitleProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLParagraphElement> & {};

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<p
			className={cn(
				"text-[20px] lg:text-[22px] leading-[32px] opacity-50 w-full lg:w-[754px] mx-auto mb-10 text-center",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export { SectionSubtitle };
