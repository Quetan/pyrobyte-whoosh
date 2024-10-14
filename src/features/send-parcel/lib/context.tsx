import { createContext, useContext, useMemo, useReducer } from "react";
import type {
	DeliveryType,
	SendParcelAction,
	SendParcelContextType,
} from "../types";

const initialState = {
	deliveryType: "onfoot" as DeliveryType,
	dropLocation: "502 86th St, Brooklyn, NY 11209",
	dropLocationError: false,
	pickupLocation: "523 Fake Street. Seattle, WA 98112",
	pickupLocationError: false,
};

const reducer = (state: typeof initialState, action: SendParcelAction) => {
	switch (action.type) {
		case "SET_DELIVERY_TYPE":
			return { ...state, deliveryType: action.payload };
		case "SET_DROP_LOCATION":
			return { ...state, dropLocation: action.payload };
		case "SET_DROP_LOCATION_ERROR":
			return { ...state, dropLocationError: action.payload };
		case "SET_PICKUP_LOCATION":
			return { ...state, pickupLocation: action.payload };
		case "SET_PICKUP_LOCATION_ERROR":
			return { ...state, pickupLocationError: action.payload };
		case "RESET_FIELDS":
			return {
				...initialState,
				dropLocation: "",
				pickupLocation: "",
			} as typeof initialState;
		default:
			return state;
	}
};

const SendParcelContext = createContext<SendParcelContextType | undefined>(
	undefined
);

const SendParcelProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = useMemo(
		() => ({
			...state,
			setDeliveryType: (type: DeliveryType) =>
				dispatch({ type: "SET_DELIVERY_TYPE", payload: type }),
			setDropLocation: (location: string) =>
				dispatch({ type: "SET_DROP_LOCATION", payload: location }),
			setDropLocationError: (error: boolean) =>
				dispatch({ type: "SET_DROP_LOCATION_ERROR", payload: error }),
			setPickupLocation: (location: string) =>
				dispatch({ type: "SET_PICKUP_LOCATION", payload: location }),
			setPickupLocationError: (error: boolean) =>
				dispatch({ type: "SET_PICKUP_LOCATION_ERROR", payload: error }),
			resetFields: () => dispatch({ type: "RESET_FIELDS" }),
		}),
		[state]
	);

	return (
		<SendParcelContext.Provider value={value}>
			{children}
		</SendParcelContext.Provider>
	);
};

function useSendParcel() {
	const context = useContext(SendParcelContext);
	if (!context) {
		throw new Error("useSendParcel must be used within a SendParcelProvider");
	}
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SendParcelProvider, useSendParcel };
