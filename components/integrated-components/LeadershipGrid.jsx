'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const LeadershipGrid = ({
	title,
	blurb,
	leadershipItems,
	data,
	padding,
	classes,
	id,
	link
}) => {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
	const [scrollValue, setScrollValue] = useState(0);
	const [contentIndex, setContentIndex] = useState(0);

	const handleOverlayClick = (e, index) => {
		e.stopPropagation();
		const headerHeight = document.querySelector('header')?.offsetHeight || 0;
		setIsOverlayOpen(!isOverlayOpen);
		setScrollValue(window.scrollY + headerHeight);
		setContentIndex(index);
	};

	const closeOverlay = () => {
		setIsOverlayOpen(false);
	};

	const Stickytop = {
		top: `${scrollValue}px`,
	};

	const selectedContent = leadershipItems[contentIndex];

	return (
		<section
			className={`leadership dark grid__parallax ${classes} ${padding}`}
			id={id}
		>
			<div className="container">
				<div className="intro mb-[5rem]">
					{title && <h3>{title}</h3>}
					{blurb && <p className="mt-12 mb-4">{blurb}</p>}
				</div>
				<div className="wrapper flex w-[calc(100%+3rem)] flex-wrap ml-[-1.5rem]">
					{leadershipItems.map((item, index) => (
						<div
							className="card min-h-[47.1rem] lg:min-h-[40rem] sm:max-w-[33rem] w-[calc(25%-3rem)] phablet:!w-[calc(50%-3rem)] sm:!w-full tablet:w-[calc(33.33%-3rem)] lg:mb-[3rem] mx-[1.5rem] relative group"
							key={index}
							// data-cursor-expand="true"
						>
							{item?.link && (
								<Link class="redirect" href={item?.link}>
									{item?.linkText}
								</Link>
							)}
							<div className="img-wrap sm:max-w-[33rem] max-h-[33rem] mb-[2rem] relative">
								{item?.image?.sourceUrl && (
									<Image
										src={item?.image?.sourceUrl}
										width={1000}
										height={1000}
										alt={item?.image?.altText || 'Default Image'}
										className="w-full h-full object-cover"
									/>
								)}
								{item?.hoveredImage?.sourceUrl && (
									<Image
										src={item?.hoveredImage?.sourceUrl}
										width={1000}
										height={1000}
										alt={item?.hoveredImage?.altText || 'Hovered Image'}
										className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									/>
								)}
							</div>
							{item?.name && (
								<p className="subtitle !font-bold mb-[0.5rem]">{item.name}</p>
							)}
							{item?.designation && (
								<p className="small font-normal mb-[5rem]">
									{item.designation}
								</p>
							)}

							{item?.link ? (
								<a href={item.link} className="link-wrap absolute left-0 bottom-0 mt-[3rem]">
									<span
										// data-cursor-expand
										onClick={(e) => handleOverlayClick(e, index)}
										className="tertiary-btn pink"
									>
										{item?.linkText}
									</span>
								</a>
							) : (
								item?.linkText && (
									<div className="link-wrap mt-[3rem]">
										<span
											// data-cursor-expand
											onClick={(e) => handleOverlayClick(e, index)}
											className="tertiary-btn pink"
										>
											{item?.linkText}
										</span>
									</div>
								)
							)}


						</div>
					))}
				</div>
			</div>
			{isOverlayOpen && (
				<div
					style={Stickytop}
					className="biooverlay fixed top-0 left-0 w-full h-[100vh] xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear"
				>
					<div className="wrapper relative w-full h-[500px]">
						<div className="card relative">
							<div className="img-wrap max-w-[33rem] max-h-[33rem] mb-[2rem]">
								<Image
									src={selectedContent.image.sourceUrl}
									width={1000}
									height={1000}
									alt={selectedContent.image.altText || 'Image'}
									className="w-full h-full object-cover"
								/>
							</div>
							<p className="subtitle text-white !font-bold mb-[0.5rem]">
								{selectedContent.name}
							</p>
							<p className="small text-pink font-normal mb-[1rem]">
								{selectedContent.designation}
							</p>
							<p
								className="small text-white font-normal mb-[5rem]"
								dangerouslySetInnerHTML={{ __html: selectedContent.body }}
							/>
						</div>
						<span
							className="group absolute h-[3rem] w-[3rem] right-0 top-0 cursor-pointer"
							onClick={closeOverlay}
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
				</div>
			)}
		</section>
	);
};

export default LeadershipGrid;
