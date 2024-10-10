import Image from 'next/image';
import Link from 'next/link';

const ImageWithContent = ({ pd, data }) => {
	return (
		<section
			className={`
			${data?.reverse === true ? 'reverse' : ''}
			${pd ? pd : ''}
			imgwithcontent dark ${data?.bgColor}`}
		>
			<div className="container">
					<div 
						className={`${data?.reverse === true ? 'flex-row-reverse lg:justify-end' : ''} ${data?.logoImage === true ? 'items-center' : ''} wrapper w-full relative flex flex-wrap lg:ml-[0] `}
					>
						<div className={`col-image relative w-full h-full max-h-[54rem] max-w-[69rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`} >
							<div className="img-wrapper relative w-full h-full  overflow-hidden">
								<Image
									src={data?.img}
									width={1920}
									height={1920}
									alt={data?.imgAlt}
									className={`${data?.logoImage === true ? 'w-auto h-auto object-contain mx-auto xxl-up:w-[33rem] xxl-up:h-[28rem]' : 'w-full h-full object-cover'}`}
								/>
							</div>
						</div>
						<div
							className={`${data?.reverse === true ? 'pr-[15rem] lg:pr-0' : 'pl-[15rem]'} ${data?.logoImage === true && data?.reverse === true ? '' : 'pt-[3.7rem] lg:pt-0'}
							content-wrapper relative w-[calc(100%-69rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
						>

							{/* {data.subtitle ? <h6 className="subtitle mb-[2rem]">{data.subtitle}</h6> : ''} */}
							<h2
						className={` lg:pr-[30px] ${data?.content === 'casestudiesdetailmini' || data?.content === 'insights'
							? 'h2'
							: ''
							} ${data?.dark === true ? 'text-blck' : 'text-white'} h3 mb-[20px]`}
					>
							{data?.PreNormalText ? data?.PreNormalText : ''}{' '}
							{data?.HighLightedText ? (
								<span
									className={`${data?.underLineClass ? data?.underLineClass : ''} ${data?.HighLightedTextColorClass ? data?.HighLightedTextColorClass : ''
										} ${data?.HighLightedTextColor ? data?.HighLightedTextColor : ''} inline-block relative ${data?.underline === true ? 'underline-container blackThin' : ''} `}
								>
									{' '}
									{data?.HighLightedText}
								</span>
							) : (
								''
							)}{' '}
							{data?.postText ? data?.postText : ''} {data?.normalText}
						</h2>

							{data?.description ? <p className={`${data?.bgColor === 'bg-white' ? 'text-black' : 'text-white'}`}>{data?.description}</p> : ''}

							{data?.link ? <div className="link-wrap mt-[3rem]">
								<Link
									className={`${data?.black === 'true' ? 'black' : ''
										} tertiary-btn !text-black`}
									href=""
								>
									{data?.link}
								</Link>
							</div> : ''}
						</div>
					</div>
			</div>
		</section>
	);
};

export default ImageWithContent;
