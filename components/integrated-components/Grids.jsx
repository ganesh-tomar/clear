import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { LottieService } from '../services/LottieService';
import { useRouter } from 'next/router';

export default function IntroWithCards({
	data,
	gridItems,
	padding = [],
	classes,
	id,
}) {
	const router = useRouter();
	const [animationState, setAnimationState] = useState(
		gridItems?.map(() => ({
			isStopped: false,
			isPaused: true,
		})),
	);
	const [BlackTheme, setBlackTheme] = useState(false);
	const [partnersCard, setPartnersCard] = useState(false);
	const [isWideScreen, setIsWideScreen] = useState(false);

	const handleMouseEnter = useCallback((index) => {
		setAnimationState((prevState) => {
			const newAnimationState = [...prevState];
			newAnimationState[index].isStopped = false;
			newAnimationState[index].isPaused = false;
			return newAnimationState;
		});
	}, []);

	const handleMouseLeave = useCallback((index) => {
		setAnimationState((prevState) => {
			const newAnimationState = [...prevState];
			newAnimationState[index].isStopped = true;
			newAnimationState[index].isPaused = true;
			return newAnimationState;
		});
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll('.grids');
		sections.forEach((section) => {
			if (section.classList.contains('bg-black')) {
				setBlackTheme(true);
			}
			if (section.classList.contains('partnerCards')) {
				setPartnersCard(true);
			}
		});
	}, []);

	useEffect(() => {
		const servicesPage = router.pathname === '/services';

		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 991);
		};

		const alignIcons = () => {
			const icons = document.querySelectorAll('.grids .logo-wrap');
			icons.forEach((svg) => {
				const svgLeft = svg.getBoundingClientRect().left;
				const svgTop = svg.getBoundingClientRect().top;
				const lottieBox = svg.querySelector('.lottieBox');
				const insideIcon = svg.querySelector('svg > g');
				const insideIconLeft = insideIcon.getBoundingClientRect().left;
				const insideIconTop = insideIcon.getBoundingClientRect().top;

				const differenceLeft = insideIconLeft - svgLeft;
				const differenceTop = insideIconTop - svgTop;

				lottieBox.style.marginLeft = `-${differenceLeft}px`;
				lottieBox.style.marginTop = `-${differenceTop}px`;
			});
		};

		const resizeTimeout = setTimeout(() => {
			handleResize();
			if (servicesPage) alignIcons();
		}, 1500);

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(resizeTimeout);
			window.removeEventListener('resize', handleResize);
		};
	}, [router.pathname]);

	const sectionPadding = padding.join(' ');

	return (
		<section
			className={`grids grid__parallax dark ${classes} ${sectionPadding}`}
			id={id}
		>
			<div className="container">
				<div className="w-colThreeWrapper lg:-ml-[1rem] md:w-colTwoWrapper flex flex-wrap relative z-[2] -ml-[1.5rem]">
					{gridItems?.map((data, index) => (
						<div
							key={index}
							className={`w-colThree border border-darkGray mx-[1.5rem] lg:mx-[1rem] mb-[3rem] tablet:w-halfWidth phablet:w-halfWidth sm:w-[100%] ${BlackTheme ? 'bg-black' : 'bg-white'} ${partnersCard ? 'min-h-[51.5rem] lg:min-h-[40rem]' : ''} ${data.iconAnim}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave(index)}
						>
							<div className={`card h-full relative group flex flex-col justify-between ${partnersCard ? 'pt-[5rem] pb-[11rem] pl-[5rem] pr-[4rem] mb-[3rem] sm:px-[3rem] lg:px-[4rem] lg:pt-[4rem] lg:pb-[9rem]' : 'pt-[8rem] px-[5rem] pb-[12.5rem] laptop:px-[4rem] tablet:pt-[4rem] tablet:px-[4rem] tablet:pb-[8rem] phablet:p-[3rem] phablet:pb-[8rem] sm:p-[3rem] sm:pb-[8rem]'}`}>
								<Link href={data?.link} className="redirect"> .
									{/* Add meaningful content for the link */}
								</Link>
								{data?.iconAnim && data?.iconAnim !== "none" && (
									<div className="logo-wrap relative w-[126px] h-[126px] mb-[3rem]  max-w-[10rem]  max-h-[10rem] tablet:max-w-[75px] tablet:max-h-[75px] tablet:h-[75px] phablet:max-w-[75px] phablet:max-h-[75px] phablet:h-[75px] sm:max-w-[70px] sm:max-h-[70px] sm:h-[70px]">
										<div className="lottieBox absolute ">
											<Lottie
												options={{
													loop: true,
													autoplay: false,
													animationData: LottieService(data.iconAnim),
													rendererSettings: {
														preserveAspectRatio: 'xMidYMid slice',
													},
												}}
												isStopped={animationState[index].isStopped}
												isPaused={animationState[index].isPaused}
											/>
										</div>
									</div>
								)}
								{data?.icon && (
									<div className="img-wrapper max-w-[21.4rem] max-h-[12.9rem] lg:max-w-[14.4rem] w-full">
										<Image
											src={data?.icon?.sourceUrl}
											width={1000}
											height={1000}
											alt={data?.icon?.altText}
											className="w-full object-left origin-center h-full object-contain"
										/>
									</div>
								)}
								<div className="flex-grow ">
									{data?.title && <h4 className="mb-[2rem]">{data?.title}</h4>}
									<p>{data?.blurb}</p>
								</div>
								<div className={`btn-wrap mt-auto absolute ${partnersCard ? 'bottom-[5rem] lg:bottom-[4rem]' : 'bottom-[7rem] left-[5rem] xl:bottom-[5rem] laptop:left-[4rem] tablet:left-[4rem] tablet:bottom-[4rem] phablet:left-[3rem] phablet:bottom-[3rem] sm:left-[3rem] sm:bottom-[3rem]'}`}>
									<Link
										href={data?.link}
										className={`tertiary-btn group-hover:after:right-[-0.5rem] ${BlackTheme ? 'white' : 'pink'}`}
									>
										{data?.linkText}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
