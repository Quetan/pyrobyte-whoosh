import { PrimaryLink } from "@/shared/ui/primary-link";

const BannerInfo: React.FC = () => {
	return (
		<div className="flex flex-col z-10">
			<h1 className="h1 mb-[34px] w-[375px]">
				Our service started work in New York
			</h1>
			<p className="text-muted-foreground font-introBook w-[360px] mb-[30px]">
				We make delivery exactly at the time you need - we can start to fulfill
				the order a few minutes after it arrives, or we can deliver on a
				specific day and hour.
			</p>
			<PrimaryLink href="#">Read more</PrimaryLink>
		</div>
	);
};

export { BannerInfo };
