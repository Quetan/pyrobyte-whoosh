import { Pin } from "./pin";
import { Search } from "./search";
import { SearchDefault } from "./search-default";
import { Lock } from "./lock";
import { Arrow } from "./arrow";
import { Play } from "./play";
import { Info } from "./info";
import { PinPrimary } from "./pin-primary";
import { PinYellow } from "./pin-yellow";
import { Close } from "./close";
import { Onfoot } from "./onfoot";
//TODO: fix icons
import { Truck } from "./truck";
import { Car } from "./car";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export {
	Pin,
	Play,
	Search,
	SearchDefault,
	Lock,
	Arrow,
	Info,
	Car,
	Truck,
	PinPrimary,
	PinYellow,
	Close,
	Onfoot,
};
export type { IconProps };
