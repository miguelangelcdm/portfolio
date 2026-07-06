// Core packages
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import Script from 'next/script';

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// Devicon import (https://github.com/devicons/devicon)
import 'devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'

/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */
export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		// Only track client-side, on first session mount, and NOT on dashboard/login paths
		const isBackoffice = router.pathname.startsWith('/dashboard') || router.pathname.startsWith('/login');
		
		if (typeof window !== 'undefined' && !isBackoffice && !sessionStorage.getItem('visited_session')) {
			sessionStorage.setItem('visited_session', 'true');

			fetch('https://ipapi.co/json/')
				.then(res => res.json())
				.then(data => {
					fetch('/api/track', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							ip: data.ip,
							country: data.country_name,
							countryCode: data.country_code,
							region: data.region,
							city: data.city,
							latitude: data.latitude,
							longitude: data.longitude
						})
					}).catch(err => console.error('Error tracking visit:', err));
				})
				.catch(err => {
					// Fallback if ipapi is blocked
					fetch('/api/track', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							ip: 'unknown',
							country: 'Unknown',
							countryCode: 'UN',
							region: 'Unknown',
							city: 'Unknown'
						})
					}).catch(e => console.error('Fallback tracking error:', e));
				});
		}
	}, [router.pathname]);

	return (
		<>
		<script dangerouslySetInnerHTML={{ __html: `
			try {
				let themeLocalStorage = localStorage.getItem('theme');
				let themeDefault = themeLocalStorage || 'dark';
				document.documentElement.setAttribute('data-theme', themeDefault);
			} catch (e) {}
		` }} />
		{process.env.NEXT_PUBLIC_UMAMI_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
			<script
				defer
				src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
				data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
			/>
		)}
		<LazyMotion features={domAnimation}>
			<Layout>
				<Component {...pageProps} />
				<SetGridGap />
				<Analytics />
			</Layout>
		</LazyMotion>
		</>
	)
}