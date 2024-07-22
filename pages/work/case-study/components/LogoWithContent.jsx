import React from 'react';
import style from '../../../../components/styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const LogoWithContent = ({ contentName, fontLite, borderB, content }) => {

	return (
		<section
			className={`logowithcontent py-0 ${borderB === false ? '' : 'border-b border-darkGray'}`}
			id="case-studies"
		>
			{content?.content.map((wrap, index) => (
				<div
					key={index}
					className={`${style.wrapper} group ${wrap.border === true ? `border-t border-darkGray` : ''
						} ${contentName === 'industryFocus' ? 'sm:min-h-[286px]' : ''} py-[5rem] area height__one_third flex  w-full relative border-darkGray`}
				>
					<Link
						href={wrap.redirect ? wrap.redirect : '/'}
						className="redirect !z-[6]"
					>
						.
					</Link>
					{wrap.bgimg && (
						<div
							className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}
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

					<div className="container">
			
						<div
							className={`w-full relative h-full flex items-center flex-wrap`}
						>
                          		{wrap.tab ? (
							<div className="tab-wrap relative w-full">
								<span className="tab px-[1rem] mt-[6rem] lg:mt-[4rem] lg:mb-[1rem] sm:!mt-0 inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
									{wrap.tab}
								</span>
							</div>
						) : (
							''
						)}
							<div
								className={`imgwrapper w-[50%] ${wrap.logo
									? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0'
									: ''
									} md:w-full`}
							>
								{wrap.logo && (
									<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
										<Image
											className="absolute transition-opacity group-hover:opacity-0 duration-200 left-0 object-contain top-0 w-auto h-full"
											width={1000}
											height={1000}
											src={wrap.logo}
											alt="image"
										/>
										<Image
											className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full"
											width={1000}
											height={1000}
											src={wrap.hover_logo}
											alt="image"
										/>
									</div>
								)}
								{wrap.title && (
									<h3
										className={`${style.content} group-hover:text-white lg-up:pr-[20rem] tablet:pr-[8rem]`}
									>
										{wrap.title}
									</h3>
								)}
							</div>
							<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
								<div
									className={`${style.content} ${contentName === 'contactus' ? 'max-w-[51rem]' : ''} content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}
								>
									<h4
										className={`heading pr-[5rem] ${fontLite == true ? 'font-[500]' : ''} sm:pr-[0] ${wrap.title ? '' : ''
											} ${style.heading}`}
									>
										{wrap.heading}
									</h4>
									<p
										className={` letter-spacing-[-0.32px] ${wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'
											} pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
									>
										{wrap.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default LogoWithContent;
