import React from 'react';
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Logowithcontent = ({ contentName, fontLite, borderB }) => {
	const contentData = {
		data: [
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/itero_logo.svg',
				hover_logo: '/itero_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/align_logo.svg',
				hover_logo: '/align_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/itero_logo.svg',
				hover_logo: '/itero_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/align_logo.svg',
				hover_logo: '/align_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			// Add other data objects here
		],
		award: [
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/itero_logo.svg',
				hover_logo: '/itero_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/align_logo.svg',
				hover_logo: '/align_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
		],
		onecard: [
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
		],
		twocards: [
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/itero_logo.svg',
				hover_logo: '/itero_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '',
			},
		],
		threecards: [
			{
				bgimg: '/cardsbg.svg',
				logo: '/vocera.svg',
				hover_logo: '/vocera_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: false,
				redirect: '#',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/itero_logo.svg',
				hover_logo: '/itero_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/cardsbg.svg',
				logo: '/align_logo.svg',
				hover_logo: '/align_logo_white.svg',
				heading: '80% vel consequat est. Donec semper neque quam eget.',
				description:
					'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				border: true,
				redirect: '#',
			},
			// Add other threecards objects here
		],
		industryFocus: [
			{
				bgimg: '/case_bg.svg',
				title: 'Financial Services & Insurance',
				heading: 'Build a reputation for banking innovation',
				description: 'Select clients: Intel, Cohesity',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Healthcare',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Manufacturing',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Semiconductor',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Consumer Goods',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Renewable Energy',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Construction & Real Estate',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Higher Education',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Non-Profit',
				heading: 'Lorem ipsum dolor sit amet consectetur.',
				description: 'Select clients: Align, iTero',
				border: true,
				redirect: '#',
			},
			// Add other threecards objects here
		],
		contactus: [
			{
				bgimg: '/case_bg.svg',
				title: 'San Francisco, CA',
				heading: '540 Howard Street San Francisco, CA 94105',
				border: true,
				redirect: '#',
				tab: 'Satellite Office',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Chicago, IL',
				heading: '4753 North Broadway Chicago, IL 60640',
				border: true,
				redirect: '#',
				tab: 'Satellite Office',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'Houston, TX',
				heading: '609 Main Street Houston, TX 77002',
				border: true,
				redirect: '#',
				tab: 'Satellite Office',
			},
			{
				bgimg: '/case_bg.svg',
				title: 'New York, NY',
				heading: '500 7th Avenue New York, NT 10018',
				border: true,
				redirect: '#',
				tab: 'Satellite Office',
			},
		],
	};

	const content = contentData[contentName] || [];

	return (
		<section
			className={`logowithcontent ${style.logowithcontent} py-0 ${
				borderB === false ? '' : 'border-b border-darkGray'
			}`}
			id="case-studies"
		>
			{content.map((wrap, index) => (
				<div
					key={index}
					className={`${style.wrapper} group ${
						wrap.border === true ? `border-t border-darkGray` : ''
					} ${
						contentName === 'industryFocus' ? 'sm:min-h-[286px]' : ''
					} py-[5rem] area height__one_third flex  w-full overflow-hidden relative border-darkGray`}
				>
					<Link
						href={wrap.redirect ? wrap.redirect : '/'}
						className="redirect !z-[6]"
					>
						.
					</Link>
					{wrap.bgimg && (
						<div
							className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${style.bgimg} dark__overlay w-full h-full overflow-hidden transition-transform duration-700`}
						>
							<Image
								src={wrap.bgimg}
								className="w-full h-full object-cover object-bottom sm:object-[70%]"
								width={100}
								height={100}
								alt="image"
							/>
						</div>
					)}

					<div className="container flex items-center">
						<div className=" relative w-full h-full">
							<div
								className={`${wrap.tab ? 'lg:relative' : ''} w-full absolute h-full top-0 left-0 z-[2] flex items-center pt-[0.5rem] flex-wrap`}
							>
								{wrap.tab ? (
									<div className="tab-wrap relative w-full mb-[2rem]">
										<span className="tab px-[1rem]  lg:mb-[1rem]  inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
											{wrap.tab}
										</span>
									</div>
								) : (
									''
								)}
								<div
									className={`imgwrapper w-[50%]  ${
										wrap.logo
											? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0'
											: ''
									} md:w-full md:mb-[2rem]`}
								>
									{wrap.logo && (
										<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
											<Image
												className="absolute left-0 object-contain top-0 w-auto h-full"
												width={1000}
												height={1000}
												src={wrap.logo}
												alt="image"
											/>
										</div>
									)}
									{wrap.title && (
										<h3
											className={`${style.content} lg-up:pr-[20rem] tablet:pr-[8rem] sm:mb-[2rem] text-black`}
										>
											{wrap.title}
										</h3>
									)}
								</div>
								<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div
										className={`${style.content} ${
											contentName === 'contactus' ? 'max-w-[51rem]' : ''
										} transition-none content max-w-[60rem] ipad:max-w-[100%] md:max-w-full text-black`}
									>
										<h4
											className={`heading pr-[5rem] ${
												fontLite == true ? 'font-[500]' : ''
											} sm:pr-[0] ${wrap.title ? '' : ''} ${
												style.heading
											} text-black`}
										>
											{wrap.heading}
										</h4>
										{wrap.description && (
											<p
												className={` letter-spacing-[-0.32px] ${
													wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'
												} pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
											>
												{wrap.description}
											</p>
										)}
									</div>
								</div>
							</div>
							<div
								className={`${style.bgimg}  w-full absolute h-full top-0 left-0 flex items-center pt-[0.5rem] flex-wrap z-[3]`}
							>
											{wrap.tab ? (
									<div className="tab-wrap relative w-full mb-[2rem]">
										<span className="tab px-[1rem]  lg:mb-[1rem]  inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
											{wrap.tab}
										</span>
									</div>
								) : (
									''
								)}
								<div
									className={`imgwrapper w-[50%]  ${
										wrap.logo
											? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0'
											: ''
									} md:w-full`}
								>
									{wrap.logo && (
										<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
											<Image
												className="absolute left-0 top-0 w-auto h-full"
												width={1000}
												height={1000}
												src={wrap.hover_logo}
												alt="image"
											/>
										</div>
									)}
									{wrap.title && (
										<h3
											className={`${style.content} text-white lg-up:pr-[20rem] tablet:pr-[8rem] sm:mb-[2rem]`}
										>
											{wrap.title}
										</h3>
									)}
								</div>
								<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div
										className={`${style.content} ${
											contentName === 'contactus' ? 'max-w-[51rem]' : ''
										} transition-none content max-w-[60rem] ipad:max-w-[100%] md:max-w-full text-white overflow-hidden`}
									>
										<h4
											className={`heading pr-[5rem] ${
												fontLite == true ? 'font-[500]' : ''
											} sm:pr-[0] ${wrap.title ? '' : ''} ${style.heading}`}
										>
											{wrap.heading}
										</h4>
										{wrap.description && (
											<p
												className={` letter-spacing-[-0.32px] ${
													wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'
												} pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
											>
												{wrap.description}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Logowithcontent;
