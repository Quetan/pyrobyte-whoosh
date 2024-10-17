import { useCallback, useState } from "react";
import { LocationSelector } from "./location-selector";
import { TransportationSelector } from "./transportation-selector";
import { useSendParcel } from "../lib/context";
import { Button } from "@/shared/ui/button";
import { Close } from "@/shared/ui/icons";

const SendParcelForm: React.FC = () => {
	const [submitDisabled, setSubmitDisabled] = useState(true);
	const {
		deliveryType,
		dropLocation,
		pickupLocation,
		pickupLocationError,
		dropLocationError,
		resetFields,
	} = useSendParcel();

	const handleChange = useCallback(() => {
		setSubmitDisabled(dropLocationError || pickupLocationError);
	}, [dropLocationError, pickupLocationError]);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (pickupLocationError || dropLocationError) return;
		console.log("Delivery Type:", deliveryType);
		console.log("Drop Location:", dropLocation);
		console.log("Pickup Location:", pickupLocation);
	};

	const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		resetFields();
	};

	return (
		<form onChange={handleChange}>
			<div className="mb-10">
				<div className="flex flex-col gap-[34px]">
					<TransportationSelector />
					<LocationSelector />
				</div>
			</div>
			<Button
				className="mb-4 mx-auto"
				disabled={submitDisabled}
				type="submit"
				onClick={handleSubmit}
			>
				Order
			</Button>
			<Button className="mx-auto" variant="ghost" onClick={handleReset}>
				<span className="flex flex-row items-center gap-2">
					<Close size={8} /> Clear all
				</span>
			</Button>
		</form>
	);
};

export { SendParcelForm };
