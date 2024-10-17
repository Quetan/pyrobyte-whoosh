import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import {
	Alva,
	Fagor,
	GuitarCenter,
	RadioShack,
	Tendo,
} from "@/shared/ui/partners";
import { PropsWithChildren } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useWindowDimensions } from "@/shared/lib/hooks";
import { cn } from "@/shared/lib/utils";

const PartnersCarouselItem: React.FC<PropsWithChildren> = ({ children }) => {
	const { width } = useWindowDimensions();

	return (
		<CarouselItem
			className={cn(
				"partner-coursel-item p-2 flex justify-center items-center",
				width > 1024 ? "basis-1/5" : "basis-1/2"
			)}
		>
			{children}
		</CarouselItem>
	);
};

const CarouselItems: React.FC = () => {
	return (
		<>
			<PartnersCarouselItem>
				<Alva />
			</PartnersCarouselItem>
			<PartnersCarouselItem>
				<Tendo />
			</PartnersCarouselItem>
			<PartnersCarouselItem>
				<Fagor />
			</PartnersCarouselItem>
			<PartnersCarouselItem>
				<RadioShack />
			</PartnersCarouselItem>
			<PartnersCarouselItem>
				<GuitarCenter />
			</PartnersCarouselItem>
		</>
	);
};

const PartnersCarousel: React.FC = () => {
	return (
		<Carousel
			opts={{
				loop: true,
				align: "center",
			}}
			plugins={[
				Autoplay({
					delay: 1500,
				}),
			]}
		>
			<CarouselContent>
				<CarouselItems />
				<CarouselItems />
				<CarouselItems />
			</CarouselContent>
		</Carousel>
	);
};

export { PartnersCarousel };
