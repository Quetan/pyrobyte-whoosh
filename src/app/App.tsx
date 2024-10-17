import { useWindowDimensions } from "@/shared/lib/hooks";
import { SectionDivider } from "@/shared/ui/section-divider";
import { About } from "@/widgets/about";
import { Banner, MobileBanner } from "@/widgets/banner";
import { Footer } from "@/widgets/footer";
import { Header, MobileHeader } from "@/widgets/header";
import { Partners } from "@/widgets/partners";
import { PaymentMethods } from "@/widgets/payment-methods";
import { Revolution } from "@/widgets/revolution";
import { WhatWeDo } from "@/widgets/what-we-do";

function App() {
	const { width } = useWindowDimensions();
	return (
		<>
			{width > 1024 ? <Header /> : <MobileHeader />}
			<main className="overflow-x-hidden">
				{width > 1024 ? <Banner /> : <MobileBanner />}
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
