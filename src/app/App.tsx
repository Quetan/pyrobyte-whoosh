import { SectionDivider } from "@/shared/ui/section-divider";
import { Banner } from "@/widgets/banner";
import { Header } from "@/widgets/header";
import { Partners } from "@/widgets/partners";
import { Revolution } from "@/widgets/revolution";

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Revolution />
				<SectionDivider />
				<Partners />
			</main>
		</>
	);
}

export default App;
