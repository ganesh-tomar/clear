import React, { useState, useRef, useEffect } from 'react';
import style from '../components/styles/colTwoImageSlider.module.css';
import Image from 'next/image';
import Lottie from 'react-lottie';
import star from '../public/Lootie/Clear_HP_Star_R1.json';

const getLottieAnimation = (iconAnim) => {
	switch (iconAnim) {
		case 'star':
			return star;
		default:
			return null;
	}
};

export default function FeaturedLogos({ subtitle, logo, iconAnim = 'star' }) {
	const logos = [
		{ img: '/forbes-logo.svg' },
		{ img: '/medium.svg' },
		{ img: '/logoipsum.svg' },
		{ img: '/hyper_best.svg' },
	];

	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});

	const animationContainerRef = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// console.log('Element is in view');
					setAnimationState({ isStopped: false, isPaused: false });
					observer.disconnect();
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
		<div
			className={`logowrapper w-full mt-[12.5rem] md:mt-[10rem] relative flex flex-wrap justify-between items-center`}
		>
			<div className={`${style.logosTitle} w-[25%] lg:w-fit relative`}>
				<h3 className={`relative inline ${style.star_logo}`}>Featured in:</h3>
				<div
					ref={animationContainerRef}
					className="img-wrap absolute top-[-9.5rem] right-[-8rem] w-[8rem] h-[6.6rem] md:w-[6rem] md:h-[5.6rem] md:top-[-7.5rem] md:[-6rem]"
				>
					<Lottie
						options={{
							loop: false,
							autoplay: false,
							animationData: getLottieAnimation(iconAnim),
							rendererSettings: {
								preserveAspectRatio: 'xMidYMid slice',
							},
						}}
						isStopped={animationState.isStopped}
						isPaused={animationState.isPaused}
					/>
				</div>
			</div>
			<div className="logowrapper justify-between relative flex flex-wrap w-[65%] xl:w-full xl:mt-[6rem] sm:gap-[2rem]">
				{logos.map((logo, index) => (
					<div
						className="imgwrapcase max-w-[15.3rem] max-h-[4.6rem] sm:max-w-[12rem] sm:px-0 sm-up:max-h-[7.7rem] w-full tablet:px-[2rem] phablet:px-[2rem] lg:mb-[3rem]"
						key={index}
					>
						<Image
							src={logo.img}
							width={100}
							height={100}
							className="w-full h-full object-contain"
							alt={`Logo ${index}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
