import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const formatDate = (isoString) => {
	const date = new Date(isoString);
	const monthNames = [
	  'January', 'February', 'March', 'April', 'May', 'June',
	  'July', 'August', 'September', 'October', 'November', 'December'
	];
	const day = date.getDate();
	const month = monthNames[date.getMonth()];
	const year = date.getFullYear();
	return `${month} ${day}, ${year}`;
};

const ReferenceItems = (data) => {
	return (
		<>
			{data.reference.map((item, index) => (
				<div
					className={`
								${
									item.featuredImage
										? 'overlay group col-three max-w-[45rem] w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full md:min-h-[40rem]  mx-[1.5rem] min-h-[45rem]  relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0'
										: 'bg-white group !justify-start overlayblack md:!justify-between border border-black  col-three max-w-[45rem] lg:w-[calc(50%-3rem)] w-[calc(33.33%-3rem)] sm:!w-full md:min-h-[40rem] mx-[1.5rem] min-h-[45rem] relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0 overflow-hidden'
								}
								 z-[5]
							`}
					key={index}
					data-cursor-expand
				>
					<Link
						href={item.uri}
						className="redirect"
						target={item.clientNews.extLink ? '_blank' : '_self'}
					>
						.
					</Link>
					{item.featuredImage ? (
						<div className="bg-img overflow-hidden">
							<Image
								src={item.featuredImage.node.mediaItemUrl}
								width={1000}
								height={1000}
								alt={item.featuredImage.node.altText}
								className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
							/>
						</div>
					) : (
						''
					)}

					<div
						className={
							item.featuredImage
								? 'tab-wrapper p-[5rem] flex flex-wrap justify-between ipad:p-[4rem]'
								: 'tab-wrapper p-[5rem] pb-[3rem] flex flex-wrap justify-between ipad:p-[4rem]'
						}
					>
						{item.industries.nodes.length > 0 && (
							<div className="tab-wrap relative">
								<span className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
									{item.industries.nodes[0].name}
								</span>
							</div>
						)}
						{item.clientNews.extLink && (
							<div className="img-wrap min-w-[3rem] min-h-[3rem]">
								<svg
									className="overflow-visible w-full h-full"
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75"
										stroke="#FA198C"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="group-hover:stroke-white transition-colors duration-300"
									/>
									<path
										d="M18.75 3.75H26.25V11.25"
										stroke="#FA198C"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-hover:stroke-white transition-all duration-300"
									/>
									<path
										d="M12.5 17.5L26.25 3.75"
										stroke="#FA198C"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-hover:stroke-white transition-all duration-300"
									/>
								</svg>
							</div>
						)}
					</div>
					<div
						className={
							item.featuredImage
								? 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] ipad:h-[27.4rem] phablet:h-[24.4rem] sm:!h-[19.4rem]'
								: 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] z-[5]'
						}
					>
						{!item.featuredImage && (
							<p
								className={`small mb-[2rem] ${
									item.featuredImage ? 'text-white' : 'text-black'
								}`}
							>
								{formatDate(item.date)}
							</p>
						)}
						<h4
							className={`h4 ${
								item.featuredImage ? 'text-white' : 'text-black'
							}`}
						>
							{item.clientNews.title}
						</h4>
					</div>
				</div>
			))}
		</>
	);
};

export default ReferenceItems;
