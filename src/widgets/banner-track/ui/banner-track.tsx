import { SearchDefault } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";

const BannerTrack: React.FC = () => {
	return (
		<div className="w-[328px] lg:w-full shadow-lg shadow-[#00000014] px-4 py-6 lg:px-10 lg:py-8 rounded-lg bg-secondary flex flex-col gap-2 z-10 mb-4 lg:mb-0">
			<h3 className="h3 text-[22px] leading-[32px]">Track a package</h3>
			<div className="relative">
				<Input
					placeholder="Enter code"
					className="hover:bg-white pr-10 rounded"
				/>
				<SearchDefault size={16} className="absolute right-3 top-3 bottom-3" />
			</div>
		</div>
	);
};

export { BannerTrack };
