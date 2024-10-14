type DeliveryType = "onfoot" | "car" | "truck";

type SendParcelContextType = {
	deliveryType: DeliveryType;
	setDeliveryType: (type: DeliveryType) => void;
	pickupLocation: string;
	pickupLocationError: boolean;
	setPickupLocationError: (error: boolean) => void;
	setPickupLocation: (location: string) => void;
	dropLocation: string;
	dropLocationError: boolean;
	setDropLocation: (location: string) => void;
	setDropLocationError: (error: boolean) => void;
	resetFields: () => void;
};

type SendParcelAction =
	| {
			type: "SET_DELIVERY_TYPE";
			payload: DeliveryType;
	  }
	| {
			type: "SET_DROP_LOCATION";
			payload: string;
	  }
	| {
			type: "SET_DROP_LOCATION_ERROR";
			payload: boolean;
	  }
	| {
			type: "SET_PICKUP_LOCATION";
			payload: string;
	  }
	| {
			type: "SET_PICKUP_LOCATION_ERROR";
			payload: boolean;
	  }
	| {
			type: "RESET_FIELDS";
	  };

export type { DeliveryType, SendParcelContextType, SendParcelAction };
