import fs from 'fs';
import path from 'path';

// Determine the file path for the visits database
const getDbPath = () => {
	if (process.env.VISITS_DATA_PATH) {
		return process.env.VISITS_DATA_PATH;
	}
	return path.join(process.cwd(), 'data', 'visits.json');
};

/**
 * Reads visits data from the JSON store.
 * Initializes the file and directory if they do not exist.
 * 
 * @returns {Object} { total: number, list: Array }
 */
export function getVisits() {
	const filePath = getDbPath();
	try {
		const dirPath = path.dirname(filePath);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true });
		}
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, JSON.stringify({ total: 0, list: [] }, null, 2));
		}
		const data = fs.readFileSync(filePath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading visits database:', error);
		return { total: 0, list: [] };
	}
}

/**
 * Records a new visit to the JSON store.
 * Caps the maximum number of visits stored to 2000 to prevent performance degradation.
 * 
 * @param {Object} visitInfo Geolocation and IP details of the visit.
 * @returns {Object} Updated visits database.
 */
export function recordVisit(visitInfo) {
	const filePath = getDbPath();
	try {
		const data = getVisits();
		data.total = (data.total || 0) + 1;

		const newVisit = {
			ip: visitInfo.ip || 'unknown',
			country: visitInfo.country || 'Unknown',
			countryCode: visitInfo.countryCode || 'UN',
			region: visitInfo.region || 'Unknown',
			city: visitInfo.city || 'Unknown',
			latitude: visitInfo.latitude || 0,
			longitude: visitInfo.longitude || 0,
			timestamp: new Date().toISOString()
		};

		data.list.unshift(newVisit);

		// Limit visits list to the latest 2000 entries
		if (data.list.length > 2000) {
			data.list = data.list.slice(0, 2000);
		}

		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		return data;
	} catch (error) {
		console.error('Error saving visit to database:', error);
		return { total: 0, list: [] };
	}
}
