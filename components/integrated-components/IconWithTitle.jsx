import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContentGrid = (data) => {
	// console.log(data);
	return (
		<section
			className={`contentGrid dark grid__parallax ${data?.classes}`}
		>
			<div className="container">
				<div className={`gap-[2rem] gap-y-[5rem] xl:gap-y-[50px] wrapper flex flex-wrap md:gap-[5rem]`}>
					{data?.item.map((content, index) => (
						<div
							key={index}
							className={`lg-up:w-[calc(25%-2rem)] laptop:!w-[calc(33.33%-2rem)] pr-[5rem] contentGrid__item w-full tablet:w-[calc(50%-2rem)] xl:pr-0`}
						>
							{content && <Link href={content?.link?.linkUrl} className='inline-block'>
								{content?.image?.sourceUrl &&
									<div className="contentGrid__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]">
										<Image
											src={content?.image?.sourceUrl}
											alt={content?.image?.altText}
											width={300}
											height={300}
											className="md:object-contain h-full w-full object-contain"
										/>
									</div>
								}
								<h5 className={`h6 !font-bold`}>{content?.title}</h5>
							</Link>
							}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContentGrid;
