import { cn } from "../lib/utils";
import { Arrow } from "./icons";

type PrimaryLinkProps = React.PropsWithChildren &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
	children,
	href,
	className,
	...props
}) => {
	return (
		<a
			href={href}
			className={cn("text-primary hover:opacity-70 max-w-max", className)}
			{...props}
		>
			<span className="flex flex-row items-center gap-2 w-max">
				{children} <Arrow />
			</span>
		</a>
	);
};

export { PrimaryLink };
