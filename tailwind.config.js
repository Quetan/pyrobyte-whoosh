/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				intro: ["Intro", "system-ui", "sans-serif"],
				introBook: ["Intro Book", "system-ui", "sans-serif"],
			},
			padding: {
				base: "var(--base-padding)",
			},
			margin: {
				base: "var(--base-padding)",
			},
			backgroundImage: {
				"banner-section": 'url("../banner-bg.svg")',
				"mobile-banner-section": 'url("../banner-mobile-bg.svg")',
				intersect: 'url("../what-we-do.webp")',
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				banner: {
					DEFAULT: "hsl(var(--banner))",
					foreground: "hsl(var(--banner-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				lightblue: {
					DEFAULT: "hsl(var(--lightblue))",
				},
				red: {
					DEFAULT: "hsl(var(--red))",
				},
				lightgreen: {
					DEFAULT: "hsl(var(--lightgreen))",
				},
				green: {
					DEFAULT: "hsl(var(--green))",
				},
				border: "hsl(var(--border))",
				input: {
					DEFAULT: "hsl(var(--border))",
					hover: "hsl(var(--input-hover))",
				},
				switch: {
					DEFAULT: "hsl(var(--switch))",
					active: "hsl(var(--white))",
				},
				placeholder: {
					DEFAULT: "hsl(var(--placeholder))",
				},
				ring: "hsl(var(--ring))",
				decoration: "hsl(var(--decoration))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
