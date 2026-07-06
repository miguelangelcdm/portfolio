/**
 * API route to log out the admin by clearing the session cookie.
 */
export default function handler(req, res) {
	if (req.method !== 'POST' && req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// Clear the portfolio_session cookie
	res.setHeader(
		'Set-Cookie',
		'portfolio_session=; Path=/; HttpOnly; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
	);

	return res.status(200).json({ success: true });
}
