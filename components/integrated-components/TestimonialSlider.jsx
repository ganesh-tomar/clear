import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/colTwoSlider.module.css';
import Demo from '../Demo';
import Lottie from 'react-lottie';
import quote from '../../public/Lootie/Quote-Marks-Black-Marker-Icon.json';

gsap.registerPlugin(ScrollTrigger);

const TestimonialSlider = (data) => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isWideScreen, setIsWideScreen] = useState(false);
	const [fullWidthSlides, setFullWidthSlides] = useState([]);
	const slideRefs = useRef([]);
	const totalSlides = Math.ceil(data.items.length);


	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Play the animation only when it comes into view
					if (animationState.isStopped) {
						setAnimationState({ isStopped: false, isPaused: false });
					}
				} else {
					// Stop the animation when it leaves the view
					if (!animationState.isStopped) {
						setAnimationState({ isStopped: true, isPaused: false });
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1, // Adjust this threshold as needed
		});

		// Select all elements with the class 'quotelottieBox' inside 'testimonialSlider'
		const animationContainers = document.querySelectorAll('.testimonialSlider .quotelottieBox');

		// Observe each element found
		animationContainers.forEach((container) => {
			observer.observe(container);
		});

		// Cleanup function to unobserve all elements
		return () => {
			animationContainers.forEach((container) => {
				observer.unobserve(container);
			});
		};
	}, []);




	useEffect(() => {
		const handleResize = () => {
			setTimeout(() => {
				setIsWideScreen(window.innerWidth > 991);
			}, 1000);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let array = [];
		if (data && Array.isArray(data.items)) {
			for (let index = 0; index < data.items.length; index++) {
				const item = data.items[index];
				if (item.type === 'full-width-text') {
					array.push(index);
				}
			}
		}
		setFullWidthSlides(array);
		if (window.innerWidth > 991) {
			setDimention();
		}
	}, [windowWidth]);

	useEffect(() => {
		const handleResize = debounce(() => {
			animateInitialSlide();
			setDimention();
		}, 500); // 500ms debounce

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const animateInitialSlide = () => {
		const currentLeft = slideRefs.current[currentSlide];
		const currentRight = slideRefs.current[currentSlide + data.items.length];

		gsap.set(currentLeft, { x: '0%' });
		gsap.set(currentRight, { x: '0%' });

		for (let i = 0; i < data.items.length; i++) {
			if (i !== currentSlide) {
				const leftSlide = slideRefs.current[i];
				const rightSlide = slideRefs.current[i + data.items.length];
				gsap.set(leftSlide, { x: '100%' });
				gsap.set(rightSlide, { x: '-100%' });
			}
		}
	};

	useEffect(() => {
		if (totalSlides > 1) {
			const interval = setInterval(() => {
				handleNextSlideLoop();
			}, 5000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [currentSlide]);

	const handleNextSlideLoop = () => {
		if (window.innerWidth < 1200 && window.innerWidth > 991) {
			const nextSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
			// Trigger the slide animation
			animateSlide(nextSlide, 'right');
			setCurrentSlide(nextSlide); // Now update the state with the next slide
		}
	};

	const handlePrevSlide = () => {
		if (currentSlide > 0) {
			animateSlide(currentSlide - 1, 'left');
		}
	};

	const handleNextSlide = () => {
		if (currentSlide < data.items.length - 1) {
			animateSlide(currentSlide + 1, 'right');
		}
	};

	const animateSlide = (index, direction) => {
		const currentLeft = slideRefs.current[currentSlide];
		const nextLeft = slideRefs.current[index];
		const currentRight = slideRefs.current[currentSlide + data.items.length];
		const nextRight = slideRefs.current[index + data.items.length];

		// Select the quotationMark element
		const quotationMark = document.querySelector(`.${styles.quotationMark}`);

		const tl = gsap.timeline();

		if (direction === 'right') {
			tl.to(currentLeft, { x: '101%', duration: 0.6, ease: 'power3.out' })
				.to(
					currentRight,
					{ x: '101%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextLeft,
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight,
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				);

			// Sequence animations for right part elements with adjusted delays
			tl.fromTo(
				nextRight.querySelector('.heading'),
				{ x: '-101%' },
				{ x: '0%', duration: 0.6, ease: 'power3.out' },
				'-=0.6',
			)
				.fromTo(
					nextRight.querySelector('.author'),
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.designation'),
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.logo'),
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.slideBtn'),
					{ x: '-101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.8',
				);

			// Animate the quotation mark
			tl.fromTo(
				quotationMark,
				{ x: '-100%' },
				{ x: '0%', duration: 0.6, ease: 'power3.out' },
				'-=0.6',
			);
		} else if (direction === 'left') {
			tl.to(currentLeft, { x: '-101%', duration: 0.6, ease: 'power3.out' })
				.to(
					currentRight,
					{ x: '-101%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextLeft,
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight,
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				);

			// Sequence animations for right part elements with adjusted delays
			tl.fromTo(
				nextRight.querySelector('.heading'),
				{ x: '101%' },
				{ x: '0%', duration: 0.6, ease: 'power3.out' },
				'-=0.6',
			)
				.fromTo(
					nextRight.querySelector('.author'),
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.designation'),
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.logo'),
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.6',
				)
				.fromTo(
					nextRight.querySelector('.slideBtn'),
					{ x: '101%' },
					{ x: '0%', duration: 0.6, ease: 'power3.out' },
					'-=0.8',
				);

			// Animate the quotation mark
			tl.fromTo(
				quotationMark,
				{ x: '100%' },
				{ x: '0%', duration: 0.6, ease: 'power3.out' },
				'-=0.6',
			);
		}

		setCurrentSlide(index);
	};

	const setDimention = () => {
		const colTwoSliders = document.querySelectorAll('.colTwoSlider');
		colTwoSliders.forEach((slider) => {
			const colTwoSliderContents = slider.querySelectorAll(
				'.colTwoSlider_content',
			);
			let maxHeight = 0;

			if (window.innerWidth > 991) {
				colTwoSliderContents.forEach((content) => {
					const contentHeight = content.offsetHeight;
					if (contentHeight > maxHeight) {
						maxHeight = contentHeight;
					}
				});

				const colTwoSliderRight = slider.querySelector(
					'.colTwoSlider__item--inner',
				);
				const colTwoSliderRightContent = slider.querySelector(
					'.colTwoSlider__right',
				);
				const colTwoSliderRightContentInner = slider.querySelector('.colTwoSlider_content_inner');

				const colTwoSliderSlideActive = slider.querySelector('.colTwoSlider__right .slideActive')?.offsetHeight;

				if (colTwoSliderRight) {
					colTwoSliderRight.style.minHeight = `${maxHeight + 10}px`;
				}
				if (colTwoSliderRightContentInner && totalSlides === 1) {
					colTwoSliderRightContent.style.minHeight = `${colTwoSliderSlideActive}px`;
					colTwoSliderRightContentInner.style.minHeight = `${colTwoSliderSlideActive}px`;
				}
			}
		});
	};

	function debounce(func, wait) {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), wait);
		};
	}

	return (
		<>
			{isWideScreen ? (
				<section
					className={`testimonialSlider colTwoSlider grid__parallax dark ${data?.backgroundColor
						} ${data?.textColor} ${data?.classes || ''} ${data?.padding.join(
							' ',
						)}`}
					id={data?.id}
				>
					<div className="container">
						{totalSlides > 1 && (
							<>
								<span
									aria-label="first link"
									data-cursor-expand="true"
									data-cursor-icon="arrow-left"
									className={`ColTwoSlider_prev_button text-[0]  z-[5] absolute inline-block w-[7%] h-full top-0 left-0 ${currentSlide === 0 ? 'hidden' : ''
										}`}
									onClick={handlePrevSlide}
								>
									Previous
								</span>
								<span
									aria-label="first link"
									data-cursor-expand="true"
									data-cursor-icon="arrow-right"
									className={`ColTwoSlider_next_button text-[0] z-[5]  absolute inline-block w-[7%] h-full top-0 right-0 ${currentSlide === totalSlides - 1 ? 'hidden' : ''
										}`}
									onClick={handleNextSlide}
								>
									Next
								</span>
							</>
						)}
						<div className="wrapper">
							<div className="colTwoSlider__item">
								<div
									className={`colTwoSlider__item--inner flex ${totalSlides === 1 ? ' items-center' : ''} justify-between gap-x-[6rem] lg:flex-wrap ${fullWidthSlides.includes(currentSlide)
										? 'fullWidthSlide'
										: ''
										}`}
								>
									<div
										className={`colTwoSlider__left relative overflow-hidden w-full sm-up:grow-0 sm-up:shrink-0 sm-up:my-0 min-h-[54rem] lg-up:max-w-[57rem] lg-up:flex-[41%] ${fullWidthSlides.includes(currentSlide) ? 'hidden' : ''
											}`}
									>
										{data?.items.map((slide, index) => (
											<div
												ref={(el) => (slideRefs.current[index] = el)}
												key={index}
												className={`${currentSlide == index ? 'slideActive h-full' : ''
													} colTwoSlider_imageOuter absolute w-full overflow-hidden`}
											>
												{slide.type == 'image' && slide.image && (
													<Image
														src={slide?.image?.mediaItemUrl}
														alt={slide?.image?.altText}
														width={608}
														height={523}
														className="w-[101%] h-full max-w-[58rem] max-h-[49rem] object-cover"
													/>
												)}
												{slide?.type == 'text-with-prefix' && (
													<div
														className={`${styles?.cross_icon} counter relative inline-block sm:mb-[1rem]`}
													>
														{/* <h2 className="large inline font-light text-white count">
															{slide?.textWithPrefix?.prefix}
														</h2> */}
														<h2 className="large font-light inline text-white count">
															{slide?.textWithPrefix?.number}
														</h2>
														<h2 className="large inline font-light text-white h1">
															{slide?.textWithPrefix?.denotation}
														</h2>
													</div>
												)}
												{slide?.textWithPrefix?.subHeading && (
													<h4 className="mb-[0.3rem] leading-[1.5] font-medium">
														{slide?.textWithPrefix?.subHeading}
													</h4>
												)}
												{slide?.textWithPrefix?.description && (
													<p className="max-w-[40rem] leading-[1.5] font-normal">
														{slide?.textWithPrefix?.description}
													</p>
												)}
											</div>
										))}
									</div>
									<div
										className={`colTwoSlider__right relative ${styles?.sliderRight
											} ${fullWidthSlides.includes(currentSlide)
												? ''
												: ' ml-[9.2rem] laptopsmall:ml-[11.2rem]'
											} pr-[0.1rem] lg:w-full lg-up:flex-[55%] lg:mt-[14rem] lg:pr-0 lg:ml-0 transition-[min-height]`}
									>
										<div className={`${styles?.quotationMarkBox} quotelottieBox `} >
											{data.backgroundColor === 'bg-white' ? (
												<Lottie
													options={{
														loop: true,
														autoplay: false, // Controlled via state
														animationData: quote,
														rendererSettings: {
															preserveAspectRatio: 'xMidYMid slice',
														},
													}}
													isStopped={animationState.isStopped}
													isPaused={animationState.isPaused}
												/>
											) : (
												<span
													className={`${styles?.quotationMark} quotationMarkSpan`}
												>
												</span>
											)}
										</div>

										<div className="colTwoSlider_content_inner overflow-hidden relative w-full h-full">
											{data.items.map((slide, index) => (
												<div
													ref={(el) =>
														(slideRefs.current[index + data?.items.length] = el)
													}
													key={index}
													className={`${currentSlide == index ? 'slideActive' : ''
														} colTwoSlider_content absolute w-full`}
												>
													{slide?.body && (
														<div
															className="lead"
															dangerouslySetInnerHTML={{ __html: slide?.body }}
														></div>
													)}
													{slide?.authorName && (
														<>
															<span className="inline-block text-[1.6rem] laptop:text-[16px] font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem]">
																{slide?.authorName}
															</span>
															&nbsp;
															<span
																className={`inline-block text-[1.6rem] laptop:text-[16px] designation xl-up:text-[1.6rem] text-pink  md:mt-[2rem] sm:!mt-[10px]`}
															>
																{slide?.designation}
															</span>
														</>
													)}
													{slide?.logo && slide?.logo?.mediaItemUrl && (
														<div className="colTwoSlider__logo mt-[1.7rem] max-w-[17.4rem] max-h-[3.3rem]">
															<Image
																src={slide?.logo?.mediaItemUrl}
																alt={slide?.logo?.altText}
																width={174}
																height={26}
																className="object-left object-contain max-w-[17.4rem] max-h-[5.3rem]"
																loading="eager"
															/>
														</div>
													)}
													{slide?.link?.linkText && (
														<div className="mt-[3rem] relative z-20 header-btnwrap white  block w-full  h-auto bg-transparent">
															<Link
																href={slide?.link?.linkUrl}
																className={`${slide?.link?.class}`}
															>
																{slide?.link?.linkText}
															</Link>
														</div>
													)}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
						{totalSlides > 1 && (
							<div className="progress-bar block mt-[3rem] md-up:mt-[5rem] relative w-full  lg:hidden ">
								{totalSlides > 1 && (
									<>
										<span
											aria-label="first link"
											data-cursor-expand="true"
											data-cursor-icon="arrow-left"
											className={`ColTwoSlider_prev_button text-[0] z-[20] absolute inline-block h-full top-0 left-0 ${currentSlide === 0 ? 'hidden' : ''
												}`}
											style={{
												width: `${((currentSlide + 1) / totalSlides) * 100}%`,
											}}
											onClick={handlePrevSlide}
										>
											Previous
										</span>
										<span
											aria-label="first link"
											data-cursor-expand="true"
											data-cursor-icon="arrow-right"
											className={`ColTwoSlider_next_button text-[0] z-[5] absolute inline-block w-1/2 h-full top-0 right-0 ${currentSlide === totalSlides - 1 ? 'hidden' : ''
												}`}
											style={{
												width: `${100 - ((currentSlide + 1) / totalSlides) * 100
													}%`,
											}}
											onClick={handleNextSlide}
										>
											Next
										</span>
									</>
								)}
								<span
									className={`${data.backgroundColor == 'bg-white' ? 'bg-black' : 'bg-white'
										} block w-full md-up:max-w-[105%] h-[1px] absolute left-0 top-1/2 -translate-y-1/2`}
								></span>
								<div
									className="h-[1rem] md:h-[1.6rem] bg-pink transition-all duration-300 relative z-10"
									style={{
										width: `${((currentSlide + 1) / totalSlides) * 100}%`,
									}}
								></div>
							</div>
						)}
					</div>
				</section>
			) : (
				<Demo data={data} />
			)}
		</>
	);
};

export default TestimonialSlider;
