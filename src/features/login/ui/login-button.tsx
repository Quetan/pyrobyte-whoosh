import { Button } from "@/shared/ui/button";
import { Lock } from "@/shared/ui/icons";

const LoginButton: React.FC = () => {
	return (
		<Button
			className="p-3 w-10 h-10 rounded-full hover:opacity-70 transition-opacity"
			variant="default"
		>
			<Lock />
		</Button>
	);
};

export { LoginButton };
