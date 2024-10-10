import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LatestTaxonomy = ({ latestData }) => {

	return (
		<>
			{latestData.map((item, index) => (
				<>
					<div
						key={index}
						className={`group border-t border-darkGray py-[5rem] area height__one_third flex  w-full relative border-b-[1px]`}
					>
						<Link href={item?.uri ? item?.uri : '/'} className="redirect !z-[6]">
							.
						</Link>
						{item.featured_url && (
							<div
								className={`absolute top-0 left-0 w-full h-full opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}
							>
								<Image
									src={item.featured_url}
									className="w-full h-full object-cover object-bottom sm:object-[70%]"
									width={1000}
									height={1000}
									alt={item.featured_alt}
								/>
							</div>
						)}

						<div className="container">
							<div
								className={`w-full relative h-full flex items-center flex-wrap`}
							>
								<div className="imgwrapper w-[50%] pl-[120px] laptop:pl-[80px] lg:pl-[60px] md:w-full md:!pl-0 ">
									<div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
										{item?.logo_url && (
											<>
												<Image
													className="absolute transition-opacity group-hover:opacity-0 duration-200 left-0 object-contain top-0 w-auto h-full"
													width={1000}
													height={1000}
													src={item.logo_url}
													alt={item.logo_alt}
												/>
											</>
										)}
										{item?.hoover_url && (
											<>
												<Image
													className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full"
													width={1000}
													height={1000}
													src={item.hoover_url}
													alt={item.hoover_alt}
												/>
											</>
										)}
									</div>
								</div>
								<div className="contentwrapper pl-[15px] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
									<div
										className={`content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}
									>
										<h4 className={`heading pr-[50px] sm:pr-[0]`}>
											{item.title}
										</h4>
										<p
											className={` letter-spacing-[-0.32px] mt-[10px] pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
										>
											{item?.blurb}
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

export default LatestTaxonomy;
