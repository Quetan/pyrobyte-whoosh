import { Box } from "./icons";

const SectionDivider: React.FC = () => {
	return (
		<div className="h-8 w-full bg-transparent flex flex-row items-center gap-[34px]">
			<hr className="w-full h-0.5 bg-border" />
			<div>
				<Box />
			</div>
			<hr className="w-full h-0.5 bg-border" />
		</div>
	);
};

export { SectionDivider };
