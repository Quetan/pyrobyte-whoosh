import { cn } from "@/shared/lib/utils";
import { Button, ButtonProps } from "@/shared/ui/button";
import { Play } from "@/shared/ui/icons";

type PlayButtonProps = ButtonProps & {};

const PlayButton: React.FC<PlayButtonProps> = ({ className, ...props }) => {
	return (
		<Button
			className={cn(
				"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/35 w-24 h-24 transition-all duration-700 ease-in-out rounded-full",
				className
			)}
			{...props}
		>
			<Play
				width={29}
				height={40}
				className="absolute top-[28px] left-[37px] bottom-[28px] right-[30px]"
			/>
		</Button>
	);
};

const VideoPlaceholder: React.FC = () => {
	return (
		<div className="video w-[374px] h-[232px] rounded-lg relative overflow-hidden">
			<img
				className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
				src="./video.webp"
				alt="How it Works video example"
			/>
			<PlayButton />
		</div>
	);
};

const BannerVideo: React.FC = () => {
	return (
		<div className="flex flex-col gap-[22px] z-10">
			<h3 className="h3">How it works</h3>
			<VideoPlaceholder />
		</div>
	);
};

export { BannerVideo };
