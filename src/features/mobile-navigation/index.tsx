import { MobileNavigationButton as MB } from "./ui/mobile-navigation-button";
import { MobileNavigationProvider, useMobileNavigation } from "./lib/context";

const MobileNavigationButton: React.FC = () => {
	return (
		<MobileNavigationProvider>
			<MB />
		</MobileNavigationProvider>
	);
};

export {
	MobileNavigationButton,
	MobileNavigationProvider,
	// eslint-disable-next-line react-refresh/only-export-components
	useMobileNavigation,
};
