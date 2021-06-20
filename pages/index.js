import Head from "next/head";
import Snippet from "../components/Snippet";
import useSWR from "swr";
import Link from "next/link";
export default function Home() {
	const { data: snippets, mutate } = useSWR("/api/snippets");

	return (
		<div>
			<Head>
				<title>Code Snippets Repository</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="">
				<div className="my-12">
					<h1 className="text-red-100 text-2xl">Code Snippets Repository</h1>
					<p className="text-red-200">
						Save All Your Code Snippets At One Place!
					</p>
					<Link href="/new">
						<a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Create a Snippet!
						</a>
					</Link>
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
