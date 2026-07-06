/**
 * API route to authenticate admin credentials and issue a session cookie.
 */
export default function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { username, password } = req.body;

	const expectedUsername = process.env.DASHBOARD_USERNAME || 'admin';
	const expectedPassword = process.env.DASHBOARD_PASSWORD || 'portfolio2026';

	if (username === expectedUsername && password === expectedPassword) {
		// Set HttpOnly session cookie valid for 24 hours
		res.setHeader(
			'Set-Cookie',
			'portfolio_session=admin-session-token-2026; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400'
		);
		return res.status(200).json({ success: true });
	}

	return res.status(401).json({ error: 'Invalid username or password' });
}
