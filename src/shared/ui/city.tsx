import { cn } from "../lib/utils";
import { Pin } from "./icons";

type CityProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

const City: React.FC<CityProps> = ({ className, children, ...props }) => {
	return (
		<div
			className={cn(
				"flex flex-row items-center gap-1.5 font-introBook",
				className
			)}
			{...props}
		>
			<Pin />
			<span className="cursor-pointer hover:opacity-70 hover:underline hover:underline-offset-4 hover:decoration-dashed hover:decoration-decoration trans">
				{children}
			</span>
		</div>
	);
};

export { City };
export type { CityProps };
