import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoSlider from './LogoSlider';
import Link from 'next/link';

export default function BannerThirdLevel2(data) {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
	const [h1Class, setH1Class] = useState('text-white');

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
	}, []);

	const getFormattedContent = () => {
		const { preTitle, title, postTitle, animationTitle } = data;

		// Function to safely return values, avoiding null or undefined
		const safeReturn = (value) => value ? value : '';

		switch (animationTitle) {
			case 'none':
				return `${safeReturn(preTitle)} ${safeReturn(title)} ${safeReturn(postTitle)}`;
			case 'pre':
				return `<span class="inline-block relative underline-container">${safeReturn(preTitle)}</span> ${safeReturn(title)} ${safeReturn(postTitle)}`;
			case 'default':
				return `${safeReturn(preTitle)} <span class="inline-block relative underline-container">${safeReturn(title)}</span> ${safeReturn(postTitle)}`;
			case 'post':
				return `${safeReturn(preTitle)} ${safeReturn(title)} <span class="inline-block relative underline-container">${safeReturn(postTitle)}</span>`;
			case 'special':
				return `<div class="special-animation">${safeReturn(preTitle)} ${safeReturn(title)} ${safeReturn(postTitle)}</div>`;
			default:
				return '';
		}
	};
	return (
		<section className={`banner-third overflow-hidden flex items-center ptsp ${data.classes} ${data?.padding.join(' ')}`} >
			{data?.backgroundImage?.sourceUrl && (
				<div className={`bg-img !w-[100%] !z-0`}>
					<Image
						className="object-bottom xxl-down:object-center"
						src={data.backgroundImage.sourceUrl}
						width={1600}
						height={1090}
						alt={data.backgroundImage.altText}
					/>
				</div>
			)}
			{data?.breadcrumbs && (
				<div className="breadcrumbs w-full">
					<div className="container">
						<ul className={`absolute top-[15%] z-[10] sm:top-[12%]`}>
							<div dangerouslySetInnerHTML={{ __html: data.breadcrumbs }}></div>
						</ul>
					</div>
				</div>
			)}

			<div className="container">
				<div
					className={`max-w-[117rem] content-wrap xxl-up:pt-[16.9rem] pt-[16.9rem] laptop:pt-[14rem] lg:pt-[12rem] relative z-[3]  xxl-up:pb-[0] xxl-down:pb-[0] sm:!pt-[80px]`}
				>
					{data.subhead && <h6 className="subtitle mb-[2rem]">{data.subhead}</h6>}
					{data.animationTitle && (
						<h1 className={`lg:pr-[30px] ${h1Class}`} dangerouslySetInnerHTML={{ __html: getFormattedContent() }} />
					)}
					{data.bodyWithoutEditor && (
						<p className="lead !max-w-[105rem]   mt-[2.9rem] max-w-[93rem] text-white">{data.bodyWithoutEditor}</p>
					)}
					{data?.link?.linkUrl && data?.link?.linkText &&
						<div className='mt-[3rem] md:mt-[2rem] z-[10]'>
							<Link data-circle-expand href={data.link && data.link.linkUrl} className={data.link && data.link.class} target={data.link && data.link.target ? '_blank' : '_self'}>
								{data.link.linkText}
							</Link>
						</div>
					}
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
						<source
							src=""
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
			{/* {logo ? <LogoSlider data={logo} /> : ''} */}
		</section>
	);
}
