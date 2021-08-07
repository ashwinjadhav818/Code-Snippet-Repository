import useSWR from 'swr';
import Snippet from '../components/Snippet';
import Header from '../components/Header';

export default function Home() {
	const { data: snippets, mutate } = useSWR('/api/snippets');

	return (
		<div>
			<main className="">
				<div className="my-12">
					<Header
						title="Code Snippets Repository"
						subtitle="Save All Your Code Snippets At One Place!"
					/>
				</div>
				{snippets &&
					snippets.map((snippet) => (
						<Snippet
							key={snippet.id}
							snippet={snippet}
							snippetDeleted={mutate}
						/>
					))}
			</main>
		</div>
	);
}
