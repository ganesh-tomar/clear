import React from 'react';
import style from '../../../../components/styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const LogoWithContent = ({ content }) => {

	return (
		<section className={`logowithcontent ${style.logowithcontent} py-0 border-b border-darkGray `} id={content?.id}>
			{content?.content.map((wrap, index) => (
				<div key={index} className={`${style.wrapper} border-t border-darkGray sm:min-h-[286px] py-[5rem] area height__one_third flex  w-full relative`}>
					<Link href={wrap?.redirect ? wrap?.redirect : '/'} className="redirect !z-[6]">.</Link>
					{wrap?.bgimg && (
						<div
							className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${style.bgimg} dark__overlay w-full h-full overflow-hidden transition-transform duration-700`}>
							<Image
								src={wrap?.bgimg}
								className="w-full h-full object-cover object-bottom sm:object-[70%]"
								width={1000}
								height={1000}
								alt={wrap?.alt ? wrap?.alt : 'Bg Image'}
							/>
						</div>
					)}
					<div className="container">
						<div className='relative w-full h-full'>
							<div className={`w-full relative h-full top-0 left-0 z-[2] flex items-center pt-[0.5rem] flex-wrap`}>
								{wrap?.tab ? (
									<div className="tab-wrap relative w-full">
										<span className="tab px-[1rem] mt-[6rem] lg:mt-[4rem] lg:mb-[1rem] sm:!mt-0 inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
											{wrap?.tab}
										</span>
									</div>
								) : (
									''
								)}
								<div className={`imgwrapper w-[50%] ${wrap?.logo ? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0' : ''} md:w-full`}>
									{wrap?.logo && (
										<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
											<Image
												className="absolute duration-200 left-0 object-contain top-0 w-auto h-full"
												width={1000}
												height={1000}
												src={wrap?.logo}
												alt={'Logo'}
											/>
										</div>
									)}
									{wrap?.title &&
										<h3 class="logowithcontent_content text-black lg-up:pr-[10rem] tablet:pr-[5rem] sm:mb-[2rem] mt-4">
											{wrap?.title}
										</h3>
									}

								</div>
								<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div className={`${style.content} max-w-[60rem] content ipad:max-w-[100%] md:max-w-full text-black`}>
										<h4 className={`heading pr-[5rem] font-[700] lg:pr-0 sm:pr-[0] ${wrap?.title ? '' : ''} ${style.heading}`}>
											{wrap?.heading}
										</h4>
										<p className={` letter-spacing-[-0.32px] ${wrap?.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] lg:pr-0 sm:pr-[0] tracking-[-0.32px] line-clamp-3 xxl-up:line-clamp-2 overflow-hidden text-ellipsis`}>
											{wrap?.description}
										</p>
									</div>
								</div>
							</div>
							<div className={`${style.bgimg} w-full absolute h-full top-0 left-0 z-[2] flex items-center pt-[0.5rem] flex-wrap `}>
								{wrap?.tab ? (
									<div className="tab-wrap relative w-full">
										<span className="tab px-[1rem] mt-[6rem] lg:mt-[4rem] lg:mb-[1rem] sm:!mt-0 inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
											{wrap?.tab}
										</span>
									</div>
								) : (
									''
								)}
								<div className={`imgwrapper w-[50%] ${wrap?.logo ? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0' : ''} md:w-full`}>
									{wrap?.logo && (
										<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
											<Image
											loading='eager'
												className="absolute left-0 top-0 w-auto h-full"
												width={1000}
												height={1000}
												src={wrap?.hover_logo}
												alt={'Hover Logo'}
											/>
										</div>
									)}
									{wrap?.title &&
										<h3 class="logowithcontent_content text-white lg-up:pr-[10rem] tablet:pr-[5rem] sm:mb-[2rem] mt-4">
											{wrap?.title}
										</h3>
									}

								</div>
								<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div className={`${style.content} max-w-[60rem] content ipad:max-w-[100%] md:max-w-full text-white`}>
										<h4 className={`heading pr-[5rem] font-[700] lg:pr-0 sm:pr-[0] ${wrap?.title ? '' : ''} ${style.heading}`}>
											{wrap?.heading}
										</h4>
										<p className={` letter-spacing-[-0.32px] ${wrap?.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] lg:pr-0 sm:pr-[0] tracking-[-0.32px] line-clamp-3 xxl-up:line-clamp-2 overflow-hidden text-ellipsis`}>
											{wrap?.description}
										</p>
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

export default LogoWithContent;
