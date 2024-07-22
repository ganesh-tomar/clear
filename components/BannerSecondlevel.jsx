import React from 'react';
import Link from 'next/link';
import serviceDetail from '../data/banners/service-detail.json';
import serviceOverview from '../data/banners/service-overview.json';
import approach from '../data/banners/approach.json';
import work from '../data/banners/work.json';
import Image from 'next/image';



export default function BannerSecond({ content }) {
	const getContent = (name) => {
		switch (name) {
			case 'serviceDetail':
				return serviceDetail;
			case 'serviceOverview':
				return serviceOverview;
			case 'work':
				return work;
			case 'approach':
				return approach;
			// Add more cases for additional content names
			default:
				return serviceDetail; // Default to a specific content if the name is not recognized
		}
	};

	const {
		subtitle,
		PreNormalText,
		HighLightedText,
		normalText,
		description,
		buttonLink,
		buttonText,
		buttonClass,
		backgroundImage,
		black_overlay,
		vector,
		underLineClass,
		zoom
	} = getContent(content);
	
	return (
		<section
			className={`${black_overlay ? ' dark__overlay ' : ''
				} overflow-hidden bg-black Banner-second height__full grid__parallax flex items-center`}>
			{vector && (
				<div
					className={`bg-img !z-0 ${vector === true
						? 'vectorImage !top-auto !w-[140rem] !h-[103rem] !left-[19.8rem] tablet:!w-[90rem] tablet:!h-[65rem] tablet:!left-[2.8rem] phablet:!w-[90rem] phablet:!h-[65rem] phablet:!left-[2.8rem] sm:!w-[42rem] sm:!h-[30rem] sm:!left-[2.8rem] bottom-[-5px]'
						: ''
						}`}
				>
					<Image
						className='object-left-top'
						src={backgroundImage}
						width={1600}
						height={1090}
						alt="vector"
					/>
				</div>
			)}
			{backgroundImage && (
				<div
					className={`bg-img ${zoom === false ? '' : '!w-[130%]'} !z-0 ${vector === true ? 'hidden' : ''}`}
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
			<div className="container">
				<div className="content-wrap pt-[85px] relative z-[3]  max-w-[141rem] xxl-up:pb-[0] xxl-down:pb-[0] sm:pt-[50px]">
					{subtitle && <h6 className="subtitle mb-[2rem]">{subtitle}</h6>}
					<h1 className="text-white lg:pr-[30px]">
						{PreNormalText ? PreNormalText : ''}{' '}
						{HighLightedText ? (
							<span className={`${underLineClass ? underLineClass : ''} underline-container inline-block relative`}>
								{' '}
								{HighLightedText}
							</span>
						) : (
							''
						)}{' '}
						{normalText}
					</h1>
					{description && (
						<h4 className="medium-light mt-[3rem] max-w-[105rem]">{description}</h4>
					)}
					{buttonLink && buttonText && (
						<div className="btn-wrap mt-[2.6rem]">
							<Link href={buttonLink} className={`${buttonClass ? buttonClass : 'tertiary-btn'}`}>
								{buttonText}
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
