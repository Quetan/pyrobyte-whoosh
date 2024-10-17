import { Card, CardDescription, CardTitle } from "@/shared/ui/card";
import { CircleIcon } from "@/shared/ui/circle-icon";
import { Courier, Job, Support } from "@/shared/ui/icons";
import { Route } from "@/shared/ui/icons/route";
import { Section } from "@/shared/ui/section";
import { SectionSubtitle } from "@/shared/ui/section-subtitle";
import { SectionTitle } from "@/shared/ui/section-title";

const Revolution: React.FC = () => {
	return (
		<Section className="pt-[54px]  pb-12 lg:pt-[98px] lg:pb-20 px-4 lg:px-base flex flex-col justify-center text-center">
			<SectionTitle>Express delivery market revolution</SectionTitle>
			<SectionSubtitle>
				Express courier service in the city. We are a reliable logistics partner
				for delivery services for online stores and restaurants!
			</SectionSubtitle>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[50px] w-max mx-auto">
				<Card>
					<CardTitle>Become a Courier</CardTitle>
					<div className="flex flex-row items-center gap-2 ml-3">
						<CircleIcon>
							<Courier fill="hsl(var(--primary))" />
						</CircleIcon>
						<Route />
					</div>
					<CardDescription className="max-w-[260px]">
						You choose a schedule. You decide how much and when to earn.
						Earnings from day one
					</CardDescription>
				</Card>
				<Card>
					<CardTitle>Help & Support</CardTitle>
					<CircleIcon className="ml-3">
						<Support fill="hsl(var(--yellow))" />
					</CircleIcon>
					<CardDescription className="max-w-[200px]">
						Door-to-door delivery in 90 minutes or at your convenience
					</CardDescription>
				</Card>
				<Card>
					<CardTitle>Affiliate Program</CardTitle>
					<CircleIcon className="ml-3">
						<Job fill="hsl(var(--red))" />
					</CircleIcon>
					<CardDescription className="max-w-[210px]">
						Use our service and feel new quality of this traditional service!
					</CardDescription>
				</Card>
			</div>
		</Section>
	);
};

export { Revolution };
