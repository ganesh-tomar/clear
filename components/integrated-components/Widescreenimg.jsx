import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import currentLottie from '../../public/Lootie/Lightning-Bolt-Black-Marker-Icon.json';
import starburst from '../../public/Lootie/Star-Burst-Black-Market.json';

gsap.registerPlugin(ScrollTrigger);

const WideScreenImg = (data) => {
	const hasCurrentLottie = data?.classes?.includes('currentLottie');
	const hasStarburstLottie = data?.classes?.includes('starburst');

	const [currentLottieState, setCurrentLottieState] = useState({
		isStopped: true,
		isPaused: false,
	});
	const [starburstLottieState, setStarburstLottieState] = useState({
		isStopped: true,
		isPaused: false,
	});

	const currentLottieRef = useRef(null);
	const starburstLottieRef = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setCurrentLottieState({ isStopped: false, isPaused: false });
					setStarburstLottieState({ isStopped: false, isPaused: false });
				} else {
					setCurrentLottieState({ isStopped: true, isPaused: true });
					setStarburstLottieState({ isStopped: true, isPaused: true });
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		if (currentLottieRef.current) {
			observer.observe(currentLottieRef.current);
		}
		if (starburstLottieRef.current) {
			observer.observe(starburstLottieRef.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);

	useEffect(() => {
		const initializeGsap = () => {
			const images = document.querySelectorAll('.widescreenimg .imagesRowWrapper img');
			const container = document.querySelector('.widescreenimg #imageScroller');
			const elementToMove = document.querySelector('.widescreenimg .imagesRowWrapper');
			const containerWidth = container?.offsetWidth;
			let allImagesWidth = 0;

			images.forEach((image) => {
				const width = image.offsetWidth;
				allImagesWidth += width;
			});

			let xValue;
			if (window.innerWidth > 380) {
				xValue = allImagesWidth - containerWidth + data.items.length * 25;
			} else {
				xValue = allImagesWidth - containerWidth - 70;
			}

			// Clear existing ScrollTrigger instances
			ScrollTrigger.getAll().forEach((trigger) => {
				if (
					trigger.trigger &&
					document.querySelector('.widescreenimg') &&
					document.querySelector('.widescreenimg').contains(trigger.trigger)
				) {
					trigger.kill();
				}
			});

			// Create new animation
			gsap.to(elementToMove, {
				x: -xValue,
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: 'top center+=25%',
					end: 'top top',
					onUpdate: (self) => {
						// Ensure self is the ScrollTrigger instance
						const progress = self.scroll() / self.end; // Calculate progress from scroll position
						const currentXValue = -progress * xValue; // Calculate the current position
						gsap.set(elementToMove, { x: currentXValue });
					},
				},
			});
		};

		initializeGsap();
		window.addEventListener('resize', initializeGsap);

		return () => {
			window.removeEventListener('resize', initializeGsap);
			ScrollTrigger.getAll().forEach((trigger) => {
				if (
					trigger.trigger &&
					document.querySelector('.widescreenimg') &&
					document.querySelector('.widescreenimg').contains(trigger.trigger)
				) {
					trigger.kill();
				}
			});
		};
	}, []); // Empty dependency array to run once on mount

	const content = data.items.map((item) => ({
		imgpath: item?.logo?.sourceUrl,
		imgtext: item?.logo?.altText,
		width: item?.isBigImg ? 'max-w-[57rem] w-[40%]' : 'max-w-[33.2rem] w-[23%]',
	}));

	return (
		<section
			className={`widescreenimg grid__parallax dark small-padding-top ${data?.classes} ${data?.padding.join(' ')}`}
		>
			<div className="container">
				<div id="imageScroller" className="img-wrapper relative h-[54rem] lg:h-[30rem]">
					{hasCurrentLottie && (
						<div
							ref={currentLottieRef}
							className="img-wrap lg:hidden laptopsmall:w-[16rem] laptopsmall:h-[17.6rem] laptopsmall:top-[-5.5rem] absolute top-[-2.5rem] z-[1] right-[13rem] w-[11rem] h-[10.6rem] md:w-[6rem] md:h-[5.6rem] md:top-[-5.5rem] md:[-6rem]"
						>
							<Lottie
								ref={currentLottieRef}
								options={{
									loop: true,
									autoplay: !currentLottieState.isStopped,
									animationData: currentLottie,
									rendererSettings: {
										preserveAspectRatio: 'xMidYMid slice',
									},
								}}
								isStopped={currentLottieState.isStopped}
								isPaused={currentLottieState.isPaused}
							/>
						</div>
					)}

					{hasStarburstLottie && (
						<div
							ref={starburstLottieRef}
							className="img-wrap max-w-[15.5rem] max-h-[14.7rem] top-[-9.5rem] left-[14rem] absolute z-[2]"
						>
							<Lottie
								ref={starburstLottieRef}
								options={{
									loop: true,
									autoplay: !starburstLottieState.isStopped,
									animationData: starburst,
									rendererSettings: {
										preserveAspectRatio: 'xMidYMid slice',
									},
								}}
								isStopped={starburstLottieState.isStopped}
								isPaused={starburstLottieState.isPaused}
							/>
						</div>
					)}

					<div className="imagesRow absolute w-max top-0 left-0">
						<div className="relative imagesRowWrapper flex">
							{content.map((item, index) => (
								<div
									key={index}
									className={`inline-block relative h-[54rem] ${item.width} mr-[3rem] laptop:mr-[3.5rem] lg:h-[30rem] lg:mr-[2rem]`}
								>
									<Image
										src={item.imgpath}
										width={9000}
										height={5500}
										alt={item.imgtext}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WideScreenImg;
