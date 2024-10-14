import { Search } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";

const TrackPackage: React.FC = () => {
	return (
		<div className="relative">
			<Input className="pr- w-[184px]" placeholder="Track a Package" />
			<Search className="absolute right-3 top-3 bottom-3" />
		</div>
	);
};

export { TrackPackage };
