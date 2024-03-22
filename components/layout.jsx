import styles from './layout.module.css';
import Header from './header/header';
import Footer from './footer/footer';
import Undeline from './Underline'
import { Poppins, Permanent_Marker } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900', '600'] })
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: ['400'] })

export default function Layout({ children, footerMenu, preview, theme }) {
	const navItems = [
		{
			linkText: '🏠 Home',
			href: '/',
		},
		{
			linkText: '📰 Posts',
			href: '/posts',
		},
		{
			linkText: '📑 Pages',
			href: '/pages',
		},
		{
			linkText: '⚛️ Examples',
			href: '/examples',
		},
	];

	const footerMenuItems = footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));

	return (
		<div className={`${styles.layout} flex flex-col`}>
			<Undeline/>
			<style jsx global>{`
				* {
				font-family: ${poppins.style.fontFamily};
				}
				.overwrite-text > span {
					font-family: ${permanentMarker.style.fontFamily};
				}
			`}</style>
			<Header navItems={navItems} theme={theme}/>
			<main className="mb-auto">{children}</main>
			<Footer footerMenuItems={footerMenuItems}>
				<span className="my-0 mx-auto">
					© {new Date().getFullYear()}{' '}Sift All Right Reserved
				</span>
			</Footer>
		</div>
	);
}
