import { Menu, Profile } from "@/shared/ui/icons";
import { Logo } from "@/shared/ui/logo";

const MobileHeader: React.FC = () => {
	return (
		<header className="flex flex-row items-center py-3 px-4 bg-banner text-banner-foreground h-16 w-full border-b border-primary/15 justify-between font-medium sticky top-0 left-0 right-0 z-50">
			<Profile />
			<Logo className="h-10 w-[120px]" />
			<Menu />
		</header>
	);
};

export { MobileHeader };
