import Navbar from './navbar'
import Footer from './footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	const router = useRouter()
	const isBackoffice = router.pathname.startsWith('/dashboard') || router.pathname.startsWith('/login')

	if (isBackoffice) {
		return <main>{children}</main>
	}

	return (
		<>
		<Navbar />
		<main>{children}</main>
		<Footer />
		</>
	)
}