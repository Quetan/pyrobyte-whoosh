import { TrackPackage } from "@/features/track-a-package";
import { Logo } from "@/shared/ui/logo";
import { City } from "@/shared/ui/city";
import { Navigation } from "@/shared/ui/navigation";

const Header: React.FC = () => {
	return (
		<header className="flex flex-row items-center py-2 px-8 bg-banner text-banner-foreground h-20 w-full border-b border-primary/15 justify-between font-medium sticky top-0 left-0 right-0 z-50">
			<Logo />
			<City>NY, Manhattan</City>
			<TrackPackage />
			<Navigation />
		</header>
	);
};

export { Header };
