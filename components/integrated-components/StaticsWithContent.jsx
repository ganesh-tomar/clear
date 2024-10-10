'use client';
import Image from 'next/image';

const StaticsWithContent = ({ data }) => {
	console.log(data);

	return (
		<section
			className={`staticswithcontent grid__parallax dark ${
				data?.classes
			} ${data?.padding.join(' ')}`}
		>
			<div className="container">
				<div className="wrapper relative flex flex-wrap ml-[-3.5rem] sm:ml-0 ">
					{data?.items?.map((item, index) => {
						// Conditionally adding `fullWidth` class if `item.fullWidth` is true
						const cardClasses = `card-wrap pt-[13rem] md:pt-[6rem] tablet:pt-[9rem] relative sm:w-full sm:mx-0 md:mb-[7rem] mx-[3.75rem] ${
							item?.fullWidth
								? 'w-full flex lg:flex-wrap'
								: 'w-staticshalfwidth'
						} ${
							index === 0 || index === 1
								? 'mt-0'
							: 'mt-[15rem] md:mt-[2rem] tablet:mt-[7rem] sm:!mt-0'
						}
						${
							index === data?.items.length - 1 ? 'sm:!mb-0' : ''
						}`;

						return (
							<div className={cardClasses} key={index}>
								<div
									className={`heading-wrap ${
										item?.fullWidth ? 'w-1/2 lg:w-full lg:mb-[2rem]' : ''
									}`}
								>
									<h2
										className={` mb-[5rem] relative inline-block ${
											item?.fullWidth
												? 'text-[25rem] lg:text-[20rem] sm:!text-[10rem] font-light !mb-0 xxl-up:leading-[0.82] desktop:leading-[0.82] laptopsmall:leading-[0.82]'
												: 'large'
										} ${item?.headingClass || ''}`}
									>
										{item?.title || 'Default Title'}{' '}
										{/* Provide a fallback for title */}
									</h2>
								</div>

								<div
									className={`content-wrap ${
										item?.fullWidth
											? 'w-1/2 pl-[3.75rem] lg:w-full lg:pl-0'
											: ''
									}`}
								>
									<h4 className="mb-[2rem]">
										{item?.heading || 'Default Heading'}
									</h4>
									<p className="max-w-[45rem]">
										{item?.subtitle || 'Default Subtitle'}
									</p>

									{item?.logo?.mediaItemUrl && (
										<div className="button-icon max-w-[16.4rem] h-[3.4rem] mt-[1.8rem]">
											<Image
												src={item.logo.mediaItemUrl}
												alt={item?.logo?.altText || 'Default Alt Text'}
												className="w-full h-full object-contain object-left"
												width={1000}
												height={1000}
											/>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default StaticsWithContent;
