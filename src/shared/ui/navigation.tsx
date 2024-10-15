import { LoginButton } from "@/features/login";
import { cn } from "../lib/utils";

type NavigationProps = React.PropsWithChildren &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavigationItem: React.FC<NavigationProps> = ({
	href,
	children,
	className,
	...props
}) => {
	return (
		<a
			href={href}
			className={cn(
				"text-muted-foreground no-underline font-normal font-introBook hover:opacity-70 hover:underline hover:decoration-decoration hover:decoration-dashed hover:underline-offset-4",
				className
			)}
			{...props}
		>
			{children}
		</a>
	);
};

const Navigation: React.FC = () => {
	return (
		<nav className="flex flex-row items-center gap-8">
			<ul className="flex flex-row items-center gap-9">
				<li>
					<NavigationItem href="#">Send a Parcel</NavigationItem>
				</li>
				<li>
					<NavigationItem href="#">Become a Courier</NavigationItem>
				</li>
			</ul>
			<LoginButton />
		</nav>
	);
};

export { Navigation };
