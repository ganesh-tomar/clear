'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import style from '../../components/styles/logoSlider.module.css';

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

const LogoSlider = ({ data }) => {
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

	const content = data || [];

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
				<div className="w-full flex flex-col logoSlider z-[3] overflow-hidden padding-top-sm no-padding-bottom">
					<span className="logoSliderLeftGradient liteGradient inline-block"></span>
					<span className="logoSliderRightGradient liteGradient inline-block"></span>

					<div className="inline-block min-h-[8.6rem]">
						<ul className={`absolute flex ${style.ul1}`}>
							{content.map((item, index) => {
								return (
									<li
										className="h-[8.4rem] max-w[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[25%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
										key={index}
									>
										<Image
											src={item.image.mediaItemUrl}
											alt={item.image.altText}
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
										className="h-[8.4rem] max-w[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[20%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
										key={index}
									>
										<Image
											src={item.image.mediaItemUrl}
											alt={item.image.altText}
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
			) : content.length > 2 && winWidth < 596 ? (
				<div
					className={`w-full flex flex-col logoSlider mb-[5rem] z-[3] overflow-hidden padding-top-sm no-padding-bottom`}
				>
					
							<span className="logoSliderLeftGradient liteGradient inline-block"></span>
							<span className="logoSliderRightGradient liteGradient inline-block"></span>
					
					<div className="inline-block min-h-[8.6rem]">
						<ul className={`absolute flex ${style.ul1}`}>
							{content.map((item, index) => {
								return (
									<li
										className="h-[8.4rem] mx-[2.5rem]  max-w[19.3rem] w-[100%] inline-block laptop:max-w-[20%] laptop:w-[21rem] tablet:max-w-[25%] tablet:w-[18rem] phablet:max-w-[25%] phablet:w-[18rem] sm:max-w-[50%] sm:w-[15rem]"
										key={index}
									>
										<Image
											src={item.image.mediaItemUrl}
											alt={item.image.altText}
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
											src={item.image.mediaItemUrl}
											alt={item.image.altText}
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
					className={`${'ml-[-7.5rem] phablet:ml-[-5rem] lg:ml-[-6.5rem] '} flex flex-wrap mb-[8rem] changeingwrap`}
				>
					{content.map((item, index) => (
						<div
							className="h-[8.4rem] max-w-[19.3rem] w-[calc(25%-5rem)] mx-[2.5rem] logo-wrap"
							key={index}
						>
							<Image
								src={item.image.mediaItemUrl}
                                alt={item.image.altText}
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
