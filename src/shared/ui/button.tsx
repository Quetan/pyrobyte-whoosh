import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
	"flex w-[286px] h-[48px] rounded-[32px] text-[18px] leading-[32px] items-center justify-center whitespace-nowrap text-sm font-normal font-intro focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"text-[18px] bg-primary text-primary-foreground hover:bg-[#1252DB]",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"text-[18px] bg-secondary text-secondary-foreground hover:text-white",
				ghost:
					"border-none text-muted-foreground text-[16px] leading-[24px] h-max p-0",
				link: "text-primary underline-offset-4 hover:underline",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
