import { UserProvider } from "@auth0/nextjs-auth0";
import { Navbar } from "../components/Navbar";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
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
