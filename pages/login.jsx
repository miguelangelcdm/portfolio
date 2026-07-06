import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/structure/dashboard.module.scss';

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [checkingSession, setCheckingSession] = useState(true);

	// Check if already authenticated, and redirect if so
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
		fetch('/api/auth/session')
			.then(res => res.json())
			.then(data => {
				if (data.authenticated) {
					router.push('/dashboard');
				} else {
					setCheckingSession(false);
				}
			})
			.catch(() => setCheckingSession(false));
	}, [router]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			});

			const data = await res.json();
			if (res.ok && data.success) {
				router.push('/dashboard');
			} else {
				setError(data.error || 'Invalid credentials');
				setLoading(false);
			}
		} catch (err) {
			setError('Something went wrong. Please try again.');
			setLoading(false);
		}
	};

	if (checkingSession) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.spinner}></div>
				<p>Loading backoffice...</p>
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>Admin Login - Portfolio Backoffice</title>
				<meta name="description" content="Backoffice portal for admin access." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<div className={styles.loginPageContainer}>
				<div className={styles.loginGlowBg}></div>
				
				<div className={styles.loginCard}>
					<div className={styles.loginCardHeader}>
						<div className={styles.logoBadge}>A</div>
						<h1>Portfolio Backoffice</h1>
						<p>Enter credentials to access the admin dashboard</p>
					</div>

					<form onSubmit={handleSubmit} className={styles.loginForm}>
						{error && (
							<div className={styles.errorAlert} role="alert">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="8" x2="12" y2="12"></line>
									<line x1="12" y1="16" x2="12.01" y2="16"></line>
								</svg>
								<span>{error}</span>
							</div>
						)}

						<div className={styles.inputGroup}>
							<label htmlFor="username">Username</label>
							<input
								id="username"
								type="text"
								placeholder="e.g. admin"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								autoComplete="username"
							/>
						</div>

						<div className={styles.inputGroup}>
							<label htmlFor="password">Password</label>
							<input
								id="password"
								type="password"
								placeholder="••••••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								autoComplete="current-password"
							/>
						</div>

						<button 
							type="submit" 
							className={styles.loginButton} 
							disabled={loading}
						>
							{loading ? (
								<span className={styles.btnSpinner}></span>
							) : (
								'Sign In'
							)}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
