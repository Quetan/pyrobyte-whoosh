import { SendParcelProvider } from "@/features/send-parcel";
import { Section } from "@/shared/ui/section";
import { BannerInfo } from "@/widgets/banner-info";
import { BannerSendParcel } from "@/widgets/banner-send-parcel";
import { BannerTrack } from "@/widgets/banner-track";
import { BannerVideo } from "@/widgets/banner-video";
import React from "react";

const BannerBackground: React.FC = () => {
	return (
		<div className="bg-mobile-banner-section bg-no-repeat bg-cover bg-bottom w-[884px] h-[432px] absolute left-1/2 bottom-0 -translate-x-1/2 -z-0 pointer-events-none"></div>
	);
};

const MobileBannerSection: React.FC = () => {
	return (
		<Section className="bg-banner px-4 pt-8 pb-[55px] w-full relative flex flex-col gap-8 items-center">
			<BannerBackground />
			<BannerSendParcel />
			<BannerTrack />
			<BannerInfo />
			<BannerVideo />
		</Section>
	);
};

const MobileBanner: React.FC = () => {
	return (
		<SendParcelProvider>
			<MobileBannerSection />
		</SendParcelProvider>
	);
};

export { MobileBanner };
