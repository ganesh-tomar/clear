import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

const Header = (theme) => {
	const navData = [
		{
			dropLabel: "Work",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Work",
							underline: "work-black-bold",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "Case Studies",
							url: "/"
						},
						{
							label: "Clients",
							url: "/"
						},
						{
							label: "Outcomes",
							url: "/"
						}
					]
				},
				{
					industries: [
						{
							col1: [
								{
									subCategoryType: "Industries",
									subLinks: [
										{
											label: "Technology",
											url: "/",
											bold: true
										},
										{
											label: "Artificial Intelligence",
											url: "/",
											bold: false
										},
										{
											label: "Cybersecurity",
											url: "/",
											bold: false
										},
										{
											label: "Cloud",
											url: "/",
											bold: false
										},
										{
											label: "SaaS",
											url: "/",
											bold: false
										},
										{
											label: "Services",
											url: "/",
											bold: false
										},
										{
											label: "Financial Services & Insurance",
											url: "/",
											bold: true
										},
										{
											label: "Healthcare",
											url: "/",
											bold: true
										},
									]
								},
							]
						},
						{
							col2: [
								{
									subLinks: [
										{
											label: "Manufacturing",
											url: "/",
											bold: true
										},
										{
											label: "Semiconductor",
											url: "/",
											bold: true
										},
										{
											label: "Consumer Goods",
											url: "/",
											bold: true
										},
										{
											label: "Renewable Energy",
											url: "/",
											bold: true
										},
										{
											label: "Construction & Real Estate",
											url: "/",
											bold: true
										},
										{
											label: "Higher Education",
											url: "/",
											bold: true
										},
										{
											label: "Non-Profit",
											url: "/",
											bold: true
										}
									]
								},
							]
						}
					]
				}
			]
		},
		{
			dropLabel: "Approach",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Approach",
							underline: "approach-black-bold",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "Collaboration Focus",
							url: "/"
						},
						{
							label: "Driving B2B Results",
							url: "/"
						},
						{
							label: "Design & Development Excellence",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "Services",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Services",
							underline: "service-black-bold",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subCategory: [
						{
							subCategoryType: "Strategic Branding & Positioning",
							subLinks: [
								{
									label: "Brand Strategy",
									url: "/"
								},
								{
									label: "Brand Messaging",
									url: "/"
								},
								{
									label: "Visual Identity",
									url: "/"
								},
								{
									label: "Data & Metrics Analysis",
									url: "/"
								},
								{
									label: "User Research",
									url: "/"
								},
							]
						},
						{
							subCategoryType: "Digital Experiences & Creative",
							subLinks: [
								{
									label: "Web Experiences",
									url: "/"
								},
								{
									label: "UX/UI Design",
									url: "/"
								},
								{
									label: "Creative & Content Services",
									url: "/"
								},
								{
									label: "Motion Graphics & Videos",
									url: "/"
								},
								{
									label: "Campaigns & Marketing",
									url: "/"
								},
							]
						},
						{
							subCategoryType: "Technology Infrastructure & Support",
							subLinks: [
								{
									label: "DXP & CMS Platforms",
									url: "/"
								},
								{
									label: "Technology Integration",
									url: "/"
								},
								{
									label: "Customer Web Development",
									url: "/"
								},
								{
									label: "Authoring & Publishing",
									url: "/"
								},
								{
									label: "Systems Support",
									url: "/"
								},
							]
						},
					]
				}
			]
		},
		{
			dropLabel: "Insights",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							underline: "insight-black-bold",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "About",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "About Clear",
							underline: "about-black-bold",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "Brand Story",
							url: "/"
						},
						{
							label: "Partners",
							url: "/"
						},
						{
							label: "History",
							url: "/"
						},
						{
							label: "News",
							url: "/"
						},
						{
							label: "Team",
							url: "/"
						},
						{
							label: "Careers",
							url: "/"
						},
						{
							label: "Awards",
							url: "/"
						},
						{
							label: "Contact Us",
							url: "/"
						}
					]
				}
			]
		}
	];
	// console.log(navData[0]?.subMenu[2]?.industries?.[0].col1[0].subCategoryType);
	const [headHeight, setheadHeight] = useState(0);
	const [bttmCoverHeight, setbttmCoverHeight] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const [slideDown, setSlideDown] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(Array(navData.length).fill(false));
	const [isHoverEnabled, setIsHoverEnabled] = useState(false);
	var hHeight;
	var bottomCoverHeight;
	useEffect(() => {
		const headerHeight = document.querySelector("header")?.offsetHeight;
		setheadHeight(headerHeight)
		var svgElement = document.querySelector('#clearLogoSVGElement');
		var svgElementBox = svgElement.getBoundingClientRect();
		var svgBottom = svgElementBox.bottom;
		var headerInit = document.querySelector('header');
		var headerInitBox = headerInit.getBoundingClientRect();
		var headerBottom = headerInitBox.bottom;
		var svgBtmToheadBtm = headerBottom - svgBottom;
		// console.log(svgElementBox);
		setbttmCoverHeight(svgBtmToheadBtm)
	}, [])

	useEffect(() => {
		// change bgColor on scroll
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		// toggle menu on smaller width
		const handleResize = () => {
			if (window.innerWidth > 991 && isMenuOpen) {
				setIsMenuOpen(false);
				setIsSubMenuOpen(Array(navData.length).fill(false));
			}
			setIsHoverEnabled(window.innerWidth > 991);
		};

		handleResize();

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [isMenuOpen, scrolled]);

	// toggle menu on smaller width
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleSubMenu = (index) => {
		const newSubMenuState = Array(navData.length).fill(false);
		newSubMenuState[index] = !isSubMenuOpen[index];
		setIsSubMenuOpen(newSubMenuState);
	};

	const handleClick = (index) => {
		if (!isHoverEnabled) {
			toggleSubMenu(index);
		}
	};

	const handleScroll = () => {
		const sticky = document.querySelector("#stickyNav .stickyOuter");
		const stickyHeight = document.querySelector("#stickyNav .stickyOuter")?.offsetHeight || 0;
		const header = document.querySelector("header");
		const headerHeight = document.querySelector("header")?.offsetHeight;
		// console.log(sticky);
		// console.log(headerHeight);
		var element = document.querySelector('.footer-clear-digital');
		// console.log(element);
		// Get the bounding rectangle of the element
		var footer = element.getBoundingClientRect();

		// Calculate the distance between the top of the screen and the top of the element
		var distanceFromTop = footer.top;

		// console.log('Distance from top:', distanceFromTop);
		if (!sticky && header) {
			if (distanceFromTop < headerHeight) {
				header.style.top = -headerHeight + 'px';
			} else {
				header.style.top = `0px`;
			}
		}

		if (sticky && header) {
			var totalHeight = stickyHeight + headerHeight;
			if (distanceFromTop < totalHeight) {
				header.style.top = -headerHeight + 'px';
			} else {
				header.style.top = `0px`;
			}
		}

	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [headerHeight, setheaderHeight] = useState(0);
	const [screenHeight, setScreenHeight] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			const headerHeight = document.querySelector("header")?.offsetHeight;
			const scrnHeight = window.innerHeight;
			// console.log(scrnHeight);
			setScreenHeight(scrnHeight);
			setheaderHeight(headerHeight)
			var svgElement = document.querySelector('#clearLogoSVGElement');
			var svgElementBox = svgElement.getBoundingClientRect();
			var svgBottom = svgElementBox.bottom;
			var headerInit = document.querySelector('header');
			var headerInitBox = headerInit.getBoundingClientRect();
			var headerBottom = headerInitBox.bottom;
			var svgBtmToheadBtm = headerBottom - svgBottom;
			// console.log(svgElementBox);
			setbttmCoverHeight(svgBtmToheadBtm)
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	// console.log(screenHeight);
	hHeight = {
		height: `${headHeight}px`
	};
	bottomCoverHeight = {
		...(screenHeight > 950 ? { height: `${bttmCoverHeight}px` } : { height: `${bttmCoverHeight - 2}px` }),
	};
	// console.log(bottomCoverHeight);

	return (
		<header className={`${styles.header} ${theme.theme === 'black' ? styles.blackHeader : ''} group fixed w-full top-0 left-0 z-50 transition-[top] duration-300 ease hover:bg-white ${scrolled ? styles.showCover : ''} ${isMenuOpen ? styles.showCover : ''}`}>
			<div className='container'>
				<div className={`wrapper flex justify-between lg:items-center`}>
					<div className={`${styles.logoWrap} ${scrolled && theme.theme === 'black' ? 'bg-white' : ''} lg:py-[1rem]`}>
						<span className='w-full h-full absolute left-0 bottom-0 block'>
							<span className='h-full w-full block'>
								<span className={`${styles.leftCover}`}>
								</span>
								<span className={`${styles.rightCover}`}>
								</span>
								<span className={`${styles.bottomCover}`} style={bottomCoverHeight}>
								</span>
							</span>
						</span>
						{/* style={{ transition: 'all 0.3s ease-in-out' }}  */}
						<Link className='absolute w-full h-full top-0 left-0 text-[0] z-[3]' aria-label="first link" href={"/"} data-circle-expand>.</Link>
						<div id='clearLogoSVGElement' className={`${styles.logoBox} relative`}>
							<span className={`${styles.topCover}`}>
							</span>
							<svg className={`${styles.clearLogoSvg}`} id='clearLogoSvg' viewBox="0 0 111 35" fill="none" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<mask id="svgMask" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
										<rect width="111" height="45" y='-5' fill={scrolled ? 'white' : 'transparent'} className={`group-hover:fill-black ${theme.theme === 'black' ? '!fill-black' : ''}`} />
										<g clipPath="url(#clip0_813_210)" fill={scrolled ? 'black' : 'white'} className={`group-hover:fill-black ${theme.theme === 'black' ? '!fill-black' : ''}`}>
											<path className={`group-hover:fill-[#faebd7] ${theme.theme === 'black' ? '!fill-[#faebd7]' : ''}`} d="M26.4464 0H30.2595C31.1759 0 31.9604 0.313731 32.6148 0.937746C33.2691 1.56349 33.5963 2.33747 33.5963 3.2597V35H26.4464V0Z" fill='inherit' />
											<path className={`group-hover:fill-[#faebd7] ${theme.theme === 'black' ? '!fill-[#faebd7]' : ''}`} d="M79.5278 21.2355C78.5634 21.6975 77.7206 22.1147 75.4989 22.5198L73.123 23.0145C71.8845 23.3455 71.0075 23.5316 70.4371 24.2987C69.918 24.9986 69.7142 25.7484 69.7142 26.4724C69.7142 27.4602 70.0242 28.2514 70.6443 28.8444C71.2644 29.3719 72.1586 29.6339 73.3303 29.6339C76.2851 29.6339 77.2427 29.2288 78.4709 28.0532C79.5723 26.9999 79.5278 25.5519 79.5278 23.7057V21.2373V21.2355ZM81.7752 33.3866C80.4716 34.0572 78.6473 34.6312 77.0388 34.8622C76.1686 34.9863 74.3032 35.0414 72.2973 34.9673C69.8204 34.876 67.6501 34.3243 65.7898 33.0401C63.9312 31.7559 63.0011 29.6322 63.0011 26.669C63.0011 23.9023 63.8439 21.9285 65.5311 20.7425C67.2184 19.5566 69.3699 18.7671 71.9873 18.3723C71.9873 18.3723 74.2587 18.0431 74.8788 17.9776C77.9073 17.5828 79.4233 16.7261 79.4233 15.4091C79.4233 14.4214 78.8888 13.7801 77.8217 13.4836C76.7528 13.1871 75.773 13.0389 74.8788 13.0389C73.9144 13.0389 73.0528 13.1716 72.2973 13.4336C71.5385 13.6974 70.9886 14.1921 70.6443 14.9161H63.724C63.998 12.8751 64.9642 11.1961 66.6155 9.87744C68.4757 8.36222 71.1257 7.60547 74.5687 7.60547C78.4246 7.60547 81.3161 8.23121 83.2449 9.48269C85.2405 10.8014 86.2409 12.6441 86.2409 15.0144V24.6038C86.2409 27.2378 85.8246 29.3581 84.7437 30.7785C83.8633 31.9334 83.2363 32.4523 81.7769 33.39" fill='inherit' />
											<path className={`group-hover:fill-[#faebd7] ${theme.theme === 'black' ? '!fill-[#faebd7]' : ''}`} d="M88.7842 35.0002V21.3202C88.7842 18.7517 89.1799 16.5952 89.973 14.849C90.7627 13.1045 91.847 11.7048 93.2259 10.6516C94.5329 9.66384 96.066 8.93984 97.8218 8.47786C99.5776 8.01761 101.385 7.78662 103.243 7.78662H104.276V14.8008H101.9C99.903 14.8008 98.423 15.2627 97.4603 16.1832C96.4959 17.1072 96.0146 18.5535 96.0146 20.5307V31.613C96.0146 33.485 94.4284 35.0019 92.4722 35.0019H88.7842V35.0002Z" fill='inherit' />
											<path className={`group-hover:fill-[#faebd7] ${theme.theme === 'black' ? '!fill-[#faebd7]' : ''}`} d="M21.7015 27.6723C20.8707 26.8966 19.6203 26.8587 18.7073 27.5344C17.2221 28.6325 15.7199 29.2444 13.6215 29.2444C9.51551 29.2444 6.42019 25.8589 6.42019 21.3684V21.2943C6.42019 16.8469 9.51722 13.4923 13.6215 13.4923C15.3225 13.4923 16.859 13.9871 18.4332 15.0662C19.4096 15.7367 20.7406 15.5213 21.5182 14.6266L23.9729 11.7996C21.1362 8.98806 17.9553 7.73486 13.6592 7.73486C5.87204 7.73486 0 13.5958 0 21.3684V21.4425C0 29.172 5.77611 35.0019 13.4365 35.0019C17.9519 35.0019 21.0592 33.6401 24.1613 30.3011L24.3275 30.1218L21.7015 27.6723Z" fill='inherit' />
											<path className={`group-hover:fill-[#faebd7] ${theme.theme === 'black' ? '!fill-[#faebd7]' : ''}`} d="M58.0728 11.1924C55.8014 8.82048 52.5982 7.63623 48.4682 7.63623C44.3383 7.63623 41.4794 8.85496 39.2748 11.2907C37.1404 13.6609 36.0732 16.9551 36.0732 21.1698C36.0732 25.3845 37.1747 28.9751 39.3775 31.3454C41.5804 33.7828 44.6449 34.9998 48.571 34.9998C51.8068 34.9998 54.4927 34.2431 56.6271 32.7278C58.7597 31.2798 60.2072 29.1716 60.9643 26.4049L56.5637 26.4015C55.3252 26.4015 54.1741 26.9514 53.2971 27.8323C52.5794 28.5511 51.2861 29.2699 48.9838 29.2699C47.1921 29.2699 45.8491 28.7441 44.955 27.6892C43.9906 26.7014 43.4732 25.1862 43.4064 23.1452H61.2709C61.2709 23.1452 61.3771 22.3437 61.3771 22.0213V21.8748C61.3771 17.5274 60.2757 13.6299 58.0728 11.1924ZM43.4064 18.6996C43.475 16.9878 43.9906 15.6709 44.955 14.7486C45.9176 13.8264 47.1578 13.3661 48.6738 13.3661C50.3251 13.3661 51.5995 13.8281 52.4954 14.7486C53.3228 15.6054 53.8024 16.9206 53.9412 18.6996H43.4064Z" fill='inherit' />
										</g>
									</mask>
								</defs>

								<rect width="111" height="45" y='-5' fill="white" mask="url(#svgMask)" className={`group-hover:fill-black ${theme.theme === 'black' ? '!fill-black' : ''}`} />
								<path d="M105.606 24.228C102.629 24.228 100.298 26.5741 100.298 29.5684C100.298 32.5626 102.629 35 105.606 35C108.583 35 111 32.6143 111 29.5684C111 26.5224 108.631 24.228 105.606 24.228ZM108.268 29.5684C108.268 31.0974 107.124 32.2489 105.606 32.2489C104.089 32.2489 103.032 31.0956 103.032 29.5684C103.032 28.0411 104.162 26.9792 105.606 26.9792C107.05 26.9792 108.268 28.1169 108.268 29.5684Z" fill="#fa198c" />
							</svg>
						</div>
					</div>

					<div className={`${styles.alignNav} nav__wrap lg:absolute lg:left-0 lg:top-[calc(100%+1px)] lg:w-full lg:overflow-y-scroll lg:bg-white transition-max-height duration-700 ease ${isMenuOpen ? 'lg:h-[95vh]' : 'lg:h-0'}`}>
						<div className='lg-up:flex lg-up:items-center lg-up:gap-x-[5rem] lg:min-h-[calc(100vh-95px)]'>
							<nav className=''>
								<ul className='lg-up:flex'>
									{navData.map((item, index) => (
										<li key={index} className={`${styles.menu} ${index != navData.length - 1 ? "lg-up:pr-[6.6rem]" : ''} ${item.dropLabel}_menu lg:border-b lg:border-black/[0.2]`}>
											<div className='lg:relative'>
												<p className={`${styles.borderPink} ${styles.litext} cursor-pointer lg-up:text-[2rem] font-bold py-[3rem] lg-up:py-[4.2rem] transition-all duration-300 ease group-hover:text-black ${scrolled ? 'text-black' : 'lg-up:text-white'} ${isSubMenuOpen[index] ? '' : ''}`} onClick={() => handleClick(index)}>{item.dropLabel}</p>
												<span className='lg-up:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 border-[0.4rem] border-pink rounded-full h-[3.5rem] w-[3.5rem] inline-block' onClick={() => toggleSubMenu(index)}>
													<span className='bg-pink rounded-full w-[1.3rem] h-[0.4rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
													<span className={`bg-pink rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isSubMenuOpen[index] ? 'w-[1.3rem] h-[0.4rem]' : 'w-[0.4rem] h-[1.3rem]'}`}></span>
												</span>
											</div>
											<ul className={`sub__menu bg-white  lg-up:absolute lg-up:left-0 lg-up:top-[calc(100%+1px)] w-full transition-max-height duration-500 lg:duration-500 ease overflow-hidden ${isSubMenuOpen[index] ? 'max-h-[1000vh] h-auto' : 'max-h-0'}`}>
												<li className='container lg:p-[0!important]'>
													<div className={`lg-up:flex lg-up:pt-[5.6rem] lg-up:pb-[4.5rem] lg:pb-[1.6rem] ${item.dropLabel === 'About' ? 'lg-up:min-h-[44rem]' : 'lg-up:min-h-[34rem]'}`}>
														{item?.subMenu.map((subMenuItem, subIndex) => (
															<>
																{subMenuItem?.description && (
																	<div className={`grow-0 shrink-0 flex-[40%] ${subIndex === item.subMenu.length - 1 ? 'laptop:ml-[3rem]' : ''}`}>
																		<div className='max-w-[45rem]'>
																			{subMenuItem.description.map((desc, descIndex) => (
																				<div key={descIndex}>
																					<h3 className={`underline-container ${desc.underline} relative inline-block leading-1 pb-[0.8rem] lg:hidden`}>{desc.heading}</h3>
																					<p className={`small mt-[1.4rem] lg:mt-0 lg:pr-[0.1rem]`}>{desc.subText}</p>
																					<Link data-circle-expand href={desc.url} className='tertiary-btn black mt-[3rem] lg:mt-[2rem]'>{desc.label}</Link>
																				</div>
																			))}
																		</div>
																	</div>
																)}
																{subMenuItem?.subItems && (
																	<div className={`lg-up:pl-[0.6rem] flex-[28%]`}>
																		<ul className={`lg:mt-[4.3rem] ${item.dropLabel === 'About' || item.dropLabel === 'Insights' ? 'xxl-up:w-[68%]' : ''}`}>
																			{subMenuItem.subItems.map((subItem, subItemIndex) => (
																				<li key={subItemIndex} className={`${subMenuItem.subItems.length > 4 ? `lg-up:w-[42%] inline-block ${subItemIndex === 0 ? 'pt-0' : ''} ${subItemIndex === 1 ? 'pt-0' : ''}` : `${subItemIndex === 0 ? 'pt-0' : ''}`}  py-[1.5rem] pr-[2rem] lg:w-full lg:pt-[1.3rem] lg:pb-[2.2rem]`}>
																					<Link data-circle-expand href={subItem.url} className='text-[20px] lg:text-[16px] font-bold largedesktop-up:text-[2rem]'>{subItem.label}</Link>
																				</li>
																			))}
																		</ul>
																	</div>
																)}
																{subMenuItem?.industries && Array.isArray(subMenuItem?.industries) && (
																	<div className={`${subMenuItem?.industries ? 'flex-[70%]' : ''} ${styles.industryDivider} lg:pt-[1.3rem]`}>
																		{subMenuItem?.industries[0].col1[0].subCategoryType && (
																			<div className='w-full'>
																				<p className={`lg-up:!text-[20px] lg:text-[16px] font-bold largedesktop-up:text-[2rem]`}>{subMenuItem?.industries[0].col1[0].subCategoryType}</p>
																			</div>
																		)}
																		<div className='w-full lg-up:flex gap-x-[1rem] lg-up:mt-[2.4rem]'>
																			{subMenuItem?.industries.map((item, itemIndex) => (
																				<div key={itemIndex} className={`lg:w-full`}>
																					{item.col1 && item.col1[0]?.subLinks && (
																						<ul className={`lg:mt-[2.3rem]`}>
																							{item.col1[0].subLinks?.map((ind, indIndex) => (
																								<li key={indIndex} className={`pr-[2rem] lg:w-full text-[16px] lg:pt-[1.3rem] lg:pb-[2.2rem] lg-up:mb-[1.9rem] ${indIndex === 0 ? '!mt-0' : ''} ${ind.bold === true ? 'font-bold lg-up:mt-[3rem]' : ''}`}>
																									<Link data-circle-expand href={ind.url} className=''>{ind.label}</Link>
																								</li>
																							))}
																						</ul>
																					)}
																				</div>
																			))}
																			{subMenuItem?.industries.map((item, itemIndex) => (
																				<div key={itemIndex} className={`lg:w-full`}>
																					{item.col2 && item.col2[0]?.subLinks && (
																						<ul className={`lg:mt-[2.3rem]`}>
																							{item.col2[0].subLinks?.map((ind, indIndex) => (
																								<li key={indIndex} className={`pr-[2rem] lg:w-full text-[16px] lg:pt-[1.3rem] lg:pb-[2.2rem] lg-up:mb-[3rem] ${ind.bold === true ? 'font-bold' : ''}`}>
																									<Link data-circle-expand href={ind.url} className=''>{ind.label}</Link>
																								</li>
																							))}
																						</ul>
																					)}
																				</div>
																			))}
																		</div>
																	</div>
																)}


																{subMenuItem?.subCategory && Array.isArray(subMenuItem.subCategory) && (
																	<div className={`lg-up:flex lg-up:flex-wrap lg-up:gap-y-[4rem] lg:mt-[3rem]`}>
																		{subMenuItem.subCategory.map((subItem, subItemIndex) => (
																			<div key={subItemIndex} className={`${styles.subCategoryContainer} lg:mb-[3rem] w-1/2 lg:w-full`}>
																				<p className='lg-up:!text-[20px] lg:text-[16px]'>{subItem.subCategoryType}</p>
																				<ul className={`lg-up:mt-[1rem] lg:w-full lg:mt-[2.3rem]`}>
																					{subItem.subLinks.map((sublink, linkIndex) => (
																						<li key={linkIndex} className={`py-[1.5rem] pr-[2rem] lg:w-full text-[16px] font-bold lg:pt-[1.3rem] lg:pb-[2.2rem]`}>
																							<Link data-circle-expand href={sublink.url} className=''>{sublink.label}</Link>
																						</li>
																					))}
																				</ul>
																			</div>
																		))}
																	</div>
																)}
															</>
														))}
													</div>
												</li>
											</ul>
										</li>
									))}
								</ul>
							</nav>
							<div className="lg:pb-[100px] lg:mt-[3rem]">
								<Link href={'/'} className="btn pink lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full">Let&apos;s talk</Link>
							</div>
						</div>
					</div>
					<button data-circle-expand aria-label="first link" className={`w-[35px] h-[28px] relative transition-transform duration-500 !cursor-pointer lg-up:hidden`} onClick={toggleMenu}>
						<ul>
							<li className={`h-[4px] absolute rounded transition-all duration-300 ease-in-out ${theme.theme === 'black' ? '!bg-black' : ''} bg-white group-hover:bg-black w-[30px] right-0 ${isMenuOpen ? 'transform rotate-[135deg] top-[12px] w-[25px!important] bg-[black!important]' : 'top-0'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
							<li className={`h-[4px] absolute w-full rounded transition-all duration-300 ease-in-out ${theme.theme === 'black' ? '!bg-black' : ''} bg-white group-hover:bg-black ${isMenuOpen ? 'opacity-0 left-[-60px] bg-[black!important]' : 'top-[11px] left-0'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
							<li className={`h-[4px] absolute rounded transition-all duration-300 ease-in-out ${theme.theme === 'black' ? '!bg-black' : ''} bg-white group-hover:bg-black w-[25px] right-0 ${isMenuOpen ? 'transform rotate-[-135deg] top-[12px] w-[25px!important] bg-[black!important]' : 'top-[22px]'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
						</ul>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

