import { SectionDivider } from "@/shared/ui/section-divider";
import { About } from "@/widgets/about/ui/about";
import { Banner } from "@/widgets/banner";
import { Header } from "@/widgets/header";
import { Partners } from "@/widgets/partners";
import { PaymentMethods } from "@/widgets/payment-methods";
import { Revolution } from "@/widgets/revolution";
import { WhatWeDo } from "@/widgets/what-we-do";

function App() {
	return (
		<>
			<Header />
			<main className="overflow-x-hidden">
				<Banner />
				<Revolution />
				<SectionDivider />
				<Partners />
				<WhatWeDo />
				<PaymentMethods />
				<SectionDivider />
				<About />
			</main>
		</>
	);
}

export default App;
