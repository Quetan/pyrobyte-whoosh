import { cn } from "../lib/utils";

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	href?: string;
};

const Logo: React.FC<LogoProps> = ({
	className,
	alt = "Whoosh logo",
	src = "./logo.svg",
	href = "/",
	...props
}) => {
	return (
		<a href={href}>
			<img
				src={src}
				alt={alt}
				className={cn("h-16 w-48", className)}
				{...props}
			/>
		</a>
	);
};

export { Logo };
