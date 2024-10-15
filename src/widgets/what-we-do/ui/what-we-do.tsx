import { Button } from "@/shared/ui/button";
import { CardDescription, CardTitle, TransparentCard } from "@/shared/ui/card";
import { CircleIcon } from "@/shared/ui/circle-icon";
import { Paperwork, Payment } from "@/shared/ui/icons";
import { Calculation } from "@/shared/ui/icons/calculation";
import { Section } from "@/shared/ui/section";
import { SectionSubtitle } from "@/shared/ui/section-subtitle";
import { SectionTitle } from "@/shared/ui/section-title";

const Intersect: React.FC = () => {
	return (
		<div className="absolute top-[-72px] -right-[400px] w-[504px] h-[504px] rotate-45 z-[1] overflow-hidden pointer-events-none rounded-[72px]">
			<img
				src="./what-we-do.webp"
				className="h-full w-full -rotate-45 -translate-x-36 translate-y-32 scale-125"
			/>
		</div>
	);
};

const BackgroundFiller: React.FC = () => {
	return (
		<div className="w-[110%] h-full absolute bg-gradient-to-tr from-[#F8FAFF] to-[#F2F6FF] -left-[37px] top-0 rounded-l-full"></div>
	);
};

const WhatWeDo: React.FC = () => {
	return (
		<Section className="py-[74px]">
			<BackgroundFiller />
			<Intersect />
			<div className="z-10">
				<SectionTitle>What we do</SectionTitle>
				<SectionSubtitle>
					Express courier service in the city. We are a reliable logistics
					partner for delivery services for online stores and restaurants!
				</SectionSubtitle>
				<div className="z-10 relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[50px] w-max mx-auto">
					<TransparentCard>
						<CircleIcon className="mb-8">
							<Calculation />
						</CircleIcon>
						<CardTitle className="mb-5">
							Online <a href="#">calculation</a>
						</CardTitle>
						<CardDescription>
							Instant calculation of the cost in the order form, the price is
							updated in the process of filling out the form
						</CardDescription>
					</TransparentCard>
					<TransparentCard>
						<CircleIcon className="mb-8">
							<Paperwork />
						</CircleIcon>
						<CardTitle className="mb-5">Minimum paperwork</CardTitle>
						<CardDescription>
							You can place an order for courier or freight delivery without
							registration and contract.
						</CardDescription>
					</TransparentCard>
					<TransparentCard>
						<CircleIcon className="mb-8">
							<Payment />
						</CircleIcon>
						<CardTitle className="mb-5">Convenient payment</CardTitle>
						<CardDescription>
							You can pay for delivery by card or in cash at any of the order
							addresses. For legal entities non-cash is available.
						</CardDescription>
					</TransparentCard>
				</div>

				<Button className="mx-auto relative z-10 mt-9" variant="secondary">
					Get started!
				</Button>
			</div>
		</Section>
	);
};

export { WhatWeDo };
