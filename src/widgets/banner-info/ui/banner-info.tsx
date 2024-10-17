import { PrimaryLink } from "@/shared/ui/primary-link";
import { SectionTitle } from "@/shared/ui/section-title";

const BannerInfo: React.FC = () => {
	return (
		<div className="flex flex-col z-10 lg:p-0 mb-1 lg:mb-0">
			<SectionTitle className="mb-3.5 lg:mb-[34px] w-[225px] lg:w-[375px] ml-0 mr-auto text-left">
				Our service started work in New York
			</SectionTitle>
			<p className="text-muted-foreground font-introBook w-[328px] lg:w-[360px] mb-[30px]">
				We make delivery exactly at the time you need - we can start to fulfill
				the order a few minutes after it arrives, or we can deliver on a
				specific day and hour.
			</p>
			<PrimaryLink href="#">Read more</PrimaryLink>
		</div>
	);
};

export { BannerInfo };
