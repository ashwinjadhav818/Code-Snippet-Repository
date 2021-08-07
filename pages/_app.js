import { UserProvider } from '@auth0/nextjs-auth0';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';
import '../styles/app.css';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Head>
				<title>Code Snippets Repository</title>
				<meta
					name="description"
					content="Save All Your Code Snippets At One Place!"
				/>
				<meta
					name="keywords"
					content="code, snipptes, repository, code snippet, code snippet repository, code repository"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-red-600 w-full p-5 min-h-screen">
				<Navbar />
				<div className="max-w-2xl mx-auto">
					<Component {...pageProps} />
				</div>
			</div>
		</UserProvider>
	);
}

export default MyApp;
