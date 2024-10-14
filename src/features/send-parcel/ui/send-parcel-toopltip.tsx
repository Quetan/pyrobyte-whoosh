import { Info } from "@/shared/ui/icons";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";

const SendParcelTooltip: React.FC = () => {
	return (
		<TooltipProvider delayDuration={200}>
			<Tooltip>
				<TooltipTrigger className="-translate-y-[3px]">
					<Info />
				</TooltipTrigger>
				<TooltipContent
					align="end"
					side="bottom"
					sideOffset={8}
					className="w-[252px] px-4 py-2 border bg-white shadow-[0_16px_16px_0_#4963B029] z-10"
				>
					<p className="text-[14px] leading-[24px] text-foreground">
						A commission is a piece of work that someone is asked to do and is
						paid for.
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export { SendParcelTooltip };
