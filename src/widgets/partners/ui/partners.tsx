import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Job } from "@/shared/ui/icons";
import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/section-title";
import { PartnersCarousel } from "@/widgets/partners-carousel";

type CollaborateButtonProps = React.HTMLAttributes<HTMLButtonElement> & {};

const CollaborateButton: React.FC<CollaborateButtonProps> = ({
	className,
	...props
}) => {
	return (
		<Button
			className={cn(
				"relative py-2 px-4 pl-[42px] w-max text-foreground font-introBook bg-white h-10 hover:bg-white hover:opacity-70 border border-border",
				className
			)}
			{...props}
		>
			<Job
				size={16}
				fill="hsl(var(--red))"
				className="absolute left-4 bottom-3.5 top-2.5 w-4 h-4"
			/>
			<span>Let's collaborate</span>
		</Button>
	);
};

const Partners: React.FC = () => {
	return (
		<Section className="px-4 pt-[42px] lg:pt-[82px] pb-[47px] lg:px-base">
			<SectionTitle className="mb-6 lg:mb-[70px]">Our Partners</SectionTitle>
			<PartnersCarousel />
			<CollaborateButton className="mx-auto mt-10 lg:mt-0 lg:mx-0 lg:absolute lg:right-[--base-padding] lg:top-20" />
		</Section>
	);
};

export { Partners };
