import { SectionDivider } from "@/shared/ui/section-divider";
import { About } from "@/widgets/about";
import { Banner } from "@/widgets/banner";
import { Footer } from "@/widgets/footer";
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
			<Footer />
		</>
	);
}

export default App;
