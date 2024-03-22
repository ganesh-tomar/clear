import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './styles/scrollablecontent.module.css';

const ScrollableContent = ({ bgColor }) => {
	const [scrollValue, setScrollValue] = useState(0);
	const [winWidth, isWinWidth] = useState(0);
	const contentData = [
		{
			subHeadibng: 'Our process',
			PreNormalText: 'Nisl',
			HighLightedText: 'pulvinar',
			normalText: 'consectet nec set adipiscing',
		},
	];
	const sections = [
		{
			title: 'Lorem ipsum dolor sit amet consectetur',
			imageSrc: '/service-detail/img1.png',
			shortImageSrc: '/scrollcard_a.jpg',
			icon: 'comment_box_icon',
			description:
				'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.',
		},
		{
			title: 'Lorem ipsum dolor sit amet consectetur',
			imageSrc: '/service-detail/img2.png',
			shortImageSrc: '/scrollcard_b.jpg',
			icon: 'inheritence_icon',
			description:
				'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.',
		},
		{
			title: 'Lorem ipsum dolor sit amet consectetur',
			imageSrc: '/service-detail/img3.png',
			shortImageSrc: '/scrollcard_c.jpg',
			icon: 'symbols_icon',
			description:
				'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.',
		},
	];

	const handleScroll = () => {
		const stickyHeight = document.querySelector("#stickyNav .stickyOuter")?.offsetHeight;;
		const headerHeight = document.querySelector("header")?.offsetHeight;
		if (stickyHeight && headerHeight) {
			var totalHeight = stickyHeight + headerHeight;
			setScrollValue(totalHeight);
		}

	};
	const Stickytop = {
		top: `${scrollValue - 2}px`,
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});


	const sectionsLength = sections.length;
	const minHeightStyle = `h-[${sectionsLength}00vh]`;

	return (
		<>
			<section
				className={`${style.TwoColVerticalSlide} content-with-img lg-up:py-0 bg-gray`}
				style={{ backgroundColor: bgColor }}
				id={`our-process`}
			>
				<div className={style.scrollerContainer}>
					{sections.map((content, index) => (
						<div
							key={index}
							className={`${style.item} lg:flex lg:flex-col-reverse`}
						>
							<div className={`${style.imageHolder}`} style={Stickytop}>
								<div
									className={`${style.imageWrapper} imgcontentwrap relative`}
								>
									<Image
										src={winWidth > 991 ? content.imageSrc : content.shortImageSrc}
										width={800}
										height={1090}
										className="w-full h-full object-cover"
										alt=""
									/>
								</div>
							</div>
							<div className={style.textHolder}>
								<div
									className={`${style.textHolderInner} pt-[15rem] pl-[9.5rem] pr-[11.5rem] lg:p-0`}
								>
									<div className="heading-wrapper">
										<div className="subtitle mb-[2rem]">
											{contentData[0].subHeadibng}
										</div>
										<h3>
											{contentData[0].PreNormalText
												? contentData[0].PreNormalText
												: ''}{' '}
											{contentData[0].HighLightedText ? (
												<span className="text-pink underline-container blackThin inline-block relative">
													{contentData[0].HighLightedText}
												</span>
											) : (
												''
											)}{' '}
											{contentData[0].normalText}
										</h3>
										<span className={`${style[content.icon]}`}></span>
									</div>
									<div className={style.descriptionWrapper}>
										<h4 className="lite mb-[2rem]">{content.title}</h4>
										<p className="">{content.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default ScrollableContent;
