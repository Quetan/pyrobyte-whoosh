import { cn } from "@/shared/lib/utils";
import { Etc } from "@/shared/ui/icons";
import { Section } from "@/shared/ui/section";
import { useState } from "react";

const About: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<Section className="pt-[86px] pb-[84px] px-base">
			<details
				className="text-muted-foreground max-w-[1024px] mx-auto"
				open={open}
			>
				<summary>
					<p className="mb-4">
						Since 2019, LibertyWalk has successfully provided express courier
						delivery services in the city for both individuals and legal
						entities, and is also a reliable logistics partner for delivery
						services for online stores and restaurants! Express delivery of
						documents and parcels for organizations, express delivery of
						correspondence, purchases, flowers, food, gifts and goods up to 1.5
						tons - the most frequent orders in our company.
					</p>
					<p>
						But at the same time, we do not limit the range of courier services
						and without problems we can buy and bring goods and products from
						the online store, arrange delivery for the online store, cafe,
						supermarket, restaurant or any other business. Around the clock on
						our website you can call a courier in just a minute and arrange an
						express courier delivery without unnecessary bureaucracy,
						negotiations and calls to the call center.
						<button
							className={cn(
								"ml-2 hover:opacity-70 align-middle",
								open ? "hidden" : "inline-block"
							)}
							onClick={handleOpen}
						>
							<Etc />
						</button>
					</p>
				</summary>
				<p className="my-4">
					Since 2019, LibertyWalk has successfully provided express courier
					delivery services in the city for both individuals and legal entities,
					and is also a reliable logistics partner for delivery services for
					online stores and restaurants! Express delivery of documents and
					parcels for organizations, express delivery of correspondence,
					purchases, flowers, food, gifts and goods up to 1.5 tons - the most
					frequent orders in our company.
				</p>
				<p>
					But at the same time, we do not limit the range of courier services
					and without problems we can buy and bring goods and products from the
					online store, arrange delivery for the online store, cafe,
					supermarket, restaurant or any other business. Around the clock on our
					website you can call a courier in just a minute and arrange an express
					courier delivery without unnecessary bureaucracy, negotiations and
					calls to the call center.
					<button
						className={cn(
							"ml-2 hover:opacity-70 align-middle",
							open ? "inline-block" : "hidden"
						)}
						onClick={handleOpen}
					>
						<Etc />
					</button>
				</p>
			</details>
		</Section>
	);
};

export { About };
