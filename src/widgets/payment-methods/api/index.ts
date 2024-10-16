type PaymentMethod = {
	id: string;
	name: string;
	logo: string;
};

const paymentMethods: PaymentMethod[] = [
	{
		id: "pmx-logo-paywithgoogle",
		name: "Pay with Google",
		logo: "./payment-methods/pmx-logo-paywithgoogle.svg",
	},
	{
		id: "pmx-logo-sofort",
		name: "Sofort",
		logo: "./payment-methods/pmx-logo-sofort.svg",
	},
	{
		id: "pmx-logo-union-pay",
		name: "Union Pay",
		logo: "./payment-methods/pmx-logo-union-pay.svg",
	},
	{
		id: "pmx-logo-visa",
		name: "Visa",
		logo: "./payment-methods/pmx-logo-visa.svg",
	},
	{
		id: "pmx-logo-mastercard",
		name: "MasterCard",
		logo: "./payment-methods/pmx-logo-mastercard.svg",
	},
	{
		id: "pmx-logo-amex",
		name: "American Express",
		logo: "./payment-methods/pmx-logo-amex.svg",
	},
];

export { paymentMethods };
