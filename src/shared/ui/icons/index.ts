import { Pin } from "./pin";
import { Search } from "./search";
import { Lock } from "./lock";
import { Arrow } from "./arrow";
import { Play } from "./play";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export { Pin, Play, Search, Lock, Arrow };
export type { IconProps };
