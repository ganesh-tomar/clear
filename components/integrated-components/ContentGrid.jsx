'use client';
import Link from 'next/link';
import starmarker from '../../public/Lootie/Star-Black-Market.json';
import Lottie from 'react-lottie';
import React, { useState, useRef, useEffect } from 'react';

const ContentBar = ({
	title,
	subhead,
	bodyWithoutEditor,
	classes,
	padding,
	gridItems = [],  // Default to an empty array to prevent null/undefined issues
	body
}) => {
	const hasStarLottie = classes?.includes('starmarker');

	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});
	const animationContainerRef = useRef(null);


	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element is in view, play animation
					setAnimationState({ isStopped: false, isPaused: false });
				} else {
					// Element is out of view, reset animation
					setAnimationState({ isStopped: true, isPaused: true });
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
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
		<section className={`contentbar grid__parallax dark ${classes} ${padding}`}>
			<div className="container">
				<div className="wrapper w-full laptopsmall:items-center relative flex flex-wrap ml-[-7.5rem] lg:ml-0">
					<div className="w-[calc(50%-15rem)] content-wrap max-w-[57rem] mx-[7.5rem] lg:!w-[100%] lg:mb-[8rem] lg:mx-0 lg:max-w-[100%]">
						<h6 className="mb-[2rem] font-normal">{subhead}</h6>
						<h2
							className="mb-[2rem]"
							dangerouslySetInnerHTML={{ __html: title }}
						/>
						<p className="subtitle !leading-[1.5]">{bodyWithoutEditor}</p>
					</div>
					<div className="w-[calc(50%-13rem)] starly max-w-[57rem] ml-[9.2rem] xxl-up:min-h-[34rem] bg-[#E5E4E7] py-[5rem] pl-[5rem] pr-[28rem] laptop:pr-[20rem] relative lg:!w-[100%] lg:mx-0 sm:pr-[10rem] xs:pr-[7rem] sm:pl-[2rem]">
						{hasStarLottie && (
							<div
								ref={animationContainerRef}
								className="lottie-wrap absolute right-[-8.5rem] top-[6rem] w-[12.7rem] h-[11.7rem] md:top-[-5rem] md:right-[-0.5rem] "
							>
								<Lottie
									options={{
										loop: true,
										autoplay: !animationState.isStopped, // Automatically play when not stopped
										animationData: starmarker,
										rendererSettings: {
											preserveAspectRatio: 'xMidYMid slice',
										},
									}}
									isStopped={animationState.isStopped}
									isPaused={animationState.isPaused}
								/>
							</div>
						)}

						{Array.isArray(gridItems) && gridItems.length > 0 && gridItems.map((item, index) => (
							<div
								key={index}
								className={`btn-wrap ${index === gridItems.length - 1 ? 'mb-0' : 'mb-[3rem]'}`}
							>
								<Link className="tertiary-btn black" href={item?.link}>
									{item?.linkText}
								</Link>
							</div>
						))}
						{body && (
							<div dangerouslySetInnerHTML={{ __html: body }} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentBar;
