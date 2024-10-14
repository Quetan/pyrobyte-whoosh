import * as React from "react";

import { cn } from "@/shared/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					`flex h-10 w-full rounded-md border border-input bg-white px-4 py-[12.5px] text-sm shadow-sm transition-colors font-introBook

					file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground
					
					placeholder:text-muted-foreground placeholder:focus-visible:opacity-100 placeholder:opacity-55
					
					focus-visible:outline-none focus-visible:ring-1 focus-visible:bg-white focus-visible:hover:bg-white focus-visible:ring-primary 
					
					disabled:cursor-not-allowed disabled:opacity-50 
					
					hover:bg-input-hover`,
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
