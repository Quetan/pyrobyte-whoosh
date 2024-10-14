import type { DeliveryType } from "../types";

const deliveryTypeToTextMap: Record<DeliveryType, string> = {
	onfoot: "Up to 10lb",
	car: "Up to 130lb",
	truck: "Over 130lb",
};

export { deliveryTypeToTextMap };
