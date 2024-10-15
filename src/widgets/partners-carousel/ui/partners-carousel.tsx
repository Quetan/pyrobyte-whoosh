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

const PartnersCarousel: React.FC = () => {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
		>
			<CarouselContent>
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
			</CarouselContent>
		</Carousel>
	);
};

export { PartnersCarousel };
