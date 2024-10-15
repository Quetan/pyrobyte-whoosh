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
			<PlaymentMethodItem>
				<img
					src="./payment-methods/pmx-logo-paywithgoogle.svg"
					alt="Pay with Google"
				/>
			</PlaymentMethodItem>
			<PlaymentMethodItem>
				<img src="./payment-methods/pmx-logo-sofort.svg" alt="Sofort" />
			</PlaymentMethodItem>
			<PlaymentMethodItem>
				<img src="./payment-methods/pmx-logo-union-pay.svg" alt="Union Pay" />
			</PlaymentMethodItem>
			<PlaymentMethodItem>
				<img src="./payment-methods/pmx-logo-visa.svg" alt="Visa" />
			</PlaymentMethodItem>
			<PlaymentMethodItem>
				<img src="./payment-methods/pmx-logo-mastercard.svg" alt="MasterCard" />
			</PlaymentMethodItem>
			<PlaymentMethodItem>
				<img src="./payment-methods/pmx-logo-amex.svg" alt="American Express" />
			</PlaymentMethodItem>
		</>
	);
};

export { PaymentMethods };
