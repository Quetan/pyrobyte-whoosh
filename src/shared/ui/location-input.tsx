import { useId } from "react";
import { cn } from "../lib/utils";
import { Input, type InputProps } from "./input";

type LocationInput = InputProps & {
	label: string;
	error: boolean;
};

const LocationInput: React.FC<LocationInput> = ({
	className,
	label,
	error,
	...props
}) => {
	const id = useId();
	return (
		<div className="flex flex-col hover:opacity-70 hover:focus-visible:opacity-100 transition-opacity">
			<label
				className="uppercase tracking-wide font-bold text-[12px] text-[#C4CEE5]"
				htmlFor={id}
			>
				{label}
			</label>
			<Input
				id={id}
				className={cn(
					"rounded-none border-l-0 border-t-0 border-r-0 border-b-2 shadow-none focus-visible:ring-0 p-0",
					error
						? "border-destructive focus-visible:border-destructive"
						: "border-border focus-visible:border-primary",
					className
				)}
				{...props}
			/>
			{error && (
				<span className="text-destructive text-xs">
					This field is required!
				</span>
			)}
		</div>
	);
};

export { LocationInput };
