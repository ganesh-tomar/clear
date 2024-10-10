import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Insights from '../data/banners/insights-detail.json';
import Image from 'next/image';

export default function Insightsbanner({
	content,
	pSize,
	max,
	logoSlider,
	overlay,
	bgcolor,
	dark,
}) {
	const getContent = (name) => {
		switch (name) {
			case 'insights':
				return Insights;

			// Add more cases for additional content names
			default:
				return Insights; // Default to a specific content if the name is not recognized
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
		buttonLink,
		buttonText,
		backgroundImage,
		black_overlay,
		ctaLink,
		ctaText,
		vector,
		blacklogo,
		underLineClass,
		tabs,
	} = getContent(content);
	const bgImage = {
		backgroundImage: `url(${backgroundImage})`,
	};

	const [isOverlayOpen, setIsOverlayOpen] = useState(false);

	const handleOverlayClick = () => {
		setIsOverlayOpen(!isOverlayOpen);
	};

	const handleHeadingClick = (e) => {
		e.stopPropagation();
	};

	const handlespanclick = () => {
		setIsOverlayOpen(false);
	};

	return (
		<section
			className={`${black_overlay ? ' dark__overlay' : ''} 
			${bgcolor ? bgcolor : 'bg-black'} 
			${dark === true ? 'dark small-padding-bottom' : ''} 	
			${logoSlider === true ? 'justify-between' : ''} 
			overflow-hidden  insights-banner min-h-[80rem] grid__parallax flex items-center ptsp`}
		>
			{vector && (
				<div
					className={`bg-img !z-0 ${vector === true
						? '!top-auto !w-[140rem] !h-[100.7rem] !left-[19.8rem] tablet:!w-[90rem] tablet:!h-[65rem] tablet:!left-[2.8rem] phablet:!w-[90rem] phablet:!h-[65rem] phablet:!left-[2.8rem] sm:!w-[42rem] sm:!h-[30rem] sm:!left-[2.8rem] bottom-[-5px]'
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
			<div className="breadcrumbs relative w-full">
				<div className="container">
					<ul className="absolute top-[-0.7rem] laptop:top-[2.4rem] z-[10] lg:pt-[30px]">
						{breadcrumbs.map((crumb, index) => (
							<li
								key={index}
								className={`inline relative text-[14px] list font-normal leading-[24px] mr-[1rem] pr-[0.5rem] text-[white] `}
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
					className={`${max === 'max' ? 'max-w-[141rem]' : 'max-w-[117rem] '} ${blacklogo === true ? 'blacklogo' : ''
						} content-wrap xxl-up:pt-[16.4rem] pt-[16.9rem] laptop:pt-[14rem] lg:pt-[12rem] relative z-[3]  xxl-up:pb-[0] xxl-down:pb-[0] sm:!pt-[80px]`}
				>
					{subtitle && <h6 className="subtitle mb-[2rem]">{subtitle}</h6>}

					{tabs && tabcontent && (
						<div className="tabs-wrap mb-[1.2rem] flex flex-wrap">
							{tabcontent.map((item, index) => (
								<span
									className="tab px-[1rem] py-[0.5rem] bg-black font-bold medium text-white mr-[1rem] mb-[1rem] relative"
									key={index}
								>
									<Link className='redirect' href="/" >.</Link>
									{item.tabcontent}
								</span>
							))}
						</div>
					)}

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
							className={` ${pSize === 'medium'
								? 'medium-bold !max-w-[105rem] leading-[1.3]'
								: ''
								} mt-[2.9rem] max-w-[93rem]`}
						>
							{description}
						</p>
					)}

					<div className="flex items-center flex-wrap">
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
				</div>
			</div>
		</section>
	);
}
