import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSlider from './LogoSlider';
import Lottie from 'react-lottie';
import { LottieService } from '../services/LottieService';
import TalkBubble from '../../public/Lootie/talk-bubble.json';
import star1 from '../../public/Lootie/Star2-Black-Marker-Icon.json';
import star2 from '../../public/Lootie/Glint-Black-Marker-Icon1.json';

export default function BannerThirdLevel2(data) {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
	const [h1Class, setH1Class] = useState('text-white');
	const [textLarge, setTextLarge] = useState(false);
	const doodles = data?.lottieAnimation?.split(' ');
	console.log(data);

	const middleLottieStars = data?.classes?.includes('middleLottieStars');
	const handleOverlayClick = () => {
		setIsOverlayOpen(!isOverlayOpen);
	};

	const handlespanclick = () => {
		setIsOverlayOpen(false);
	};

	useEffect(() => {
		// This will run only on the client side
		const sectionElement = document.querySelector('.banner-third');
		if (sectionElement && sectionElement.classList.contains('text-black')) {
			setH1Class('text-black');
		}
		if (sectionElement && sectionElement.classList.contains('body-large')) {
			setTextLarge(true);
		}
	}, []);

	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});

	const animationContainerRef = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Play the animation only when it comes into view
					if (animationState.isStopped) {
						setAnimationState({ isStopped: false, isPaused: false });
					}
				} else {
					// Stop the animation only when it leaves the view
					if (!animationState.isStopped) {
						setAnimationState({ isStopped: true, isPaused: false });
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1, // Adjust this threshold based on when you want the animation to start
		});
		if (animationContainerRef.current) {
			observer.observe(animationContainerRef.current);
		}

		return () => {
			if (observer && animationContainerRef.current) {
				observer.unobserve(animationContainerRef.current);
			}
		};
	}, [animationState.isStopped]);

	const getFormattedContent = () => {
		const { preTitle, title, postTitle, animationTitle } = data;

		// Function to safely return values, avoiding null or undefined
		const safeReturn = (value) => (value ? value : '');

		switch (animationTitle) {
			case 'none':
				return `${safeReturn(preTitle)} ${safeReturn(title)} ${safeReturn(
					postTitle,
				)}`;
			case 'pre':
				return `<span class="inline-block relative underline-container">${safeReturn(
					preTitle,
				)}</span> ${safeReturn(title)} ${safeReturn(postTitle)}`;
			case 'default':
				return `${safeReturn(
					preTitle,
				)} <span class="inline-block relative underline-container">${safeReturn(
					title,
				)}</span> ${safeReturn(postTitle)}`;
			case 'post':
				return `${safeReturn(preTitle)} ${safeReturn(
					title,
				)} <span class="inline-block relative underline-container">${safeReturn(
					postTitle,
				)}</span>`;
			case 'special':
				return `<div class="special-animation">${safeReturn(
					preTitle,
				)} ${safeReturn(title)} ${safeReturn(postTitle)}</div>`;
			default:
				return '';
		}
	};

	return (
		<section className={`banner-third overflow-hidden flex height__full items-center ptsp ${data?.logo?.length ? 'justify-between' : ''} ${data.classes} ${data?.padding.join(' ')}`}>
			{data?.backgroundImage?.sourceUrl && (
				<div className={`bg-img !w-[100%] !z-0`}>
					<Image
						className="object-bottom xxl-down:object-center lg:!object-right"
						src={data?.backgroundImage?.sourceUrl}
						width={1600}
						height={1090}
						alt={data?.backgroundImage?.altText}
					/>
				</div>
			)}
			{data?.breadcrumbs && (
				<div className="breadcrumbs w-full">
					<div className="container">
						<ul
							className={`absolute top-[9.8%] laptopsmall:top-[11.8%] z-[10] sm:top-[9%] p-0`}
						>
							<div
								dangerouslySetInnerHTML={{ __html: data?.breadcrumbs }}
							></div>
						</ul>
					</div>
				</div>
			)}
			<div className="container">
				<div
					ref={animationContainerRef}
					className={`max-w-[125rem] middle-star content-wrap xxl-up:pt-[10.5rem] pt-[14.5rem] laptop:pt-[14rem] lg:pt-[12rem] relative z-[3]  xxl-up:pb-[0] xxl-down:pb-[0] sm:!pt-[80px]`}
				>
					{doodles &&
						doodles.map((doodleClass, index) => {
							return (
								<div
								 key={index}
									className={`${doodleClass == 'adobe'
										? '!max-w-[22.5rem] lg:!top-[-5rem] max-h-[35rem] '
										: 'max-w-[35rem] lg:max-w-[32rem] max-h-[35rem]  lg:max-h-[32rem]'
										} ${doodleClass == 'google'
											? 'max-w-[47.5rem] !max-h-[20rem] lg:max-w-[47.5rem] lg:max-h-[20rem]'
											: 'max-w-[35rem] lg:max-w-[32rem] max-h-[35rem]  lg:max-h-[32rem]'
										} ${doodleClass === 'algolia' || doodleClass === 'hubspot'
											? 'max-w-[45rem] !max-h-[20rem] lg:max-w-[45rem] lg:max-h-[20rem]'
											: 'max-w-[35rem] lg:max-w-[32rem] max-h-[35rem]  lg:max-h-[32rem]'
										} ${doodleClass == 'talkbubble'
											? 'talkbubble !max-w-[25.5rem] !max-h-[15rem] !top-[19rem] lg:!top-[22rem] !right-[-16rem] lg:!max-w-[20.5rem] lg:!max-h-[12rem] lg:!right-0 laptop:!right-[-22rem]'
											: 'max-w-[35rem] lg:max-w-[32rem] max-h-[35rem]  lg:max-h-[32rem]'
										}  ${doodleClass == 'Heart'
											? 'Heart !max-w-[13rem] !block !max-h-[13rem] bottom-[-3rem] right-[9rem] top-[unset] laptopsmall:!top-[33rem] laptopsmall:right-[-6rem] tablet:!top-[78%] lg:!max-w-[8rem] lg:!max-h-[8rem] md:!top-[18rem]'
											: 'max-w-[35rem] lg:max-w-[32rem] max-h-[35rem] lg:max-h-[32rem]'
										} doodleClass  w-full h-full absolute right-[-23rem] top-0 `}
								>
									<Lottie
										options={{
											loop: false, // Set loop to false to prevent continuous animation
											autoplay: false,
											animationData: LottieService(doodleClass),
											rendererSettings: {
												preserveAspectRatio: 'xMidYMid slice',
											},
										}}
										isStopped={animationState.isStopped}
										isPaused={animationState.isPaused}
									/>
								</div>
							);
						})}

					{data?.subhead && (
						<h6 className="subtitle text-white first-letter:uppercase mb-[2rem]">
							{data.subhead}
						</h6>
					)}

					{data?.animationTitle && (
						<div className="  relative">
							{middleLottieStars && (
								<>
									<div className="img-wrap laptopsmall:w-[13rem] laptopsmall:h-[14.6rem] laptopsmall:top-[-14.5rem] laptopsmall:right-[55rem] lg:w-[9rem] lg:h-[10.6rem] lg:top-[-103px] tablet:right-[26rem] phablet:right-[30%] phone:right-[20%] xs:right-[15%] absolute top-[-10.5rem] z-[1] right-[55.5rem] w-[10rem] h-[10.6rem] md:w-[6rem] md:h-[5.6rem] md:top-[-8.5rem] md:[-6rem]">
										<Lottie
											options={{
												loop: true,
												autoplay: !animationState.isStopped, // Automatically play when not stopped
												animationData: star1,
												rendererSettings: {
													preserveAspectRatio: 'xMidYMid slice',
												},
											}}
											isStopped={animationState.isStopped}
											isPaused={animationState.isPaused}
										/>
									</div>
								</>
							)}
							<h1
								className={`lg:pr-[30px] relative ${h1Class}`}
								dangerouslySetInnerHTML={{ __html: getFormattedContent() }}
							/>
						</div>
					)}
					{data?.bodyWithoutEditor && (
						<div className=" relative">
							<p
								className={`${textLarge ? 'large' : 'lead'
									} !max-w-[119rem] mt-[2.9rem] sm:mb-[20px] text-white relative tablet:w-[86%] phablet:w-[86%] `}
							>
								{data?.bodyWithoutEditor}
							</p>
							{middleLottieStars && (
								<>
									<span
										ref={animationContainerRef}
										className="img-wrap laptopsmall:w-[8rem] laptopsmall:h-[9.6rem] laptopsmall:top-[0.5rem] laptopsmall:right-[-4rem] tablet:w-[6rem] tablet:h-[7.6rem] sm:!w-[3.5rem] sm:!h-[4.6rem] tablet:top-[2.5rem] sm:!top-[9rem] xs:!top-[10.5rem] tablet:right-[2.5rem] md:!right-[0rem] absolute top-[-0.5rem] z-[1] right-[-1rem] w-[7rem] h-[8.6rem] md:w-[6rem] md:h-[5.6rem] md:top-[-5.5rem] md:[-6rem]"
									>
										<Lottie
											options={{
												loop: true,
												autoplay: !animationState.isStopped, // Automatically play when not stopped
												animationData: star2,
												rendererSettings: {
													preserveAspectRatio: 'xMidYMid slice',
												},
											}}
											isStopped={animationState.isStopped}
											isPaused={animationState.isPaused}
										/>
									</span>
								</>
							)}
						</div>
					)}

					{data?.button?.length > 0 && (
						<div className="button-wrap mt-[3rem] md:mt-[2rem] z-[10]">
							{data.button.map((btn, index) => (
								<Link
									key={index}
									className={`${btn?.class} mr-2 ${btn?.customClass}`}
									href={btn?.linkUrl}
									target={btn?.target ? '_blank' : '_self'}
								>
									{btn?.linkText}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
			{isOverlayOpen && (
				<div className="overlay fixed top-0 left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear">
					<video
						className="transition-all duration-300 ease-linear video-bg h-full w-full object-contain"
						poster=""
						autoPlay
						loop
						muted
					>
						<source src="" type="video/mp4"></source>
					</video>
					<span
						className="group absolute h-[3rem] w-[3rem] right-[5rem] top-[13rem] cursor-pointer"
						data-circle-expand
						onClick={handlespanclick}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<path
								d="M22.5 7.5L7.5 22.5"
								stroke="white"
								strokeWidth="5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="group-hover:stroke-pink"
							/>
							<path
								d="M7.5 7.5L22.5 22.5"
								stroke="white"
								strokeWidth="5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="group-hover:stroke-pink"
							/>
						</svg>
					</span>
				</div>
			)}
			{data?.logo?.length ? <LogoSlider data={data} /> : ''}
		</section>
	);
}
