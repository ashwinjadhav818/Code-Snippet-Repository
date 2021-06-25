import Head from 'next/head';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import SnippetForm from '../components/SnippetForm';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create A New Snippet</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="max-w-lg mx-auto">
				<h1 className="text-red-100 text-2xl mb-4">New Snippet</h1>
				<SnippetForm />
			</main>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();
