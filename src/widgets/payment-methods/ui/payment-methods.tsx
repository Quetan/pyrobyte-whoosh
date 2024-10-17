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
import { useWindowDimensions } from "@/shared/lib/hooks";
import { cn } from "@/shared/lib/utils";

const PaymentMethods: React.FC = () => {
	return (
		<Section className="pt-[54px] px-4 pb-[48px] lg:pt-[98px] lg:pb-[89px] lg:px-[135px]">
			<SectionTitle className="mb-[34px] lg:mb-[46px]">
				Payment Methods
			</SectionTitle>

			<Carousel
				className="lg:w-[1024px] mx-auto"
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
	const { width } = useWindowDimensions();
	return (
		<CarouselItem
			className={cn(
				"p-0 flex justify-center items-center",
				width > 1024 ? "basis-1/6" : "basis-1/2"
			)}
		>
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
