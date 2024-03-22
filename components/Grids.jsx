import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '../components/MarqeeText';

export default function introWithCards({ content, marquee, pt, pb }) {
	const contentdata = {
		foundation: [
			{
				idName: '',
				cards: [
					{
						title: 'Brand strategy',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape4.svg',
					},
					{
						title: 'Brand Messaging',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape5.svg',
					},
					{
						title: 'Visual Identity',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape6.svg',
					},
					{
						title: 'Data & Metrics Analysis',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape1.svg',
					},
					{
						title: 'User Research',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape2.svg',
					},]
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
						img: '/service-detail/shape7.svg',
					},
					{
						title: 'UX/UI Design',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape4.svg',
					},
					{
						title: 'Creative & Content Services',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape5.svg',
					},
					{
						title: 'Motion Graphics	& Videos',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape4.svg',
					},
					{
						title: 'Campaigns & Marketing',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape5.svg',
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
						img: '/service-detail/shape4.svg',
					},
					{
						title: 'Technology Integration',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape5.svg',
					},
					{
						title: 'Custom Web Development',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape6.svg',
					},
					{
						title: 'Authoring & Publishing',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape1.svg',
					},
					{
						title: 'Systems Support',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/service-detail/shape2.svg',
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
					},
					{
						title: 'B2B performance	driven.',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/Focused.svg',
					},
					{
						title: 'Design + development excellence.',
						blurb:
							'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						img: '/excellence_service.svg',
					},
				],
			}
		],
	};

	const contentData = contentdata[content] || [];

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
						>
							<div className="card h-full relative pt-[8rem] group px-[5rem] pb-[17.2rem]  laptop:px-[4rem]   tablet:pt-[4rem] tablet:px-[4rem] tablet:pb-[8rem] phablet:p-[3rem] phablet:pb-[8rem] sm:p-[3rem] sm:pb-[8rem]">
								<Link href="/" className="redirect">
									.
								</Link>
								<div className="logo-wrap mb-[3rem] w-full max-w-[10rem] h-[10rem] max-h-[10rem] tablet:max-w-[75px] tablet:max-h-[75px] tablet:h-[75px] phablet:max-w-[75px] phablet:max-h-[75px] phablet:h-[75px]  sm:max-h-[70px] sm:h-[70px]">
									<Image
										className="h-full w-full object-contain"
										width={100}
										height={100}
										src={data.img}
										alt="image"
									/>
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
