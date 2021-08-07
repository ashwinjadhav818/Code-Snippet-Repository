import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr';
import Header from '../components/Header';
import Snippet from '../components/Snippet';

export default function MySnippets() {
	const { data: snippets } = useSWR('/api/mySnippets');

	return (
		<div>
			<main className="">
				<div className="my-12">
					<Header title="My Snippets" />
				</div>
				{snippets &&
					snippets.map((snippet) => (
						<Snippet key={snippet.id} snippet={snippet} />
					))}
			</main>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();
