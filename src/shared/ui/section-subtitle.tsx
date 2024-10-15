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
				"text-[22px] leading-[32px] opacity-50 w-[754px] mx-auto mb-10",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export { SectionSubtitle };
