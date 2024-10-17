import { useWindowDimensions } from "@/shared/lib/hooks";
import {
	FooterCol,
	FooterColList,
	FooterColListItem,
	FooterColTitle,
} from "@/shared/ui/footer-col";
import {
	Facebook,
	Instagram,
	Pin,
	PinToPin,
	Shield,
	Vk,
	Youtube,
} from "@/shared/ui/icons";
import { SectionDivider } from "@/shared/ui/section-divider";

const Footer: React.FC = () => {
	const { width } = useWindowDimensions();
	return (
		<footer className="px-4 pt-11 pb-6 lg:px-base lg:pt-[85px] lg:pb-[56px] bg-banner border-t border-border flex flex-col text-foreground overflow-x-hidden">
			<div className=" flex flex-col gap-8 lg:grid lg:grid-cols-[3fr_2fr_2fr_3fr] lg:gap-[50px]">
				<AboutCol />
				{width > 1024 ? (
					<>
						<MenuCol />
						<ServicesCol />
					</>
				) : (
					<div className="grid grid-cols-2 gap-8">
						<MenuCol />
						<ServicesCol />
					</div>
				)}
				<ContactUsCol />
			</div>
			<SectionDivider className="my-6 gap-2">
				<span className="text-[14px] leading-[24px] text-border whitespace-nowrap">
					Made by
				</span>
			</SectionDivider>

			<div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[50px]">
				{width > 1024 && (
					<p className="text-[14px] font-introBook leading-[24px] text-center block text-foreground opacity-[64%] mx-auto">
						© 2022. All rights reserved.
					</p>
				)}

				<img
					src="./pyrobyte.svg"
					alt="logo"
					className="w-[85px] h-[63px] mx-auto"
				/>
				{width > 1024 && (
					<div className="relative pl-[26px] mx-auto">
						<a
							href="#"
							className="text-[14px] leading-[24px] align-top no-underline font-introBook text-foreground opacity-[64%] hover:underline hover:decoration-decoration hover:decoration-dashed hover:underline-offset-4 hover:opacity-50"
						>
							Privacy policy
						</a>
						<Shield className="absolute top-1/2 -translate-y-[8px] left-0" />
					</div>
				)}
			</div>
		</footer>
	);
};

const AboutCol: React.FC = () => {
	return (
		<FooterCol className="pl-[60px]">
			<FooterColTitle
				className="-translate-x-[60px] lg:translate-x-0"
				withBorder={false}
			>
				About Whoosh
			</FooterColTitle>
			<div className="relative">
				<p className="text-[14px] leading-[24px] font-introBook opacity-[67%] max-w-[240px] text-balance">
					Express delivery of documents and parcels for organizations, express
					delivery of correspondence, purchases and other goods
				</p>
				<PinToPin className="absolute top-0 -left-[60px]" />
			</div>
		</FooterCol>
	);
};

const MenuCol: React.FC = () => {
	return (
		<FooterCol>
			<FooterColTitle>Menu</FooterColTitle>
			<FooterColList>
				<FooterColListItem href="#">About company</FooterColListItem>
				<FooterColListItem href="#">Contact</FooterColListItem>
				<FooterColListItem href="#">Rules</FooterColListItem>
				<FooterColListItem href="#">FAQ</FooterColListItem>
				<FooterColListItem href="#">Reviews</FooterColListItem>
				<FooterColListItem href="#">Cargo transportation</FooterColListItem>
				<FooterColListItem href="#">Tariffs</FooterColListItem>
			</FooterColList>
		</FooterCol>
	);
};

const ServicesCol: React.FC = () => {
	return (
		<FooterCol>
			<FooterColTitle>Services</FooterColTitle>
			<FooterColList>
				<FooterColListItem href="#">Online stores</FooterColListItem>
				<FooterColListItem href="#">Legal entity</FooterColListItem>
				<FooterColListItem href="#">API Integration</FooterColListItem>
				<FooterColListItem href="#">Contract</FooterColListItem>
				<FooterColListItem href="#">Jobs</FooterColListItem>
				<FooterColListItem href="#">Courier job</FooterColListItem>
				<FooterColListItem href="#">The blog</FooterColListItem>
			</FooterColList>
		</FooterCol>
	);
};

const ContactUsCol: React.FC = () => {
	const { width } = useWindowDimensions();
	return (
		<FooterCol>
			<FooterColTitle>Contact Us</FooterColTitle>
			<a
				className="text-[24px] leading-[32px] mb-[23px] font-bold font-intro no-underline text-foreground hover:opacity-70"
				href="tel:+78009345959"
			>
				8 800 934 5959
			</a>

			<div className="relative pl-[24px] mb-[26px] lg:mb-[58px]">
				<p className="text-[14px] leading-[24px] font-introBook opacity-[64%]">
					2545 W. Diversey Ave. <br /> 3rd Floor Chicago, IL 60647
				</p>
				<Pin
					fill="#2B6BF3"
					className="absolute top-0 left-0 *:stroke-[#2B6BF3] opacity-[67%]"
				/>
			</div>
			<div className="flex flex-row justify-between lg:mx-0 mx-auto flex-wrap gap-6 max-w-[232px]">
				<a href="">
					<Facebook />
				</a>
				<a href="">
					<Vk />
				</a>
				<a href="">
					<Youtube />
				</a>
				<a href="">
					<Instagram />
				</a>
			</div>
			{width <= 1024 && (
				<div className="flex flex-col gap-6 mb-4 mt-[52px]">
					<div className="relative pl-[26px] mx-auto">
						<a
							href="#"
							className="text-[14px] leading-[24px] align-top no-underline font-introBook text-foreground opacity-[64%] hover:underline hover:decoration-decoration hover:decoration-dashed hover:underline-offset-4 hover:opacity-50"
						>
							Privacy policy
						</a>
						<Shield className="absolute top-1/2 -translate-y-[8px] left-0" />
					</div>
					<p className="text-[14px] font-introBook leading-[24px] text-center block text-foreground opacity-[64%] mx-auto">
						© 2022. All rights reserved.
					</p>
				</div>
			)}
		</FooterCol>
	);
};

export { Footer };
