import { cn } from "@/shared/lib/utils";
import { Button, ButtonProps } from "@/shared/ui/button";
import { deliveryTypeToTextMap } from "../utils";
import { useSendParcel } from "../lib/context";
import { DeliveryType } from "../types";
import { Car, Onfoot, Truck } from "@/shared/ui/icons";

type SwitchButtonProps = React.PropsWithChildren &
	ButtonProps & {
		deliveryType: DeliveryType;
	};

const SwitchButton: React.FC<SwitchButtonProps> = ({
	children,
	className,
	deliveryType,
	...props
}) => {
	const { deliveryType: selectedDeliveryType, setDeliveryType } =
		useSendParcel();

	const isActive = deliveryType === selectedDeliveryType;
	const label = deliveryTypeToTextMap[deliveryType];

	const handleSwitch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setDeliveryType(deliveryType);
	};

	return (
		<Button
			className={cn(
				"hover:bg-switch hover:opacity-50 border flex flex-col justify-center gap-2 w-full h-[84px]",
				className,
				isActive
					? "bg-switch-active hover:bg-switch-active hover:opacity-100"
					: "bg-switch",
				isActive ? "border-primary border-2" : "border-border"
			)}
			{...props}
			onClick={handleSwitch}
		>
			{children}
			<span
				className={cn(
					"text-[12px] leading-[24px] text-foreground font-introBook",
					isActive ? "opacity-100" : "opacity-50"
				)}
			>
				{label}
			</span>
		</Button>
	);
};

const TransportationSelector: React.FC = () => {
	return (
		<div className="grid grid-cols-3 gap-0 items-center w-full">
			<SwitchButton
				className="rounded-l rounded-r-none border-r-0"
				deliveryType="onfoot"
			>
				<Onfoot />
			</SwitchButton>
			<SwitchButton className="rounded-none" deliveryType="car">
				<Car />
			</SwitchButton>
			<SwitchButton
				className="rounded-r rounded-l-none border-l-0"
				deliveryType="truck"
			>
				<Truck />
			</SwitchButton>
		</div>
	);
};

export { TransportationSelector };
