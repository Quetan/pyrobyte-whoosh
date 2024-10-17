import { cn } from "../lib/utils";
import { SearchDefault } from "./icons";
import { Input, InputProps } from "./input";

type SearchInputProps = InputProps;

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	className,
	...props
}) => {
	return (
		<div className={cn("relative", className)}>
			<Input
				placeholder={placeholder}
				className="hover:bg-white pr-10 rounded"
				{...props}
			/>
			<SearchDefault size={16} className="absolute right-3 top-3 bottom-3" />
		</div>
	);
};

export { SearchInput };
