import { cn } from "../lib/utils";

type FooterColTitleProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLHeadingElement> & {
		withBorder?: boolean;
	};

const FooterColTitle: React.FC<FooterColTitleProps> = ({
	children,
	className,
	withBorder = true,
	...props
}) => {
	return (
		<h2
			className={cn(
				"text-foreground font-bold font-intro text-[14px] leading-[16px] tracking-[8%] uppercase mb-5 border-b-2 pb-[9px]",
				withBorder ? "border-border " : "border-transparent",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	);
};

type FooterColListItem = React.PropsWithChildren &
	React.HTMLAttributes<HTMLLIElement> & {
		href?: string;
	};

const FooterColListItem: React.FC<FooterColListItem> = ({
	children,
	className,
	href,
	...props
}) => {
	return (
		<li className={cn("", className)} {...props}>
			<a
				href={href}
				className="text-[14px] leading-[32px] font-introBook no-underline text-foreground opacity-[67%] hover:opacity-50 hover:underline hover:decoration-dashed hover:decoration-decoration hover:underline-offset-4"
			>
				{children}
			</a>
		</li>
	);
};

type FooterColListProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLUListElement> & {};

const FooterColList: React.FC<FooterColListProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<ul className={cn("pb-4", className)} {...props}>
			{children}
		</ul>
	);
};

type FooterColProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {};

const FooterCol: React.FC<FooterColProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div className={cn("flex flex-col", className)} {...props}>
			{children}
		</div>
	);
};

export { FooterCol, FooterColTitle, FooterColList, FooterColListItem };
