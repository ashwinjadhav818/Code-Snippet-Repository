import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export const Navbar = () => {
	const { user, isLoading } = useUser();

	return (
		<>
			<header className="text-white body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row justify-between items-center">
					<Link href="/">
						<a className="flex title-font font-medium items-center mb-4 lg:mb-0">
							<span className="ml-3 text-xl uppercase">
								Code Snippets Repository
							</span>
						</a>
					</Link>
					{/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/snippets/html">
							<a className="text-red-100 mr-5 hover:underline">HTML</a>
						</Link>
						<Link href="/snippets/css">
							<a className="text-red-100 mr-5 hover:underline">CSS</a>
						</Link>
						<Link href="/snippets/javascript">
							<a className="text-red-100 mr-5 hover:underline">JavaScript</a>
						</Link>
						<Link href="/snippets/python">
							<a className="text-red-100 mr-5 hover:underline">Python</a>
						</Link>
						<Link href="/snippets/java">
							<a className="text-red-100 hover:underline">Java</a>
						</Link>
					</nav> */}
					<div>
						{!isLoading && !user && (
							<Link href="/api/auth/login">
								<a className="text-red-100 hover:underline">Login</a>
							</Link>
						)}
						{!isLoading && user && (
							<>
								<Link href="/mySnippets">
									<a className="text-red-100 mr-5 hover:underline">
										My Snippets
									</a>
								</Link>
								<Link href="/api/auth/logout">
									<a className="text-red-100 hover:underline">Logout</a>
								</Link>
							</>
						)}
					</div>
				</div>
			</header>
		</>
	);
};
