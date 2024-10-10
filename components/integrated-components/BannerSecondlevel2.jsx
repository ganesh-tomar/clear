import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import React, { useState, useRef, useEffect } from 'react';
import { BannerLottieService } from '../services/BannerLottieService';
import work from '../../public/Lootie/Work-Page-Marker.json';

export default function BannerSecondLevel2({
	black_overlay,
	backgroundImage,
	link,
	subhead,
	title,
	bodyWithoutEditor,
	classes,
	titleWithAnim,
	preTitle,
	textPosition2,
	postTitle,
	breadcrumbs
}) {
	const sectionLottieRef = useRef(null);
	const [sectionLottieAnimationState, setSectionLottieAnimationState] = useState({
		isStopped: true,
		isPaused: true,
	});

	useEffect(() => {
		const createObserver = (ref, setAnimationState) => {
			const handleIntersection = (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimationState({ isStopped: false, isPaused: false });
					} else {
						setAnimationState({ isStopped: true, isPaused: true });
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 0.1,
			});

			if (ref.current) {
				observer.observe(ref.current);
			}

			return observer;
		};

		const observer = createObserver(sectionLottieRef, setSectionLottieAnimationState);

		return () => {
			if (sectionLottieRef.current) {
				observer.unobserve(sectionLottieRef.current);
			}
		};
	}, []);
	// console.log(sectionLottieRef);




	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});

	const animationContainerRef = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// Element is in view, play animation
					setAnimationState({ isStopped: false, isPaused: false });
				} else {
					// Element is out of view, reset animation
					setAnimationState({ isStopped: true, isPaused: true });
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		if (animationContainerRef.current) {
			observer.observe(animationContainerRef.current);
		}

		return () => {
			if (observer && animationContainerRef.current) {
				observer.unobserve(animationContainerRef.current);
			}
		};
	}, []);

	return (
		<section className={`${classes} dark__overlay overflow-hidden bg-black Banner-second height__full grid__parallax flex items-center`}>
			{backgroundImage?.sourceUrl ? (
				<div className={`bg-img`}>
					<Image
						className="object-bottom xxl-down:object-center"
						src={backgroundImage?.sourceUrl}
						width={1600}
						height={1090}
						alt={backgroundImage?.altText}
					/>
				</div>
			) : (
				<div className={`bg-img`}
					ref={sectionLottieRef}>
					<Lottie
						options={{
							loop: false,
							autoplay: false,
							animationData: BannerLottieService(subhead ? subhead.toLowerCase().trim() : ''),
							rendererSettings: {
								preserveAspectRatio: 'xMidYMid slice',
							},
						}}
						isStopped={sectionLottieAnimationState.isStopped}
						isPaused={sectionLottieAnimationState.isPaused}
						className="lottie"
					/>
				</div>
			)}
			{breadcrumbs && (
				<div className="breadcrumbs w-full">
					<div className="container">
						<ul
							className={`absolute top-[9.8%] laptopsmall:top-[11.8%] z-[10] sm:top-[9%] p-0`}
						>
							<div
								dangerouslySetInnerHTML={{ __html: breadcrumbs }}
							></div>
						</ul>
					</div>
				</div>
			)}

			<div className="container">
				<div className="content-wrap pt-[85px] relative z-[3] max-w-[141rem] xxl-up:pb-[0] xxl-down:pb-[0] sm:pt-[50px]">
					{subhead && <h6 className="subtitle first-letter:uppercase mb-[2rem]">{subhead}</h6>}
					{title && (
						<h1 className="text-white cursor-auto" dangerouslySetInnerHTML={{ __html: title }}></h1>
					)}
					{titleWithAnim && (
						<div className={`relative`}>
							<h1 className="inline-block">
								{preTitle}{' '}
								<span className="relative inline-block">
									{textPosition2}
									<div className={`lottie-wrap w-[12rem] h-[10rem] absolute right-[-16rem] top-[3rem] sm:w-[6rem] sm:h-[4rem] sm:right-[-9rem] sm:top-[1rem]  phablet:w-[6rem] phablet:h-[4rem] phablet:right-[-9rem] phablet:top-[1rem] tablet:top-[0rem] tablet:right-[-13rem]  `} ref={animationContainerRef}>
										<Lottie
											options={{
												loop: false,
												autoplay: false,
												animationData: work,
												rendererSettings: {
													preserveAspectRatio: 'xMidYMid slice',
												},
											}}
											isStopped={animationState.isStopped}
											isPaused={animationState.isPaused}
										/>
									</div>
								</span>{' '}
								{postTitle}
							</h1>
						</div>
					)}
					{bodyWithoutEditor && (
						<h4 className="medium-light mt-[3rem] max-w-[105rem]" dangerouslySetInnerHTML={{ __html: bodyWithoutEditor }}></h4>
					)}
					{link?.linkUrl && (
						<div className="btn-wrap mt-[2.6rem]">
							<Link href={link?.linkUrl} className={link?.class}>
								{link?.linkText}
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
