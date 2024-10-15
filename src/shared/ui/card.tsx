import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type CardProps = React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement> & {};

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
	return <h3 className="h3 mb-5">{children}</h3>;
};

const CardDescription: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className="text-muted-foreground mt-9 text-[16px] leading-[24px]">
			{children}
		</p>
	);
};

const CardIcon: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg shadow-[#2B6BF329] p-4">
			{children}
		</div>
	);
};

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				"bg-banner rounded-lg border border-border p-6 pb-5 w-[300px] text-left aspect-square hover:bg-white hover:shadow-[inset_0_0_0_2px] hover:shadow-primary",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { Card, CardTitle, CardDescription, CardIcon };
