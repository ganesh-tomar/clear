import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import Link from 'next/link';
import Image from 'next/image';
import SectionIntro from '../SectionIntro';
import { LottieService } from '../services/LottieService';

const IntroWithContent = (data) => {
	const [animationStates, setAnimationStates] = useState(
		data.items.map(() => ({ isStopped: true, isPaused: true })),
	);
	const refs = useRef([]);

	const playAnimation = (index) => {
		setAnimationStates((prevStates) => {
			const newStates = [...prevStates];
			newStates[index].isStopped = false; // Start the animation
			newStates[index].isPaused = false; // Play the animation
			return newStates;
		});
	};

	const resetAnimations = () => {
		setAnimationStates((prevStates) =>
			prevStates.map(() => ({ isStopped: true, isPaused: true })),
		);
	};

	const playSequentialAnimations = (startIndex) => {
		if (startIndex >= animationStates.length) return; // Stop if we exceed the index

		playAnimation(startIndex); // Play the current animation

		// Set a timeout to play the next animation after a delay
		setTimeout(() => {
			playSequentialAnimations(startIndex + 1);
		}, 500); // 0.5-second delay
	};

	useEffect(() => {
		const handleIntersection = (entries, observer) => {
			if (window.innerWidth > 992) {
				entries.forEach((entry) => {
					const index = refs.current.indexOf(entry.target);

					if (entry.isIntersecting) {
						if (index === 0) {
							resetAnimations(); // Reset animations before starting
							setTimeout(() => {
								playSequentialAnimations(0); // Start from the first animation
							}, 700);
						}
					} else {
						resetAnimations(); // Reset animations when out of view
					}
				});
			} else {
				// For screens less than 992px, play individual animations as they come into view
				entries.forEach((entry) => {
					const index = refs.current.indexOf(entry.target);

					if (entry.isIntersecting) {
						playAnimation(index); // Play the animation for the specific item
					} else {
						// Optionally reset animation when it goes out of view
						setAnimationStates((prevStates) => {
							const newStates = [...prevStates];
							newStates[index].isStopped = true;
							newStates[index].isPaused = true;
							return newStates;
						});
					}
				});
			}
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		refs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		}); // Always observe the elements

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section
			className={`introWithContent grid__parallax dark z-[7] will-change-transform bg-white ${
				data?.classes
			} ${data?.padding.join(' ')} ${
				data.classes === 'mediumheight' ? '' : 'height__full'
			}`}
			id={data.id}
		>
			<div className="container">
				<SectionIntro {...data} iconAnim="rocket" />
				<div className="gap-[3rem] wrapper flex flex-wrap justify-between laptop:justify-normal md:gap-[5rem] mt-[5.4rem] md:mt-[4.4rem]">
					{data.items?.map((item, i) => (
						<div
							className={`introWithContent__item relative pr-[9rem] w-full lg-up:w-[calc(33%-2rem)] tablet:w-[calc(50%-2rem)] tablet:mb-[30px] xl:pr-0 animation-container-${i}`}
							key={i}
							data-index={i}
						>
							{item?.linkUrl && (
								<Link className="redirect" href={item?.linkUrl}>
									.
								</Link>
							)}
							{item?.iconAnim &&
								item?.iconAnim != 'none' &&
								item?.iconAnim != null && (
									<div
										ref={(el) => (refs.current[i] = el)}
										className="introWithContent__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]"
									>
										<Lottie
											options={{
												loop: false,
												autoplay: false,
												animationData: LottieService(item.iconAnim),
												rendererSettings: {
													preserveAspectRatio: 'xMidYMid slice',
												},
											}}
											isStopped={animationStates[i]?.isStopped}
											isPaused={animationStates[i]?.isPaused}
										/>
									</div>
								)}
							{item.logo?.mediaItemUrl && (
								<div className="introWithContent__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]">
									<Image
										src={item.logo.mediaItemUrl}
										width={800}
										height={1090}
										className="md:object-contain  h-full w-full "
										alt={item.logo.altText}
									/>
								</div>
							)}
							{item.subhead && (
								<h2
									className={`${
										item.iconClass ? item.iconClass + ' ' : ''
									}large mb-[1rem] sm:!text-[90px] relative inline-block`}
									dangerouslySetInnerHTML={{ __html: item.subhead }}
								/>
							)}
							
							{item?.title && (
								<h5 dangerouslySetInnerHTML={{ __html: item.title }} />
							)}
							{item?.bodyWithoutEditor && (
								<p className="mt-[1rem] md:mt-[1rem]">
									{item.bodyWithoutEditor}
								</p>
							)}
							{item?.bottomIcon?.sourceUrl && (
								<div className="bottom-icon max-w-[16rem] mt-[3.6rem] h-[3rem]">
									<Image
										src={item?.bottomIcon?.sourceUrl}
										width={800}
										height={1090}
										className="md:object-contain object-left h-full w-full object-contain"
										alt={item?.bottomIcon?.altText}
									/>
								</div>
							)}
							{item?.button && (
								<Link
									className={`${item?.button?.[0]?.class}`}
									href={item?.button?.[0]?.linkUrl}
									target={item?.button?.[0]?.class ? '_blank' : '_self'}
								>
									{item?.button?.[0]?.linkText}
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default IntroWithContent;
