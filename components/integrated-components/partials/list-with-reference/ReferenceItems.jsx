import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../../../styles/logowithcontent.module.css';
const ReferenceItems = (data) => {
	return (
		<>
			{data.reference.map((item, index) => (
				<>
					<div
						key={index}
						className={`group border-t border-darkGray sm:min-h-[286px] py-[5rem] area height__one_third flex  w-full relative`}
					>
						<Link href={item?.uri ? item?.uri : '/'} className="redirect !z-[6]">
							.
						</Link>
						{item.featuredImage && (
							<div
								className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${style.bgimg} dark__overlay w-full h-full overflow-hidden transition-transform duration-700`}
							>
								<Image
									src={item.featuredImage.node.mediaItemUrl}
									className="w-full h-full object-cover object-bottom sm:object-[70%]"
									width={1000}
									height={1000}
									alt={item.featuredImage.node.altText}
								/>
							</div>
						)}

						<div className="container">
							<div
								className={`w-full relative h-full flex items-center flex-wrap`}
							>
								<div className="imgwrapper w-[50%] pl-[120px] laptop:pl-[80px] lg:pl-[60px] md:w-full md:!pl-0 ">
									<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
										{item?.caseStudyQry?.logo?.defaultLogo && (
											<>
												<Image
													className="absolute transition-all group-hover:opacity-0 duration-700 left-0 object-contain top-0 w-auto h-full"
													width={1000}
													height={1000}
													src={item.caseStudyQry.logo.defaultLogo.mediaItemUrl}
													alt={item.caseStudyQry.logo.defaultLogo.altText}
												/>
											</>
										)}
										{item?.caseStudyQry?.logo?.hoverLogo && (
											<>
												<Image
													className="absolute delay-100 transition-all duration-700 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full"
													width={1000}
													height={1000}
													src={item.caseStudyQry.logo.hoverLogo.mediaItemUrl}
													alt={item.caseStudyQry.logo.hoverLogo.altText}
												/>
											</>
										)}
									</div>
								</div>
								<div className="contentwrapper pl-[15px] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div
										className={`content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}
									>
										<h4 className={`heading pr-[50px] sm:pr-[0] transition-all duration-700`}>
											{item.title}
										</h4>
										<p
											className={`transition-all duration-700 letter-spacing-[-0.32px] mt-[10px] pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
										>
											{item?.caseStudyQry?.subtitle}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</>
	);
};

export default ReferenceItems;
