'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie';
import person from '../../public/Lootie/Tie-Person-Black-Market.json';

const ImageWithContent = (data) => {
	// Determine if the 'circle' class is present
	const isCircleClass = data?.classes?.includes('circle');
	const hasPersonLottie = data?.classes?.includes('person');
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
		<section
			className={`imgwithcontent ${data?.isReverse ? 'reverse' : ''
				} grid__parallax dark ${data.classes} ${data?.padding.join(
					' ',
				)} bulbDoodle`}
		>
			<div className="container">
				<div
					className={`${data?.isReverse ? 'flex-row-reverse lg:justify-end' : ''
						} ${data?.image?.sourceUrl ? 'items-center' : ''
						} wrapper w-full relative flex flex-wrap lg:justify-center lg:ml-[0]`}
				>
					<div
						className={`col-image relative w-full h-full max-h-[71rem] max-w-[69rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`}
					>
						{data?.image?.sourceUrl && (
							<div
								className={`${isCircleClass
									? 'lg:max-w-[60.3rem] lg:max-h-[65.3rem] sm:!max-w-[30.3rem] sm:!max-h-[40.3rem]'
									: ''
									} img-wrapper relative w-full h-full overflow-hidden mx-auto`}
							>
								<Image
									src={data?.image?.sourceUrl}
									width={1000}
									height={1000}
									alt={data?.image?.altText}
									className={`w-full h-full object-cover`}
								/>
							</div>
						)}
					</div>
					<div
						className={`${data?.isReverse ? 'pr-[15rem] lg:pr-0' : 'pl-[15rem]'
							} ${data?.image?.sourceUrl && data?.isReverse
								? ''
								: 'pt-[3.7rem] lg:pt-0'
							}
                            content-wrapper relative w-[calc(100%-69rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
					>


						{data?.eyebrow && (
							<h6 className="subtitle mb-[2rem]">{data?.eyebrow}</h6>
						)}

						{data?.title && (
							<h3
								className="mb-[3rem] relative"
								dangerouslySetInnerHTML={{ __html: data.title }}
							/>
						)}
						{hasPersonLottie && (
							<div
								ref={animationContainerRef}
								className="lottie-wrap personIcon absolute right-[39rem] top-[17rem] w-[5.8rem] h-[7.9rem] xm:hidden laptop-landscape:top-[9rem] laptop-landscape:w-[4rem] laptop-landscape:h-[6rem]"
							>
								<Lottie
									options={{
										loop: true,
										autoplay: !animationState.isStopped, // Automatically play when not stopped
										animationData: person,
										rendererSettings: {
											preserveAspectRatio: 'xMidYMid slice',
										},
									}}
									isStopped={animationState.isStopped}
									isPaused={animationState.isPaused}
								/>
							</div>
						)}

						{data?.body && (
							<div
								className=""
								dangerouslySetInnerHTML={{ __html: data.body }}
							/>
						)}

						{data?.button?.length > 0 && (
							<div className="button-wrap mt-[3rem] md:mt-[2rem] z-[10]">
								{data?.button?.map((btn, index) => (
									<Link
										key={index}
										className={`btn ${btn?.class} !px-0 mr-2`}
										href={btn?.linkUrl}
										target={btn?.target ? '_blank' : '_self'}
									>
										{btn?.linkText}
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageWithContent;
