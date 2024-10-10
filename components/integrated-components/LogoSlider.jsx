'use client';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import debounce from 'lodash.debounce';

const LogoSlider = (props) => {
	const [winWidth, setWinWidth] = useState(0);
	const content = props.data?.logo || []; // Fallback if logo is undefined
	const hasEnoughLogos = content.length >= 5;
	const numberOfDuplicates = 6; // Change this to your desired number
	const duplicatedItems = Array(numberOfDuplicates).fill(content).flat();
	const animation = { duration: 10000, easing: (t) => t };
	const phoneAnimation = { duration: 3000, easing: (t) => t };
	console.log(hasEnoughLogos);

	useEffect(() => {
		const handleResize = () => {
			setWinWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize(); // Initialize on mount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Keen slider initialization
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		renderMode: 'performance',
		drag: false,
		created(s) {
			if (hasEnoughLogos) {
				s.moveToIdx(6, true, animation);
			} else {
				s.moveToIdx(2, true, phoneAnimation);
			}
		},
		updated(s) {
			if (s.track?.details) {
				if (hasEnoughLogos) {
					s.moveToIdx(s.track.details.abs + 6, true, animation);
				} else {
					s.moveToIdx(s.track.details.abs + 2, true, phoneAnimation);
				}
			}
		},
		animationEnded(s) {
			if (s.track?.details) {
				if (hasEnoughLogos) {
					s.moveToIdx(s.track.details.abs + 6, true, animation);
				} else {
					s.moveToIdx(s.track.details.abs + 2, true, phoneAnimation);
				}
			}
		},
		slides: {
			perView: 6,
			spacing: 30,
		},
		breakpoints: {
			'(max-width: 1200px)': {
				slides: {
					perView: 5,
					spacing: 20,
				},
			},
			'(max-width: 991px)': {
				slides: {
					perView: 3,
					spacing: 20,
				},
			},
			'(max-width: 595px)': {
				slides: {
					perView: 2,
					spacing: 20,
				},
			},
		},
	});

	// Handle window resize
	useLayoutEffect(() => {
		const handleResize = debounce(() => {
			if (instanceRef.current) {
				instanceRef.current.update();
			}
		}, 150); // Debounce for 150ms

		window.addEventListener('resize', handleResize);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [instanceRef]);

	// Fix the condition to check content length
	if (content.length === 0) {
		return <p>No logos available to display.</p>;
	}

	return (
		<div className="w-full flex flex-col logoSlider z-[3] overflow-hidden padding-top-sm no-padding-bottom">
			<span className="logoSliderLeftGradient liteGradient inline-block"></span>
			<span className="logoSliderRightGradient liteGradient inline-block"></span>

			{hasEnoughLogos ? (
				<div ref={sliderRef} className="keen-slider ">
					{duplicatedItems.map((item, index) =>
						item?.image?.mediaItemUrl ? (
							<div
								className="keen-slider__slide h-[8.4rem] max-w-[24rem]  w-[100%] inline-block  laptop:w-[21rem] tablet:max-w-[25%]  phablet:max-w-[25%]  sm:max-w-[50%] "
								key={index}
							>
								<img
									src={item.image.mediaItemUrl}
									alt={item.image.altText || ''}
									width={162}
									height={100}
									className="w-full  block h-full object-scale-down"
								/>
							</div>
						) : null,
					)}
				</div>
			) : winWidth > 596 ? (
				<div className="container">
					<div className="min-h-[8.6rem] flex ml-[-2.5rem]">
						{content.map((item, index) =>
							item?.image && item?.image?.mediaItemUrl ? (
								<div
									key={index}
									className="h-[8.4rem] max-w-[19.3rem] w-[calc(25%-5rem)] mx-[2.5rem] logo-wrap"
								>
									<img
										src={item.image.mediaItemUrl}
										alt={item.image.altText || ''}
										width={162}
										height={100}
										className="w-full h-full object-scale-down object-left"
										fetchPriority="high"
									/>
								</div>
							) : null,
						)}
					</div>
				</div>
			) : (
				<div ref={sliderRef} className="keen-slider sm-up:!hidden">
					{duplicatedItems.map((item, index) =>
						item?.image && item?.image?.mediaItemUrl ? (
							<div className="keen-slider__slide h-[4.4rem] w-[50%]" key={index}>
								<img
									src={item.image.mediaItemUrl}
									alt={item.image.altText || ''}
									width={162}
									height={100}
									className="w-full h-full object-scale-down"
								/>
							</div>
						) : null,
					)}
				</div>
			)}
		</div>
	);
};

export default LogoSlider;
