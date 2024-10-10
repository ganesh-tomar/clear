import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function BannerThirdLevelCaseStudy({ content }) {

	return (
		<section
			className={`banner-third ${content?.dark__overlay ? ' dark__overlay' : ''} ${content?.smallpaddingbottom === true ? 'small-padding-bottom' : ''}  ${content?.bgcolor} overflow-hidden grid__parallax height__full flex items-center ptsp z-[2]`}
		>
			{content?.vector && (
				<div
					className={`bg-img !z-0 ${content?.vector === true ? '!top-auto !w-[140rem] !h-[100.7rem] !left-[19.8rem] tablet:!w-[90rem] tablet:!h-[65rem] tablet:!left-[2.8rem] phablet:!w-[90rem] phablet:!h-[65rem] phablet:!left-[2.8rem] sm:!w-[42rem] sm:!h-[30rem] sm:!left-[2.8rem] bottom-[-5px]'
						: ''
						}`}
				>
					<Image
						src={content?.backgroundImage}
						width={1600}
						height={1090}
						alt="vector"
					/>
				</div>
			)}
			{content?.backgroundImage && (
				<div
					className={`bg-img !w-[100%] !z-0 ${vector === true ? 'hidden' : ''}`}
				>
					<Image
						className="object-bottom xxl-down:object-center"
						src={content?.backgroundImage}
						width={1920}
						height={1920}
						alt="bg_image"
					/>
				</div>
			)}
			<div className="breadcrumbs w-full">
				<div className="container">
					<ul className={`absolute top-[15%] z-[10] phone:top-[10%] sm:top-[8%] sm:w-full `}>
						{content?.breadcrumbs?.map((crumb, index) => (
							<li
								key={index}
								className={`inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1rem] pr-[0.5rem] laptop:pr-[1.5rem] text-[white] `}
							>
								{crumb.link ? (
									<Link
										href={crumb.link}
										className={`${content?.dark === true ? 'text-black' : ''} hover:text-pink transition-all`}
									>
										{crumb.text}
									</Link>
								) : (
									<span className={`${content?.dark === true ? 'text-black' : ''}`}>
										{crumb.text}
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="container">
				<div
					className={`${content?.max === 'max' ? 'max-w-[141rem]' : 'max-w-[117rem] '} ${content?.blacklogo === true ? 'blacklogo' : ''} content-wrap xxl-up:pt-[16.9rem] pt-[16.9rem] laptop:pt-[14rem] lg:pt-[12rem] relative z-[3]  xxl-up:pb-[0] xxl-down:pb-[0] sm:!pt-[80px]`}
				>
					{content?.subtitle && <h6 className="subtitle mb-[2rem]">{content?.subtitle}</h6>}

					<h1
						className={` lg:pr-[30px] sm:!pr-0 ${content?.content === 'casestudiesdetailmini' || content?.content === 'insights'
							? 'h2'
							: ''
							} ${content?.dark === true ? 'text-blck' : 'text-white'}`}
					>
						{content?.PreNormalText ? content?.PreNormalText : ''}{' '}
						{content?.HighLightedText ? (
							<span
								className={`${content?.underLineClass ? content?.underLineClass : ''} ${content?.HighLightedTextColorClass ? content?.HighLightedTextColorClass : ''
									} ${content?.HighLightedTextColor ? content?.HighLightedTextColor : ''} inline-block relative ${content?.underline === true ? 'underline-container' : ''} `}
							>
								{' '}
								{content?.HighLightedText}
							</span>
						) : (
							''
						)}{' '}
						{content?.postText ? content?.postText : ''} {content?.normalText}
					</h1>

					{content?.description && (
						<p
							className={`${content?.pSize === 'medium' ? 'lead !max-w-[105rem] ' : ''} ${content?.descriptionLarge === true ? 'lead !max-w-[105rem] ' : ''} mt-[2.9rem] max-w-[93rem]`}
						>
							{content?.description}
						</p>
					)}

					{content?.area && (
						<div className="area-wrap max-w-[580px] sm:max-w-[100rem] flex flex-wrap mt-[2.9rem] ">
							{
								content?.area?.map((item, index) => {
									return (
										<div key={index} className="content relative w-[calc(50%-20px)] mb-[1.5rem] sm:w-[100%] sm:max-w-[100%] sm:mr-[0]">
											<Link
												className="text-[white] medium boldlink !font-bold hover:text-pink transition-all text-[16px]"
												href={item?.itemUrl}
											>
												{item?.itemText}
											</Link>
										</div>
									)
								})
							}
						</div>
					)}

					{
						content?.btnText?.length > 0 ?
							<div className="btn-wrap mt-[6rem] sm:mt-[3rem] link relative inline-block xxs:max-w-[190px]">
								{content?.btnText?.map((item, index) => {
									return (
										// <div className="btn-wrap first:mt-[4.8rem] sm:mt-[3rem]">
										<Link key={index}
											href={`${item?.linkUrl}`}
											className=" text-[#FA198C] medium font-bold relative block text-[16px]"
										>
											{item?.linktxt}
										</Link>
										// </div>
									)
								})}
							</div>
							: content?.linktxt && (
								<div className="btn-wrap mt-[4.8rem] sm:mt-[3rem]">
									<Link
										href={`${content?.linkUrl}`}
										className="link text-[#FA198C] medium font-bold relative text-[16px]"
									>
										{content?.linktxt}
									</Link>
								</div>
							)
					}

					{
						content?.logoWithDescription == true ?
							<div className="logoWithDescription mt-[30px]">
								<div className="row flex sm:flex-wrap">
									{
										content?.logoIcon && (
											<div className="logoWrap w-[100px] lg:w-[100px] sm:w-full">
												<Image src={content?.logoIcon} alt='' width={300} height={300} />
											</div>
										)
									}
									
									<div className="contentWrap w-[calc(100%-150px)] ml-[20px] sm:w-full sm:mt-[20px] sm:ml-0">
										{
											content?.logoWithText?.map((item, index) => {
												return (
													<div className="item first:mb-[30px]" key={index}>
														<h4 className='text-[16px] font-bold mb-[5px]'>{item?.title}</h4>
														<p className='text-[16px] '>{item?.paragraph}</p>
													</div>
												)
											})
										}
									</div>
								</div>
							</div> : ''
					}
				</div>
			</div>
		</section>
	);
}
