import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className='bg-black'>
			<div className="footer-clear-digital pt-32 md:pt-[4rem] z-[2]">
				<div className="container">
					<div className="outer-wrap flex flex-wrap lg-up:pb-[25rem] lg:pb-[10rem] sm:pb-[7rem!important]">
						<div className="item small xl-up:w-[33%] laptop:w-[25%] laptop:mr-[6rem] tablet:w-1/2 phablet:w-1/2 sm:w-full">
							<div
								className={`${styles.logo} relative img-wrap mb-[5rem] sm:md-[4rem] max-w-[11.5rem] h-[4rem]`}
							>
								<Link href="/" className="redirect" data-cursor-expand="true">
									.
								</Link>
								<svg
									id="svg1"
									viewBox="0 0 111 35"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_813_210)">
										<path
											d="M105.606 24.228C102.629 24.228 100.298 26.5741 100.298 29.5684C100.298 32.5626 102.629 35 105.606 35C108.583 35 111 32.6143 111 29.5684C111 26.5224 108.631 24.228 105.606 24.228ZM108.268 29.5684C108.268 31.0974 107.124 32.2489 105.606 32.2489C104.089 32.2489 103.032 31.0956 103.032 29.5684C103.032 28.0411 104.162 26.9792 105.606 26.9792C107.05 26.9792 108.268 28.1169 108.268 29.5684Z"
											fill="#fa198c"
										/>
										<path
											d="M26.4464 0H30.2595C31.1759 0 31.9604 0.313731 32.6148 0.937746C33.2691 1.56349 33.5963 2.33747 33.5963 3.2597V35H26.4464V0Z"
											fill="#fff"
											className={`transition-fill duration-300 ease group-hover:fill-black fill-white`}
										/>
										<path
											d="M79.5278 21.2355C78.5634 21.6975 77.7206 22.1147 75.4989 22.5198L73.123 23.0145C71.8845 23.3455 71.0075 23.5316 70.4371 24.2987C69.918 24.9986 69.7142 25.7484 69.7142 26.4724C69.7142 27.4602 70.0242 28.2514 70.6443 28.8444C71.2644 29.3719 72.1586 29.6339 73.3303 29.6339C76.2851 29.6339 77.2427 29.2288 78.4709 28.0532C79.5723 26.9999 79.5278 25.5519 79.5278 23.7057V21.2373V21.2355ZM81.7752 33.3866C80.4716 34.0572 78.6473 34.6312 77.0388 34.8622C76.1686 34.9863 74.3032 35.0414 72.2973 34.9673C69.8204 34.876 67.6501 34.3243 65.7898 33.0401C63.9312 31.7559 63.0011 29.6322 63.0011 26.669C63.0011 23.9023 63.8439 21.9285 65.5311 20.7425C67.2184 19.5566 69.3699 18.7671 71.9873 18.3723C71.9873 18.3723 74.2587 18.0431 74.8788 17.9776C77.9073 17.5828 79.4233 16.7261 79.4233 15.4091C79.4233 14.4214 78.8888 13.7801 77.8217 13.4836C76.7528 13.1871 75.773 13.0389 74.8788 13.0389C73.9144 13.0389 73.0528 13.1716 72.2973 13.4336C71.5385 13.6974 70.9886 14.1921 70.6443 14.9161H63.724C63.998 12.8751 64.9642 11.1961 66.6155 9.87744C68.4757 8.36222 71.1257 7.60547 74.5687 7.60547C78.4246 7.60547 81.3161 8.23121 83.2449 9.48269C85.2405 10.8014 86.2409 12.6441 86.2409 15.0144V24.6038C86.2409 27.2378 85.8246 29.3581 84.7437 30.7785C83.8633 31.9334 83.2363 32.4523 81.7769 33.39"
											fill={'#fff'}
											className={`transition-fill duration-300 ease group-hover:fill-black fill-white`}
										/>
										<path
											d="M88.7842 35.0002V21.3202C88.7842 18.7517 89.1799 16.5952 89.973 14.849C90.7627 13.1045 91.847 11.7048 93.2259 10.6516C94.5329 9.66384 96.066 8.93984 97.8218 8.47786C99.5776 8.01761 101.385 7.78662 103.243 7.78662H104.276V14.8008H101.9C99.903 14.8008 98.423 15.2627 97.4603 16.1832C96.4959 17.1072 96.0146 18.5535 96.0146 20.5307V31.613C96.0146 33.485 94.4284 35.0019 92.4722 35.0019H88.7842V35.0002Z"
											fill="#fff"
											className={`transition-fill duration-300 ease group-hover:fill-black fill-white`}
										/>
										<path
											d="M21.7015 27.6723C20.8707 26.8966 19.6203 26.8587 18.7073 27.5344C17.2221 28.6325 15.7199 29.2444 13.6215 29.2444C9.51551 29.2444 6.42019 25.8589 6.42019 21.3684V21.2943C6.42019 16.8469 9.51722 13.4923 13.6215 13.4923C15.3225 13.4923 16.859 13.9871 18.4332 15.0662C19.4096 15.7367 20.7406 15.5213 21.5182 14.6266L23.9729 11.7996C21.1362 8.98806 17.9553 7.73486 13.6592 7.73486C5.87204 7.73486 0 13.5958 0 21.3684V21.4425C0 29.172 5.77611 35.0019 13.4365 35.0019C17.9519 35.0019 21.0592 33.6401 24.1613 30.3011L24.3275 30.1218L21.7015 27.6723Z"
											fill={'#fff'}
											className={`transition-fill duration-300 ease group-hover:fill-black fill-white`}
										/>
										<path
											d="M58.0728 11.1924C55.8014 8.82048 52.5982 7.63623 48.4682 7.63623C44.3383 7.63623 41.4794 8.85496 39.2748 11.2907C37.1404 13.6609 36.0732 16.9551 36.0732 21.1698C36.0732 25.3845 37.1747 28.9751 39.3775 31.3454C41.5804 33.7828 44.6449 34.9998 48.571 34.9998C51.8068 34.9998 54.4927 34.2431 56.6271 32.7278C58.7597 31.2798 60.2072 29.1716 60.9643 26.4049L56.5637 26.4015C55.3252 26.4015 54.1741 26.9514 53.2971 27.8323C52.5794 28.5511 51.2861 29.2699 48.9838 29.2699C47.1921 29.2699 45.8491 28.7441 44.955 27.6892C43.9906 26.7014 43.4732 25.1862 43.4064 23.1452H61.2709C61.2709 23.1452 61.3771 22.3437 61.3771 22.0213V21.8748C61.3771 17.5274 60.2757 13.6299 58.0728 11.1924ZM43.4064 18.6996C43.475 16.9878 43.9906 15.6709 44.955 14.7486C45.9176 13.8264 47.1578 13.3661 48.6738 13.3661C50.3251 13.3661 51.5995 13.8281 52.4954 14.7486C53.3228 15.6054 53.8024 16.9206 53.9412 18.6996H43.4064Z"
											fill={'#fff'}
											className={`transition-fill duration-300 ease group-hover:fill-black fill-white`}
										/>
									</g>
									<defs>
										<clipPath id="clip0_813_210">
											<rect width="111" height="35" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="location-wrap mb-[2.5rem] sm:mb-[2rem] flex">
								<div className="icon-wrap mr-[2rem]">
									<Link href="/" className="icon" data-cursor-expand="true">
										<span className="sr-only">Address</span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Link>
								</div>
								<div className="location-title">
									<p className="small">
										1570 The Alameda #330, <br /> San Jose, CA 95126
									</p>
								</div>
							</div>
							<div className="contact-wrap mb-[2.5rem] sm:mb-[2rem] flex">
								<div className="icon-wrap mr-[2rem]">
									<Link href="/" className="icon">
										<span className="sr-only">Telephone</span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M12 18H12.01"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Link>
								</div>
								<div className="contact-title">
									<p className="small ">
										<Link
											href="tel:408.246.0000"
											className="contact-link text-white"
										>
											408.246.0000
										</Link>
									</p>
								</div>
							</div>
							<div className="social-icons flex items-center sm:mt-[3rem]">
								<div className={`${styles.icon} relative p-[5px] xxl-up:p-[0.5rem] lg:mr-[30px] lg-up:mr-[3rem] xxl-up:mr-[0.5rem] rounded-full w-[25px] h-[25px] xxl-up:w-[2.5rem] xxl-up:h-[2.5rem]`}>
									<a href="https://www.facebook.com/cleardigitalinc" target="_blank" className="group">
										<span className="sr-only">Facebook</span>
										<svg fill="#000000" version="1.1" id="Layer_1"
											viewBox="0 0 310 310">
											<g id="XMLID_834_">
												<path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
											</g>
										</svg>
									</a>
								</div>

								<div className={`${styles.icon} relative p-[4px] xxl-up:p-[0.4rem] lg:mr-[30px] lg-up:mr-[3rem] xxl-up:mr-[0.5rem] rounded-full w-[25px] h-[25px] xxl-up:w-[2.5rem] xxl-up:h-[2.5rem]`}>
									<a href="https://www.instagram.com/cleardigitalinc" target="_blank" className="group">
										<span className="sr-only">Instagram</span>
										<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" />
											<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" />
											<path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" />
										</svg>
									</a>
								</div>

								<div className={`${styles.icon} relative p-[5px] xxl-up:p-[0.5rem] lg:mr-[30px] lg-up:mr-[3rem] xxl-up:mr-[0.5rem] rounded-full w-[25px] h-[25px] xxl-up:w-[2.5rem] xxl-up:h-[2.5rem]`}>
									<a href="https://www.linkedin.com/company/cleardigitalinc" target="_blank" className="group">
										<span className="sr-only">Linkdin</span>
										<svg fill="#000000" version="1.1" id="Layer_1"
											viewBox="0 0 310 310">
											<g id="XMLID_801_">
												<path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
												<path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
												<path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
											</g>
										</svg>
									</a>
								</div>

								<div className={`${styles.icon} relative p-[5px] xxl-up:p-[0.5rem] rounded-full w-[25px] h-[25px] xxl-up:w-[2.5rem] xxl-up:h-[2.5rem]`}>
									<a href="https://twitter.com/cleardigitalinc" target="_blank" className="group">
										<span className="sr-only">Twitter</span>
										<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48">
											<g>
												<g id="Layer_1">
													<path d="M36.7,3.8h6.7l-14.7,16.8,17.3,22.9h-13.6l-10.6-13.9-12.2,13.9H2.9l15.8-18L2,3.8h13.9l9.6,12.7,11.1-12.7ZM34.3,39.5h3.7L13.9,7.6h-4l24.4,31.9Z" />
												</g>
											</g>
										</svg>
									</a>
								</div>

							</div>
						</div>
						<div className="item medium lg-up:w-[18%] laptop:!w-[21%] tablet:w-1/2 phablet:w-1/2 sm:w-full sm:mt-[4rem]">
							<div className="list-item">
								<ul className="sm:pl-0 pl-[2rem]">
									<li className="mb-[2.5rem]">
										<Link
											href="/work"
											className={`h5 ${styles.footerLink}`}
											data-cursor-expand="true"
										>
											Work{' '}
										</Link>
									</li>
									<li className="mb-[2.5rem]">
										<Link
											href="/approach"
											className={`h5 ${styles.footerLink}`}
											data-cursor-expand="true"
										>
											Approach
										</Link>
									</li>
									<li className="mb-[2.5rem]">
										<Link
											href="/our-services"
											className={`h5 ${styles.footerLink}`}
											data-cursor-expand="true"
										>
											Services{' '}
										</Link>
									</li>
									<li className="mb-[2.5rem]">
										<Link
											href="/about"
											className={`h5 ${styles.footerLink}`}
											data-cursor-expand="true"
										>
											About{' '}
										</Link>
									</li>
									<li className="mb-[2.5rem]">
										<Link
											href="/about/contact-us"
											className={`h5 ${styles.footerLink}`}
											data-cursor-expand="true"
										>
											Contact us
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="item large lg-up:w-[48%] laptop:!w-[49%] w-full lg:mt-[3rem] sm:mt-[1rem!important]">
							<div className="content-wrap relative flex sm:flex-wrap">
								<Link
											href="/habu/cropped.png"
											target="_blank"
											className="redirect"
											download
										>
											.
									</Link>
								<div className="img-box w-[30%] laptop:w-[18rem] sm:w-[140px]">
									<div className="footer__img">
										<Image
											src="/Footer_Asset_Large.png"
											alt="Red Circle"
											height={100}
											width={100}
											quality={100}
											unoptimized
											className="h-full w-full object-cover"
										/>
									</div>
								</div>
								<div className="intro w-[70%] laptop:w-[calc(100%-18rem)] sm:w-full sm:pl-0 sm:mt-[20px] pl-[3rem] text-white">
									<h4 className="mb-5">
										Fortune 500 B2B Homepage Rankings Report
									</h4>
									<p className="mb-[3.2rem] mt-[2rem] sm:mt-[1rem] sm:mb-[2rem]">
										Discover key strategies from top B2B tech companies&apos; homepages in our latest Fortune 500 analysis.
									</p>
									<div className="btnWrap mt-5">
										<Link
											href="/habu/cropped.png"
											target="_blank"
											className="tertiary-btn"
											download
										>
											Download
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="wrapper pb-20 sm:pb-[4rem] border-b border-white">
						<div className="title-wrap">
							<h4 className="text-white">
								Confidently navigating <span className="text-pink">change</span>
								.
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-myrious pt-20 pb-24 sm:pb-[5rem]">
				<div className="container">
					<div className="content-wrapper flex sm:flex-wrap">
						<div
							className={`${styles.myrious_logo} logo-wrap w-[100%] max-w-[11.5rem] sm:w-[100px]`}
						>
							<Link href="/" data-cursor-expand="true">
								<Image
									src="/myrious_logo.png"
									alt="Myrious"
									className="w-full"
									height={100}
									width={100}
								/>
							</Link>
						</div>
						<div className="title-wrap text-white md-up:pl-[5rem] pl-[2rem] md-up:max-w-[107rem] md:w-[80%] sm:mt-[20px] sm:w-[100%!important] sm:pl-0">
							<h5 className="font-[400!important] mb-[4rem] subtitle sm:mb-[2.5rem] leading-[1.2] lg:mb-[2rem]">
								Clear Digital is a founding member of Myrious Group’s
								expertise-driven agencies.{' '}
							</h5>
							<p className="small max-w-[99rem]">
								Myrious Group is an independent holding company enabling
								forward-thinking brands to achieve breakthrough performance
								through power of orchestration.{' '}
							</p>
							<div className="btnWrap mt-[4rem] sm:mt-[1.5rem] lg:mt-[3rem]">
								<Link href="https://www.myrious.com/" className="tertiary-btn" target='_blank'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom py-10 sm:py-[3rem] bg-white">
				<div className="container">
					<div className="wrapper flex justify-between sm:flex-wrap">
						<div className="logo-outer">
							<div className="logo-inner-wrap">
								<Link href="/" passHref data-cursor-expand="true">
									<Image
										src="/clear.svg"
										alt="clear"
										height={100}
										width={100}
										className="sm-up:max-w-[35px] sm:w-[40px]"
									/>
								</Link>
							</div>
						</div>
						<div className="copyright-list flex flex-wrap items-center ml-[2rem] lg:pl-[11rem] md:ml-[-2rem] sm:!pl-0 sm:!ml-0 sm:mt-[2.2rem]">
							<ul className="flex text-center gap-[2rem] sm:!gap-[1.6rem] lg:gap-y-[1rem] lg:flex-wrap sm:text-left">
								<li className="sm:w-full">
									<Link
										href="/"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										© {new Date().getFullYear()} Clear Digital, Inc.
									</Link>
								</li>
								{/* <li className="sm:w-full">
									<Link
										href="/"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										Email Subscriptions
									</Link>
								</li> */}
								<li className="sm:w-full">
									<Link
										href="/terms-of-use"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										Terms of Use
									</Link>
								</li>
								<li className="sm:w-full">
									<Link
										href="/privacy"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										Privacy
									</Link>
								</li>
								{/* <li className="sm:w-full">
									<Link
										href="/"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										Cookie Policy
									</Link>
								</li>
								<li className="sm:w-full">
									<Link
										href="/"
										className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all"
										data-cursor-expand="true"
									>
										Cookie Settings
									</Link>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
