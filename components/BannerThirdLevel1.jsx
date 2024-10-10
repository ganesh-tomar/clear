import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import Link from 'next/link';
import casestudiesoverview from '../data/banners/case-studies-overview.json';
import casestudiesdetailmini from '../data/banners/case-studies-detailmini.json';
import clientindex from '../data/banners/client_index.json';
import Insights from '../data/banners/insights-detail.json';
import designdevexprience from '../data/banners/design-&-devexprience.json';
import Team from '../data/banners/team.json';
import careers from '../data/banners/careers.json';
import outcome from '../data/banners/outcome-overview.json';
import collaboration from '../data/banners/collaboration.json';
import driving from '../data/banners/driving-result.json';
import industry from '../data/banners/industry-detail.json';
import industryFocus from '../data/banners/industry-focus.json';
import Partners from '../data/banners/partners.json';
import PartnersDetailA from '../data/banners/partner-detail-a.json';
import history from '../data/banners/history.json';
import Awards from '../data/banners/awards.json';
import Image from 'next/image';
import LogoSlider from './LogoSlider';
import HeartDoodle from '../public/Lootie/Heart-Marker.json';

export default function BannerThirdLevel1({
	content,
	psize,
	max,
	logoslider,
	overlay,
	bgcolor,
	dark,
	hfull,
	smallpaddingbottom
}) {
	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});

	const animationContainerRef = useRef(null);
	const getContent = (name) => {
		switch (name) {
			case 'casestudiesoverview':
				return casestudiesoverview;
			case 'casestudiesdetailmini':
				return casestudiesdetailmini;
			case 'clientindex':
				return clientindex;
			case 'designdevexprience':
				return designdevexprience;
			case 'careers':
				return careers;
			case 'collaboration':
				return collaboration;
			case 'driving':
				return driving;
			case 'outcome':
				return outcome;
			case 'industry':
				return industry;
			case 'industryFocus':
				return industryFocus;
			case 'partners':
				return Partners;
			case 'partner-detail-a':
				return PartnersDetailA;
			case 'insights':
				return Insights;
			case 'history':
				return history;
			case 'awards':
				return Awards;
			case 'team':
				return Team;

			default:
				return Partners; // Default to a specific content if the name is not recognized
		}
	};

	const {
		breadcrumbs,
		tabcontent,
		subtitle,
		PreNormalText,
		HighLightedText,
		HighLightedTextColorClass,
		postText,
		normalText,
		description,
		descriptionLarge,
		buttonLink,
		buttonText,
		backgroundImage,
		black_overlay,
		ctaLink,
		ctaText,
		vector,
		area,
		linktxt,
		blacklogo,
		heart,
		underLineClass,
		smallbanner,
		tabs,
		doodles
	} = getContent(content);

	const [isOverlayOpen, setIsOverlayOpen] = useState(false);

	const handleOverlayClick = () => {
		setIsOverlayOpen(!isOverlayOpen);
	};

	const handlespanclick = () => {
		setIsOverlayOpen(false);
	};

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element enters the viewport, play the animation
					setAnimationState({ isStopped: false, isPaused: false });
				} else {
					// Element exits the viewport, stop and reset the animation
					setAnimationState({ isStopped: true, isPaused: false });
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1, // Trigger when 10% of the element is visible
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
		<section
			className={`banner-third ${black_overlay ? ' dark__overlay' : ''} ${dark === true ? 'dark ' : ''} ${smallpaddingbottom === true ? 'small-padding-bottom' : ''} ${logoslider === true ? 'justify-between' : ''} ${smallbanner === true ? '!min-h-[80rem]' : ''} ${hfull === false ? '' : 'height__full'} ${bgcolor ? bgcolor : 'bg-black'} overflow-hidden grid__parallax flex items-center ptsp`}
		>
			{vector && (
				<div
					className={`bg-img !z-0 ${vector === true ? '!top-auto !w-[140rem] !h-[100.7rem] !left-[19.8rem] tablet:!w-[90rem] tablet:!h-[65rem] tablet:!left-[2.8rem] phablet:!w-[90rem] phablet:!h-[65rem] phablet:!left-[2.8rem] sm:!w-[42rem] sm:!h-[30rem] sm:!left-[2.8rem] bottom-[-5px]'
						: ''
						}`}
				>
					<Image
						src={backgroundImage}
						width={1600}
						height={1090}
						alt="vector"
					/>
				</div>
			)}
			{backgroundImage && (
				<div
					className={`bg-img !w-[100%] !z-0 ${vector === true ? 'hidden' : ''}`}
				>
					<Image
						className="object-bottom xxl-down:object-center"
						src={backgroundImage}
						width={1600}
						height={1090}
						alt="bg_image"
					/>
				</div>
			)}
			<div className="breadcrumbs w-full">
				<div className="container">
					<ul className={`absolute top-[15%] z-[10] sm:top-[12%]`}>
						{breadcrumbs.map((crumb, index) => (
							<li
								key={index}
								className={`inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1rem] pr-[1rem] laptop:pr-[1.5rem] text-[white] `}
							>
								{crumb.link ? (
									<Link
										href={crumb.link}
										className={`${dark === true ? 'text-black' : ''
											} hover:text-pink transition-all`}
									>
										{crumb.text}
									</Link>
								) : (
									<span className={`${dark === true ? 'text-black' : ''}`}>
										{crumb.sp}
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="container">
				<div
					className={`${max === 'max' ? 'max-w-[141rem]' : 'max-w-[117rem] '} ${blacklogo === true ? 'blacklogo' : ''} content-wrap xxl-up:pt-[16.9rem] pt-[16.9rem] laptop:pt-[14rem] lg:pt-[12rem] relative z-[3]  xxl-up:pb-[0] xxl-down:pb-[0] sm:!pt-[80px]`}
				>
					{heart === true ? <div
						ref={animationContainerRef}
						className="heratDoodle"
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: HeartDoodle,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={animationState.isStopped}
							isPaused={animationState.isPaused}
						/>
					</div> : ''}
					{doodles && doodles.map((item, index) => (
						<span key={index} className={`${item.class} absolute w-[12.5rem] h-[12.7rem] top-[4rem] right-[2rem]`}>
							<Image
								src={item.path}
								width={1600}
								height={1090}
								alt={item.name}
							/>
						</span>
					))}
					{subtitle && <h6 className="subtitle mb-[2rem]">{subtitle}</h6>}


					<h1
						className={` lg:pr-[30px] ${content === 'casestudiesdetailmini' || content === 'insights'
							? 'h2'
							: ''
							} ${dark === true ? 'text-blck' : 'text-white'}`}
					>
						{PreNormalText ? PreNormalText : ''}{' '}
						{HighLightedText ? (
							<span
								className={`${underLineClass ? underLineClass : ''} ${HighLightedTextColorClass ? HighLightedTextColorClass : ''
									} inline-block relative underline-container`}
							>
								{' '}
								{HighLightedText}
							</span>
						) : (
							''
						)}{' '}
						{postText ? postText : ''} {normalText}
					</h1>

					{description && (
						<p
							className={`${psize === 'medium' ? 'lead !max-w-[105rem] ' : ''} ${descriptionLarge === true ? 'lead !max-w-[105rem] ' : ''} mt-[2.9rem] max-w-[93rem]`}
						>
							{description}
						</p>
					)}

					{area && (
						<div className="area-wrap max-w-[500px] sm:max-w-[100rem] flex flex-wrap mt-[2.9rem] ">
							<div className="content relative w-[50%] max-w-[210px] mb-[1.5rem] mr-[2.8rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
								<Link
									className="text-[white] medium boldlink !font-bold hover:text-pink transition-all"
									href=" #"
								>
									Brand strategy
								</Link>
							</div>
							<div className="content relative w-[50%]  max-w-[210px] mb-[1.5rem] mr-[2.8rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
								<Link
									className="text-[white] boldlink medium !font-bold hover:text-pink transition-all"
									href=" #"
								>
									Motion graphics
								</Link>
							</div>
							<div className="content relative  w-[50%]  max-w-[210px] mb-[1.5rem] mr-[2.8rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
								<Link
									className="text-[white] medium boldlink !font-bold hover:text-pink transition-all"
									href=" #"
								>
									Content development
								</Link>
							</div>
							<div className="content relative  w-[50%]  max-w-[210px] mb-[1.5rem] mr-[2.8rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
								<Link
									className="text-[white] medium boldlink !font-bold hover:text-pink transition-all"
									href=" #"
								>
									Web development
								</Link>
							</div>
							<div className="content relative  w-[50%]  max-w-[210px] mb-[1.5rem] mr-[2.8rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
								<Link
									className="text-[white] medium boldlink !font-bold hover:text-pink transition-all"
									href=" #"
								>
									Creative services
								</Link>
							</div>
						</div>
					)}

					<div className="flex items-center flex-wrap m-0">
						{ctaLink && ctaLink && (
							<div
								className={`${dark === true ? 'blackBtn' : 'whiteBtn'
									} btn  mt-[3rem] mr-[1.5rem]`}
							>
								<Link
									href={ctaLink}
									onClick={overlay ? handleOverlayClick : null}
									data-cursor-expand="true"
									data-cursor-icon={overlay ? 'iconPlay' : ''}
									className={`${overlay ? '	' : ''}white-border-btn font-bold`}
								>
									{ctaText}
								</Link>
							</div>
						)}

						{buttonLink && buttonText && (
							<div className="btn-wrap mt-[2.6rem]">
								<Link href={buttonLink} className="tertiary-btn font-bold">
									{buttonText}
								</Link>
							</div>
						)}
					</div>

					{linktxt && (
						<div className="btn-wrap mt-[4.8rem] sm:mt-[3rem]">
							<Link
								href="/"
								className="link text-[#FA198C] medium font-bold relative"
							>
								Gold Addy Award
							</Link>
						</div>
					)}
				</div>
			</div>
			{isOverlayOpen && (
				<div className="overlay fixed top-0 left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear">
					<video
						className="transition-all duration-300 ease-linear video-bg h-full w-full object-contain"
						// poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
						autoPlay
						loop
						muted
					>
						<source
							src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo="
							type="video/mp4"
						></source>
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
			<div className="bg-img dark__overlay">
				<video
					className="video-bg overlay"
					// poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
					autoPlay
					loop
					muted
				>
					<source
						src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo="
						type="video/mp4"
					></source>
				</video>
			</div>
			{logoslider === true ? <LogoSlider asChild={true} contentname={'data'} /> : ''}
		</section>
	);
}
