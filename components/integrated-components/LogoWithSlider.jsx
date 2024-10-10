import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import debounce from 'lodash.debounce';

const LogoWithSlider = ({
	items = [],
	padding = [],
	classes = '',
	id = '',
}) => {
	const [winWidth, setWinWidth] = useState(0);
	const animation = { duration: 10000, easing: (t) => t };
	const phoneAnimation = { duration: 3000, easing: (t) => t };
	const hasEnoughLogos = items.length >= 5;
	const hasLessLogos = items.length <= 4;

	const numberOfDuplicates = 6; // Change this to your desired number
	const duplicatedItems = Array(numberOfDuplicates).fill(items).flat();
	// Update window width on resize
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

	// Slider setup
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
			if (s.track && s.track.details) {
				if (hasEnoughLogos) {
					s.moveToIdx(s.track.details.abs + 6, true, animation);
				} else {
					s.moveToIdx(s.track.details.abs + 2, true, phoneAnimation);
				}
			}
		},
		animationEnded(s) {
			if (s.track && s.track.details) {
				if (hasEnoughLogos) {
					s.moveToIdx(s.track.details.abs + 6, true, animation);
				} else {
					s.moveToIdx(s.track.details.abs + 2, true, phoneAnimation);
				}
			}
		},
		slides: {
			perView: 6, // Default to 6 slides
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
			'(max-width: 596px)': {
				slides: {
					perView: 2,
					spacing: 20,
				},
			},
		},
	});

	// Handle slider update on window resize with debounce
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

	return (
		<section
			className={`logoSlider overflow-hidden sm:pt-[2rem] sm:pb-[5rem] ${classes} ${padding?.join(
				' ',
			)}`}
			id={id}
		>
			<span className="logoSliderLeftGradient liteGradient inline-block"></span>
			<span className="logoSliderRightGradient liteGradient inline-block"></span>

			{/* Render heading if it exists */}
			{items.map((item, index) =>
				item.heading ? (
					<div key={index} className="container">
						<h4 className="!text-black mb-[3rem]">{item.heading}</h4>
					</div>
				) : null,
			)}

			{/* Slider for all logos */}
			{hasEnoughLogos ? (
				<div ref={sliderRef} className="keen-slider ">
					{duplicatedItems.map((item, index) =>
						item?.logo?.mediaItemUrl ? (
							<div
								className="keen-slider__slide h-[8.4rem] max-w-[24rem]  w-[100%] inline-block  laptop:w-[21rem] tablet:max-w-[25%]  phablet:max-w-[25%]  sm:max-w-[50%] "
								key={index}
							>
								<img
									src={item.logo.mediaItemUrl}
									alt={item.logo.altText || ''}
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
						{items.map((item, index) =>
							item?.logo && item?.logo?.mediaItemUrl ? (
								<div
									key={index}
									className="h-[8.4rem] max-w-[19.3rem] w-[calc(25%-5rem)] mx-[2.5rem] logo-wrap"
								>
									<img
										src={item.logo.mediaItemUrl}
										alt={item.logo.altText || ''}
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
						item?.logo && item?.logo?.mediaItemUrl ? (
							<div className="keen-slider__slide h-[4.4rem] w-[50%]" key={index}>
								<img
									src={item.logo.mediaItemUrl}
									alt={item.logo.altText || ''}
									width={162}
									height={100}
									className="w-full h-full object-scale-down"
								/>
							</div>
						) : null,
					)}
				</div>
			)}
		</section>
	);
};

export default LogoWithSlider;
