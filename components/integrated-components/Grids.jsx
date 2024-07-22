import { useState } from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie';
import { LottieService } from '../services/LottieService';


export default function IntroWithCards({
	data,
	gridItems,
	padding = [],
	classes,
	id,
}) {
	const [animationState, setAnimationState] = useState(
		gridItems?.map(() => ({
			isStopped: false,
			isPaused: true, 
		})),
	);

	const handleMouseEnter = (index) => {
		const newAnimationState = [...animationState];
		newAnimationState[index].isStopped = false;
		newAnimationState[index].isPaused = false; 
		setAnimationState(newAnimationState);
	};

	const handleMouseLeave = (index) => {
		const newAnimationState = [...animationState];
		newAnimationState[index].isStopped = true;
		newAnimationState[index].isPaused = true;
		setAnimationState(newAnimationState);
	};



	let sectionPadding = padding.join(' ');

	return (
		<section
			className={`grids  grid__parallax dark ${classes} ${sectionPadding}`}
			id={id}
		>
			<div className="container">
				<div className="w-colThreeWrapper lg:-ml-[1rem] md:w-colTwoWrapper flex flex-wrap relative z-[2] -ml-[1.5rem]">
					{gridItems?.map((data, index) => (
						<div
							key={index}
							className={`w-colThree bg-white border border-darkGray mx-[1.5rem] lg:mx-[1rem] mb-[3rem] tablet:w-halfWidth phablet:w-halfWidth sm:w-[100%] ${data.iconAnim}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave(index)}
						>
							<div className="card h-full relative pt-[8rem] group px-[5rem] pb-[17.2rem]  laptop:px-[4rem]   tablet:pt-[4rem] tablet:px-[4rem] tablet:pb-[8rem] phablet:p-[3rem] phablet:pb-[8rem] sm:p-[3rem] sm:pb-[8rem]">
								<Link href={data.link} className="redirect">
									.
								</Link>
								<div className="logo-wrap mb-[3rem] w-full max-w-[10rem] h-[10rem] max-h-[10rem] tablet:max-w-[75px] tablet:max-h-[75px] tablet:h-[75px] phablet:max-w-[75px] phablet:max-h-[75px] phablet:h-[75px] sm:max-h-[70px] sm:h-[70px]">
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
								<h4 className="mb-[2rem]">{data.title}</h4>
								<p className="">{data.blurb}</p>
								<div className="btn-wrap absolute bottom-[11.6rem] left-[5rem] laptop:left-[4rem] tablet:left-[4rem] tablet:bottom-[4rem]  phablet:left-[3rem]  phablet:bottom-[3rem] sm:left-[3rem] sm:bottom-[3rem]">
									<Link
										href={data.link}
										className="tertiary-btn pink group-hover:after:right-[-0.5rem]"
									>
										{data.linkText}
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

