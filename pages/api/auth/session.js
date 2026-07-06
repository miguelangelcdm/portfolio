/**
 * API route to check the current admin session.
 * Parses the HTTP cookies to validate the session token.
 */
export default function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// Parse request cookies
	const cookies = {};
	const cookieHeader = req.headers.cookie;
	if (cookieHeader) {
		cookieHeader.split(';').forEach(cookie => {
			const parts = cookie.split('=');
			const name = parts[0].trim();
			const value = parts.slice(1).join('=');
			cookies[name] = decodeURIComponent(value);
		});
	}

	const sessionToken = cookies['portfolio_session'];

	if (sessionToken === 'admin-session-token-2026') {
		return res.status(200).json({ authenticated: true });
	}

	return res.status(200).json({ authenticated: false });
}
