import { cn } from "../lib/utils";

type SectionProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLElement> & {};

const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
	return (
		<section className={cn("", className)} {...props}>
			{children}
		</section>
	);
};

export { Section };
export type { SectionProps };
