import { Card, CardDescription, CardIcon, CardTitle } from "@/shared/ui/card";
import { Courier, Job, Support } from "@/shared/ui/icons";
import { Route } from "@/shared/ui/icons/route";
import { Section } from "@/shared/ui/section";

const Revolution: React.FC = () => {
	return (
		<Section className="pt-[98px] pb-20 px-base flex flex-col justify-center text-center">
			<h1 className="h1 mb-[29px] w-max mx-auto">
				Express delivery market revolution
			</h1>
			<p className="text-[22px] leading-[32px] opacity-50 w-[754px] mx-auto mb-10">
				Express courier service in the city. We are a reliable logistics partner
				for delivery services for online stores and restaurants!
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[50px] w-max mx-auto">
				<Card>
					<CardTitle>Become a Courier</CardTitle>
					<div className="flex flex-row items-center gap-2">
						<CardIcon>
							<Courier fill="hsl(var(--primary))" />
						</CardIcon>
						<Route />
					</div>
					<CardDescription>
						You choose a schedule. You decide how much and when to earn.
						Earnings from day one
					</CardDescription>
				</Card>
				<Card>
					<CardTitle>Help & Support</CardTitle>
					<CardIcon>
						<Support fill="hsl(var(--yellow))" />
					</CardIcon>
					<CardDescription>
						Door-to-door delivery in 90 minutes or at your convenience
					</CardDescription>
				</Card>
				<Card>
					<CardTitle>Affiliate Program</CardTitle>
					<CardIcon>
						<Job fill="hsl(var(--red))" />
					</CardIcon>
					<CardDescription>
						Use our service and feel new quality of this traditional service!
					</CardDescription>
				</Card>
			</div>
		</Section>
	);
};

export { Revolution };
