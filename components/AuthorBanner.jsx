'use client';
import Image from 'next/image';
import Link from 'next/link';

const Imagewithcontent = ({ contentname, reverse, underlineClass, pt }) => {
	const contentdata = {
		data: [
			{
				imgSrc: '/Steve1.png',
				imgAlt: 'trio_logos',
				logoImage: true,
				subtitle: 'Co-Founder & CEO',
				underlineClass: "",
				sp: '',
				title: 'Steve Ohanians',
				description:
					'Steve Ohanians is an entrepreneur, digital strategist, and CEO of Clear Digital since 1999. After two decades after co-founding the agency, Steve remains one of its key leaders and collaborators. By leveraging his expertise and passion for everything digital, Steve has helped create some of the top global B2B brand digital experiences throughout his career. Steve has worked on significant initiatives with companies such as Cisco Systems, Citrix, Intel, and McAfee. Steve is also an avid music fan and a budding guitarist. He holds a BFA in Digital Media, with a minor in Computer Science from San Jose State University.',
				link: '',
				black: 'true',
			},
		],
	};

	const content = contentdata[contentname] || [];

	return (
		<section className={`${reverse === true ? 'reverse' : ''} ${pt ? pt : ''}authorbanner imgwithcontent grid__parallax dark  default-padding-bottom`}>
			<div className="breadcrumbs w-full">
				<div className="container">
					<ul className={`absolute top-[20%] z-[10]  lg:top-[10%]`}>
						<li className={`inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1rem] pr-[1rem] laptop:pr-[1.5rem] text-[white] `}>
							<Link href="/insights" className={`text-black hover:text-pink transition-all`}>
								Insights
							</Link>

						</li>
						<li className={`inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1rem] pr-[1rem] laptop:pr-[1.5rem] text-black `}>
							Authors
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				{content.map((item) => (
					<div
						key={item.subtitle} // Use a unique key for each element
						className={`${reverse === true ? 'flex-row-reverse lg:justify-end' : ''} ${item.logoImage === true ? 'items-center' : ''} pt-[105px] wrapper w-full relative flex flex-wrap lg:ml-[0] `}
					>
						<div className={`${reverse === true ? '' : 'bulb'} col-image relative w-full h-full max-h-[54rem] max-w-[45rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`} >
							<div className="img-wrapper relative w-full h-full  overflow-hidden">
								<Image
									src={item.imgSrc}
									width={1000}
									height={1000}
									alt={item.imgAlt}
									className={`${item.logoImage === true ? 'w-100 h-auto object-contain mx-auto' : 'w-full h-full object-cover'}`}
								/>
							</div>
						</div>
						<div className={`${reverse === true ? 'pr-[15rem] lg:pr-0' : 'pl-[15rem]'} ${item.logoImage === true && reverse === true ? '' : 'lg:pt-0'}
							content-wrapper relative w-[calc(100%-45rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
						>
							<h3 className="mb-[1rem]">
								{item.txt}
								<span className={`relative inline-block ${item.underlinevisibilty === false ? '' : 'underline-container '} ${item.underlineClass ? item.underlineClass : ' '}`}>
									{item.sp}
								</span>
								{item.title}
							</h3>
							{item.subtitle ? <h4 className="mb-[3rem] font-medium">{item.subtitle}</h4> : ''}
							{item.description ? <p className="">{item.description}</p> : ''}

							{item.link ? <div className="link-wrap mt-[3rem]">
								<Link
									className={`${item.black === 'true' ? 'black' : ''
										} tertiary-btn !text-black`}
									href=""
								>
									{item.link}
								</Link>
							</div> : ''}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Imagewithcontent;
