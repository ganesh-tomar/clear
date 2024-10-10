import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import rocket from '../public/Lootie/Clear_HP_Rocket_R1.json';
import arrow from '../public/Lootie/Clear_HP_DownArrow_R1.json';
import { LottieService } from '../components/services/LottieService';

const SectionIntro = ({
	iconAnim,
	subhead,
	title,
	bodyWithoutEditor,
	lottieAnimation,
	titleWithAnim,
	animationTitle,
	preTitle,
	textPosition2,
	textPosition3,
}) => {
	const [rocketAnimationState, setRocketAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});
	const [arrowAnimationState, setArrowAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});
	const [sectionLottieAnimationState, setSectionLottieAnimationState] = useState({
		isStopped: true,
		isPaused: true,
	});

	const rocketRef = useRef(null);
	const arrowRef = useRef(null);
	const sectionLottieRef = useRef(null);

	const handleIntersection = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target === rocketRef.current) {
					setRocketAnimationState({ isStopped: false, isPaused: false });
				} else if (entry.target === arrowRef.current) {
					setArrowAnimationState({ isStopped: false, isPaused: false });
				}
			} else {
				if (entry.target === rocketRef.current) {
					setRocketAnimationState({ isStopped: true, isPaused: false });
				} else if (entry.target === arrowRef.current) {
					setArrowAnimationState({ isStopped: true, isPaused: false });
				}
			}
		});
	};

	const renderLottieAnimation = (name) => {
		switch (name) {
			case 'TalkBubbleMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation TalkBubbleMarker absolute bottom-[-1rem] right-[-23rem] max-w-[28.6rem] max-h-[13.3rem]"
					>
						<Lottie
							options={{
								loop: false, // Disable loop for the section lottie animation
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
						/>
					</div>
				);

			case 'YouCircleMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation YouCircleMarker  absolute w-[21.4rem] h-[13.2rem] bottom-[-3rem] right-[-3.8rem]"
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'GraphMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation GraphMarker absolute w-[10.1rem] h-[9.5rem] bottom-[-1rem] right-[-12rem]"
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'Thunder':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Thunder absolute w-[8.9rem] h-[10.2rem] right-[-9rem] bottom-[-1rem]"
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'Strongcircle':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Strongcircle absolute w-[38.4rem] h-[12.2rem] bottom-[-3.3rem] left-[-7rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'CorkscrewMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation CorkscrewMarker  absolute w-[15.8rem] h-[6.9rem] bottom-0 right-[-18rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'ArrowGraphMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation ArrowGraphMarker absolute w-[9.9rem] h-[9rem] bottom-0 right-[-10.9rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'ExpertCircle':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation ExpertCircle absolute w-[37.3rem] h-[12.7rem] bottom-[-2.3rem] right-[-3rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'Gravity':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Gravity absolute w-[100%] h-[6.7rem] sm:h-[4.7rem] sm:bottom-[-2rem] bottom-[-3rem] left-0 "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'Warningsign':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Warningsign absolute w-[10.9rem] h-[9.8rem] bottom-0 right-[-11rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'Blackcircle':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Blackcircle absolute w-[10.4rem] h-[6.9rem] bottom-[-1rem] left-[1rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			case 'underlineMarker':
				return (
					<div
						ref={sectionLottieRef}
						className="lottie-animation Warningsign absolute w-[10.9rem] h-[9.8rem] bottom-0 right-[-11rem] "
					>
						<Lottie
							options={{
								loop: false,
								autoplay: false,
								animationData: LottieService(lottieAnimation),
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={sectionLottieAnimationState.isStopped}
							isPaused={sectionLottieAnimationState.isPaused}
							className="lottie"
						/>
					</div>
				);

			default:
				return null; // handle other cases or default behavior
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5, // Adjust based on when you want the animation to trigger (e.g., when 50% of the element is visible)
		});

		if (rocketRef.current) observer.observe(rocketRef.current);
		if (arrowRef.current) observer.observe(arrowRef.current);

		return () => {
			if (rocketRef.current) observer.unobserve(rocketRef.current);
			if (arrowRef.current) observer.unobserve(arrowRef.current);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setSectionLottieAnimationState({
							isStopped: false,
							isPaused: false,
						});
					} else {
						setSectionLottieAnimationState({ isStopped: true, isPaused: true });
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (sectionLottieRef.current) {
			observer.observe(sectionLottieRef.current);
		}

		return () => {
			if (sectionLottieRef.current) {
				observer.unobserve(sectionLottieRef.current);
			}
		};
	}, []);

	return (
		<div className="intro">
			<div className="wrapper">
				<div className="intro__text max-w-[117rem] relative">
					<div
						ref={rocketRef}
						className="hidden rocketDoodleIcon img-wrap absolute top-[-8rem] right-[7rem] w-[12rem] h-[12rem] phone:w-[10rem] phone:h-[9rem] sm:right-0 sm:top-[-6rem] xs:w-[8rem] xs:h-[7rem]"
					>
						<Lottie
							options={{
								loop: false, // Set loop to false to prevent continuous animation
								autoplay: false,
								animationData: rocket,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={rocketAnimationState.isStopped}
							isPaused={rocketAnimationState.isPaused}
						/>
					</div>
					<div
						ref={arrowRef}
						className="hidden arrowDoodleIcon img-wrap absolute bottom-[-8rem] left-[-5rem] w-[4.6rem] h-[10.3rem]"
					>
						<Lottie
							options={{
								loop: false, // Set loop to false to prevent continuous animation
								autoplay: false,
								animationData: arrow,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice',
								},
							}}
							isStopped={arrowAnimationState.isStopped}
							isPaused={arrowAnimationState.isPaused}
						/>
					</div>
					<h5 className="eyebrow__text pr-[7rem] subtitle">{subhead}</h5>
					<h2 className="rocketBg tablet:pr-[7rem] relative" dangerouslySetInnerHTML={{ __html: title }} />
					{titleWithAnim && (
						<div className={`relative`}>
							{animationTitle == 'none' ? (
								<h3 className="text-white leading-[1.1] pr-[1rem] max-w-[55rem]">
									{preTitle} {textPosition2} {textPosition3}
								</h3>
							) : ('')}
							{animationTitle == 'default' ? (
								<h2 className="">
									{preTitle}{' '}
									<span className="relative inline-block">
										{renderLottieAnimation(lottieAnimation)}
										{textPosition2}
									</span>{' '}
									{textPosition3}
								</h2>
							) : ('')}
							{animationTitle == 'post' ? (
								<h2 className="">
									{preTitle}{' '}
									<data
										className="inline-block"
										dangerouslySetInnerHTML={{ __html: textPosition2 }}
									/>{' '}
									<span
										className={`relative inline-block  ${[
											'YouCircleMarker',
											'Thunder',
											'ArrowGraphMarker',
											'ExpertCircle',
											'Warningsign',
										].includes(lottieAnimation)
											? 'pink'
											: 'black'
											}`}
									>
										{' '}
										{renderLottieAnimation(lottieAnimation)} {textPosition3}
									</span>{' '}
								</h2>
							) : ('')}
						</div>
					)}
					<p className="relative mt-[5rem] lg:mt-[3rem] subtitle !leading-[1.5] curved_arrow">
						{bodyWithoutEditor}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SectionIntro;
