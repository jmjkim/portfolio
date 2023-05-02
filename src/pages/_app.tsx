import "@/styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

const myFont = localFont({
	src: [
		{
			path: "../../public/font/Confillia-Normal.otf",
			weight: "400",
			style: "normal",
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={myFont.className}>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
