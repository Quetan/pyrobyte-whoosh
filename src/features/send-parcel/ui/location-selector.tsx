import { PinPrimary, PinYellow } from "@/shared/ui/icons";
import { LocationDivider } from "@/shared/ui/icons/location-divider";
import { LocationInput } from "@/shared/ui/location-input";
import { useSendParcel } from "../lib/context";
import { useCallback } from "react";

const LocationSelector: React.FC = () => {
	const {
		setDropLocation,
		setPickupLocation,
		dropLocation,
		dropLocationError,
		setDropLocationError,
		pickupLocation,
		pickupLocationError,
		setPickupLocationError,
	} = useSendParcel();

	const handleDropLocationChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.value === "") {
				setDropLocationError(true);
			} else {
				setDropLocationError(false);
			}
			setDropLocation(e.target.value);
		},
		[setDropLocation, setDropLocationError]
	);

	const handlePickupLocationChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.value === "") {
				setPickupLocationError(true);
			} else {
				setPickupLocationError(false);
			}
			setPickupLocation(e.target.value);
		},
		[setPickupLocation, setPickupLocationError]
	);

	return (
		<div className="flex flex-col gap-8 pl-10 relative">
			<LocationInput
				label="Pickup location"
				placeholder="location"
				error={pickupLocationError}
				value={pickupLocation}
				onChange={handlePickupLocationChange}
			/>
			<LocationInput
				label="Drop location"
				placeholder="location"
				error={dropLocationError}
				value={dropLocation}
				onChange={handleDropLocationChange}
			/>
			<div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2">
				<PinPrimary />
				<LocationDivider />
				<PinYellow />
			</div>
		</div>
	);
};

export { LocationSelector };
