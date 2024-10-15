import { SectionDivider } from "@/shared/ui/section-divider";
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
				<div className="min-h-dvh"></div>
			</main>
		</>
	);
}

export default App;
