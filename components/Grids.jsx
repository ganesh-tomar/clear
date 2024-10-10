import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '../components/MarqeeText';
import Lottie from 'react-lottie';
import firstlootie from '../public/Lootie/lottie_1.json'
import brandstrategy from '../public/Lootie/lottie_2.json'
import brandmessaging from '../public/Lootie/lottie_3.json'
import campianmarketing from '../public/Lootie/lottie_4.json'
import creativeandcontent from '../public/Lootie/lottie_5.json'
import collaborative from '../public/Lootie/lottie_6.json'
import webexperience from '../public/Lootie/lottie_7.json'
import uxui from '../public/Lootie/lottie_8.json'
import motiongraphics from '../public/Lootie/lottie_9.json'
import campaignMarketing from '../public/Lootie/lottie_10.json'
import dxpcms from '../public/Lootie/lottie_11.json'
import technology from '../public/Lootie/lottie_12.json'
import customweb from '../public/Lootie/lottie_13.json'
import authoring from '../public/Lootie/lottie_14.json'
import systemssupport from '../public/Lootie/lottie_15.json'




export default function IntroWithCards({ content, marquee, pt, pb }) {
	const contentdata = {
		foundation: [
			{
				idName: '',
				cards: [
					{
						title: 'Brand strategy',
						blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: brandstrategy,
					},
					{
						title: 'Brand Messaging',
						blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: brandmessaging,
					},
					{
						title: 'Visual Identity',
						blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: firstlootie,
					},
					{
						title: 'Data & Metrics Analysis',
						blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: campianmarketing,
					},
					{
						title: 'User Research',
						blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: collaborative,
					},
				]
			}
		],
		expression: [
			{
				idName: '',
				cards: [
					{
						title: 'Web Experience',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: webexperience,
					},
					{
						title: 'UX/UI Design',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: uxui,
					},
					{
						title: 'Creative & Content Services',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: creativeandcontent,
					},
					{
						title: 'Motion Graphics	& Videos',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: motiongraphics,
					},
					{
						title: 'Campaigns & Marketing',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: campaignMarketing,
					},
				],
			}
		],
		integration: [
			{
				idName: '',
				cards: [
					{
						title: 'DXP & CMS Platforms',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: dxpcms,
					},
					{
						title: 'Technology Integration',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: technology,
					},
					{
						title: 'Custom Web Development',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: customweb,
					},
					{
						title: 'Authoring & Publishing',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: authoring,
					},
					{
						title: 'Systems Support',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						lottieFile: systemssupport,
					},
				],
			}
		],
		serviceDetail: [
			{
				idName: '',
				cards: [
					{
						title: 'Collaboration focus lorem ipsum.',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/collaboration._serviesvg.svg',
						isimg: true

					},
					{
						title: 'B2B performance	driven.',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/Focused.svg',
						isimg: true
					},
					{
						title: 'Design + development excellence.',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/excellence_service.svg',
						isimg: true
					},
				],
			}
		],
	};

	const contentData = contentdata[content] || [];

	const [animationState, setAnimationState] = useState(
		contentData[0].cards.map(() => ({
			isStopped: true,
		}))
	);

	const handleMouseEnter = (index) => {
		const newAnimationState = [...animationState];
		newAnimationState[index].isStopped = false;
		setAnimationState(newAnimationState);
	};

	const handleMouseLeave = (index) => {
		const newAnimationState = [...animationState];
		newAnimationState[index].isStopped = true;
		setAnimationState(newAnimationState);
	};


	return (
		<section
			className={`${marquee === false ? '' : 'pt-[406px] laptop:pt-[150px] tablet:pt-[150px] md:pt-[150px] phablet:[130px] gridsMarqueePadding'} grids  grid__parallax dark ${pt ? pt : ''} ${pb ? pb : ''}`}
			// id={content === 'serviceDetail' ? 'related-services' : 'services'}
			id={contentData[0].idName}
		>
			{marquee === false ? '' : <div className="bg-text-lines absolute z-[1] top-0 left-0 w-[2200vw] sm:w-[2600vw]">
				<Marquee />
			</div>}

			<div className="container">
				<div className="w-colThreeWrapper lg:-ml-[1rem] md:w-colTwoWrapper flex flex-wrap relative z-[2] -ml-[1.5rem]">
					{contentData[0].cards.map((data, index) => (
						<div
							key={index}
							className={`w-colThree bg-white border border-darkGray mx-[1.5rem] lg:mx-[1rem] mb-[3rem] tablet:w-halfWidth phablet:w-halfWidth sm:w-[100%]`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave(index)}
						>
							<div className="card h-full relative pt-[8rem] group px-[5rem] pb-[17.2rem]  laptop:px-[4rem]   tablet:pt-[4rem] tablet:px-[4rem] tablet:pb-[8rem] phablet:p-[3rem] phablet:pb-[8rem] sm:p-[3rem] sm:pb-[8rem]">
								<Link href="/" className="redirect">
									.
								</Link>
								<div className="logo-wrap mb-[3rem] w-full max-w-[10rem] h-[10rem] max-h-[10rem] tablet:max-w-[75px] tablet:max-h-[75px] tablet:h-[75px] phablet:max-w-[75px] phablet:max-h-[75px] phablet:h-[75px]  sm:max-h-[70px] sm:h-[70px]">
									{data.isimg == true ? (
										<Image src={data.img} alt={data.title} className='object-contain w-full h-full' width={1000} height={1000} />

									) : (
										<Lottie
											options={{
												loop: true,
												autoplay: false,
												animationData: data.lottieFile,
												rendererSettings: {
													preserveAspectRatio: 'xMidYMid slice'
												}
											}}
											isStopped={animationState[index].isStopped}
										/>
									)}
								</div>
								<h4 className="mb-[2rem]">{data.title}</h4>
								<p className="">{data.blurb}</p>
								<div className="btn-wrap absolute bottom-[11.6rem] left-[5rem] laptop:left-[4rem] tablet:left-[4rem] tablet:bottom-[4rem]  phablet:left-[3rem]  phablet:bottom-[3rem] sm:left-[3rem] sm:bottom-[3rem]">
									<Link
										href="#"
										className="tertiary-btn pink group-hover:after:right-[-0.5rem]"
									>
										Learn more
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
