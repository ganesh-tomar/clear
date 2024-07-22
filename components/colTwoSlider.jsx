import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles/colTwoSlider.module.css';

const QuoteCarousel = ({
	imageSrc,
	heading,
	author,
	designation,
	url,
	linkText,
	prefix,
	count,
	denotation,
	subText,
	subDescription,
	logo,
	blackQuote,
	btnText,
	btnClass,
	btnUrl
}) => {

	return (
		<div className="colTwoSlider__item">
			<div className="colTwoSlider__item--inner flex justify-between gap-x-[6rem] lg:flex-wrap">
				{imageSrc || count ? (
					<div className="colTwoSlider__left w-full sm-up:grow-0 sm-up:shrink-0 lg-up:flex-[40.5%]  sm-up:my-0">
						{imageSrc && (
							<Image
								src={imageSrc}
								alt=""
								width={608}
								height={523}
								className="max-w-[60.8rem] w-full h-auto"
							/>
						)}
						{count && (
							<div
								className={`${styles.cross_icon} counter relative inline-block sm:mb-[1rem]`}
							>
								<h2 className="large inline font-light sm:!text-[90px] text-white count">
									{prefix}
								</h2>
								<h2 className="large font-light inline sm:!text-[90px] text-white count">
									{count}
								</h2>
								<h2 className="large inline font-light sm:!text-[90px] text-white h1">
									{denotation}
								</h2>
							</div>
						)}
						{subText && (
							<h4 className="mb-[0.3rem] leading-[1.5] font-medium">
								{subText}
							</h4>
						)}
						{subDescription && (
							<p className="max-w-[40rem] leading-[1.5] font-normal">
								{subDescription}
							</p>
						)}
					</div>
				) : null}
				<div
					className={`${styles.quotation} ${blackQuote === true ? styles.blackQuote : ''} colTwoSlider__right ${styles.sliderRight} lg:pt-[4rem] lg:mt-[7rem] relative ml-[8.8rem] pr-[0.1rem] lg:pr-0 lg:ml-0`}
				>
					{heading && (
						// <h3 className='sm:tracking-[-0.06em]'>{heading}</h3>
						<h4
							className={` medium-light sm:tracking-[-0.035em]`}
							dangerouslySetInnerHTML={{ __html: heading }}
						/>
					)}
					{author && (
						<>
							<span className="inline-block text-[1.6rem] laptop:text-[16px] font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem]">
								{author}
							</span>
							&nbsp;
							<span className={`inline-block text-[1.6rem] laptop:text-[16px] designation font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem] sm:!mt-[10px]`}>
								{designation}
							</span>
						</>
					)}
					{logo && (
						<div className="colTwoSlider__logo mt-[1.7rem]">
							<Image src={logo} alt="img" width={156} height={24} />
						</div>
					)}
					{url && (
						<div className="mt-[3.5rem] relative z-20">
							<Link
								href={url}
								className={`tertiary-btn black`}
								target="_self"
							>
								{linkText}
							</Link>
						</div>
					)}
					{btnText && (
						<div className="mt-[3rem] relative z-20">
							<Link
								href={btnUrl}
								className={`btn  ${btnClass ? `${btnClass}` : 'whiteBtn'}`}
							>
								{btnText}
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const ColTwoSlider = ({ data, bgColor, parallax, txt, pb, md, employeeQuote }) => {

	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = data.length;
	const sliderRef = useRef(null);

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(currentSlide);
		}
	}, [currentSlide]);

	const handleDotSwipe = (direction) => {
		if (direction === 'left' && currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		} else if (direction === 'right' && currentSlide < totalSlides - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: employeeQuote === true ? false : true,
		appendDots: (dots) => (
			<div>
				<ul
					className="custom-dots"
					onTouchStart={(e) => handleTouchStart(e)}
					onTouchMove={(e) => handleTouchMove(e)}
					onTouchEnd={(e) => handleTouchEnd(e)}
				>
					{dots}
				</ul>
			</div>
		),
		customPaging: function (i) {
			return (
				<button className="custom-dot" onClick={() => setCurrentSlide(i)} />
			);
		},
		afterChange: (index) => {
			setCurrentSlide(index);
		},
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
		nextArrow: (
			<CustomNextArrow currentSlide={currentSlide} totalSlides={totalSlides} />
		),
	};

	const progressBarWidth = `${((currentSlide + 1) / totalSlides) * 100}%`;

	// Swipe handling logic
	let xDown = null;

	const handleTouchStart = (e) => {
		xDown = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		if (!xDown) {
			return;
		}

		const xUp = e.touches[0].clientX;
		const xDiff = xDown - xUp;

		if (xDiff > 0) {
			handleDotSwipe('left');
		} else {
			handleDotSwipe('right');
		}

		xDown = null;
	};

	const handleTouchEnd = () => {
		xDown = null;
	};

	return (
		<section
			className={`${bgColor ? bgColor : 'bg-black'
				} ${parallax ? 'grid__parallax dark' : ''} ${employeeQuote === true ? 'adptHeightNone' : ''} ${txt ? txt : 'text-white'} ${pb === 'none' ? 'pb-0' : ''} ${md === true ? 'padding-md' : ''} colTwoSlider  `}
			id="case-studies"
		>
			<div className="container">
				<div className="wrapper">
					<Slider ref={sliderRef} {...settings}>
						{data.map((slide, index) => (
							<div key={index}>
								<QuoteCarousel {...slide} />
							</div>
						))}
					</Slider>
					<div className="relative hidden">
						<span className="block bg-white w-full h-[1px] absolute left-0 top-1/2 -translate-y-1/2"></span>
						<div
							className="progress-bar h-[1rem] md:h-[1.6rem] mt-[3rem] md-up:mt-[8rem] bg-pink z-10  relative transition-all duration-300"
							style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
};
const CustomPrevArrow = ({ onClick, currentSlide }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-left"
		className={`btn__left group absolute top-0 left-[-70px] h-full w-5 xl-up:w-24 laptop:w-[12rem] tablet:w-[15rem] md:w-[12rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
			}`}
		onClick={currentSlide !== 0 ? onClick : undefined}
	></button>
);

const CustomNextArrow = ({ onClick, currentSlide, totalSlides }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-right"
		className={`btn__right group absolute top-0 right-[-70px] h-full w-5 xl-up:w-24 laptop:w-[12rem] tablet:w-[15rem] md:w-[12rem] md:right-[-1.5rem] z-10  ${currentSlide === totalSlides - 1
			? 'opacity-0 pointer-events-none'
			: 'opacity-100'
			}`}
		onClick={currentSlide !== totalSlides ? onClick : undefined}
	></button>
);

export default ColTwoSlider;
