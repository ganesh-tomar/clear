'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import style from '../components/styles/logoSlider.module.css';

const logos = {
	data: [
		{
			image: '/logos/cisco.svg',
			alt: 'Cisco',
		},
		{
			image: '/logos/mcafee.svg',
			alt: 'McAfee',
		},
		{
			image: '/Stanford.png',
			alt: 'Stanford',
		},
		{
			image: '/Tenable.png',
			alt: 'Tenable',
		},
		{
			image: '/VMware.png',
			alt: 'VMware',
		},
		{
			image: '/logos/cisco.svg',
			alt: 'Cisco',
		},
		{
			image: '/logos/mcafee.svg',
			alt: 'McAfee',
		},
		{
			image: '/Stanford.png',
			alt: 'Stanford',
		},
	],
	datawhite: [
		{
			image: '/cisco-black.svg',
			alt: 'Cisco',
		},
		{
			image: '/macafee_black.svg',
			alt: 'McAfee',
		},
		{
			image: '/stanford_black.svg',
			alt: 'Stanford',
		},
		{
			image: '/tenable_black.svg',
			alt: 'Tenable',
		},
		{
			image: '/vmware_black.svg',
			alt: 'VMware',
		},
		{
			heading: 'You’re in good company',
			image: '/cisco-black.svg',
			alt: 'Cisco',
		},
		{
			image: '/macafee_black.svg',
			alt: 'McAfee',
		},
		{
			image: '/stanford_black.svg',
			alt: 'Stanford',
		},
	],
	fourcard: [
		{
			image: '/Align_Logo_Grey-1 1.svg',
			alt: 'Cisco',
		},
		{
			image: '/iTero-Grey-Logo 1.png',
			alt: 'McAfee',
		},
		{
			image: '/Vocera_Logo_White-1 1.png',
			alt: 'Stanford',
		},
		{
			image: '/Vocera_Logo_White-1 2.png',
			alt: 'Tenable',
		},
	],
	award: [
		{
			image: '/ava_4x.png',
			alt: 'Cisco',
		},
		{
			image: '/splash_4x.png',
			alt: 'McAfee',
		},
		{
			image: '/aaf_4x.png',
			alt: 'Stanford',
		},
		{
			image: '/MarCom_4x.png',
			alt: 'Tenable',
		},
	],
};

const settings = {
	dots: false,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	pauseOnHover: false,
	swipeToSlide: false,
	focusOnSelect: false,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 8000,
	cssEase: 'linear',
	centerMode: true,
	infinite: true,
};

const responsiveSettings = [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 5,
		},
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 4,
		},
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 4,
		},
	},
	{
		breakpoint: 595,
		settings: {
			slidesToShow: 3,
		},
	},
	{
		breakpoint: 460,
		settings: {
			slidesToShow: 2,
		},
	},
];

Object.assign(settings, { responsive: responsiveSettings });

const LogoSlider = ({ asChild, contentname, showGradient, bgcolor, pt }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 596) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('load', handleResize);
		};
	}, []);

	const content = logos[contentname] || [];

	const [winWidth, isWinWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			{content.length > 4 ? (
				asChild === true ? (
					<div className="w-full flex flex-col logoSlider z-[3] overflow-hidden padding-top-sm no-padding-bottom">
						{showGradient === false ? (
							''
						) : (
							<>
								<span className="logoSliderLeftGradient liteGradient inline-block"></span>
								<span className="logoSliderRightGradient liteGradient inline-block"></span>
							</>
						)}
						<div className="inline-block min-h-[8.6rem]">
							<ul className={`absolute flex ${style.ul1}`}>
								{content.map((item, index) => {
									return (
										<li
											className="h-[8.4rem] max-w-[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[25%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
											key={index}
										>
											<Image
												src={item.image}
												alt={item.alt}
												width={162}
												height={100}
												className="w-full h-full object-contain"
											/>
										</li>
									);
								})}
							</ul>
							<ul className={`absolute flex ${style.ul2}`}>
								{content.map((item, index) => {
									return (
										<li
											className="h-[8.4rem] max-w-[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[20%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
											key={index}
										>
											<Image
												src={item.image}
												alt={item.alt}
												width={162}
												height={100}
												className="w-full h-full object-contain"
											/>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				) : (
					<section
						className={`${bgcolor ? bgcolor : 'bg-black'} ${
							pt === 'none' ? '!pt-[0]' : ''
						} logoSlider bg-black overflow-hidden padding-top-sm sm:pt-[2rem] sm:pb-[5rem]`}
					>
						{showGradient === false ? (
							''
						) : (
							<>
								<span className="logoSliderLeftGradient liteGradient inline-block"></span>
								<span className="logoSliderRightGradient liteGradient inline-block"></span>
							</>
						)}

						{content.map((item, index) => {
							return item.heading ? (
								<div key={index} className="container">
									<h4 className="!text-black mb-[3rem]">
										{item.heading}
									</h4>
								</div>
							) : (
								''
							);
						})}

						<div className="inline-block min-h-[8.6rem]">
							<ul className={`absolute flex ${style.ul1}`}>
								{content.map((item, index) => {
									return (
										<li
											className="h-[8.4rem] max-w-[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[25%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
											key={index}
										>
											<Image
												src={item.image}
												alt={item.alt}
												width={162}
												height={100}
												className="w-full h-full object-contain"
											/>
										</li>
									);
								})}
							</ul>
							<ul className={`absolute flex ${style.ul2}`}>
								{content.map((item, index) => {
									return (
										<li
											className="h-[8.4rem] max-w-[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[20%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
											key={index}
										>
											<Image
												src={item.image}
												alt={item.alt}
												width={162}
												height={100}
												className="w-full h-full object-contain"
											/>
										</li>
									);
								})}
							</ul>
						</div>
					</section>
				)
			) : content.length > 2 && winWidth < 596 ? (
				<div className={`${contentname === 'award' ? 'mt-[5rem] mb-0' : ''} w-full flex flex-col logoSlider mb-[5rem] z-[3] overflow-hidden padding-top-sm no-padding-bottom`}  >
					{showGradient === false ? (
						''
					) : (
						<>
							<span className="logoSliderLeftGradient liteGradient inline-block"></span>
							<span className="logoSliderRightGradient liteGradient inline-block"></span>
						</>
					)}
					<div className="inline-block min-h-[8.6rem]">
						<ul className={`absolute flex ${style.ul1}`}>
							{content.map((item, index) => {
								return (
									<li
										className="h-[8.4rem] mx-[2.5rem]  max-w[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[25%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
										key={index}
									>
										<Image
											src={item.image}
											alt={item.alt}
											width={162}
											height={100}
											className="w-full h-full object-contain"
										/>
									</li>
								);
							})}
						</ul>
						<ul className={`absolute flex ${style.ul2}`}>
							{content.map((item, index) => {
								return (
									<li
										className="h-[8.4rem] mx-[2.5rem] max-w[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[20%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
										key={index}
									>
										<Image
											src={item.image}
											alt={item.alt}
											width={162}
											height={100}
											className="w-full h-full object-contain"
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			) : (
				<div
					className={`${
						contentname === 'award'
							? 'ml-[-2.5rem] mt-[5rem] mb-0'
							: 'ml-[-7.5rem] phablet:ml-[-5rem] lg:ml-[-6.5rem] '
					} flex flex-wrap mb-[8rem] changeingwrap`}
				>
					{content.map((item, index) => (
						<div
							className="h-[8.4rem] max-w-[19.3rem] w-[calc(25%-5rem)] mx-[2.5rem] logo-wrap"
							key={index}
						>
							<Image
								src={item.image}
								alt={item.alt}
								width={162}
								height={100}
								className="w-full h-full object-contain"
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default LogoSlider;
