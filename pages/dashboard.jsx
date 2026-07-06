import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/structure/dashboard.module.scss';
import ThemeMode from '../components/utils/theme.util';

export default function Dashboard() {
	const router = useRouter();
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [activeSection, setActiveSection] = useState('overview'); // overview, visits, settings
	const [stats, setStats] = useState({
		totalVisits: 0,
		uniqueVisits: 0,
		topCountries: [],
		topCities: [],
		timeline: [],
		recentVisits: []
	});
	const [searchQuery, setSearchQuery] = useState('');
	const [tableLimit, setTableLimit] = useState(15);
	const [loggingOut, setLoggingOut] = useState(false);

	// 1. Session check & fetch visits data
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
		const checkAuthAndFetch = async () => {
			try {
				const sessionRes = await fetch('/api/auth/session');
				const sessionData = await sessionRes.json();

				if (!sessionData.authenticated) {
					router.push('/login');
					return;
				}

				setAuthenticated(true);

				// Fetch visits stats
				const statsRes = await fetch('/api/visits');
				if (statsRes.ok) {
					const statsData = await statsRes.json();
					setStats(statsData);
				}
			} catch (error) {
				console.error('Error loading dashboard data:', error);
			} finally {
				setLoading(false);
			}
		};

		checkAuthAndFetch();
	}, [router]);

	const handleLogout = async () => {
		setLoggingOut(true);
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
			router.push('/login');
		} catch (error) {
			console.error('Logout error:', error);
			setLoggingOut(false);
		}
	};

	// Filter visits based on search query
	const filteredVisits = stats.recentVisits.filter(visit => {
		const q = searchQuery.toLowerCase();
		return (
			visit.ip.toLowerCase().includes(q) ||
			visit.city.toLowerCase().includes(q) ||
			visit.region.toLowerCase().includes(q) ||
			visit.country.toLowerCase().includes(q)
		);
	});

	if (loading) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.spinner}></div>
				<p>Loading Backoffice Dashboard...</p>
			</div>
		);
	}

	if (!authenticated) return null;

	// Render SVG Chart calculations
	const maxCount = Math.max(...stats.timeline.map(t => t.count), 5); // Fallback to 5 to avoid division by 0
	const chartHeight = 160;
	const chartWidth = 500;
	const padding = 20;

	// Compute SVG path for timeline area chart
	const points = stats.timeline.map((t, index) => {
		const x = padding + (index * (chartWidth - padding * 2)) / (stats.timeline.length - 1);
		const y = chartHeight - padding - (t.count * (chartHeight - padding * 2)) / maxCount;
		return { x, y, label: t.date, count: t.count };
	});

	const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
	const areaPath = points.length > 0 
		? `${linePath} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`
		: '';

	return (
		<>
			<Head>
				<title>Backoffice Dashboard - Portfolio</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<div className={styles.dashboardContainer}>
				{/* 1. Sidebar */}
				<aside className={styles.sidebar}>
					<div className={styles.sidebarHeader}>
						<div className={styles.logoBadge}>A</div>
						<div>
							<h2>Backoffice</h2>
							<span className={styles.envTag}>Production</span>
						</div>
					</div>

					<nav className={styles.sidebarNav}>
						<ul>
							<li>
								<button 
									className={activeSection === 'overview' ? styles.activeNavBtn : ''} 
									onClick={() => setActiveSection('overview')}
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<rect x="3" y="3" width="7" height="9"></rect>
										<rect x="14" y="3" width="7" height="5"></rect>
										<rect x="14" y="12" width="7" height="9"></rect>
										<rect x="3" y="16" width="7" height="5"></rect>
									</svg>
									Overview
								</button>
							</li>
							<li>
								<button 
									className={activeSection === 'visits' ? styles.activeNavBtn : ''} 
									onClick={() => setActiveSection('visits')}
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
									Visits & Locations
								</button>
							</li>
							<li>
								<button 
									className={activeSection === 'settings' ? styles.activeNavBtn : ''} 
									onClick={() => setActiveSection('settings')}
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<circle cx="12" cy="12" r="3"></circle>
										<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
									</svg>
									Settings
								</button>
							</li>
						</ul>
					</nav>

					<div className={styles.sidebarFooter}>
						<div className={styles.adminInfo}>
							<div className={styles.avatar}>A</div>
							<div>
								<h4>Administrator</h4>
								<p>admin@portfolio.com</p>
							</div>
						</div>
						<button 
							onClick={handleLogout} 
							className={styles.logoutBtn}
							disabled={loggingOut}
						>
							{loggingOut ? 'Signing out...' : 'Sign Out'}
						</button>
					</div>
				</aside>

				{/* 2. Main Content Area */}
				<main className={styles.mainContent}>
					{/* Header */}
					<header className={styles.mainHeader}>
						<div className={styles.breadcrumbs}>
							<span>Backoffice</span>
							<span className={styles.separator}>/</span>
							<span className={styles.currentPath}>
								{activeSection === 'overview' && 'Overview'}
								{activeSection === 'visits' && 'Visits & Locations'}
								{activeSection === 'settings' && 'Settings'}
							</span>
						</div>
						
						<div className={styles.headerActions}>
							<span className={styles.dateDisplay}>
								{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
							</span>
							<ThemeMode />
						</div>
					</header>

					{/* Section: Overview */}
					{activeSection === 'overview' && (
						<div className={styles.sectionBody}>
							<div className={styles.welcomeBanner}>
								<h1>Welcome back, Admin</h1>
								<p>Here is the traffic overview for your portfolio site.</p>
							</div>

							{/* Stats Cards */}
							<div className={styles.statsGrid}>
								<div className={styles.statCard}>
									<div className={styles.statIcon} style={{ color: 'var(--neon-1-2)' }}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
											<circle cx="12" cy="12" r="3"></circle>
										</svg>
									</div>
									<div className={styles.statValue}>{stats.totalVisits}</div>
									<div className={styles.statLabel}>Total Page Views</div>
								</div>

								<div className={styles.statCard}>
									<div className={styles.statIcon} style={{ color: 'var(--secondary)' }}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									</div>
									<div className={styles.statValue}>{stats.uniqueVisits}</div>
									<div className={styles.statLabel}>Unique Visitors</div>
								</div>

								<div className={styles.statCard}>
									<div className={styles.statIcon} style={{ color: 'var(--neon-2-2)' }}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<circle cx="12" cy="12" r="10"></circle>
											<path d="M2 12h20"></path>
											<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
										</svg>
									</div>
									<div className={styles.statValue}>
										{stats.topCountries.length > 0 ? stats.topCountries[0].code : 'N/A'}
									</div>
									<div className={styles.statLabel}>Top Country ({stats.topCountries.length > 0 ? stats.topCountries[0].name : 'None'})</div>
								</div>

								<div className={styles.statCard}>
									<div className={styles.statIcon} style={{ color: 'var(--neon-1-1)' }}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
											<circle cx="12" cy="10" r="3"></circle>
										</svg>
									</div>
									<div className={styles.statValue}>{stats.topCities.length}</div>
									<div className={styles.statLabel}>Active Cities</div>
								</div>
							</div>

							{/* Chart and Top Locations Row */}
							<div className={styles.dashboardRow}>
								{/* Area Chart Card */}
								<div className={styles.contentCard} style={{ flex: 1.4 }}>
									<div className={styles.cardHeader}>
										<h3>Visits (Last 7 Days)</h3>
										<p>Timeline representation of total traffic sessions</p>
									</div>
									<div className={styles.chartContainer}>
										{stats.timeline.length > 0 ? (
											<svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className={styles.areaChartSvg}>
												<defs>
													<linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
														<stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.0" />
													</linearGradient>
												</defs>

												{/* Grid Lines */}
												{[0, 1, 2, 3].map((g, idx) => {
													const yVal = padding + (idx * (chartHeight - padding * 2)) / 3;
													return (
														<line
															key={idx}
															x1={padding}
															y1={yVal}
															x2={chartWidth - padding}
															y2={yVal}
															stroke="var(--primary-dim2)"
															strokeOpacity="0.1"
															strokeDasharray="4,4"
														/>
													);
												})}

												{/* Area Fill */}
												{areaPath && <path d={areaPath} fill="url(#chartGradient)" />}

												{/* Line */}
												{linePath && (
													<path
														d={linePath}
														fill="none"
														stroke="var(--secondary)"
														strokeWidth="2.5"
														strokeLinecap="round"
													/>
												)}

												{/* Points & Tooltips */}
												{points.map((p, idx) => (
													<g key={idx} className={styles.chartPointGroup}>
														<circle
															cx={p.x}
															cy={p.y}
															r="4.5"
															fill="var(--background)"
															stroke="var(--secondary)"
															strokeWidth="2.5"
														/>
														{/* Tooltip Box */}
														<g className={styles.chartTooltip}>
															<rect
																x={p.x - 22}
																y={p.y - 32}
																width="44"
																height="22"
																rx="4"
																fill="var(--primary-dark)"
															/>
															<text
																x={p.x}
																y={p.y - 17}
																textAnchor="middle"
																fontSize="10"
																fontWeight="bold"
																fill="var(--primary-bright)"
															>
																{p.count}
															</text>
														</g>
													</g>
												))}

												{/* Axis Labels */}
												{points.map((p, idx) => (
													<text
														key={idx}
														x={p.x}
														y={chartHeight - 4}
														fontSize="9"
														fill="var(--primary-dim)"
														textAnchor="middle"
													>
														{p.label}
													</text>
												))}
											</svg>
										) : (
											<div className={styles.noData}>No timeline data available</div>
										)}
									</div>
								</div>

								{/* Top Locations Card */}
								<div className={styles.contentCard} style={{ flex: 1 }}>
									<div className={styles.cardHeader}>
										<h3>Top Locations</h3>
										<p>Highest traffic origin countries</p>
									</div>
									<div className={styles.locationsList}>
										{stats.topCountries.length > 0 ? (
											stats.topCountries.map((country, idx) => {
												const percentage = stats.totalVisits > 0 
													? Math.round((country.count / stats.totalVisits) * 100) 
													: 0;
												return (
													<div key={idx} className={styles.locationProgressRow}>
														<div className={styles.locationDetails}>
															<span className={styles.locationName}>
																<span className={styles.flagIcon}>{country.code}</span> {country.name}
															</span>
															<span className={styles.locationCount}>{country.count} ({percentage}%)</span>
														</div>
														<div className={styles.progressBarBg}>
															<div 
																className={styles.progressBarFill} 
																style={{ 
																	width: `${percentage}%`,
																	background: `linear-gradient(90deg, var(--secondary) 0%, var(--neon-1-2) 100%)` 
																}}
															></div>
														</div>
													</div>
												);
											})
										) : (
											<div className={styles.noData}>No location data available</div>
										)}
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Section: Visits & Locations */}
					{activeSection === 'visits' && (
						<div className={styles.sectionBody}>
							<div className={styles.filterBar}>
								<div className={styles.searchBox}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
									<input 
										type="text" 
										placeholder="Search by IP, City, Country..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
								
								<div className={styles.limitSelector}>
									<label htmlFor="tableLimit">Show</label>
									<select 
										id="tableLimit"
										value={tableLimit} 
										onChange={(e) => setTableLimit(Number(e.target.value))}
									>
										<option value={15}>15 visits</option>
										<option value={30}>30 visits</option>
										<option value={50}>50 visits</option>
										<option value={100}>100 visits</option>
										<option value={200}>200 visits</option>
									</select>
								</div>
							</div>

							{/* Detailed Cities & Countries Stats */}
							<div className={styles.dashboardRow} style={{ marginBottom: '1.5rem' }}>
								<div className={styles.contentCard}>
									<div className={styles.cardHeader}>
										<h3>Geographic Distribution (Cities)</h3>
										<p>Unique cities targeting your portfolio</p>
									</div>
									<div className={styles.citiesDistributionList}>
										{stats.topCities.length > 0 ? (
											stats.topCities.slice(0, 5).map((city, idx) => (
												<div key={idx} className={styles.cityStatRow}>
													<span className={styles.cityName}>{city.name}</span>
													<span className={styles.cityBadge}>{city.count} visits</span>
												</div>
											))
										) : (
											<div className={styles.noData}>No city statistics available</div>
										)}
									</div>
								</div>

								<div className={styles.contentCard}>
									<div className={styles.cardHeader}>
										<h3>Audience Overview</h3>
										<p>Visit summaries by distinct visitor stats</p>
									</div>
									<div className={styles.audienceStats}>
										<div className={styles.audienceItem}>
											<span className={styles.audLabel}>Total Visited Sessions</span>
											<span className={styles.audValue}>{stats.totalVisits}</span>
										</div>
										<div className={styles.audienceItem}>
											<span className={styles.audLabel}>Distinct Geolocated IPs</span>
											<span className={styles.audValue}>{stats.uniqueVisits}</span>
										</div>
										<div className={styles.audienceItem}>
											<span className={styles.audLabel}>Visits per IP (Average)</span>
											<span className={styles.audValue}>
												{stats.uniqueVisits > 0 ? (stats.totalVisits / stats.uniqueVisits).toFixed(1.5) : '0.0'}
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Recent Visits Table */}
							<div className={styles.tableCard}>
								<div className={styles.cardHeader}>
									<h3>Recent Sessions Log</h3>
									<p>Showing {Math.min(filteredVisits.length, tableLimit)} of {filteredVisits.length} recorded visits</p>
								</div>
								
								<div className={styles.tableResponsive}>
									<table className={styles.visitsTable}>
										<thead>
											<tr>
												<th>Date / Time</th>
												<th>IP Address</th>
												<th>Country</th>
												<th>City / Region</th>
												<th>Coordinates</th>
											</tr>
										</thead>
										<tbody>
											{filteredVisits.length > 0 ? (
												filteredVisits.slice(0, tableLimit).map((visit, index) => (
													<tr key={index}>
														<td className={styles.timeCell}>
															{new Date(visit.timestamp).toLocaleString('en-US', {
																month: 'short',
																day: 'numeric',
																hour: '2-digit',
																minute: '2-digit',
																second: '2-digit'
															})}
														</td>
														<td className={styles.ipCell}>
															<code>{visit.ip}</code>
														</td>
														<td>
															<span className={styles.flagIcon}>{visit.countryCode}</span> {visit.country}
														</td>
														<td>{visit.city !== 'Unknown' ? `${visit.city}, ${visit.region}` : 'Unknown'}</td>
														<td className={styles.coordsCell}>
															{visit.latitude !== 0 ? (
																<a 
																	href={`https://www.google.com/maps?q=${visit.latitude},${visit.longitude}`} 
																	target="_blank" 
																	rel="noopener noreferrer"
																	title="View on Google Maps"
																>
																	{visit.latitude.toFixed(4)}, {visit.longitude.toFixed(4)}
																</a>
															) : (
																'N/A'
															)}
														</td>
													</tr>
												))
											) : (
												<tr>
													<td colSpan="5" className={styles.tableEmpty}>
														No visits found matching search query.
													</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					)}

					{/* Section: Settings */}
					{activeSection === 'settings' && (
						<div className={styles.sectionBody}>
							<div className={styles.contentCard} style={{ maxWidth: '600px' }}>
								<div className={styles.cardHeader}>
									<h3>System Credentials Configuration</h3>
									<p>Manage dashboard access parameters</p>
								</div>
								
								<div className={styles.settingsContent}>
									<p className={styles.settingsDescription}>
										Your admin credentials are currently configured using environment variables. To change them, modify the corresponding variables in your deployment dashboard (e.g. Render Dashboard) or local environment configuration:
									</p>
									<ul className={styles.envVarsList}>
										<li>
											<code>DASHBOARD_USERNAME</code> — Defines the sign-in username.
										</li>
										<li>
											<code>DASHBOARD_PASSWORD</code> — Defines the sign-in password.
										</li>
										<li>
											<code>VISITS_DATA_PATH</code> — Custom path for persistent storage disk.
										</li>
									</ul>
									<div className={styles.settingsStatusAlert}>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
											<polyline points="22 4 12 14.01 9 11.01"></polyline>
										</svg>
										<span>System is configured securely and environment variables are monitored.</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</main>
			</div>
		</>
	);
}
