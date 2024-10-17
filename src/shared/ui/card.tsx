import { cn } from "../lib/utils";

type CardProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {};

const CardTitle: React.FC<
	React.PropsWithChildren & React.HTMLAttributes<HTMLHeadElement>
> = ({ children, className, ...props }) => {
	return (
		<h3 className={cn("h3 mb-4", className)} {...props}>
			{children}
		</h3>
	);
};

const CardDescription: React.FC<
	React.PropsWithChildren & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className, ...props }) => {
	return (
		<p
			className={cn(
				"text-muted-foreground mt-auto text-[16px] leading-[24px]",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
};

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				"bg-banner rounded-lg border border-border p-6 pt-[22px] pb-5 w-[300px] min-h-[280px] text-left hover:bg-white hover:shadow-[inset_0_0_0_2px] hover:shadow-primary flex flex-col",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const TransparentCard: React.FC<CardProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"w-[300px] min-w-[220px] text-center lg:text-left flex flex-col",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { TransparentCard, Card, CardTitle, CardDescription };
