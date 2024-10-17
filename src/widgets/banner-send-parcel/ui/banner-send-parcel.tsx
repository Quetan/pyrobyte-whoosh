import { SendParcelForm, SendParcelTooltip } from "@/features/send-parcel";

const BannerSendParcel: React.FC = () => {
	return (
		<aside className="px-4 pt-9 pb-6 lg:p-8 lg:pt-10 lg:pb-6 border-2 border-border rounded-lg shadow-lg shadow-[#2B6BF314] w-full lg:w-[360px] z-10 bg-white">
			<div className="flex flex-row items-center gap-4 mb-5">
				<h3 className="h3">Send a Parcel</h3>
				<SendParcelTooltip />
			</div>
			<SendParcelForm />
		</aside>
	);
};

export { BannerSendParcel };
