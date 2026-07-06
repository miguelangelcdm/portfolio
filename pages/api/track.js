import { recordVisit } from '../../utils/visitsDb';

/**
 * API route to record user visits.
 * Handles POST requests containing client-side geolocation metadata.
 */
export default function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const body = req.body;

	// Process and store the visit
	try {
		recordVisit({
			ip: body.ip,
			country: body.country,
			countryCode: body.countryCode,
			region: body.region,
			city: body.city,
			latitude: body.latitude,
			longitude: body.longitude
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error('Error in track API handler:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
}
