import '../components/styles/common/globals.css';
import '../components/styles/common/buttons.css';
import '../components/styles/common/backgrounds.css';
import '../components/styles/mouseCursor.css';
import '../components/styles/privacyPolicy.css';
import MouseCursor from '../components/mouseCursor.jsx';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/apollo';
import { initAOS } from '../api/aos.js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	
	useEffect(() => {
		initAOS({ disable: 'mobile' });
	}, []);
	return (
		<ApolloProvider client={apolloClient}>
			<MouseCursor />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
