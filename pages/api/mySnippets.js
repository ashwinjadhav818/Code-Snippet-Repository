import { getSnippetsByUser } from '../../utils/Fauna';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
	const session = getSession(req, res);
	const userId = session.user.sub;

	if (req.method !== 'GET') {
		return res.status(405);
	}

	try {
		const snippet = await getSnippetsByUser(userId);
		return res.status(200).json(snippet);
	} catch (err) {
		console.error(err);

		res.status(500).json({ msg: 'Something went wrong.' });
	}
});
