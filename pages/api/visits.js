import { getVisits } from '../../utils/visitsDb';

/**
 * API route to retrieve visit statistics for the dashboard.
 * Requires admin authentication cookie.
 */
export default function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// 1. Authenticate Request
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

	if (cookies['portfolio_session'] !== 'admin-session-token-2026') {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	// 2. Fetch and Aggregate Data
	try {
		const data = getVisits();
		const list = data.list || [];

		// Calculate Unique Visitors (by IP address)
		const uniqueIps = new Set(list.map(v => v.ip));
		const uniqueCount = uniqueIps.size;

		// Aggregate Countries
		const countryCounts = {};
		list.forEach(v => {
			const country = v.country || 'Unknown';
			const code = v.countryCode || 'UN';
			const key = `${country}__${code}`;
			countryCounts[key] = (countryCounts[key] || 0) + 1;
		});

		const topCountries = Object.entries(countryCounts)
			.map(([key, count]) => {
				const [name, code] = key.split('__');
				return { name, code, count };
			})
			.sort((a, b) => b.count - a.count)
			.slice(0, 10);

		// Aggregate Cities
		const cityCounts = {};
		list.forEach(v => {
			if (v.city && v.city !== 'Unknown') {
				const cityKey = `${v.city}, ${v.region || ''} (${v.countryCode})`;
				cityCounts[cityKey] = (cityCounts[cityKey] || 0) + 1;
			}
		});

		const topCities = Object.entries(cityCounts)
			.map(([name, count]) => ({ name, count }))
			.sort((a, b) => b.count - a.count)
			.slice(0, 10);

		// Calculate 7-Day Timeline Chart Data
		const timeline = [];
		for (let i = 6; i >= 0; i--) {
			const d = new Date();
			d.setDate(d.getDate() - i);
			
			// Format date string as "Jan 05"
			const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
			
			// Set timestamps for start and end of that day
			const startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
			const endOfDay = startOfDay + 24 * 60 * 60 * 1000;

			const count = list.filter(v => {
				const vTime = new Date(v.timestamp).getTime();
				return vTime >= startOfDay && vTime < endOfDay;
			}).length;

			timeline.push({ date: dateStr, count });
		}

		return res.status(200).json({
			totalVisits: data.total || 0,
			uniqueVisits: uniqueCount,
			topCountries,
			topCities,
			timeline,
			recentVisits: list.slice(0, 150) // Return the 150 most recent visits for display
		});
	} catch (error) {
		console.error('Error processing visits statistics:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
}
