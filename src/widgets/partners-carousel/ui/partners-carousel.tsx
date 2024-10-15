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

const PartnersCarouselItem: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<CarouselItem className="partner-coursel-item basis-1/5 p-2 flex justify-center items-center">
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
