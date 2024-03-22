import '../components/styles/common/globals.css';
import '../components/styles/common/buttons.css';
import '../components/styles/common/backgrounds.css';
import '../components/styles/mouseCursor.css';
import Cursor from '../components/mouseCursor';
import { initAOS } from "../api/aos.js";
import { useEffect } from "react";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		initAOS(); // Initialize AOS when the app mounts on the client side
	}, []);
	return <>
		<Head>
			<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		</Head>
		<Cursor />
		<Component {...pageProps} />
	</>;
}

export default MyApp;
