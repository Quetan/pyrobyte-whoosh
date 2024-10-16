import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/ui/carousel";
import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/section-title";
import Autoplay from "embla-carousel-autoplay";
import { paymentMethods } from "../api";

const PaymentMethods: React.FC = () => {
	return (
		<Section className="pt-[98px] pb-[89px] px-[135px]">
			<SectionTitle className="mb-[46px]">Payment Methods</SectionTitle>

			<Carousel
				className="w-[1024px] mx-auto"
				opts={{
					loop: true,
					align: "center",
				}}
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
			>
				<CarouselContent>
					<PaymentMethodsItems />
				</CarouselContent>
				<CarouselPrevious variant="link" />
				<CarouselNext variant="link" />
			</Carousel>
		</Section>
	);
};

const PlaymentMethodItem: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<CarouselItem className="basis-1/6 p-0 flex justify-center items-center">
			{children}
		</CarouselItem>
	);
};

const PaymentMethodsItems: React.FC = () => {
	return (
		<>
			{paymentMethods.map(({ id, name, logo }) => {
				return (
					<PlaymentMethodItem key={id}>
						<img
							className="poitner-events-none select-none"
							src={logo}
							alt={name}
						/>
					</PlaymentMethodItem>
				);
			})}
		</>
	);
};

export { PaymentMethods };
