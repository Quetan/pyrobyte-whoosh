import { cn } from "../lib/utils";
import { Button, ButtonProps } from "./button";

type ButtonPrimaryProps = ButtonProps & React.PropsWithChildren & {};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<Button className={cn("", className)} {...props}>
			{children}
		</Button>
	);
};

export { ButtonPrimary };
