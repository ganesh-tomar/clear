import React from 'react';
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const LogoWithText = (data) => {
	const content = data.items || [];
	let sectionPadding = '';
	data.padding.map(item => {
		sectionPadding += ' ' + item;
	});

	return (
		<section className={`logowithcontent py-0 border-b border-darkGray ${data.classes} ${sectionPadding}`} id={data.id}>
			{content.map((wrap, index) => (
				<div key={index} className={`${style.wrapper} group border-t border-darkGray sm:min-h-[286px] py-[5rem] area height__one_third flex  w-full relative`}>
					<Link href={wrap.link.linkUrl ? wrap.link.linkUrl : '/'} className="redirect !z-[6]">.</Link>
					{wrap.backgroundImage && (
						<div
							className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}
						>
							<Image
								src={wrap.backgroundImage.mediaItemUrl}
								className="w-full h-full object-cover object-bottom sm:object-[70%]"
								width={1000}
								height={1000}
								alt={wrap.backgroundImage.altText}
							/>
						</div>
					)}
					<div className="container">
						<div className={`w-full relative h-full flex items-center flex-wrap`}>
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
											src={wrap.logo.mediaItemUrl}
											alt={wrap.logo.altText}
										/>
										<Image
											className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full"
											width={1000}
											height={1000}
											src={wrap.hoverLogo.mediaItemUrl}
											alt={wrap.hoverLogo.altText}
										/>
									</div>
								)}
							</div>
							<div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
								<div className={`${style.content} max-w-[60rem] content ipad:max-w-[100%] md:max-w-full group-hover:text-white`}>
									<h4 className={`heading pr-[5rem] font-[700] sm:pr-[0] ${wrap.title ? '' : ''} ${style.heading}`}>
										{wrap.title}
									</h4>
									<p className={` letter-spacing-[-0.32px] ${wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}>
										{wrap.bodyWithoutEditor}
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

export default LogoWithText;
