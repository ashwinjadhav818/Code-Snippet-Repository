import { deleteSnippet, getSnippetById } from '../../utils/Fauna';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
	const sesson = getSession(req, res);
	const userId = sesson.user.sub;

	if (req.method !== 'DELETE') {
		return res.status(405).json({ msg: 'Method not allowed' });
	}

	const { id } = req.body;
	const existingRecord = await getSnippetById(id);

	if (!existingRecord || existingRecord.data.userId !== userId) {
		res.status = 404;
		return res.json({ msg: 'Record Not Found.' });
	}

	try {
		const deleted = await deleteSnippet(id);

		return res.status(200).json(deleted);
	} catch (err) {
		console.error(err);
		res.status(500).json({ msg: 'Something went wrong.' });
	}
});
