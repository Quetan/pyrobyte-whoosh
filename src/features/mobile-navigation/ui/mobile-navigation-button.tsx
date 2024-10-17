import { Close, Menu } from "@/shared/ui/icons";
import { useMobileNavigation } from "../lib/context";
import { cn } from "@/shared/lib/utils";
import { City } from "@/shared/ui/city";
import { SearchInput } from "@/shared/ui/search-input";
import { Button } from "@/shared/ui/button";

const MobileNavigationButton: React.FC = () => {
	const { open, close, isOpen } = useMobileNavigation();
	return (
		<>
			<button onClick={open}>
				<Menu />
			</button>
			<div
				className={cn(
					"fixed top-0 right-0 px-4 pt-6 pb-8 shadow-lg transition-all duration-500 h-dvh bg-white z-50",
					isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
				)}
			>
				<div className="flex flex-row items-center justify-between mb-10">
					<City>NY, Manhattan</City>
					<button onClick={close}>
						<Close />
					</button>
				</div>
				<SearchInput className="mb-[44px]" placeholder="Track a package" />
				<ul className="flex flex-col gap-6 mb-auto">
					<NavigationListItem href="#">Send a Parcel</NavigationListItem>
					<NavigationListItem href="#">Become a Courier</NavigationListItem>
					<NavigationListItem href="#">Affiliate Program</NavigationListItem>
					<NavigationListItem href="#">Help & Support</NavigationListItem>
				</ul>

				<Button className="w-[210px] absolute bottom-8 left-4" asChild>
					<a className="no-underline" href="#">
						Take a complex order
					</a>
				</Button>
			</div>
		</>
	);
};

const NavigationListItem: React.FC<
	React.PropsWithChildren & {
		href?: string;
	}
> = ({ children, href }) => {
	return (
		<li>
			<a
				href={href}
				className="text-muted-foreground font-introBook no-underline font-normal text-[16px] leading-[24px]"
			>
				{children}
			</a>
		</li>
	);
};

export { MobileNavigationButton };
