import { SendParcelProvider } from "@/features/send-parcel";
import { Section } from "@/shared/ui/section";
import { BannerInfo } from "@/widgets/banner-info";
import { BannerSendParcel } from "@/widgets/banner-send-parcel";
import { BannerTrack } from "@/widgets/banner-track";
import { BannerVideo } from "@/widgets/banner-video";
import React from "react";

const BannerBackground: React.FC = () => {
	return (
		<div className="bg-banner-section bg-no-repeat bg-contain bg-center w-[657px] h-[712px] absolute left-1/2 bottom-0 -translate-x-1/2 -z-0 pointer-events-none"></div>
	);
};

const BannerSection: React.FC = () => {
	return (
		<Section className="bg-banner pl-base pt-9 pb-8 pr-8 w-full relative flex flex-row justify-between items-center">
			<BannerBackground />
			<div className="flex flex-col gap-20">
				<BannerInfo />
				<BannerVideo />
			</div>
			<div className="flex flex-col gap-[72px]">
				<BannerSendParcel />
				<BannerTrack />
			</div>
		</Section>
	);
};

const Banner: React.FC = () => {
	return (
		<SendParcelProvider>
			<BannerSection />
		</SendParcelProvider>
	);
};

export { Banner };
