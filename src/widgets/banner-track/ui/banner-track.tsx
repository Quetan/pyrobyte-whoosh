import { SearchDefault } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";

const BannerTrack: React.FC = () => {
	return (
		<div className="shadow-lg shadow-[#00000014] px-10 py-8 rounded-lg bg-secondary flex flex-col gap-2 z-10">
			<h3 className="h3">Track a package</h3>
			<div className="relative">
				<Input placeholder="Enter code" className="hover:bg-white pr-10" />
				<SearchDefault size={16} className="absolute right-3 top-3 bottom-3" />
			</div>
		</div>
	);
};

export { BannerTrack };
