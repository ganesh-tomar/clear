import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.css';
import Lottie from 'react-lottie';
import aboutlottie from '../../public/Lootie/Clear_Nav_About_R1.json';
import worklottie from '../../public/Lootie/Clear_Nav_Work_R1.json';
import approachlottie from '../../public/Lootie/Clear_Nav_Approach_R1.json';
import servicelottie from '../../public/Lootie/Clear_Nav_Services_R1.json';
import insightlottie from '../../public/Lootie/Clear_Nav_Insights_R1.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const Header = (isDark) => {
	const navData = [
		{
			dropLabel: 'Work',
			url: '/work',
			description: {
				heading: 'Work',
				underline: 'work-black-bold',
				lottiefile: worklottie,
				work: true,
				subText:
					'We’ve worked with many of the world’s most demanding B2B companies — and delivered outstanding results.',
				label: 'See our work',
				url: '/work',
			},
			subMenu: [
				{
					subItems: [
						{
							label: 'Case Studies',
							url: '/work/case-studies',
						},
						{
							label: 'Clients',
							url: '/work/clients',
						},
						// {
						// 	label: 'Industry Focus',
						// 	url: '/work/industries',
						// },
						{
							label: 'Outcomes',
							url: '/work/outcomes',
						},
					],
				},
				{
					industries: {
						col1: {
							// subCategoryType: 'Industries',
							// label: 'Industries',
							// url: '/work/industries',
							subLinks: [
								{
									label: 'Industries',
									url: '/work/industries',
									bold: true,
								},
								{
									label: 'Technology',
									url: '/work/industries/technology',
									bold: true,
								},
								{
									label: 'Artificial Intelligence',
									url: '/work/industries/technology/ai',
									bold: false,
								},
								{
									label: 'Cybersecurity',
									url: '/work/industries/technology/cybersecurity',
									bold: false,
								},
								{
									label: 'Cloud',
									url: '/work/industries/technology/cloud',
									bold: false,
								},
								{
									label: 'SaaS',
									url: '/work/industries/technology/saas',
									bold: false,
								},
								{
									label: 'Services',
									url: '/work/industries/technology/services',
									bold: false,
								},
								{
									label: 'Financial Services & Insurance',
									url: '/work/industries/financial-services-insurance',
									bold: true,
								},
								{
									label: 'Healthcare',
									url: '/work/industries/healthcare',
									bold: true,
								},
							],
						},
						col2: {
							subLinks: [
								{
									label: 'Manufacturing',
									url: '/work/industries/manufacturing',
									bold: true,
								},
								{
									label: 'Semiconductor',
									url: '/work/industries/semiconductor',
									bold: true,
								},
								{
									label: 'Consumer Goods',
									url: '/work/industries/consumer-goods',
									bold: true,
								},
								{
									label: 'Renewable Energy',
									url: '/work/industries/renewable-energy',
									bold: true,
								},
								{
									label: 'Construction & Real Estate',
									url: '/work/industries/construction-real-estate',
									bold: true,
								},
								{
									label: 'Higher Education',
									url: '/work/industries/higher-education',
									bold: true,
								},
								{
									label: 'Non-Profit',
									url: '/work/industries/non-profit',
									bold: true,
								},
							],
						},
					},
				},
			],
		},
		{
			dropLabel: 'Approach',
			url: '/approach',
			subMenu: [
				{
					description: [
						{
							heading: 'Approach',
							underline: 'approach-black-bold',
							lottiefile: approachlottie,
							approach: true,
							subText:
								'We combine data-driven expertise with hands-on collaboration to ensure our hard work delivers the results you need.',
							label: 'See why we’re different',
							url: '/approach',
						},
					],
				},
				{
					subItems: [
						{
							label: 'Collaboration Focus',
							url: '/approach/collaboration-focus',
						},
						{
							label: 'Driving B2B Results',
							url: '/approach/driving-b2b-results',
						},
						{
							label: 'Design & Development Excellence',
							url: '/approach/design-development-excellence',
						},
					],
				},
			],
		},
		{
			dropLabel: 'Services',
			url: '/our-services',
			subMenu: [
				{
					description: [
						{
							heading: 'Services',
							underline: 'service-black-bold',
							lottiefile: servicelottie,
							service: true,
							subText:
								'From strategic branding to website development, we offer the full range of B2B digital marketing services. ',
							label: 'See our services',
							url: '/our-services',
						},
					],
				},
				{
					subCategory: [
						{
							subCategoryType: 'Strategic Branding & Positioning',
							subLinks: [
								{
									label: 'Brand Strategy',
									url: '/our-services/brand-strategy',
								},
								{
									label: 'Brand Messaging',
									url: '/our-services/brand-messaging',
								},
								{
									label: 'Visual Identity',
									url: '/our-services/visual-identity',
								},
								{
									label: 'Data & Metrics Analysis',
									url: '/our-services/data-metrics-analytics',
								},
								{
									label: 'User Research',
									url: '/our-services/user-research',
								},
							],
						},
						{
							subCategoryType: 'Digital Experiences & Creative',
							subLinks: [
								{
									label: 'Web Experiences',
									url: '/our-services/web-experiences',
								},
								{
									label: 'UX/UI Design',
									url: '/our-services/ux-ui-design',
								},
								{
									label: 'Creative & Content Services',
									url: '/our-services/creative-content-services',
								},
								{
									label: 'Motion Graphics & Videos',
									url: '/our-services/motion-graphics-videos',
								},
								{
									label: 'Campaigns & Marketing',
									url: '/our-services/campaigns-marketing',
								},
							],
						},
						{
							subCategoryType: 'Technology Infrastructure & Support',
							subLinks: [
								{
									label: 'DXP & CMS Platforms',
									url: '/our-services/dxp-cms-platforms',
								},
								{
									label: 'Technology Integration',
									url: '/our-services/technology-integration',
								},
								{
									label: 'Custom Web Development',
									url: '/our-services/custom-web-development',
								},
								{
									label: 'Authoring & Publishing',
									url: '/our-services/authoring-publishing',
								},
								{
									label: 'Systems Support',
									url: '/our-services/systems-support',
								},
							],
						},
					],
				},
			],
		},
		{
			dropLabel: 'Insights',
			url: '/insights',
			subMenu: [
				{
					description: [
						{
							heading: 'Insights',
							underline: 'insight-black-bold',
							lottiefile: insightlottie,
							insights: true,
							subText:
								'Keep up with all things Clear Digital, including our thoughts on key industry trends and topics.',
							label: 'Read the latest',
							url: '/insights',
						},
					],
				},
				{
					subItems: [
						{
							label: 'Whitepapers',
							url: '/insights?content-type=whitepapers',
						},
						{
							label: 'Podcasts',
							url: '/insights?content-type=podcasts',
						},
						{
							label: 'Videos',
							url: '/insights?content-type=videos',
						},
						{
							label: 'Clients in the News',
							url: '/insights?content-type=in-the-news',
						},
						{
							label: 'Infographics',
							url: '/insights?content-type=infographics',
						},
						{
							label: 'Press Releases',
							url: '/insights?content-type=press-releases',
						},
					],
				},
			],
		},
		{
			dropLabel: 'About',
			url: '/about',
			subMenu: [
				{
					description: [
						{
							heading: 'About Clear',
							underline: 'about-black-bold',
							lottiefile: aboutlottie,
							about: true,
							subText:
								'Want to know more about us? As a digital agency pioneer, there’s more to Clear Digital than meets the eye. ',
							label: 'Get to know us',
							url: '/about',
						},
					],
				},
				{
					subItems: [
						// {
						// 	label: 'Brand Story',
						// 	url: '/about/brand-story',
						// },
						{
							label: 'Partners',
							url: '/about/partners',
						},
						{
							label: 'History',
							url: '/about/history',
						},
						{
							label: 'News',
							url: '/about/news',
						},
						{
							label: 'Team',
							url: '/about/team',
						},
						{
							label: 'Careers',
							url: '/about/careers',
						},
						{
							label: 'Awards',
							url: '/about/awards',
						},
						{
							label: 'Contact Us',
							url: '/about/contact-us',
						},
					],
				},
			],
		},
	];

	const [scrolled, setScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [navWidth, setNavWidth] = useState('');
	const [isHoverEnabled, setIsHoverEnabled] = useState(false);
	const [winWidth, setwinWidth] = useState(0);
	const [menuHover, setMenuHover] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(
		Array(navData.length).fill(false),
	);

	const [animationState, setAnimationState] = useState(
		Array.isArray(navData) ? navData.map(() => ({ isStopped: true })) : []
	);


	const router = useRouter();
	const headerRef = useRef(null);
	const [subMenuHeight, setSubMenuHeight] = useState('');
	const [menuInnerHeight, setMenuInnerHeight] = useState('');
	const subMenuRefs = useRef([]);
	const stopScrollRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};
		const handleResize = () => {
			if (window.innerWidth > 991 && isMenuOpen) {
				setIsMenuOpen(false);
				setIsSubMenuOpen(Array(navData.length).fill(false));
			}
			setIsHoverEnabled(window.innerWidth > 991);
			setwinWidth(window.innerWidth);
		};

		handleResize();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [isMenuOpen, scrolled]);

	useEffect(() => {
		const handleResize = debounce(() => {
			const navWidth = document.querySelector('header .navOuter')?.offsetWidth;
			setNavWidth(navWidth);
		}, 200); // 200ms debounce

		handleResize();

		window.addEventListener('resize', handleResize);
		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// toggle menu on smaller width
	const toggleMenu = () => {
		if (menuOpen) {
			setIsMenuOpen(!isMenuOpen);
			setTimeout(() => {
				setMenuOpen(!menuOpen);
			}, 250);
		} else {
			setMenuOpen(!menuOpen);
			setTimeout(() => {
				setIsMenuOpen(!isMenuOpen);
			}, 250);
		}
	};
	const toggleSubMenu = (index, e) => {
		const isCurrentlyOpen = isSubMenuOpen[index];
		setIsSubMenuOpen((prev) => {
			const newState = Array(prev.length).fill(false);
			if (!isCurrentlyOpen) {
				newState[index] = true;
			}
			return newState;
		});

		const subMenus = document.querySelectorAll(`.sub__menu`);
		subMenus.forEach((element) => {
			element.style.height = `0px`;
		});

		// If the submenu is not currently open, open it by setting its height
		if (!isCurrentlyOpen) {
			const subMenu = e.target
				.closest(`.${styles.menu}`)
				.querySelector('.sub__menu');
			const subMenuContainerHeight = e.target
				.closest(`.${styles.menu}`)
				.querySelector('.sub_menu_container').offsetHeight;
			subMenu.style.height = `${subMenuContainerHeight}px`;
		}
	};
	const handleRouteChange = () => {
		const subMenus = document.querySelectorAll('.sub__menu');
		subMenus.forEach((menu) => {
			menu.style.maxHeight = '0';
		});
		setTimeout(() => {
			subMenus.forEach((menu) => {
				menu.style.maxHeight = '';
			});
		}, 500);
		setIsMenuOpen(false);
		setTimeout(() => {
			setMenuOpen(false);
			const subMenus = document.querySelectorAll(`.sub__menu`);
			subMenus.forEach((element) => {
				element.style.height = `0px`;
			});
		}, 250);
	};
	const handleClick = (index, e) => {
		if (!isHoverEnabled) {
			toggleSubMenu(index, e);
			if (isSubMenuOpen) {
				setTimeout(() => {
					scrollActiveMenuToTop(index, e);
				}, 500); // Delay before scrolling to allow for animations
			}
		}
	};
	useEffect(() => {
		const subMenuItems = document.querySelectorAll('.sub__menu li');
		const handleResize = () => {
			setIsHoverEnabled(window.innerWidth > 991);
		};
		const handleClick = (event) => {
			const newAnimationState = animationState.map((state) => ({
				...state,
				isStopped: true,
			}));
			setAnimationState(newAnimationState);
			setMenuHover(false);
			setIsHoverEnabled(false);
			handleResize();
		};
		// Attach click event listener to each <li>
		subMenuItems.forEach((item) => {
			item.addEventListener('click', handleClick);
		});
		// Clean up event listeners on component unmount
		return () => {
			subMenuItems.forEach((item) => {
				item.removeEventListener('click', handleClick);
			});
		};
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			const header = document.querySelector('header');
			const sectionElement = document.querySelector('.sticky');
			const footer = document.querySelector('.footer-clear-digital');

			if (header && footer && !sectionElement) {
				const headerHeight = header.offsetHeight;
				const footerHeight = footer.offsetHeight;

				// Calculate the start position dynamically based on header and footer heights
				const startOffset = `top+=${footerHeight} bottom`;

				const commonTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: footer,
						start: `top top+=${headerHeight}`, // Start when the footer's top touches the header's bottom
						end: 'top top', // End when the footer's top reaches the top of the viewport
						scrub: true,
						markers: false, // Set to true to enable debugging
					},
				});

				// Scroll header up and out of view
				commonTimeline.to(header, { yPercent: -100, duration: 1 }, 0);

				// if (sectionElement) {
				// 	// Scroll sticky section up together with the header
				// 	commonTimeline.to(sectionElement, { yPercent: -100, duration: 1 }, 0);
				// }
			}
		}, 1500);

		// Cleanup on unmount
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			clearTimeout(timer);
		};
	}, []);

	const handleMouseEnter = (index) => {
		setTimeout(() => {
			const newAnimationState = [...animationState];
			newAnimationState[index].isStopped = false;
			setAnimationState(newAnimationState);

		}, 500);
		setMenuHover(true);
		const activeSubMenuRef = subMenuRefs.current[index];
		if (activeSubMenuRef && headerRef.current) {
			const activeSubMenuHeight = activeSubMenuRef.scrollHeight;
			const headerHeight = headerRef.current.clientHeight;
			const totalHeight = headerHeight + activeSubMenuHeight;
			setSubMenuHeight(totalHeight);
		}
	};
	const handleMouseLeave = () => {
		const newAnimationState = animationState.map((state) => ({
			...state,
			isStopped: true, // Set isStopped to true for all elements
		}));
		setAnimationState(newAnimationState);
		setMenuHover(false);
	};

	const scrollActiveMenuToTop = (index, e) => {
		if (window.innerWidth < 992) {
			const stopScroll = stopScrollRef.current;
			const menu = e.target.closest(`.${styles.menu}`);

			if (menu) {
				const introPosition = menu.offsetTop; // Get the top position of the clicked accordion
				stopScroll.scrollTo({
					top: introPosition,
					behavior: 'smooth', // Add smooth scrolling effect
				});
			}
		}
	};
	function debounce(func, wait) {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), wait);
		};
	}
	let descriptionWidth = {
		width: `calc(100% - ${navWidth}px)`,
	};

	return (
		<header
			ref={headerRef}
			className={`${styles.header} ${isDark.isDark ? styles.blackHeader : ''} ${menuHover ? `before:!top-0` : ''
				} group fixed w-full top-0 left-0 z-50 transition-[top] ${scrolled ? styles.showCover : ''
				} ${isMenuOpen ? `${styles.showCover}` : ''} ${menuOpen ? `${styles.wrapCover} ` : ''
				}`}
			style={
				menuHover
					? { '--submenu-height': `${subMenuHeight}px` }
					: { '--submenu-height': '0px' }
			}
		>
			<div className="container">
				<div className={`wrapper flex justify-between lg:items-center`}>
					<div
						className={`${styles.logoWrap}
							lg:py-[1rem]`}
					>
						<Link
							className="absolute w-full h-full top-0 left-0 text-[0] z-[3]"
							aria-label="first link"
							href={'/'}
							data-circle-expand
						>
							.
						</Link>
						<div
							id="clearLogoSVGElement"
							className={`${styles.logoBox} relative`}
						>
							<span className={`${styles.topCover}`}></span>
							<svg
								className={`${styles.clearLogoSvg}`}
								id="clearLogoSvg"
								viewBox="0 0 111 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<mask
										id="svgMask"
										maskContentUnits="userSpaceOnUse"
										maskUnits="objectBoundingBox"
										x="0"
										y="0"
										width="1"
										height="1"
									>
										<rect
											width="111"
											height="45"
											y="-5"
											fill={scrolled ? 'white' : 'transparent'}
											className={`group-hover:fill-black ${styles.logoRect} ${isDark.isDark === true ? '!fill-black' : ''
												}`}
										/>
										<g
											clipPath="url(#clip0_813_210)"
											fill={scrolled ? 'black' : 'white'}
											className={`group-hover:fill-black ${styles.logoPath} ${isDark.isDark === true ? '!fill-black' : ''
												}`}
										>
											<path
												className={`group-hover:fill-[#faebd7] ${isDark.isDark === true ? '!fill-[#faebd7]' : ''
													}`}
												d="M26.4464 0H30.2595C31.1759 0 31.9604 0.313731 32.6148 0.937746C33.2691 1.56349 33.5963 2.33747 33.5963 3.2597V35H26.4464V0Z"
												fill="inherit"
											/>
											<path
												className={`group-hover:fill-[#faebd7] ${isDark.isDark === true ? '!fill-[#faebd7]' : ''
													}`}
												d="M79.5278 21.2355C78.5634 21.6975 77.7206 22.1147 75.4989 22.5198L73.123 23.0145C71.8845 23.3455 71.0075 23.5316 70.4371 24.2987C69.918 24.9986 69.7142 25.7484 69.7142 26.4724C69.7142 27.4602 70.0242 28.2514 70.6443 28.8444C71.2644 29.3719 72.1586 29.6339 73.3303 29.6339C76.2851 29.6339 77.2427 29.2288 78.4709 28.0532C79.5723 26.9999 79.5278 25.5519 79.5278 23.7057V21.2373V21.2355ZM81.7752 33.3866C80.4716 34.0572 78.6473 34.6312 77.0388 34.8622C76.1686 34.9863 74.3032 35.0414 72.2973 34.9673C69.8204 34.876 67.6501 34.3243 65.7898 33.0401C63.9312 31.7559 63.0011 29.6322 63.0011 26.669C63.0011 23.9023 63.8439 21.9285 65.5311 20.7425C67.2184 19.5566 69.3699 18.7671 71.9873 18.3723C71.9873 18.3723 74.2587 18.0431 74.8788 17.9776C77.9073 17.5828 79.4233 16.7261 79.4233 15.4091C79.4233 14.4214 78.8888 13.7801 77.8217 13.4836C76.7528 13.1871 75.773 13.0389 74.8788 13.0389C73.9144 13.0389 73.0528 13.1716 72.2973 13.4336C71.5385 13.6974 70.9886 14.1921 70.6443 14.9161H63.724C63.998 12.8751 64.9642 11.1961 66.6155 9.87744C68.4757 8.36222 71.1257 7.60547 74.5687 7.60547C78.4246 7.60547 81.3161 8.23121 83.2449 9.48269C85.2405 10.8014 86.2409 12.6441 86.2409 15.0144V24.6038C86.2409 27.2378 85.8246 29.3581 84.7437 30.7785C83.8633 31.9334 83.2363 32.4523 81.7769 33.39"
												fill="inherit"
											/>
											<path
												className={`group-hover:fill-[#faebd7] ${isDark.isDark === true ? '!fill-[#faebd7]' : ''
													}`}
												d="M88.7842 35.0002V21.3202C88.7842 18.7517 89.1799 16.5952 89.973 14.849C90.7627 13.1045 91.847 11.7048 93.2259 10.6516C94.5329 9.66384 96.066 8.93984 97.8218 8.47786C99.5776 8.01761 101.385 7.78662 103.243 7.78662H104.276V14.8008H101.9C99.903 14.8008 98.423 15.2627 97.4603 16.1832C96.4959 17.1072 96.0146 18.5535 96.0146 20.5307V31.613C96.0146 33.485 94.4284 35.0019 92.4722 35.0019H88.7842V35.0002Z"
												fill="inherit"
											/>
											<path
												className={`group-hover:fill-[#faebd7] ${isDark.isDark === true ? '!fill-[#faebd7]' : ''
													}`}
												d="M21.7015 27.6723C20.8707 26.8966 19.6203 26.8587 18.7073 27.5344C17.2221 28.6325 15.7199 29.2444 13.6215 29.2444C9.51551 29.2444 6.42019 25.8589 6.42019 21.3684V21.2943C6.42019 16.8469 9.51722 13.4923 13.6215 13.4923C15.3225 13.4923 16.859 13.9871 18.4332 15.0662C19.4096 15.7367 20.7406 15.5213 21.5182 14.6266L23.9729 11.7996C21.1362 8.98806 17.9553 7.73486 13.6592 7.73486C5.87204 7.73486 0 13.5958 0 21.3684V21.4425C0 29.172 5.77611 35.0019 13.4365 35.0019C17.9519 35.0019 21.0592 33.6401 24.1613 30.3011L24.3275 30.1218L21.7015 27.6723Z"
												fill="inherit"
											/>
											<path
												className={`group-hover:fill-[#faebd7] ${isDark.isDark === true ? '!fill-[#faebd7]' : ''
													}`}
												d="M58.0728 11.1924C55.8014 8.82048 52.5982 7.63623 48.4682 7.63623C44.3383 7.63623 41.4794 8.85496 39.2748 11.2907C37.1404 13.6609 36.0732 16.9551 36.0732 21.1698C36.0732 25.3845 37.1747 28.9751 39.3775 31.3454C41.5804 33.7828 44.6449 34.9998 48.571 34.9998C51.8068 34.9998 54.4927 34.2431 56.6271 32.7278C58.7597 31.2798 60.2072 29.1716 60.9643 26.4049L56.5637 26.4015C55.3252 26.4015 54.1741 26.9514 53.2971 27.8323C52.5794 28.5511 51.2861 29.2699 48.9838 29.2699C47.1921 29.2699 45.8491 28.7441 44.955 27.6892C43.9906 26.7014 43.4732 25.1862 43.4064 23.1452H61.2709C61.2709 23.1452 61.3771 22.3437 61.3771 22.0213V21.8748C61.3771 17.5274 60.2757 13.6299 58.0728 11.1924ZM43.4064 18.6996C43.475 16.9878 43.9906 15.6709 44.955 14.7486C45.9176 13.8264 47.1578 13.3661 48.6738 13.3661C50.3251 13.3661 51.5995 13.8281 52.4954 14.7486C53.3228 15.6054 53.8024 16.9206 53.9412 18.6996H43.4064Z"
												fill="inherit"
											/>
										</g>
									</mask>
								</defs>

								<rect
									width="111"
									height="45"
									y="-5"
									fill="white"
									mask="url(#svgMask)"
									className={`group-hover:fill-black ${styles.logoRect2} ${isDark.isDark === true ? '!fill-black' : ''
										}`}
								/>
								<path
									d="M105.606 24.228C102.629 24.228 100.298 26.5741 100.298 29.5684C100.298 32.5626 102.629 35 105.606 35C108.583 35 111 32.6143 111 29.5684C111 26.5224 108.631 24.228 105.606 24.228ZM108.268 29.5684C108.268 31.0974 107.124 32.2489 105.606 32.2489C104.089 32.2489 103.032 31.0956 103.032 29.5684C103.032 28.0411 104.162 26.9792 105.606 26.9792C107.05 26.9792 108.268 28.1169 108.268 29.5684Z"
									fill="#fa198c"
								/>
							</svg>
						</div>
					</div>
					<div
						ref={stopScrollRef}
						className={`${styles.alignNav
							} nav__wrap lg:absolute lg:left-0 lg:top-[100%] lg:w-full lg:overflow-y-scroll no-scrollbar lg:bg-white transition-max-height duration-700 ease ${isMenuOpen ? 'lg:h-[95vh]' : 'lg:h-0'
							}`}
					>
						<div className="navOuter lg-up:flex lg-up:items-center lg-up:gap-x-[5rem] lg:min-h-[calc(100vh-95px)]">
							<nav className="">
								<ul className="lg-up:flex">
									{navData.map((item, index) => (
										<li
											key={index}
											className={`${styles.menu} ${index != navData.length - 1
												? 'xl-up:pr-[6.6rem] laptop:pr-[5rem]'
												: ''
												} ${item.dropLabel
												}_menu lg:border-b lg:border-black/[0.2]`}
											onMouseEnter={() =>
												isHoverEnabled && handleMouseEnter(index)
											}
											onMouseLeave={() => handleMouseLeave()}
										>
											<div className="lg:relative">
												<p
													data-cursor-expand
													className={`${styles.borderPink} ${styles.litext}
														 cursor-pointer lg-up:text-[2rem] font-bold py-[3rem] lg-up:py-[4.2rem] transition-all duration-300 ease group-hover:text-black 
														 ${scrolled ? 'text-black' : 'lg-up:text-white'} ${isSubMenuOpen[index] ? '' : ''
														}`}
													onClick={(e) => handleClick(index, e)}
												>
													<Link className="xl:pointer-events-none" href={item.url}>{item.dropLabel}</Link>
												</p>
												<span
													className="pointer-events-none lg-up:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 border-[0.4rem] border-pink rounded-full h-[3.5rem] w-[3.5rem] inline-block mt-0"
													onClick={() => toggleSubMenu(index)}
												>
													<span className="bg-pink rounded-full w-[1.3rem] h-[0.4rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
													<span
														className={`bg-pink rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isSubMenuOpen[index]
															? 'w-[1.3rem] h-[0.4rem]'
															: 'w-[0.4rem] h-[1.3rem]'
															}`}
													></span>
												</span>
											</div>
											<ul
												ref={(el) => (subMenuRefs.current[index] = el)}
												className={`sub__menu lg-up:absolute lg-up:left-0 lg-up:top-[100%] w-full transition-all delay-800 duration-500 lg:duration-800 lg:h-0 ease-in-out overflow-hidden`}
												style={
													menuHover
														? { '--menuinner-height': `${menuInnerHeight}px` }
														: { '--menuinner-height': '0px' }
												}
											>
												{item.dropLabel === 'Work' ? (
													<li className="container sub_menu_container lg:p-[0!important]">
														<div
															className={`lg-up:flex lg:pb-[1.6rem] lg-up:py-[5.4rem] laptop-landscape:h-[82vh] laptop-landscape:overflow-y-scroll no-scrollbar ${item.dropLabel === 'About'
																? 'lg-up:min-h-[44rem]'
																: 'lg-up:min-h-[34rem]'
																}`}
														>
															{isHoverEnabled ? (
																<>
																	<div
																		style={descriptionWidth}
																		className="grow-0 shrink-0 laptop:pr-[25px]"
																	>
																		<div
																			className={`${styles.description} max-w-[37rem]`}
																		>
																			{item?.description && (
																				<div>
																					<div className="heading-wrap relative inline-block lg:hidden">
																						<h3
																							className={`underline-container ${item?.description?.lottiefile} relative inline-block leading-1 pb-[0.8rem] lg:hidden`}
																						>
																							{item?.description?.heading}
																						</h3>
																						<div
																							className={`${item?.description?.work
																								? 'xl:bottom-[-2rem]'
																								: ''
																								} headlineLottieWrapper img-wrap absolute bottom-[-1rem] w-full h-auto`}
																						>
																							<Lottie
																								options={{
																									loop: false,
																									autoplay: false,
																									animationData:
																										item?.description
																											?.lottiefile,
																									rendererSettings: {
																										preserveAspectRatio:
																											'xMidYMid slice',
																									},
																								}}
																								isStopped={
																									animationState[index]
																										.isStopped
																								}
																							/>
																						</div>
																					</div>
																					<p className="small mt-[1.4rem] lg:mt-0 lg:pr-[0.1rem]">
																						{item?.description?.subText}
																					</p>
																					<Link
																						data-circle-expand
																						href={item?.description?.url}
																						className="tertiary-btn pink mt-[3rem] lg:mt-[2rem]"
																					>
																						{item?.description?.label}
																					</Link>
																				</div>
																			)}
																		</div>
																	</div>
																	<div className="flex w-full">
																		{item?.subMenu.map(
																			(subMenuItem, subIndex) => (
																				<React.Fragment key={subIndex}>
																					{subMenuItem?.subItems && (
																						<div
																							key={subIndex}
																							className="w-[22%] laptop:w-[30%]"
																						>
																							<ul className={``}>
																								{subMenuItem.subItems.map(
																									(subItem, subItemIndex) => (
																										<li
																											key={subItemIndex}
																											className={`${subMenuItem.subItems
																												.length > 4
																												? `lg-up:w-[42%] inline-block ${subItemIndex === 0
																													? 'pt-0'
																													: ''
																												} ${subItemIndex === 1
																													? 'pt-0'
																													: ''
																												}`
																												: `${subItemIndex === 0
																													? 'pt-0'
																													: ''
																												}`
																												} py-[1.5rem] pr-[2rem] lg:w-full lg:pt-[1.3rem] lg:pb-[2.2rem] lg-up:flex`}
																										>
																											<Link
																												data-circle-expand
																												href={subItem.url}
																												className={`${styles.subMenuLink} text-[20px] lg:text-[16px] font-bold largedesktop-up:text-[2rem]`}
																											>
																												{subItem.label}
																											</Link>
																										</li>
																									),
																								)}
																							</ul>
																						</div>
																					)}
																					{subMenuItem?.industries && (
																						<div
																							className={`w-[75%] ${styles.industryDivider}`}
																						>
																							<div className="w-full">
																								<ul className="p-0">
																									<li className="lg-up:!text-[20px] lg:text-[16px] largedesktop-up:text-[2rem] font-bold">
																										{
																											subMenuItem?.industries
																												?.col1.subCategoryType
																										}
																										{/* <Link data-circle-expand href={subMenuItem?.industries?.col1.url} className={`${styles.subMenuLink} lg-up:!text-[20px] lg:text-[16px] largedesktop-up:text-[2rem] font-bold}`}> */}
																										{
																											subMenuItem?.industries
																												?.col1.label
																										}
																										{/* </Link> */}
																									</li>
																								</ul>
																							</div>
																							<div className="w-full lg-up:flex gap-x-[1rem]">
																								<div className="lg:w-full">
																									<ul className="lg:mt-[2.3rem]">
																										{subMenuItem?.industries?.col1.subLinks.map(
																											(item, itemIndex) => (
																												<li
																													key={itemIndex}
																													className={`pr-[2rem] lg:w-full largedesktop:!text-[20px] !text-[16px] largedesktop-up:text-[2rem] lg:pt-[1.3rem] lg:pb-[2.2rem] lg-up:mb-[1.9rem] ${itemIndex === 0
																														? '!mt-0'
																														: ''
																														} ${item.bold === true
																															? 'font-bold lg-up:mt-[3rem]'
																															: ''
																														}`}
																												>
																													<Link
																														data-circle-expand
																														href={item.url}
																														className={`${styles.subMenuLink}`}
																													>
																														{item.label}
																													</Link>
																												</li>
																											),
																										)}
																									</ul>
																								</div>
																								<div className="lg:w-full">
																									<ul className="lg:mt-[2.3rem]">
																										{subMenuItem?.industries?.col2?.subLinks.map(
																											(ind, indIndex) => (
																												<li
																													key={indIndex}
																													className={`pr-[2rem] lg:w-full largedesktop:!text-[20px] !text-[16px] largedesktop-up:text-[2rem]lg:pt-[1.3rem] lg:pb-[2.2rem] lg-up:mb-[3rem] ${ind.bold === true
																														? 'font-bold'
																														: ''
																														}`}
																												>
																													<Link
																														data-circle-expand
																														href={ind.url}
																														className={`${styles.subMenuLink}`}
																													>
																														{ind.label}
																													</Link>
																												</li>
																											),
																										)}
																									</ul>
																								</div>
																							</div>
																						</div>
																					)}
																				</React.Fragment>
																			),
																		)}
																	</div>
																</>
															) : (
																<div className={`flex flex-wrap w-full`} >
																	<div className={`w-full`}>
																		{item?.description && (
																			<div>
																				<div className="heading-wrap relative inline-block lg:hidden">
																					<h3
																						className={`underline-container ${item?.description?.lottiefile} relative inline-block leading-1 pb-[0.8rem] lg:hidden`}
																					>
																						{item?.description?.heading}
																					</h3>
																				</div>
																				<p className="small mt-[1.4rem] lg:mt-0 lg:pr-[0.1rem]">
																					{item?.description?.subText}
																				</p>
																				<Link
																					data-circle-expand
																					href={item?.description?.url}
																					className="tertiary-btn pink mt-[3rem] lg:mt-[2rem]"
																				>
																					{item?.description?.label}
																				</Link>
																			</div>
																		)}
																		{item?.subMenu.map(
																			(subMenuItem, subIndex) => (
																				<React.Fragment key={subIndex}>
																					{subMenuItem?.subItems && (
																						<div
																							key={subIndex}
																							className={`w-full mt-[4.3rem]`}
																						>
																							<ul className={``}>
																								{subMenuItem.subItems.map(
																									(subItem, subItemIndex) => (
																										<li
																											key={subItemIndex}
																											className={`py-[1.5rem] pr-[2rem] w-full pt-[1.3rem] pb-[2.2rem]`}
																										>
																											<Link
																												data-circle-expand
																												href={subItem.url}
																												className="text-[16px] font-bold"
																											>
																												{subItem.label}
																											</Link>
																										</li>
																									),
																								)}
																							</ul>
																						</div>
																					)}
																				</React.Fragment>
																			),
																		)}
																	</div>
																	{winWidth > 767 && winWidth < 992 && (
																		<div className={`w-full flex flex-wrap`}>
																			{item?.subMenu.map(
																				(subMenuItem, subIndex) => (
																					<React.Fragment key={subIndex}>
																						{subMenuItem?.industries && (
																							<div
																								className={`w-full pr-[2rem] pt-[1.3rem] pb-[2.2rem] font-bold text-[16px]`}
																							>
																								{/* <Link data-circle-expand href={subMenuItem?.industries?.col1.url} className=""> */}
																								{
																									subMenuItem?.industries?.col1
																										.label
																								}
																								{/* </Link> */}
																							</div>
																						)}
																					</React.Fragment>
																				),
																			)}
																			<div className="leftCol w-1/2 inline-block">
																				{item?.subMenu.map(
																					(subMenuItem, subIndex) => (
																						<React.Fragment key={subIndex}>
																							{subMenuItem?.industries && (
																								<ul className={``}>
																									{subMenuItem?.industries?.col1.subLinks.map(
																										(item, itemIndex) => (
																											<li
																												key={itemIndex}
																												className={`pr-[2rem] w-full ${itemIndex > 0 &&
																													itemIndex < 6
																													? 'text-[14px] pb-[2.4rem]'
																													: 'text-[16px] pb-[2.2rem]'
																													} pt-[1.3rem]`}
																											>
																												<Link
																													data-circle-expand
																													href={item.url}
																													className=""
																												>
																													{item.label}
																												</Link>
																											</li>
																										),
																									)}
																								</ul>
																							)}
																						</React.Fragment>
																					),
																				)}
																			</div>
																			<div className="rightCol w-1/2 inline-block">
																				{item?.subMenu.map(
																					(subMenuItem, subIndex) => (
																						<React.Fragment key={subIndex}>
																							{subMenuItem?.industries && (
																								<ul className={``} key={subIndex}>
																									{subMenuItem?.industries?.col2?.subLinks.map(
																										(ind, indIndex) => (
																											<li
																												key={indIndex}
																												className={`pr-[2rem] w-full text-[16px] pt-[1.3rem] pb-[2.2rem]`}
																											>
																												<Link
																													data-circle-expand
																													href={ind.url}
																													className=""
																												>
																													{ind.label}
																												</Link>
																											</li>
																										),
																									)}
																								</ul>
																							)}
																						</React.Fragment>
																					),
																				)}
																			</div>
																		</div>
																	)}
																	{winWidth < 768 && (
																		<div className="w-full inline-block">
																			{item.subMenu?.[1] && (
																				<ul className={``}>
																					<li
																						className={`w-full pr-[2rem] pt-[1.3rem] pb-[2.2rem] text-[16px] font-bold`}
																					>
																						{/* <Link data-circle-expand href={item.subMenu?.[1]?.industries?.col1.url}> */}
																						{
																							item.subMenu?.[1]?.industries
																								?.col1.label
																						}
																						{/* </Link> */}
																					</li>
																					{item.subMenu?.[1]?.industries?.col1?.subLinks.map(
																						(item, itemIndex) => (
																							<li
																								key={itemIndex}
																								className={`w-full px-[2rem] pt-[1.3rem] pb-[2.2rem] text-[16px] ${item.bold === true
																									? 'font-bold'
																									: ''
																									}`}
																							>
																								<Link
																									data-circle-expand
																									href={item.url}
																									className=""
																								>
																									{item.label}
																								</Link>
																							</li>
																						),
																					)}
																				</ul>
																			)}
																			{item.subMenu?.[1] && (
																				<ul className={``}>
																					{item.subMenu?.[1]?.industries?.col2?.subLinks.map(
																						(ind, indIndex) => (
																							<li
																								key={indIndex}
																								className={`px-[2rem] w-full text-[16px] pt-[1.3rem] pb-[2.2rem] ${ind.bold === true
																									? 'font-bold'
																									: ''
																									}`}
																							>
																								<Link
																									data-circle-expand
																									href={ind.url}
																									className=""
																								>
																									{ind.label}
																								</Link>
																							</li>
																						),
																					)}
																				</ul>
																			)}
																		</div>
																	)}
																</div>
															)}
														</div>
													</li>
												) : (
													<li className="container sub_menu_container lg:p-[0!important] lg-up:pb-[5.4rem]">
														<div
															className={`lg-up:flex  lg:pb-[1.6rem] laptop-landscape:max-h-[82vh] lg-up:pt-[5.4rem] laptop-landscape:overflow-y-scroll no-scrollbar ${item.dropLabel === 'About'
																? 'lg-up:min-h-[44rem]'
																: 'lg-up:min-h-[34rem]'
																}`}
														>
															{isHoverEnabled ? (
																item?.subMenu.map((subMenuItem, subIndex) => (
																	<React.Fragment key={subIndex}>
																		{subMenuItem?.description && (
																			<div
																				style={descriptionWidth}
																				className={`grow-0 shrink-0 laptop:pr-[25px]`}
																			>
																				<div
																					className={`${styles.description} max-w-[37rem]`}
																				>
																					{subMenuItem.description.map(
																						(desc, descIndex) => (
																							<div key={descIndex}>
																								<div className="heading-wrap relative inline-block lg:hidden">
																									{desc.about === true ? (
																										<h3
																											className={`underline-container relative inline-block leading-1 pb-[0.8rem] lg:hidden`}
																										>
																											About{' '}
																											<span className="relative overflow-visible">
																												Clear
																												<div
																													className={`headlineLottieWrapper absolute w-[160%] h-[170%] left-[-12%] top-[45%] ipad:h-[150%] ipad:w-[140%] -translate-y-1/2`}
																												>
																													<Lottie
																														options={{
																															loop: false,
																															autoplay: false,
																															animationData:
																																desc.lottiefile,
																															rendererSettings:
																															{
																																preserveAspectRatio:
																																	'xMidYMid slice',
																															},
																														}}
																														isStopped={
																															animationState[
																																index
																															].isStopped
																														}
																													/>
																												</div>
																											</span>
																										</h3>
																									) : (
																										<h3
																											className={`underline-container ${desc.lottiefile
																												} ${desc.approach === true
																													? '!pb-[0.4rem]'
																													: ''
																												} relative inline-block leading-1 pb-[0.8rem] lg:hidden`}
																										>
																											{desc.heading}
																										</h3>
																									)}
																									{desc.about != true && (
																										<div
																											className={`${desc.about === true
																												? 'right-0 max-w-[23rem] max-h-[11.5rem] ipad:max-w-[26rem] ipad:max-h-[12.9rem] mt-0 ipad:mt-[0.5rem]'
																												: 'left-0'
																												} ${desc.insights === true
																													? 'left-[-1px]'
																													: ''
																												} ${desc.approach === true
																													? 'left-[-1rem]'
																													: ''
																												} ${desc.work === true
																													? 'xl:bottom-[-2rem]'
																													: ''
																												} ${desc.service === true
																													? 'ipad:bottom-[-2rem]'
																													: ''
																												} headlineLottieWrapper img-wrap absolute  bottom-[-1rem] w-full h-auto`}

																										>
																											<Lottie
																												options={{
																													loop: false,
																													autoplay: false,
																													animationData:
																														desc.lottiefile,
																													rendererSettings: {
																														preserveAspectRatio:
																															'xMidYMid slice',
																													},
																													delay: 2,
																												}}
																												isStopped={
																													animationState[index]
																														.isStopped
																												}
																											/>
																										</div>
																									)}
																								</div>

																								<p
																									className={`small mt-[1.4rem] lg:mt-0 lg:pr-[0.1rem]`}
																								>
																									{desc.subText}
																								</p>
																								<Link
																									data-circle-expand
																									href={desc.url}
																									className="tertiary-btn pink mt-[3rem] lg:mt-[2rem]"
																								>
																									{desc.label}
																								</Link>
																							</div>
																						),
																					)}
																				</div>
																			</div>
																		)}
																		{(subMenuItem?.subItems ||
																			subMenuItem?.subCategory) && (
																				<React.Fragment key={subIndex}>
																					{subMenuItem?.subItems && (
																						<div className={`flex-[28%]`}>
																							<ul
																								className={`${styles.insightsUl
																									} ${item.dropLabel === 'About' ||
																										item.dropLabel === 'Insights'
																										? 'xxl-up:w-[68%] w-[75%]'
																										: ''
																									}`}
																							>
																								{subMenuItem.subItems.map(
																									(subItem, subItemIndex) => (
																										<li
																											key={subItemIndex}
																											className={`${subMenuItem.subItems
																												.length > 4
																												? `lg-up:w-[42%] inline-block ${subItemIndex === 0
																													? 'pt-0'
																													: ''
																												} ${subItemIndex === 1
																													? 'pt-0'
																													: ''
																												}`
																												: `${subItemIndex === 0
																													? 'pt-0'
																													: ''
																												}`
																												}  py-[1.5rem] pr-[2rem] lg:w-full lg:pt-[1.3rem] lg:pb-[2.2rem]`}
																										>
																											<Link
																												data-circle-expand
																												href={subItem.url}
																												className={`${styles.subMenuLink} text-[20px] lg:text-[16px] font-bold largedesktop-up:text-[2rem]`}
																											>
																												{subItem.label}
																											</Link>
																										</li>
																									),
																								)}
																							</ul>
																						</div>
																					)}
																					{subMenuItem?.subCategory &&
																						Array.isArray(
																							subMenuItem.subCategory,
																						) && (
																							<div
																								className={`flex flex-wrap gap-y-[4rem] gap-x-[20px]`}
																							>
																								{subMenuItem.subCategory.map(
																									(subItem, subItemIndex) => (
																										<div
																											key={subItemIndex}
																											className={`${styles.subCategoryContainer} lg:mb-[3rem] w-[calc(50%-10px)] lg:w-full`}
																										>
																											<p className="lg-up:!text-[20px] lg:text-[16px]">
																												{subItem.subCategoryType}
																											</p>
																											<ul
																												className={`lg-up:mt-[1rem] lg:w-full lg:mt-[2.3rem]`}
																											>
																												{subItem.subLinks.map(
																													(
																														sublink,
																														linkIndex,
																													) => (
																														<li
																															key={linkIndex}
																															className={`py-[1.5rem] pr-[2rem] lg:w-full text-[16px] font-bold lg:pt-[1.3rem] lg:pb-[2.2rem]`}
																														>
																															<Link
																																data-circle-expand
																																href={sublink.url}
																																className={`${styles.subMenuLink}`}
																															>
																																{sublink.label}
																															</Link>
																														</li>
																													),
																												)}
																											</ul>
																										</div>
																									),
																								)}
																							</div>
																						)}
																				</React.Fragment>
																			)}
																	</React.Fragment>
																))
															) : (
																<div className={`flex flex-wrap w-full`}>
																	{item?.subMenu.map(
																		(subMenuItem, subIndex) => (
																			<React.Fragment key={subIndex}>
																				{subMenuItem?.description && (
																					<div className={`w-full`}>
																						<div className={``}>
																							{subMenuItem.description.map(
																								(desc, descIndex) => (
																									<div key={descIndex}>
																										<h3
																											className={`underline-container ${desc.underline} relative inline-block leading-1 pb-[0.8rem] lg:hidden`}
																										>
																											{desc.heading}
																										</h3>
																										<p
																											className={`small mt-[1.4rem] lg:mt-0 pr-[0.1rem]`}
																										>
																											{desc.subText}
																										</p>
																										<Link
																											data-circle-expand
																											href={desc.url}
																											className="tertiary-btn pink mt-[2rem]"
																										>
																											{desc.label}
																										</Link>
																									</div>
																								),
																							)}
																						</div>
																					</div>
																				)}
																				{subMenuItem?.subItems && (
																					<div
																						className={`lg-up:pl-[0.6rem] flex-[28%]`}
																					>
																						<ul
																							className={`lg:mt-[4.3rem] ${item.dropLabel === 'About' ||
																								item.dropLabel === 'Insights'
																								? 'xxl-up:w-[68%]'
																								: ''
																								}`}
																						>
																							{subMenuItem.subItems.map(
																								(subItem, subItemIndex) => (
																									<li
																										key={subItemIndex}
																										className={`${subMenuItem.subItems
																											.length > 4
																											? `lg-up:w-[42%] inline-block ${subItemIndex === 0
																												? 'pt-0'
																												: ''
																											} ${subItemIndex === 1
																												? 'pt-0'
																												: ''
																											}`
																											: `${subItemIndex === 0
																												? 'pt-0'
																												: ''
																											}`
																											}  py-[1.5rem] pr-[2rem] lg:w-full lg:pt-[1.3rem] lg:pb-[2.2rem]`}
																									>
																										<Link
																											data-circle-expand
																											href={subItem.url}
																											className="text-[20px] lg:text-[16px] font-bold largedesktop-up:text-[2rem]"
																										>
																											{subItem.label}
																										</Link>
																									</li>
																								),
																							)}
																						</ul>
																					</div>
																				)}
																				{subMenuItem?.subCategory &&
																					Array.isArray(
																						subMenuItem.subCategory,
																					) && (
																						<div
																							className={`w-full flex flex-wrap mt-[4.3rem]`}
																						>
																							{subMenuItem.subCategory.map(
																								(subItem, subItemIndex) => (
																									<div
																										key={subItemIndex}
																										className={`${styles.subCategoryContainer} mb-[3rem] w-1/2 md:w-full`}
																									>
																										<p className="lg-up:!text-[20px] lg:text-[16px]">
																											{subItem.subCategoryType}
																										</p>
																										<ul
																											className={`lg-up:mt-[1rem] lg:w-full lg:mt-[2.3rem]`}
																										>
																											{subItem.subLinks.map(
																												(
																													sublink,
																													linkIndex,
																												) => (
																													<li
																														key={linkIndex}
																														className={`py-[1.5rem] pr-[2rem] lg:w-full text-[16px] font-bold lg:pt-[1.3rem] lg:pb-[2.2rem]`}
																													>
																														<Link
																															data-circle-expand
																															href={sublink.url}
																															className=""
																														>
																															{sublink.label}
																														</Link>
																													</li>
																												),
																											)}
																										</ul>
																									</div>
																								),
																							)}
																						</div>
																					)}
																			</React.Fragment>
																		),
																	)}
																</div>
															)}
														</div>
													</li>
												)}
											</ul>
										</li>
									))}
								</ul>
							</nav>
							<div className="lg:pb-[100px] lg:mt-[3rem]">
								<div className="header-btnwrap relative inline-block w-auto h-auto bg-transparent">
									<Link
										href={'/about/contact-us'}
										className="btn pink relative lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full"
									>
										Let&apos;s talk
									</Link>
								</div>
							</div>
						</div>
					</div>
					<button
						data-circle-expand
						aria-label="first link"
						className={`w-[35px] h-[28px] relative transition-transform duration-500 !cursor-pointer lg-up:hidden`}
						onClick={toggleMenu}
					>
						<ul>
							<li
								className={`h-[4px] absolute rounded transition-all duration-300 ease-in-out ${isDark.isDark === true ? '!bg-black' : ''
									} bg-white group-hover:bg-black w-[30px] right-0 ${isMenuOpen
										? 'transform rotate-[135deg] top-[12px] w-[25px!important] bg-[black!important]'
										: 'top-0'
									} ${scrolled ? 'lg:bg-black' : ''}`}
							></li>
							<li
								className={`h-[4px] absolute w-full rounded transition-all duration-300 ease-in-out ${isDark.isDark === true ? '!bg-black' : ''
									} bg-white group-hover:bg-black ${isMenuOpen
										? 'opacity-0 left-[-60px] bg-[black!important]'
										: 'top-[11px] left-0'
									} ${scrolled ? 'lg:bg-black' : ''}`}
							></li>
							<li
								className={`h-[4px] absolute rounded transition-all duration-300 ease-in-out ${isDark.isDark === true ? '!bg-black' : ''
									} bg-white group-hover:bg-black w-[25px] right-0 ${isMenuOpen
										? 'transform rotate-[-135deg] top-[12px] w-[25px!important] bg-[black!important]'
										: 'top-[22px]'
									} ${scrolled ? 'lg:bg-black' : ''}`}
							></li>
						</ul>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
