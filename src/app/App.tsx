import { SectionDivider } from "@/shared/ui/section-divider";
import { Banner } from "@/widgets/banner";
import { Header } from "@/widgets/header";
import { Revolution } from "@/widgets/revolution";

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Revolution />
				<SectionDivider />
			</main>
		</>
	);
}

export default App;
