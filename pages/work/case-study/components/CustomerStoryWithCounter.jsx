import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CustomerStoryWithCounter = ({ content }) => {
	const [counters, setCounters] = useState([]);
	useEffect(() => {
		if (content?.countData) {
			setCounters(content.countData.map(() => 0));
		}
	}, [content?.countData]);

	const customerStoryRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						content.countData.forEach((counterData, index) => {
							animateCounter(index, parseInt(counterData.number, 10));
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (customerStoryRef.current) {
			observer.observe(customerStoryRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [customerStoryRef.current, content?.countData]);

	const animateCounter = (index, end) => {
		let start = 0;
		const duration = 2000;
		const increment = end / (duration / 10);

		const updateCounter = () => {
			start += increment;
			if (start < end) {
				setCounters((prevCounters) =>
					prevCounters.map((count, i) =>
						i === index ? Math.floor(start) : count,
					),
				);
				setTimeout(updateCounter, 10);
			} else {
				setCounters((prevCounters) =>
					prevCounters.map((count, i) => (i === index ? end : count)),
				);
			}
		};

		updateCounter();
	};

	return (
		<section
			className={`customerStoryWithCounter ${content?.bgColor}`}
			ref={customerStoryRef}
		>
			<div className="customerStoryBgImage absolute right-0 top-0 w-full max-w-[49rem] h-full sm:max-w-full ">
				{content?.markImage && (
					<div className="mark absolute top-0 left-0 w-full max-w-[107px] h-[107px] lg:left-auto lg:right-0 laptop:max-w-[95px] laptop:h-[95px] tablet:max-w-[85px] tablet:h-[85px] phablet:max-w-[70px] phablet:h-[70px] sm:max-w-[50px] sm:h-[50px] ">
						<Image
							src={content?.markImage}
							width={900}
							height={1500}
							alt={content?.markAlt}
							className=" w-full h-full object-cover "
						/>
					</div>
				)}
				<Image
					src={content?.bgImage}
					width={900}
					height={1500}
					alt={content?.imgAlt}
					className=" w-full h-full object-cover object-center lg:hidden "
				/>
			</div>
			<div className="container">
				<div className="wrapper relative w-[calc(100%-49rem)] lg:w-full ">
					<h6 className=" desktop:text-[23px] text-[#FFE136] font-bold uppercase mb-[2rem] subtitle">
						{content?.content?.subTitle}
					</h6>
					{content?.HighLightedText}
					<h2
						className={` desktop:text-[71px] ${
							content?.content?.textBlack === true ? 'text-black' : 'text-white'
						}`}
					>
						{content?.content?.PreNormalText
							? content?.content?.PreNormalText
							: ''}{' '}
						{content?.content?.HighLightedText ? (
							<span
								className={`${
									content?.content?.HighLightedTextColorClass
										? content?.content?.HighLightedTextColorClass
										: ''
								} ${
									content?.content?.HighLightedTextColor
										? content?.content?.HighLightedTextColor
										: ''
								} inline-block relative ${
									content?.content?.underline === true
										? 'underline-container'
										: ''
								} ${content?.content?.underLineClass}`}
							>
								{' '}
								{content?.content?.HighLightedText}
							</span>
						) : (
							''
						)}{' '}
						{content?.content?.normalText}
					</h2>
					<p className="font-normal medium-bold mt-[20px]">
						{content?.content?.description}
					</p>
				</div>
				<div
					className={`logoWithCounter relative w-full flex flex-wrap default-padding-top `}
				>
					{content?.content?.logoImgOne && (
						<div className="logoBox relative w-full max-w-[350px] p-10 border-[1px] border-[#FFE136] border-solid  bg-[#212022] flex items-center justify-center ">
							<div className="logoWrap relative ">
								<div className="logoOne max-w-[172px] h-[40px] mx-auto ">
									<Image
										src={content?.content?.logoImgOne}
										width={200}
										height={100}
										alt={content?.content?.logoImgOneAlt}
										className=" w-full h-full object-contain "
									/>
								</div>
								{content?.content?.logoImgTwo && (
									<div className=" plus relative max-w-[21px] h-[21px] mx-auto my-6 ">
										<Image
											src={content?.content?.plusIcon}
											width={50}
											height={50}
											alt="plus"
											className=" w-full h-full object-contain "
										/>
									</div>
								)}
								{content?.content?.logoImgTwo && (
									<div className="logoTwo max-w-[172px] h-[40px] mx-auto ">
										<Image
											src={content?.content?.logoImgTwo}
											width={200}
											height={100}
											alt={content?.content?.logoImgTwoAlt}
											className=" w-full h-full object-contain "
										/>
									</div>
								)}
							</div>
						</div>
					)}
					<div className="counterBox relative w-[calc(100%-386px)] ml-9 p-[35px] border-[1px] border-[#FFE136] border-solid bg-[#212022] laptopmid:w-full laptopmid:ml-0 laptopmid:mt-9 xl:w-full xl:ml-0 xl:mt-8 ">
						<div className="counterWrap relative w-full flex  border-l-[10px] border-l-[#FFE136] border-solid pl-5 md:flex-col md:pl-10 ">
							{content?.countData.map((counterData, index) => (
								<div
									className="wrap w-[33.33%] px-9 md:w-full md:mb-5 md:last-of-type:mb-0 md:px-0 "
									key={index}
								>
									<h2 className=" desktop:text-[71px] text-[#FFE136]">
										{counterData?.operatorData && (
											<span>{counterData?.operatorData}</span>
										)}
										{/* {counterData?.number && <span>{counterData?.number}</span>} */}
										{counters[index]}
										{counterData?.sign && <span>{counterData?.sign}</span>}
									</h2>
									<p className="text-white font-medium capitalize ">
										{counterData?.describe ? counterData?.describe : ''}{' '}
										{counterData?.HighLightedText ? (
											<span
												className={`${
													counterData?.HighLightedTextColorClass
														? counterData?.HighLightedTextColorClass
														: ''
												} ${
													counterData?.HighLightedTextColor
														? counterData?.HighLightedTextColor
														: ''
												} inline-block relative ${
													counterData?.underline === true
														? 'underline-container'
														: ''
												} ${counterData?.underLineClass}`}
											>
												{' '}
												{counterData?.HighLightedText}
											</span>
										) : (
											''
										)}{' '}
										{counterData?.normalText}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CustomerStoryWithCounter;
