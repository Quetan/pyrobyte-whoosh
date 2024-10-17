import { createContext, useContext, useState } from "react";

type MobileNavigationContextType = {
	isOpen: boolean;
	close: () => void;
	open: () => void;
};

const MobileNavigationContext = createContext<
	MobileNavigationContextType | undefined
>(undefined);

const MobileNavigationProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	return (
		<MobileNavigationContext.Provider
			value={{
				isOpen,
				open,
				close,
			}}
		>
			{children}
		</MobileNavigationContext.Provider>
	);
};

function useMobileNavigation() {
	const context = useContext(MobileNavigationContext);
	if (context === undefined) {
		throw new Error(
			"useMobileNavigation must be used within a MobileNavigationProvider"
		);
	}
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MobileNavigationProvider, useMobileNavigation };
