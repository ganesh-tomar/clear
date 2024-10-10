// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { gsap } from 'gsap';
// import Lottie from 'react-lottie';
// import ArrowFoundation from '../../public/Lootie/Arrow_Foundation.json';
// import ArrowExpression from '../../public/Lootie/Expression-Marker.json';
// import ArrowIntegration from '../../public/Lootie/Integration-Marker.json';
// import { LottieService } from '../services/LottieService';

// const Intro = ({
// 	id,
// 	titleClass,
// 	title,
// 	padding,
// 	eyebrow,
// 	classes,
// 	blurb,
// 	isCurvedArrow,
// 	link,
// 	body,
// 	lottieAnimation,
// 	titleWithAnim,
// 	animationTitle,
// 	preTitle,
// 	textPosition2,
// 	postTitle,
// }) => {
// 	if (!title && !blurb) {
// 		return null; // Render nothing if neither title nor blurb is provided
// 	}
// 	// console.log(preTitle);
// 	// console.log(textPosition2);
// 	// console.log(postTitle);

// 	useEffect(() => {
// 		const navLinks = document.querySelectorAll('.intro .wrapper p .hero-tabs');
// 		const header = document.querySelector('header');

// 		navLinks.forEach((link) => {
// 			link.addEventListener('click', (e) => {
// 				e.preventDefault();
// 				const targetId = e.currentTarget.getAttribute('href');
// 				const targetElement = document.querySelector(targetId);

// 				if (targetElement) {
// 					const headerHeight = header ? header.offsetHeight : 0;
// 					const targetPosition =
// 						targetElement.getBoundingClientRect().top +
// 						window.scrollY -
// 						headerHeight;

// 					gsap.to(window, { duration: 1, scrollTo: targetPosition });
// 				}
// 			});
// 		});
// 	}, []);

// 	const [rocketAnimationState, setRocketAnimationState] = useState({
// 		isStopped: true,
// 		isPaused: false,
// 	});

// 	const [arrowAnimationState, setArrowAnimationState] = useState({
// 		isStopped: true,
// 		isPaused: false,
// 	});

// 	const [animationPlayed, setAnimationPlayed] = useState(false);

// 	const [sectionLottieAnimationState, setSectionLottieAnimationState] =
// 		useState({
// 			isStopped: true,
// 			isPaused: true,
// 		});

// 	const rocketRef = useRef(null);
// 	const arrowRef = useRef(null);
// 	const sectionLottieRef = useRef(null);

// 	const forceCheckInView = (observer, ref) => {
// 		if (ref.current) {
// 			const entry = ref.current.getBoundingClientRect();
// 			if (entry.top < window.innerHeight && entry.bottom >= 0) {
// 				observer.observe(ref.current);
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		const createObserver = (ref, setAnimationState, delay = 0) => {
// 			const handleIntersection = (entries) => {
// 				entries.forEach((entry) => {
// 					if (entry.isIntersecting && !animationPlayed) {
// 						setTimeout(() => {
// 							setAnimationState({ isStopped: false, isPaused: false });
// 							setAnimationPlayed(true);
// 						}, delay);
// 					} else {
// 						setAnimationState({ isStopped: true, isPaused: true });
// 					}
// 				});
// 			};

// 			const observer = new IntersectionObserver(handleIntersection, {
// 				threshold: 0.1,
// 			});

// 			if (ref.current) {
// 				observer.observe(ref.current);
// 				forceCheckInView(observer, ref); // Check if already in viewport
// 			}

// 			return observer;
// 		};

// 		// Delay observer setup slightly
// 		const observerSetupTimeout = setTimeout(() => {
// 			const rocketObserver = createObserver(rocketRef, setRocketAnimationState);
// 			const arrowObserver = createObserver(
// 				arrowRef,
// 				setArrowAnimationState,
// 				100,
// 			);

// 			return () => {
// 				if (rocketObserver && rocketRef.current) {
// 					rocketObserver.unobserve(rocketRef.current);
// 				}
// 				if (arrowObserver && arrowRef.current) {
// 					arrowObserver.unobserve(arrowRef.current);
// 				}
// 			};
// 		}, 200);

// 		return () => clearTimeout(observerSetupTimeout);
// 	}, [animationPlayed]);

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					if (entry.isIntersecting) {
// 						setSectionLottieAnimationState({
// 							isStopped: false,
// 							isPaused: false,
// 						});
// 					} else {
// 						setSectionLottieAnimationState({ isStopped: true, isPaused: true });
// 					}
// 				});
// 			},
// 			{ threshold: 0.1 },
// 		);

// 		if (sectionLottieRef.current) {
// 			observer.observe(sectionLottieRef.current);
// 		}

// 		return () => {
// 			if (sectionLottieRef.current) {
// 				observer.unobserve(sectionLottieRef.current);
// 			}
// 		};
// 	}, []);

// 	useEffect(() => {
// 		const createObserver = (ref, setAnimationState, delay = 0) => {
// 			const handleIntersection = (entries) => {
// 				entries.forEach((entry) => {
// 					if (entry.isIntersecting) {
// 						// Animation comes into view
// 						setTimeout(() => {
// 							setAnimationState({ isStopped: false, isPaused: false });
// 						}, delay);
// 					} else {
// 						// Animation goes out of view - Reset the animation
// 						setAnimationState({ isStopped: true, isPaused: true });
// 					}
// 				});
// 			};

// 			const observer = new IntersectionObserver(handleIntersection, {
// 				threshold: 0.1,
// 			});

// 			if (ref.current) {
// 				observer.observe(ref.current);
// 			}

// 			return observer;
// 		};

// 		const rocketObserver = createObserver(rocketRef, setRocketAnimationState);
// 		const arrowObserver = createObserver(arrowRef, setArrowAnimationState, 100);

// 		return () => {
// 			if (rocketObserver && rocketRef.current) {
// 				rocketObserver.unobserve(rocketRef.current);
// 			}
// 			if (arrowObserver && arrowRef.current) {
// 				arrowObserver.unobserve(arrowRef.current);
// 			}
// 		};
// 	}, []);

// 	const renderLottieAnimation = (lottie) => {
// 		switch (lottie) {
// 			case 'ArrowFoundation':
// 				return (
// 					<div className="">
// 						<Lottie
// 							options={{
// 								loop: false,
// 								autoplay: false,
// 								animationData: ArrowFoundation,
// 								rendererSettings: {
// 									preserveAspectRatio: 'xMidYMid slice',
// 								},
// 							}}
// 							isStopped={rocketAnimationState.isStopped}
// 							isPaused={rocketAnimationState.isPaused}
// 							className="lottie"
// 						/>
// 					</div>
// 				);
// 			case 'ArrowExpression':
// 				return (
// 					<div className="">
// 						<Lottie
// 							options={{
// 								loop: false,
// 								autoplay: false,
// 								animationData: ArrowExpression,
// 								rendererSettings: {
// 									preserveAspectRatio: 'xMidYMid slice',
// 								},
// 							}}
// 							isStopped={rocketAnimationState.isStopped}
// 							isPaused={rocketAnimationState.isPaused}
// 							className="lottie"
// 						/>
// 					</div>
// 				);
// 			case 'ArrowIntegration':
// 				return (
// 					<div className="">
// 						<Lottie
// 							options={{
// 								loop: false,
// 								autoplay: false,
// 								animationData: ArrowIntegration,
// 								rendererSettings: {
// 									preserveAspectRatio: 'xMidYMid slice',
// 								},
// 							}}
// 							isStopped={rocketAnimationState.isStopped}
// 							isPaused={rocketAnimationState.isPaused}
// 							className="lottie"
// 						/>
// 					</div>
// 				);

// 			case 'Blackcircle':
// 				return (
// 					<div
// 						ref={sectionLottieRef}
// 						className="lottie-animation Blackcircle absolute w-[17.4rem] h-[12.9rem] bottom-[-2rem] left-[0] 
// 						 md:w-[9.4rem] md:h-[8.9rem] md:bottom-[-2.4rem] 
// 						 tablet:w-[14.4rem]  tablet:h-[11.9rem] tablet:bottom-[-2.6rem]
// 						 laptopsmall:w-[21.4rem]  laptopsmall:h-[18.9rem] laptopsmall:bottom-[-5rem]"
// 					>
// 						<Lottie
// 							options={{
// 								loop: false,
// 								autoplay: false,
// 								animationData: LottieService(lottieAnimation),
// 								rendererSettings: {
// 									preserveAspectRatio: 'xMidYMid slice',
// 								},
// 							}}
// 							isStopped={sectionLottieAnimationState.isStopped}
// 							isPaused={sectionLottieAnimationState.isPaused}
// 							className="lottie"
// 						/>
// 					</div>
// 				);

// 			case 'circleArrow':
// 				return (
// 					<div
// 						ref={sectionLottieRef}
// 						className="lottie-animation circleArrow absolute w-[27.9rem] h-[12.9rem] bottom-[-4rem] left-[2rem] md:w-[16.9rem] md:h-[6.9rem] md:bottom-[-2rem] md:left-[0rem] 
// 						tablet:w-[25.9rem] tablet:h-[10.9rem] tablet:bottom-[-3rem] tablet:left-[1rem] laptopsmall:w-[23.9rem] laptopsmall:h-[12.9rem] laptopsmall:bottom-[-4rem] laptopsmall:left-[4rem]"
// 					>
// 						<Lottie
// 							options={{
// 								loop: false,
// 								autoplay: false,
// 								animationData: LottieService(lottieAnimation),
// 								rendererSettings: {
// 									preserveAspectRatio: 'xMidYMid slice',
// 								},
// 							}}
// 							isStopped={sectionLottieAnimationState.isStopped}
// 							isPaused={sectionLottieAnimationState.isPaused}
// 							className="lottie"
// 						/>
// 					</div>
// 				);
// 			default:
// 				return null;
// 		}
// 	};

// 	// Apply max-width 161rem if 'setwidth' class is passed in the classes prop
// 	const isSetWidth = classes?.includes('setwidth');

// 	return (
// 		<section
// 			className={`intro dark ${classes || ''} ${padding?.join(' ')}`}
// 			id={id}
// 		>
// 			<div className={`container`}>
// 				{/* Conditionally apply max-width */}
// 				<div className={`wrapper w-full`}>
// 					<div className={`intro__text ${titleClass ? 'w-fit' : ''}`}>
// 						{eyebrow && <p className="subtitle">{eyebrow}</p>}
// 						<div
// 							className={`wrapper w-full ${isSetWidth ? 'max-w-[119rem]' : ''}`}
// 						>
// 							{title && (
// 								<div className={`${titleClass} inline-block pr-[20px] `}>
// 									<h1
// 										className={`${eyebrow == 'Our Awards' ? 'h2' : 'h3'}`}
// 										dangerouslySetInnerHTML={{ __html: title }}
// 									/>
// 									<div
// 										ref={rocketRef}
// 										className="lottieBox absolute top-[-8rem] right-[7rem] w-[12rem] h-[12rem] phone:w-[10rem] phone:h-[9rem] sm:right-0 sm:top-[-6rem] xs:w-[8rem] xs:h-[7rem]"
// 									>
// 										{renderLottieAnimation(lottieAnimation)}
// 									</div>
// 								</div>
// 							)}

// 							{titleWithAnim && (
// 								<div className={`relative`}>
// 									{animationTitle == 'none' ? (
// 										<h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">
// 											{preTitle} {textPosition2} {postTitle}
// 										</h3>
// 									) : (
// 										''
// 									)}
// 									{/* {animationTitle == 'pre' ? <h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]"><span className="relative inline-block">{renderLottieAnimation(item?.lottieAnimation, i)}{item?.preTitle}</span> {item?.title} {item?.postTitle}</h3> : ''} */}
// 									{animationTitle == 'default' ? (
// 										<h2 className="">
// 											{preTitle}{' '}
// 											<span className="relative inline-block">
// 												{renderLottieAnimation(lottieAnimation)}
// 												{textPosition2}
// 											</span>{' '}
// 											{postTitle}
// 										</h2>
// 									) : (
// 										''
// 									)}

// 									{animationTitle == 'post' ? (
// 										<h2 className="">
// 											{preTitle} {textPosition2}{' '}
// 											<span
// 												className={`relative inline-block  ${[
// 													'YouCircleMarker',
// 													'Thunder',
// 													'ArrowGraphMarker',
// 													'ExpertCircle',
// 													'Warningsign',
// 												].includes(lottieAnimation)
// 													? 'pink'
// 													: 'black'
// 													}`}
// 											>
// 												{' '}
// 												{renderLottieAnimation(lottieAnimation)} {postTitle}
// 											</span>{' '}
// 										</h2>
// 									) : (
// 										''
// 									)}
// 								</div>
// 							)}
// 							{blurb && (
// 								<p
// 									className={`relative mt-[5rem] lg:mt-[3rem] subtitle !leading-[1.5] ${isCurvedArrow ? 'curved_arrow' : ''
// 										}`}
// 								>
// 									{blurb}
// 								</p>
// 							)}
// 							{body && (
// 								<div
// 									className="paragraph mt-[48px]"
// 									dangerouslySetInnerHTML={{ __html: body }}
// 								></div>
// 							)}
// 							{link && link?.linkText && (
// 								<div className="btn-wrap mt-[5rem]">
// 									<Link
// 										className={`pink btn ${link?.class || ''}`}
// 										href={link?.linkUrl}
// 										target={link?.target || '_self'}
// 									>
// 										{link?.linkText}
// 									</Link>
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Intro;

import React from 'react'

export default function Intro() {
  return (
	<div>Intro</div>
  )
}
